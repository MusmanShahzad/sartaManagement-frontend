import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export type User = {
   __typename?: 'user';
  _id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type Message = {
   __typename?: 'message';
  userId?: Maybe<User>;
  messageType?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type Request = {
   __typename?: 'request';
  _id?: Maybe<Scalars['ID']>;
  notification?: Maybe<Scalars['String']>;
  notificationType?: Maybe<Scalars['Int']>;
  userId?: Maybe<User>;
  building?: Maybe<Building>;
  roomId?: Maybe<Room>;
  status?: Maybe<Scalars['Boolean']>;
};

export type Buildings = {
   __typename?: 'buildings';
  _id?: Maybe<Scalars['ID']>;
  buildingId?: Maybe<Building>;
  status?: Maybe<Scalars['Boolean']>;
};

export type Agent = {
   __typename?: 'agent';
  _id?: Maybe<Scalars['ID']>;
  userId?: Maybe<User>;
  buildings?: Maybe<Array<Maybe<Buildings>>>;
  createdDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type TenantsHistory = {
   __typename?: 'tenantsHistory';
  _Id?: Maybe<Scalars['ID']>;
  tenantsId?: Maybe<Tenant>;
  joinedDate?: Maybe<Scalars['String']>;
  removeDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type Room = {
   __typename?: 'room';
  _id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  building?: Maybe<Building>;
  ownersId?: Maybe<Owner>;
  tenantId?: Maybe<Tenant>;
  tenantsHistory?: Maybe<Array<Maybe<TenantsHistory>>>;
  createdDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type Rooms = {
   __typename?: 'rooms';
  roomId?: Maybe<Room>;
};

export type Tenant = {
   __typename?: 'tenant';
  _id?: Maybe<Scalars['ID']>;
  userId?: Maybe<User>;
  roomId?: Maybe<Room>;
  createdDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type Owner = {
   __typename?: 'owner';
  _id?: Maybe<Scalars['ID']>;
  userId?: Maybe<User>;
  buildings?: Maybe<Array<Maybe<Buildings>>>;
  rooms?: Maybe<Array<Maybe<Rooms>>>;
  createdDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type Building = {
   __typename?: 'building';
  _id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  agentId?: Maybe<Agent>;
  ownersId?: Maybe<Owner>;
  status?: Maybe<Scalars['Boolean']>;
  rooms?: Maybe<Array<Maybe<Rooms>>>;
  message?: Maybe<Array<Maybe<Message>>>;
  messageOwner?: Maybe<Array<Maybe<Message>>>;
};

export type Error = {
   __typename?: 'Error';
  error?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type RegisterData = {
   __typename?: 'registerData';
  user?: Maybe<User>;
  token?: Maybe<Scalars['String']>;
};

export type RegisterOutput = {
   __typename?: 'registerOutput';
  Errors?: Maybe<Array<Maybe<Error>>>;
  Data?: Maybe<RegisterData>;
};

export type AddRoomOutput = {
   __typename?: 'addRoomOutput';
  Errors?: Maybe<Array<Maybe<Error>>>;
  Data?: Maybe<Room>;
};

export type AddBuildingOutput = {
   __typename?: 'addBuildingOutput';
  Errors?: Maybe<Array<Maybe<Error>>>;
  Data?: Maybe<Building>;
};

export type RequestOutput = {
   __typename?: 'requestOutput';
  Errors?: Maybe<Array<Maybe<Error>>>;
  Data?: Maybe<Request>;
};

export type RoomsInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
};

export type Complain = {
   __typename?: 'complain';
  complain?: Maybe<Scalars['String']>;
  userId?: Maybe<User>;
  building?: Maybe<Building>;
  roomId?: Maybe<Room>;
  status?: Maybe<Scalars['Boolean']>;
};

export type ComplainOutput = {
   __typename?: 'complainOutput';
  Errors?: Maybe<Array<Maybe<Error>>>;
  Data?: Maybe<Complain>;
};

export type Mutation = {
   __typename?: 'Mutation';
  singleUpload?: Maybe<Scalars['String']>;
  RegisterUser?: Maybe<RegisterOutput>;
  LoginUser?: Maybe<RegisterOutput>;
  AddRoom?: Maybe<AddRoomOutput>;
  RemoveTenantFromRoom?: Maybe<AddRoomOutput>;
  AddBuilding?: Maybe<AddBuildingOutput>;
  UpdateBuilding?: Maybe<AddBuildingOutput>;
  RemoveAgent?: Maybe<AddBuildingOutput>;
  CreateRequest?: Maybe<RequestOutput>;
  ApproveRequest?: Maybe<RequestOutput>;
  AddChatOwner?: Maybe<AddBuildingOutput>;
  AddChatAll?: Maybe<AddBuildingOutput>;
  CreateComplain?: Maybe<ComplainOutput>;
  UserStatusUpdate?: Maybe<RegisterOutput>;
  BuildingStatusUpdate?: Maybe<AddBuildingOutput>;
  RoomStatusChange?: Maybe<AddRoomOutput>;
};


export type MutationSingleUploadArgs = {
  file?: Maybe<Scalars['Upload']>;
};


export type MutationRegisterUserArgs = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};


export type MutationLoginUserArgs = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type MutationAddRoomArgs = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  buildingId?: Maybe<Scalars['String']>;
};


export type MutationRemoveTenantFromRoomArgs = {
  roomId?: Maybe<Scalars['String']>;
};


export type MutationAddBuildingArgs = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  rooms?: Maybe<Array<Maybe<RoomsInput>>>;
};


export type MutationUpdateBuildingArgs = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  rooms?: Maybe<Array<Maybe<RoomsInput>>>;
  id?: Maybe<Scalars['ID']>;
};


export type MutationRemoveAgentArgs = {
  buildingId?: Maybe<Scalars['ID']>;
};


export type MutationCreateRequestArgs = {
  building?: Maybe<Scalars['ID']>;
  roomId?: Maybe<Scalars['String']>;
};


export type MutationApproveRequestArgs = {
  requestId?: Maybe<Scalars['ID']>;
};


export type MutationAddChatOwnerArgs = {
  buildingId?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type MutationAddChatAllArgs = {
  buildingId?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type MutationCreateComplainArgs = {
  complain?: Maybe<Scalars['String']>;
};


export type MutationUserStatusUpdateArgs = {
  userId?: Maybe<Scalars['ID']>;
};


export type MutationBuildingStatusUpdateArgs = {
  buildingId?: Maybe<Scalars['ID']>;
};


export type MutationRoomStatusChangeArgs = {
  roomId?: Maybe<Scalars['ID']>;
};

export type Subscription = {
   __typename?: 'Subscription';
  ChatOwnerUpdate?: Maybe<Building>;
  ChatAllUpdate?: Maybe<Building>;
};


export type SubscriptionChatOwnerUpdateArgs = {
  buildingId?: Maybe<Scalars['ID']>;
};


export type SubscriptionChatAllUpdateArgs = {
  buildingId?: Maybe<Scalars['ID']>;
};

export type Query = {
   __typename?: 'Query';
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getUserById?: Maybe<User>;
  getUser?: Maybe<User>;
  GetAllRooms?: Maybe<Array<Maybe<Room>>>;
  GetRoomById?: Maybe<Room>;
  getRoomOfOwner?: Maybe<Array<Maybe<Room>>>;
  GetAllBuilding?: Maybe<Array<Maybe<Building>>>;
  GetAllBuildingOfOwner?: Maybe<Array<Maybe<Building>>>;
  GetAllBuildingOfAgent?: Maybe<Array<Maybe<Building>>>;
  GetBuildingById?: Maybe<Building>;
  GetRequestForOwner?: Maybe<Array<Maybe<Request>>>;
  GetRequestOfUser?: Maybe<Array<Maybe<Request>>>;
  GetViewChats?: Maybe<Array<Maybe<Building>>>;
  GetAllComplaints?: Maybe<Array<Maybe<Complain>>>;
};


export type QueryGetUserByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetRoomByIdArgs = {
  roomId?: Maybe<Scalars['ID']>;
};


export type QueryGetAllBuildingOfOwnerArgs = {
  ownerId?: Maybe<Scalars['ID']>;
};


export type QueryGetAllBuildingOfAgentArgs = {
  ownerId?: Maybe<Scalars['ID']>;
};


export type QueryGetBuildingByIdArgs = {
  buildingId?: Maybe<Scalars['ID']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type RegisterUserMutationVariables = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & { RegisterUser?: Maybe<(
    { __typename?: 'registerOutput' }
    & { Errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'error' | 'message'>
    )>>>, Data?: Maybe<(
      { __typename?: 'registerData' }
      & Pick<RegisterData, 'token'>
      & { user?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name' | 'email' | 'userType' | 'createdDate' | 'status'>
      )> }
    )> }
  )> }
);

export type GetAllBuildingQueryVariables = {};


export type GetAllBuildingQuery = (
  { __typename?: 'Query' }
  & { GetAllBuilding?: Maybe<Array<Maybe<(
    { __typename?: 'building' }
    & Pick<Building, '_id' | 'name' | 'address' | 'status'>
    & { agentId?: Maybe<(
      { __typename?: 'agent' }
      & Pick<Agent, '_id'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name' | 'email' | 'userType' | 'createdDate' | 'status'>
      )> }
    )>, ownersId?: Maybe<(
      { __typename?: 'owner' }
      & Pick<Owner, '_id'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name' | 'email' | 'userType' | 'createdDate' | 'status'>
      )> }
    )>, rooms?: Maybe<Array<Maybe<(
      { __typename?: 'rooms' }
      & { roomId?: Maybe<(
        { __typename?: 'room' }
        & Pick<Room, '_id' | 'name' | 'address' | 'createdDate' | 'status'>
        & { tenantId?: Maybe<(
          { __typename?: 'tenant' }
          & Pick<Tenant, '_id'>
          & { userId?: Maybe<(
            { __typename?: 'user' }
            & Pick<User, 'name' | 'email'>
          )> }
        )> }
      )> }
    )>>> }
  )>>> }
);

