import { Component, OnInit } from '@angular/core';
import { GetAllContractorsGQL, Contractors } from 'src/app/shared/graphql/service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewContractors',
  templateUrl: './viewContractors.component.html',
  styleUrls: ['./viewContractors.component.css']
})
export class ViewContractorsComponent implements OnInit {
contractors: Contractors[];
complainId;
  constructor(private GetAllContractors:GetAllContractorsGQL,private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe((params)=>{
      this.complainId = params.get('id');
      })
    this.GetAllContractors.watch({},{fetchPolicy:'network-only'}).valueChanges.subscribe(data=>{
      this.contractors = data.data.GetAllContractors;
    })
  }

}
