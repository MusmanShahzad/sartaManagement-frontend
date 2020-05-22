import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room.component';
import { ViewComponent } from './manage/view/view.component';
import { EditComponent } from './manage/edit/edit.component';
import { MyRoomComponent } from './manage/myRoom/myRoom.component';
import { AddComponent } from './manage/add/add.component';
import { RoomRoutingModule} from './room-routing.module';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  imports: [
    CommonModule,
    RoomRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule
  ],
  declarations: [
    RoomComponent,
    ViewComponent,
    EditComponent,
    MyRoomComponent,
    AddComponent]
})
export class RoomModule { }
