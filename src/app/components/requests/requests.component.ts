import { GetRequestForOwnerGQL, ApproveRequestGQL, RejectRequestGQL } from './../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests;
  constructor(private GetRequestForOwner: GetRequestForOwnerGQL,
    private ApproveRequest: ApproveRequestGQL,
    private RejectRequest: RejectRequestGQL,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.GetRequestForOwner.watch({}, { fetchPolicy: 'network-only' }).valueChanges.subscribe(ele => {
      console.log(ele);
      this.requests = ele.data.GetRequestForOwner;
    })
  }
  accept(id) {
    this.ApproveRequest.mutate({ requestId: id }).subscribe(ele => {
      if (ele.data.ApproveRequest.Errors && ele.data.ApproveRequest.Errors.length > 0) {
        ele.data.ApproveRequest.Errors.forEach(error => {
          this.toastr.error(error.message, error.error);
        })
        return;
      }
      this.GetRequestForOwner.watch({}, { fetchPolicy: 'network-only' }).valueChanges.subscribe(element => {
        this.requests = element.data.GetRequestForOwner;
      })
      this.toastr.success('Request accepted', 'success');
    })
  }
  reject(id) {
    this.RejectRequest.mutate({ requestId: id }).subscribe(ele => {
      if (ele.data.RejectRequest.Errors && ele.data.RejectRequest.Errors.length > 0) {
        ele.data.RejectRequest.Errors.forEach(error => {
          this.toastr.error(error.message, error.error);
        })
        return;
      }
      this.GetRequestForOwner.watch({}, { fetchPolicy: 'network-only' }).valueChanges.subscribe(element => {
        this.requests = element.data.GetRequestForOwner;
      })
      this.toastr.success('Request Rejected', 'success');
    })
  }

}
