import { ChatComponent } from './../../components/chat/chat.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { ChatsViewComponent } from 'src/app/components/chatsView/chatsView.component';
import { ComplainsComponent } from 'src/app/components/complains/complains.component';
import { AddComplainComponent } from 'src/app/components/addComplain/addComplain.component';
import { UserViewComponent } from 'src/app/components/userView/userView.component';

export const content: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'chat', component: ChatsViewComponent
  },
  {
    path: 'chat/:type/:id', component: ChatComponent
  },
  {
    path:'complain', component: ComplainsComponent
  },
  {
    path:'complain/add', component: AddComplainComponent
  },
  {
    path:'userView/:id', component: UserViewComponent
  },
  {
    path: 'building',
    loadChildren: () => import('../../components/building/building.module').then(m => m.BuildingModule)
  },
  {
    path: 'room',
    loadChildren: () => import('../../components/room/room.module').then(m => m.RoomModule)
  },
  {
    path: 'request',
    loadChildren: () => import('../../components/requests/requests.module').then(m => m.RequestsModule)
  }
];