import { GetAllBuildingGQL, Buildings } from './../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
buildings: Buildings[];
isLoading:boolean = false;
  constructor(private GetAllBuilding:GetAllBuildingGQL,private router:Router ) { }

  ngOnInit() {
    this.isLoading=true;
    this.GetAllBuilding.watch({},{fetchPolicy:'network-only'}).valueChanges.subscribe((ele) => {
      this.buildings=ele.data.GetAllBuilding;
      this.isLoading=false;
    })
  }

}
