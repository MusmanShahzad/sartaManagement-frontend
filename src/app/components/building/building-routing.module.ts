import { MyBuildingComponent } from './manage/myBuilding/myBuilding.component';
import { BuildingComponent } from './building.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './manage/view/view.component';
import { EditComponent } from './manage/edit/edit.component';
import { AddComponent } from './manage/add/add.component';

const routes: Routes =[
    { path:'', component:BuildingComponent},
    {path:':id',component:ViewComponent},
    {path:'manage',children:[
        {path:'edit',component:MyBuildingComponent},
        {path:'edit/:id',component:EditComponent},
        {path:'my',component:MyBuildingComponent},
        {path:'add',component:AddComponent}
    ]},

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BuildingRoutingModule{}