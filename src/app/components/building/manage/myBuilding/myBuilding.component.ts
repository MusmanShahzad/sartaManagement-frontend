import { GetAllBuildingOfOwnerGQL, RemoveAgentGQL } from './../../../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/shared/graphql/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myBuilding',
  templateUrl: './myBuilding.component.html',
  styleUrls: ['./myBuilding.component.css']
})
export class MyBuildingComponent implements OnInit {
isLoading = false;
buildings: Building[];
type;
  constructor(private GetAllBuildingOfOwner:GetAllBuildingOfOwnerGQL) { }

  ngOnInit() {
    this.type = localStorage.getItem('type');
    this.isLoading= true;
    this.GetAllBuildingOfOwner.watch({},{fetchPolicy:'network-only'}).valueChanges.subscribe(ele=>{
      this.buildings = ele.data.GetAllBuildingOfOwner;
      this.isLoading=false;
    })
  }
  
  

}
