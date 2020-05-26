import { AddChatOwnerGQL, AddChatAllGQL, ChatOwnerUpdateGQL, ChatAllUpdateGQL, Message } from './../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetBuildingByIdGQL, GetUserGQL, Building } from 'src/app/shared/graphql/service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageForm: FormGroup;
messages;
  constructor(private route:ActivatedRoute,private GetBuildingById:GetBuildingByIdGQL,private getUser:GetUserGQL,
    private fb:FormBuilder,private AddChatOwner:AddChatOwnerGQL,private AddChatAll:AddChatAllGQL,
    private ChatOwnerUpdate:ChatOwnerUpdateGQL,private ChatAllUpdate:ChatAllUpdateGQL) { }
userId;
type;
buildingId;
sendDisable=false;
  ngOnInit() {
    this.messageForm=this.fb.group({
        message:['',Validators.required]
    })
    this.getUser.watch().valueChanges.subscribe(ele=>{
      this.userId = ele.data.getUser._id;
    })
    this.route.paramMap.subscribe(queryParams => {

      this.buildingId = (queryParams.get('id'));
      this.type = (queryParams.get('type'));
      if(queryParams.get('type')=='owner'){
        this.GetBuildingById.watch({buildingId: queryParams.get('id')}).valueChanges.subscribe(ele=>{
          this.messages=ele.data.GetBuildingById.messageOwner;
        });
        this.ChatOwnerUpdate.subscribe({buildingId:this.buildingId}).subscribe(ele=>{
          console.log(ele);
          if(ele.data.ChatOwnerUpdate){
          this.messages = ele.data.ChatOwnerUpdate.messageOwner
          }
        });
      }
      if(queryParams.get('type')=='all'){
        this.GetBuildingById.watch({buildingId: queryParams.get('id')}).valueChanges.subscribe(ele=>{
          this.messages=ele.data.GetBuildingById.message;
        });
        this.ChatAllUpdate.subscribe({buildingId:this.buildingId}).subscribe(ele=>{
          console.log(ele);
          if(ele.data.ChatAllUpdate){
          this.messages = ele.data.ChatAllUpdate.message;
          }
        });
      }
    });
  }
  sendMessage(){
    if(this.type=='owner'){
      this.sendDisable=true;
      this.AddChatOwner.mutate({...this.messageForm.value,buildingId:this.buildingId}).subscribe(ele=>{
        this.sendDisable=false;
        this.messages=ele.data.AddChatOwner.Data.messageOwner;
      })
    }
    else if(this.type=='all'){
      this.sendDisable=true;
      this.AddChatAll.mutate({...this.messageForm.value,buildingId:this.buildingId}).subscribe(ele=>{
        this.sendDisable=false;
        this.messages=ele.data.AddChatAll.Data.message;
      })
    }
  }

}
