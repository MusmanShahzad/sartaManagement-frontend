import { ChatComponent } from './../../components/chat/chat.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

export const content: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'chat', component: ChatComponent
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