export type GetBuildingByIdQueryVariables = {
  buildingId?: Maybe<Scalars['ID']>;
};


export type GetBuildingByIdQuery = (
  { __typename?: 'Query' }
  & { GetBuildingById?: Maybe<(
    { __typename?: 'building' }
    & Pick<Building, '_id' | 'name' | 'address' | 'status'>
    & { agentId?: Maybe<(
      { __typename?: 'agent' }
      & Pick<Agent, '_id'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name' | 'email' | 'userType' | 'createdDate' | 'status'>
      )> }
    )>, ownersId?: Maybe<(
      { __typename?: 'owner' }
      & Pick<Owner, '_id'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name' | 'email' | 'userType' | 'createdDate' | 'status'>
      )> }
    )>, rooms?: Maybe<Array<Maybe<(
      { __typename?: 'rooms' }
      & { roomId?: Maybe<(
        { __typename?: 'room' }
        & Pick<Room, '_id' | 'name' | 'address' | 'createdDate' | 'status'>
        & { tenantId?: Maybe<(
          { __typename?: 'tenant' }
          & Pick<Tenant, '_id'>
          & { userId?: Maybe<(
            { __typename?: 'user' }
            & Pick<User, 'name' | 'email'>
          )> }
        )> }
      )> }
    )>>>, message?: Maybe<Array<Maybe<(
      { __typename?: 'message' }
      & Pick<Message, 'message' | 'url' | 'date'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name' | 'userType'>
      )> }
    )>>>, messageOwner?: Maybe<Array<Maybe<(
      { __typename?: 'message' }
      & Pick<Message, 'message' | 'url' | 'date'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name' | 'userType'>
      )> }
    )>>> }
  )> }
);

