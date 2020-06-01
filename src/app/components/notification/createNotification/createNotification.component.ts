import { CreateNotificationGQL } from './../../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { GetUsersOfOwnerGQL, User } from 'src/app/shared/graphql/service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createNotification',
  templateUrl: './createNotification.component.html',
  styleUrls: ['./createNotification.component.css']
})
export class CreateNotificationComponent implements OnInit {
  users:User[];
createNotificationForm: FormGroup;

  constructor(private fb:FormBuilder,private GetUsersOfOwner:GetUsersOfOwnerGQL,private toastr: ToastrService,
    private CreateNotification:CreateNotificationGQL) {
    this.createNotificationForm = this.fb.group({
     notification:['',Validators.required],
    });
   }
   userIdsCheckBoxes:boolean[]=[];
   uploadedFiles:any;
  ngOnInit() {
    this.GetUsersOfOwner.watch({},{fetchPolicy:'network-only'}).valueChanges.subscribe(data=>{
      if(data.data.GetUsersOfOwner){
        this.addCheckboxes(data.data.GetUsersOfOwner);
        this.users = data.data.GetUsersOfOwner;
      }
    })
  }
  fileChange(event){
    this.uploadedFiles = event.target.files;
  }
  private addCheckboxes(data) {
    data.forEach(ele=>{
      this.userIdsCheckBoxes.push(false);
    })
  }
submit(){
  let userIds = [];
  for(let i=0;i<this.userIdsCheckBoxes.length;i++){
    if(this.userIdsCheckBoxes[i]){
      userIds.push(this.users[i]._id);
    }
  }
  this.CreateNotification.mutate({...this.createNotificationForm.value, userIds,file:this.uploadedFiles[0]},{
    context: {
      useMultipart: true
   }
  }).subscribe(ele=>{
    if(ele.data.CreateNotification){
      this.toastr.success('request sended Successfully','success');
    }
    else{
      this.toastr.error('error sending request','Unsuccessfully');
    }
  });
}
}
