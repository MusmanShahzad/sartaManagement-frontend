import { MyRequestsComponent } from './myRequests/myRequests.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './requests.component';
const routes: Routes =[
    { path:'', component:RequestsComponent},
    { path:'my', component:MyRequestsComponent},
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RequestRoutingModule{}