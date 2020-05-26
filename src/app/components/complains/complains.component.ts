import { GetAllComplaintsGQL } from './../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { Complain } from 'src/app/shared/graphql/service';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.css']
})
export class ComplainsComponent implements OnInit {
complains:Complain[];
  constructor(private GetAllComplaints:GetAllComplaintsGQL) { }

  ngOnInit() {

    this.GetAllComplaints.watch({},{fetchPolicy:'network-only'}).valueChanges.subscribe(ele=>{
      console.log(ele);
      this.complains=ele.data.GetAllComplaints;
    });
  }

}