export type GetAllBuildingOfOwnerQueryVariables = {
  ownerId?: Maybe<Scalars['ID']>;
};


export type GetAllBuildingOfOwnerQuery = (
  { __typename?: 'Query' }
  & { GetAllBuildingOfOwner?: Maybe<Array<Maybe<(
    { __typename?: 'building' }
    & Pick<Building, '_id' | 'name' | 'address' | 'status'>
    & { agentId?: Maybe<(
      { __typename?: 'agent' }
      & Pick<Agent, '_id'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name'>
      )>, buildings?: Maybe<Array<Maybe<(
        { __typename?: 'buildings' }
        & Pick<Buildings, '_id'>
      )>>> }
    )>, ownersId?: Maybe<(
      { __typename?: 'owner' }
      & Pick<Owner, '_id'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name' | 'email'>
      )> }
    )> }
  )>>> }
);

export type CreateRequestMutationVariables = {
  building?: Maybe<Scalars['ID']>;
  roomId?: Maybe<Scalars['String']>;
};


export type CreateRequestMutation = (
  { __typename?: 'Mutation' }
  & { CreateRequest?: Maybe<(
    { __typename?: 'requestOutput' }
    & { Errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'error' | 'message'>
    )>>>, Data?: Maybe<(
      { __typename?: 'request' }
      & Pick<Request, '_id' | 'notificationType' | 'status'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name' | 'email' | 'userType'>
      )>, building?: Maybe<(
        { __typename?: 'building' }
        & Pick<Building, '_id' | 'name' | 'address'>
      )>, roomId?: Maybe<(
        { __typename?: 'room' }
        & Pick<Room, '_id' | 'name' | 'address'>
        & { building?: Maybe<(
          { __typename?: 'building' }
          & Pick<Building, '_id' | 'name'>
        )> }
      )> }
    )> }
  )> }
);

export type RemoveAgentMutationVariables = {
  buildingId?: Maybe<Scalars['ID']>;
};


export type RemoveAgentMutation = (
  { __typename?: 'Mutation' }
  & { RemoveAgent?: Maybe<(
    { __typename?: 'addBuildingOutput' }
    & { Errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'error' | 'message'>
    )>>> }
  )> }
);

export type BuildingStatusUpdateMutationVariables = {
  buildingId?: Maybe<Scalars['ID']>;
};


export type BuildingStatusUpdateMutation = (
  { __typename?: 'Mutation' }
  & { BuildingStatusUpdate?: Maybe<(
    { __typename?: 'addBuildingOutput' }
    & { Errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'error' | 'message'>
    )>>>, Data?: Maybe<(
      { __typename?: 'building' }
      & Pick<Building, 'status'>
    )> }
  )> }
);

export type UpdateBuildingMutationVariables = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  room?: Maybe<Array<Maybe<RoomsInput>>>;
  id?: Maybe<Scalars['ID']>;
};


export type UpdateBuildingMutation = (
  { __typename?: 'Mutation' }
  & { UpdateBuilding?: Maybe<(
    { __typename?: 'addBuildingOutput' }
    & { Errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'error' | 'message'>
    )>>>, Data?: Maybe<(
      { __typename?: 'building' }
      & Pick<Building, '_id' | 'name' | 'address'>
      & { ownersId?: Maybe<(
        { __typename?: 'owner' }
        & Pick<Owner, '_id'>
      )> }
    )> }
  )> }
);

