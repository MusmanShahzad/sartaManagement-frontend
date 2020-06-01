import { GetAllComplaintsGQL,AcceptComplainGQL,RejectComplainGQL } from './../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { Complain } from 'src/app/shared/graphql/service';
import { ExtensionDataService } from 'src/app/shared/services/extensionData.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.css']
})
export class ComplainsComponent implements OnInit {
complains:Complain[];
type;
  constructor(private GetAllComplaints:GetAllComplaintsGQL,private extensions:ExtensionDataService,
    private AcceptComplain:AcceptComplainGQL,private RejectComplain:RejectComplainGQL,private toastr: ToastrService) { 
      this.type = localStorage.getItem('type');
    }

  ngOnInit() {

    this.GetAllComplaints.watch({},{fetchPolicy:'network-only'}).valueChanges.subscribe(ele=>{
      this.complains=ele.data.GetAllComplaints;
    });
  }
  checkVideoExtension(url){
    return this.extensions.checkVideoExtension(url);
  }
  checkImageExtension(url){
    return this.extensions.checkImageExtension(url);
  }
  acceptComplain(id){
    this.AcceptComplain.mutate({complainId:id}).subscribe(ele=>{
      if(ele.data.AcceptComplain.Errors&&ele.data.AcceptComplain.Errors.length>0){
        ele.data.AcceptComplain.Errors.forEach(error =>{
          this.toastr.error(error.message,error.error);
        })
        return;
      }
      this.toastr.success('request accepted success','success');
      this.GetAllComplaints.watch({},{fetchPolicy:'network-only'}).valueChanges.subscribe(ele=>{
        this.complains=ele.data.GetAllComplaints;
      });
    })
  }
  rejectComplain(id){
    this.RejectComplain.mutate({complainId:id}).subscribe(ele=>{
      if(ele.data.RejectComplain.Errors&&ele.data.RejectComplain.Errors.length>0){
        ele.data.RejectComplain.Errors.forEach(error =>{
          this.toastr.error(error.message,error.error);
        })
        return;
      }
      this.toastr.success('request accepted success','success');
      this.GetAllComplaints.watch({},{fetchPolicy:'network-only'}).valueChanges.subscribe(ele=>{
        this.complains=ele.data.GetAllComplaints;
      });
    })
  }

}
