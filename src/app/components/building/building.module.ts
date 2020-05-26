import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingComponent } from './building.component';
import {BuildingRoutingModule} from './building-routing.module';
import {ViewComponent} from './manage/view/view.component';
import { EditComponent } from './manage/edit/edit.component';
import { MyBuildingComponent } from './manage/myBuilding/myBuilding.component';
import { AddComponent } from './manage/add/add.component';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BuildingCardComponent } from 'src/app/shared/components/building/buildingCard/buildingCard.component';
import { MyBuildingCardComponent } from 'src/app/shared/components/building/myBuildingCard/myBuildingCard.component';

@NgModule({
  imports: [
    CommonModule,
    BuildingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSkeletonLoaderModule
  ],
  declarations: [
    BuildingComponent,
    ViewComponent,
    EditComponent,
    MyBuildingComponent,
    AddComponent,
    BuildingCardComponent,
    MyBuildingCardComponent,
  ]
})
export class BuildingModule { }
