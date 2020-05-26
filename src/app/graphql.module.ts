import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {environment} from './../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ErrorInterceptor } from './shared/helpers/error.interceptor';
// import { JwtInterceptor } from './shared/helpers/jwt.interceptor';
import { split, ApolloLink, Operation } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { JwtInterceptor } from './shared/helper/jwt.interceptor';
// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { persistCache } from 'apollo-cache-persist';

const uri = environment.graphQL; // <-- add the URL of the GraphQL server here
const uriSocket = environment.graphQLSocket; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
  const connectionParams = () => {
    const token = localStorage.getItem('token');
    return token ? { authtoken: token } : {};
  };
  const client = new SubscriptionClient(uriSocket, {
    reconnect: true,
    timeout: 60000,
    connectionParams,
    lazy: true
  });
  client.onConnected(()=>{
    console.log('Socket Connected');
  });
  client.onDisconnected(()=>{
    console.log('Socket Disconnected');
  });
  const wsLink = new WebSocketLink(client);
  const hlink = httpLink.create({uri});
  const cache = new InMemoryCache({
    dataIdFromObject: object => object['key']
  });
  persistCache({
    cache,
    storage: window.localStorage,
  });
  const link = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    hlink,
  );
  return {
    link,
    cache,
    // connectToDevTools: true,
    queryDeduplication: true,
    // defaultOptions: {
    //   watchQuery: {
    //       fetchPolicy: 'cache-and-network',
    //       errorPolicy: 'ignore',
    //   },
    //   query: {
    //       fetchPolicy: 'cache-and-network',
    //       errorPolicy: 'ignore',
    //   },
    //   mutate: {
    //       errorPolicy: 'ignore'
    //   }
    // }
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
   // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  imports: []
})
export class GraphQLModule {}