export type AddBuildingMutationVariables = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  rooms?: Maybe<Array<Maybe<RoomsInput>>>;
};


export type AddBuildingMutation = (
  { __typename?: 'Mutation' }
  & { AddBuilding?: Maybe<(
    { __typename?: 'addBuildingOutput' }
    & { Errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'error' | 'message'>
    )>>>, Data?: Maybe<(
      { __typename?: 'building' }
      & Pick<Building, '_id' | 'name' | 'address'>
      & { ownersId?: Maybe<(
        { __typename?: 'owner' }
        & Pick<Owner, '_id'>
      )> }
    )> }
  )> }
);

export type GetViewChatsQueryVariables = {};


export type GetViewChatsQuery = (
  { __typename?: 'Query' }
  & { GetViewChats?: Maybe<Array<Maybe<(
    { __typename?: 'building' }
    & Pick<Building, '_id' | 'name' | 'status'>
  )>>> }
);

export type AddChatOwnerMutationVariables = {
  buildingId?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type AddChatOwnerMutation = (
  { __typename?: 'Mutation' }
  & { AddChatOwner?: Maybe<(
    { __typename?: 'addBuildingOutput' }
    & { Errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'error' | 'message'>
    )>>>, Data?: Maybe<(
      { __typename?: 'building' }
      & Pick<Building, '_id' | 'name'>
      & { messageOwner?: Maybe<Array<Maybe<(
        { __typename?: 'message' }
        & Pick<Message, 'message' | 'url' | 'date'>
        & { userId?: Maybe<(
          { __typename?: 'user' }
          & Pick<User, '_id' | 'name' | 'userType'>
        )> }
      )>>> }
    )> }
  )> }
);

export type AddChatAllMutationVariables = {
  buildingId?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type AddChatAllMutation = (
  { __typename?: 'Mutation' }
  & { AddChatAll?: Maybe<(
    { __typename?: 'addBuildingOutput' }
    & { Errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'error' | 'message'>
    )>>>, Data?: Maybe<(
      { __typename?: 'building' }
      & Pick<Building, '_id' | 'name'>
      & { message?: Maybe<Array<Maybe<(
        { __typename?: 'message' }
        & Pick<Message, 'message' | 'url' | 'date'>
        & { userId?: Maybe<(
          { __typename?: 'user' }
          & Pick<User, '_id' | 'name' | 'userType'>
        )> }
      )>>> }
    )> }
  )> }
);

export type ChatOwnerUpdateSubscriptionVariables = {
  buildingId?: Maybe<Scalars['ID']>;
};


export type ChatOwnerUpdateSubscription = (
  { __typename?: 'Subscription' }
  & { ChatOwnerUpdate?: Maybe<(
    { __typename?: 'building' }
    & Pick<Building, '_id' | 'name'>
    & { messageOwner?: Maybe<Array<Maybe<(
      { __typename?: 'message' }
      & Pick<Message, 'message' | 'url' | 'date'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name' | 'userType'>
      )> }
    )>>> }
  )> }
);

export type ChatAllUpdateSubscriptionVariables = {
  buildingId?: Maybe<Scalars['ID']>;
};


export type ChatAllUpdateSubscription = (
  { __typename?: 'Subscription' }
  & { ChatAllUpdate?: Maybe<(
    { __typename?: 'building' }
    & Pick<Building, '_id' | 'name'>
    & { message?: Maybe<Array<Maybe<(
      { __typename?: 'message' }
      & Pick<Message, 'message' | 'url' | 'date'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name' | 'userType'>
      )> }
    )>>> }
  )> }
);

export type CreateComplainMutationVariables = {
  complain?: Maybe<Scalars['String']>;
};


export type CreateComplainMutation = (
  { __typename?: 'Mutation' }
  & { CreateComplain?: Maybe<(
    { __typename?: 'complainOutput' }
    & { Errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'error' | 'message'>
    )>>> }
  )> }
);

export type GetAllComplaintsQueryVariables = {};


export type GetAllComplaintsQuery = (
  { __typename?: 'Query' }
  & { GetAllComplaints?: Maybe<Array<Maybe<(
    { __typename?: 'complain' }
    & Pick<Complain, 'complain' | 'status'>
    & { userId?: Maybe<(
      { __typename?: 'user' }
      & Pick<User, '_id' | 'name'>
    )>, building?: Maybe<(
      { __typename?: 'building' }
      & Pick<Building, '_id' | 'name'>
    )>, roomId?: Maybe<(
      { __typename?: 'room' }
      & Pick<Room, '_id' | 'name'>
    )> }
  )>>> }
);

export type ApproveRequestMutationVariables = {
  requestId?: Maybe<Scalars['ID']>;
};


export type ApproveRequestMutation = (
  { __typename?: 'Mutation' }
  & { ApproveRequest?: Maybe<(
    { __typename?: 'requestOutput' }
    & { Errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'error' | 'message'>
    )>>> }
  )> }
);

