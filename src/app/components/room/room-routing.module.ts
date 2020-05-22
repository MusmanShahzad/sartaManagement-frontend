import { MyRoomComponent } from './manage/myRoom/myRoom.component';
import { RoomComponent } from './room.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './manage/view/view.component';
import { EditComponent } from './manage/edit/edit.component';
import { AddComponent } from './manage/add/add.component';
const routes: Routes =[
    { path:'', component:RoomComponent},
    {path:'manage',children:[
        {path:'edit/:id',component:EditComponent},
        {path:'view/:id',component:ViewComponent},
        {path:'my',component:MyRoomComponent},
        {path:'add',component:AddComponent}
    ]},

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoomRoutingModule{}