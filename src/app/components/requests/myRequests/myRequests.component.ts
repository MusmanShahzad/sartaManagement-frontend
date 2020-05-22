import { Component, OnInit } from '@angular/core';
import { GetRequestForOwnerGQL } from 'src/app/shared/graphql/service';

@Component({
  selector: 'app-myRequests',
  templateUrl: './myRequests.component.html',
  styleUrls: ['./myRequests.component.css']
})
export class MyRequestsComponent implements OnInit {
requests;
  constructor(private GetRequestOfUser:GetRequestForOwnerGQL) { }

  ngOnInit() {
  }

}