export type GetRequestForOwnerQueryVariables = {};


export type GetRequestForOwnerQuery = (
  { __typename?: 'Query' }
  & { GetRequestForOwner?: Maybe<Array<Maybe<(
    { __typename?: 'request' }
    & Pick<Request, '_id' | 'notification' | 'notificationType' | 'status'>
    & { userId?: Maybe<(
      { __typename?: 'user' }
      & Pick<User, '_id' | 'name'>
    )>, building?: Maybe<(
      { __typename?: 'building' }
      & Pick<Building, '_id' | 'name'>
    )>, roomId?: Maybe<(
      { __typename?: 'room' }
      & Pick<Room, '_id' | 'name'>
    )> }
  )>>> }
);

export type GetRequestOfUserQueryVariables = {};


export type GetRequestOfUserQuery = (
  { __typename?: 'Query' }
  & { GetRequestOfUser?: Maybe<Array<Maybe<(
    { __typename?: 'request' }
    & Pick<Request, '_id' | 'notificationType' | 'notification' | 'status'>
    & { userId?: Maybe<(
      { __typename?: 'user' }
      & Pick<User, '_id' | 'name'>
    )>, building?: Maybe<(
      { __typename?: 'building' }
      & Pick<Building, '_id' | 'name'>
    )>, roomId?: Maybe<(
      { __typename?: 'room' }
      & Pick<Room, '_id' | 'name'>
    )> }
  )>>> }
);

export type GetAllRoomsQueryVariables = {};


export type GetAllRoomsQuery = (
  { __typename?: 'Query' }
  & { GetAllRooms?: Maybe<Array<Maybe<(
    { __typename?: 'room' }
    & Pick<Room, '_id' | 'name' | 'address' | 'status'>
    & { building?: Maybe<(
      { __typename?: 'building' }
      & Pick<Building, '_id' | 'name'>
    )>, ownersId?: Maybe<(
      { __typename?: 'owner' }
      & Pick<Owner, '_id'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name'>
      )> }
    )>, tenantId?: Maybe<(
      { __typename?: 'tenant' }
      & Pick<Tenant, '_id'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name'>
      )> }
    )> }
  )>>> }
);

export type GetRoomOfOwnerQueryVariables = {};


export type GetRoomOfOwnerQuery = (
  { __typename?: 'Query' }
  & { getRoomOfOwner?: Maybe<Array<Maybe<(
    { __typename?: 'room' }
    & Pick<Room, '_id' | 'name' | 'status' | 'address'>
    & { building?: Maybe<(
      { __typename?: 'building' }
      & Pick<Building, '_id' | 'name'>
    )>, ownersId?: Maybe<(
      { __typename?: 'owner' }
      & Pick<Owner, '_id'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name'>
      )> }
    )>, tenantId?: Maybe<(
      { __typename?: 'tenant' }
      & Pick<Tenant, '_id'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name'>
      )> }
    )> }
  )>>> }
);

export type GetRoomByIdQueryVariables = {
  roomId?: Maybe<Scalars['ID']>;
};


export type GetRoomByIdQuery = (
  { __typename?: 'Query' }
  & { GetRoomById?: Maybe<(
    { __typename?: 'room' }
    & Pick<Room, '_id' | 'name' | 'address' | 'status'>
    & { ownersId?: Maybe<(
      { __typename?: 'owner' }
      & Pick<Owner, '_id'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name'>
      )> }
    )>, building?: Maybe<(
      { __typename?: 'building' }
      & Pick<Building, '_id' | 'name'>
    )>, tenantId?: Maybe<(
      { __typename?: 'tenant' }
      & Pick<Tenant, '_id'>
      & { userId?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name'>
      )> }
    )> }
  )> }
);

export type RemoveTenantFromRoomMutationVariables = {
  roomId?: Maybe<Scalars['String']>;
};


export type RemoveTenantFromRoomMutation = (
  { __typename?: 'Mutation' }
  & { RemoveTenantFromRoom?: Maybe<(
    { __typename?: 'addRoomOutput' }
    & { Errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'error' | 'message'>
    )>>>, Data?: Maybe<(
      { __typename?: 'room' }
      & Pick<Room, '_id' | 'name' | 'address' | 'status'>
      & { building?: Maybe<(
        { __typename?: 'building' }
        & Pick<Building, '_id' | 'name'>
      )>, ownersId?: Maybe<(
        { __typename?: 'owner' }
        & Pick<Owner, '_id'>
        & { userId?: Maybe<(
          { __typename?: 'user' }
          & Pick<User, '_id' | 'name'>
        )> }
      )>, tenantId?: Maybe<(
        { __typename?: 'tenant' }
        & Pick<Tenant, '_id'>
        & { userId?: Maybe<(
          { __typename?: 'user' }
          & Pick<User, 'name'>
        )> }
      )> }
    )> }
  )> }
);

export type RoomStatusChangeMutationVariables = {
  roomId?: Maybe<Scalars['ID']>;
};


