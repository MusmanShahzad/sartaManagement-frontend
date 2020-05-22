import { GetAllBuildingOfOwnerGQL } from './../../../../shared/graphql/service';
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
  constructor(private GetAllBuildingOfOwner:GetAllBuildingOfOwnerGQL,private router:Router) { }

  ngOnInit() {
    this.isLoading= true;
    this.GetAllBuildingOfOwner.watch({}).valueChanges.subscribe(ele=>{
      this.buildings = ele.data.GetAllBuildingOfOwner;
      this.isLoading=false;
    })
  }
  editRedirect(id){
    this.router.navigate(['/building/manage/edit',id]);
  }
  viewRedirect(id){
    this.router.navigate(['/building',id]);
  }

}
