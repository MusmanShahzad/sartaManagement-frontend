import { GetUserByIdGQL, UserStatusUpdateGQL } from './../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { GetBuildingByIdGQL, User } from 'src/app/shared/graphql/service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userView',
  templateUrl: './userView.component.html',
  styleUrls: ['./userView.component.css']
})
export class UserViewComponent implements OnInit {
user:User;
type;
  constructor(private GetUserById:GetUserByIdGQL,private router: ActivatedRoute,private UserStatusUpdate:UserStatusUpdateGQL,
    private toastr: ToastrService) { 
    this.type = localStorage.getItem('type');
  }

  ngOnInit() {
    this.router.paramMap.subscribe((params)=>{
    this.GetUserById.watch({id:params.get('id')},{fetchPolicy:'network-only'}).valueChanges.subscribe(ele=>{
      this.user=ele.data.getUserById;
    })
    })
  }
  statusChange(){
    this.UserStatusUpdate.mutate({userId:this.user._id}).subscribe(ele=>{
      if(ele.data.UserStatusUpdate.Errors&&ele.data.UserStatusUpdate.Errors.length>0){
        ele.data.UserStatusUpdate.Errors.forEach(error=>{
          this.toastr.error(error.message,error.error);
        })
        return
      }
      this.user.status=ele.data.UserStatusUpdate.Data.user.status;
      this.toastr.success('Successfully Changed Status','Success');
    })
  }

}