export type RoomStatusChangeMutation = (
  { __typename?: 'Mutation' }
  & { RoomStatusChange?: Maybe<(
    { __typename?: 'addRoomOutput' }
    & { Errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'error' | 'message'>
    )>>>, Data?: Maybe<(
      { __typename?: 'room' }
      & Pick<Room, 'status'>
    )> }
  )> }
);

export type GetUserByIdQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type GetUserByIdQuery = (
  { __typename?: 'Query' }
  & { getUserById?: Maybe<(
    { __typename?: 'user' }
    & Pick<User, '_id' | 'name' | 'email' | 'userType' | 'createdDate' | 'status'>
  )> }
);

export type UserStatusUpdateMutationVariables = {
  userId?: Maybe<Scalars['ID']>;
};


export type UserStatusUpdateMutation = (
  { __typename?: 'Mutation' }
  & { UserStatusUpdate?: Maybe<(
    { __typename?: 'registerOutput' }
    & { Errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'error' | 'message'>
    )>>>, Data?: Maybe<(
      { __typename?: 'registerData' }
      & { user?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, 'status'>
      )> }
    )> }
  )> }
);

export type GetUserQueryVariables = {};


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser?: Maybe<(
    { __typename?: 'user' }
    & Pick<User, '_id' | 'name' | 'email' | 'userType' | 'createdDate' | 'status'>
  )> }
);

export type LoginUserMutationVariables = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { LoginUser?: Maybe<(
    { __typename?: 'registerOutput' }
    & { Errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'error' | 'message'>
    )>>>, Data?: Maybe<(
      { __typename?: 'registerData' }
      & Pick<RegisterData, 'token'>
      & { user?: Maybe<(
        { __typename?: 'user' }
        & Pick<User, '_id' | 'name' | 'email' | 'userType' | 'createdDate' | 'status'>
      )> }
    )> }
  )> }
);

export const RegisterUserDocument = gql`
    mutation RegisterUser($name: String, $email: String, $password: String, $userType: Int) {
  RegisterUser(name: $name, email: $email, password: $password, userType: $userType) {
    Errors {
      error
      message
    }
    Data {
      user {
        _id
        name
        email
        userType
        createdDate
        status
      }
      token
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterUserGQL extends Apollo.Mutation<RegisterUserMutation, RegisterUserMutationVariables> {
    document = RegisterUserDocument;
    
  }
export const GetAllBuildingDocument = gql`
    query GetAllBuilding {
  GetAllBuilding {
    _id
    name
    address
    status
    agentId {
      _id
      userId {
        _id
        name
        email
        userType
        createdDate
        status
      }
    }
    ownersId {
      _id
      userId {
        _id
        name
        email
        userType
        createdDate
        status
      }
    }
    status
    rooms {
      roomId {
        _id
        name
        address
        createdDate
        status
        tenantId {
          _id
          userId {
            name
            email
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllBuildingGQL extends Apollo.Query<GetAllBuildingQuery, GetAllBuildingQueryVariables> {
    document = GetAllBuildingDocument;
    
  }
export const GetBuildingByIdDocument = gql`
    query GetBuildingById($buildingId: ID) {
  GetBuildingById(buildingId: $buildingId) {
    _id
    name
    address
    agentId {
      _id
      userId {
        _id
        name
        email
        userType
        createdDate
        status
      }
    }
    ownersId {
      _id
      userId {
        _id
        name
        email
        userType
        createdDate
        status
      }
    }
    status
    rooms {
      roomId {
        _id
        name
        address
        createdDate
        status
        tenantId {
          _id
          userId {
            name
            email
          }
        }
      }
    }
    message {
      userId {
        _id
        name
        userType
      }
      message
      url
      date
    }
    messageOwner {
      userId {
        _id
        name
        userType
      }
      message
      url
      date
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBuildingByIdGQL extends Apollo.Query<GetBuildingByIdQuery, GetBuildingByIdQueryVariables> {
    document = GetBuildingByIdDocument;
    
  }
export const GetAllBuildingOfOwnerDocument = gql`
    query GetAllBuildingOfOwner($ownerId: ID) {
  GetAllBuildingOfOwner(ownerId: $ownerId) {
    _id
    name
    address
    status
    agentId {
      _id
      userId {
        _id
        name
      }
      buildings {
        _id
      }
    }
    ownersId {
      _id
      userId {
        _id
        name
        email
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllBuildingOfOwnerGQL extends Apollo.Query<GetAllBuildingOfOwnerQuery, GetAllBuildingOfOwnerQueryVariables> {
    document = GetAllBuildingOfOwnerDocument;
    
  }
export const CreateRequestDocument = gql`
    mutation CreateRequest($building: ID, $roomId: String) {
  CreateRequest(building: $building, roomId: $roomId) {
    Errors {
      error
      message
    }
    Data {
      _id
      notificationType
      userId {
        _id
        name
        email
        userType
      }
      notificationType
      building {
        _id
        name
        address
      }
      roomId {
        _id
        name
        address
        building {
          _id
          name
        }
      }
      status
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRequestGQL extends Apollo.Mutation<CreateRequestMutation, CreateRequestMutationVariables> {
    document = CreateRequestDocument;
    
  }
export const RemoveAgentDocument = gql`
    mutation RemoveAgent($buildingId: ID) {
  RemoveAgent(buildingId: $buildingId) {
    Errors {
      error
      message
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveAgentGQL extends Apollo.Mutation<RemoveAgentMutation, RemoveAgentMutationVariables> {
    document = RemoveAgentDocument;
    
  }
export const BuildingStatusUpdateDocument = gql`
    mutation BuildingStatusUpdate($buildingId: ID) {
  BuildingStatusUpdate(buildingId: $buildingId) {
    Errors {
      error
      message
    }
    Data {
      status
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BuildingStatusUpdateGQL extends Apollo.Mutation<BuildingStatusUpdateMutation, BuildingStatusUpdateMutationVariables> {
    document = BuildingStatusUpdateDocument;
    
  }
export const UpdateBuildingDocument = gql`
    mutation UpdateBuilding($name: String, $address: String, $room: [roomsInput], $id: ID) {
  UpdateBuilding(name: $name, address: $address, rooms: $room, id: $id) {
    Errors {
      error
      message
    }
    Data {
      _id
      name
      address
      ownersId {
        _id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateBuildingGQL extends Apollo.Mutation<UpdateBuildingMutation, UpdateBuildingMutationVariables> {
    document = UpdateBuildingDocument;
    
  }
export const AddBuildingDocument = gql`
    mutation AddBuilding($name: String, $address: String, $rooms: [roomsInput]) {
  AddBuilding(name: $name, address: $address, rooms: $rooms) {
    Errors {
      error
      message
    }
    Data {
      _id
      name
      address
      ownersId {
        _id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddBuildingGQL extends Apollo.Mutation<AddBuildingMutation, AddBuildingMutationVariables> {
    document = AddBuildingDocument;
    
  }
export const GetViewChatsDocument = gql`
    query GetViewChats {
  GetViewChats {
    _id
    name
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetViewChatsGQL extends Apollo.Query<GetViewChatsQuery, GetViewChatsQueryVariables> {
    document = GetViewChatsDocument;
    
  }
export const AddChatOwnerDocument = gql`
    mutation AddChatOwner($buildingId: ID, $message: String, $url: String) {
  AddChatOwner(buildingId: $buildingId, message: $message, url: $url) {
    Errors {
      error
      message
    }
    Data {
      _id
      name
      messageOwner {
        userId {
          _id
          name
          userType
        }
        message
        url
        date
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddChatOwnerGQL extends Apollo.Mutation<AddChatOwnerMutation, AddChatOwnerMutationVariables> {
    document = AddChatOwnerDocument;
    
  }
export const AddChatAllDocument = gql`
    mutation AddChatAll($buildingId: ID, $message: String, $url: String) {
  AddChatAll(buildingId: $buildingId, message: $message, url: $url) {
    Errors {
      error
      message
    }
    Data {
      _id
      name
      message {
        userId {
          _id
          name
          userType
        }
        message
        url
        date
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddChatAllGQL extends Apollo.Mutation<AddChatAllMutation, AddChatAllMutationVariables> {
    document = AddChatAllDocument;
    
  }
export const ChatOwnerUpdateDocument = gql`
    subscription ChatOwnerUpdate($buildingId: ID) {
  ChatOwnerUpdate(buildingId: $buildingId) {
    _id
    name
    messageOwner {
      userId {
        _id
        name
        userType
      }
      message
      url
      date
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChatOwnerUpdateGQL extends Apollo.Subscription<ChatOwnerUpdateSubscription, ChatOwnerUpdateSubscriptionVariables> {
    document = ChatOwnerUpdateDocument;
    
  }
export const ChatAllUpdateDocument = gql`
    subscription ChatAllUpdate($buildingId: ID) {
  ChatAllUpdate(buildingId: $buildingId) {
    _id
    name
    message {
      userId {
        _id
        name
        userType
      }
      message
      url
      date
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChatAllUpdateGQL extends Apollo.Subscription<ChatAllUpdateSubscription, ChatAllUpdateSubscriptionVariables> {
    document = ChatAllUpdateDocument;
    
  }
export const CreateComplainDocument = gql`
    mutation CreateComplain($complain: String) {
  CreateComplain(complain: $complain) {
    Errors {
      error
      message
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateComplainGQL extends Apollo.Mutation<CreateComplainMutation, CreateComplainMutationVariables> {
    document = CreateComplainDocument;
    
  }
export const GetAllComplaintsDocument = gql`
    query GetAllComplaints {
  GetAllComplaints {
    complain
    userId {
      _id
      name
    }
    building {
      _id
      name
    }
    roomId {
      _id
      name
    }
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllComplaintsGQL extends Apollo.Query<GetAllComplaintsQuery, GetAllComplaintsQueryVariables> {
    document = GetAllComplaintsDocument;
    
  }
export const ApproveRequestDocument = gql`
    mutation ApproveRequest($requestId: ID) {
  ApproveRequest(requestId: $requestId) {
    Errors {
      error
      message
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ApproveRequestGQL extends Apollo.Mutation<ApproveRequestMutation, ApproveRequestMutationVariables> {
    document = ApproveRequestDocument;
    
  }
export const GetRequestForOwnerDocument = gql`
    query GetRequestForOwner {
  GetRequestForOwner {
    _id
    notification
    notificationType
    userId {
      _id
      name
    }
    building {
      _id
      name
    }
    roomId {
      _id
      name
    }
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRequestForOwnerGQL extends Apollo.Query<GetRequestForOwnerQuery, GetRequestForOwnerQueryVariables> {
    document = GetRequestForOwnerDocument;
    
  }
export const GetRequestOfUserDocument = gql`
    query GetRequestOfUser {
  GetRequestOfUser {
    _id
    notificationType
    notification
    userId {
      _id
      name
    }
    building {
      _id
      name
    }
    roomId {
      _id
      name
    }
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRequestOfUserGQL extends Apollo.Query<GetRequestOfUserQuery, GetRequestOfUserQueryVariables> {
    document = GetRequestOfUserDocument;
    
  }
export const GetAllRoomsDocument = gql`
    query GetAllRooms {
  GetAllRooms {
    _id
    name
    address
    status
    building {
      _id
      name
    }
    ownersId {
      _id
      userId {
        _id
        name
      }
    }
    tenantId {
      _id
      userId {
        _id
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllRoomsGQL extends Apollo.Query<GetAllRoomsQuery, GetAllRoomsQueryVariables> {
    document = GetAllRoomsDocument;
    
  }
export const GetRoomOfOwnerDocument = gql`
    query getRoomOfOwner {
  getRoomOfOwner {
    _id
    name
    status
    address
    building {
      _id
      name
    }
    ownersId {
      _id
      userId {
        _id
        name
      }
    }
    tenantId {
      _id
      userId {
        _id
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRoomOfOwnerGQL extends Apollo.Query<GetRoomOfOwnerQuery, GetRoomOfOwnerQueryVariables> {
    document = GetRoomOfOwnerDocument;
    
  }
export const GetRoomByIdDocument = gql`
    query GetRoomById($roomId: ID) {
  GetRoomById(roomId: $roomId) {
    _id
    name
    address
    ownersId {
      _id
      userId {
        _id
        name
      }
    }
    building {
      _id
      name
    }
    tenantId {
      _id
      userId {
        _id
        name
      }
    }
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRoomByIdGQL extends Apollo.Query<GetRoomByIdQuery, GetRoomByIdQueryVariables> {
    document = GetRoomByIdDocument;
    
  }
export const RemoveTenantFromRoomDocument = gql`
    mutation RemoveTenantFromRoom($roomId: String) {
  RemoveTenantFromRoom(roomId: $roomId) {
    Errors {
      error
      message
    }
    Data {
      _id
      name
      address
      status
      building {
        _id
        name
      }
      ownersId {
        _id
        userId {
          _id
          name
        }
      }
      tenantId {
        _id
        userId {
          name
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveTenantFromRoomGQL extends Apollo.Mutation<RemoveTenantFromRoomMutation, RemoveTenantFromRoomMutationVariables> {
    document = RemoveTenantFromRoomDocument;
    
  }
export const RoomStatusChangeDocument = gql`
    mutation RoomStatusChange($roomId: ID) {
  RoomStatusChange(roomId: $roomId) {
    Errors {
      error
      message
    }
    Data {
      status
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RoomStatusChangeGQL extends Apollo.Mutation<RoomStatusChangeMutation, RoomStatusChangeMutationVariables> {
    document = RoomStatusChangeDocument;
    
  }
export const GetUserByIdDocument = gql`
    query getUserById($id: ID) {
  getUserById(id: $id) {
    _id
    name
    email
    userType
    createdDate
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserByIdGQL extends Apollo.Query<GetUserByIdQuery, GetUserByIdQueryVariables> {
    document = GetUserByIdDocument;
    
  }
export const UserStatusUpdateDocument = gql`
    mutation UserStatusUpdate($userId: ID) {
  UserStatusUpdate(userId: $userId) {
    Errors {
      error
      message
    }
    Data {
      user {
        status
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserStatusUpdateGQL extends Apollo.Mutation<UserStatusUpdateMutation, UserStatusUpdateMutationVariables> {
    document = UserStatusUpdateDocument;
    
  }
export const GetUserDocument = gql`
    query getUser {
  getUser {
    _id
    name
    email
    userType
    createdDate
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserGQL extends Apollo.Query<GetUserQuery, GetUserQueryVariables> {
    document = GetUserDocument;
    
  }
export const LoginUserDocument = gql`
    mutation LoginUser($email: String, $password: String) {
  LoginUser(email: $email, password: $password) {
    Errors {
      error
      message
    }
    Data {
      user {
        _id
        name
        email
        userType
        createdDate
        status
      }
      token
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginUserGQL extends Apollo.Mutation<LoginUserMutation, LoginUserMutationVariables> {
    document = LoginUserDocument;
    
  }