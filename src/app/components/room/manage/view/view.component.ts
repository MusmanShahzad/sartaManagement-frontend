import { RoomStatusChangeGQL } from './../../../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import {  Room, GetRoomByIdGQL } from 'src/app/shared/graphql/service';
import {  ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
room:Room;
type;
isLoading:boolean = false;
  constructor(private GetRoomById:GetRoomByIdGQL,private router: ActivatedRoute,
    private RoomStatusChange:RoomStatusChangeGQL,private toastr: ToastrService) { 
    this.type = localStorage.getItem('type');
  }

  ngOnInit() {
    this.isLoading=true;
    this.router.paramMap.subscribe(params => {
      this.GetRoomById.watch({roomId: params.get('id')},{fetchPolicy:'network-only'}).valueChanges.subscribe(ele=>{
        this.room = ele.data.GetRoomById;
        this.isLoading=false;
      })
    })
  }
  statusChange(){
    this.RoomStatusChange.mutate({roomId:this.room._id}).subscribe(ele=>{
      if(ele.data.RoomStatusChange.Errors&&ele.data.RoomStatusChange.Errors.length>0){
        ele.data.RoomStatusChange.Errors.forEach(error=>{
          this.toastr.error(error.message,error.error);
        });
        return
      }
      else{
        this.toastr.success('status Changed Successfully','success');
        this.room.status=ele.data.RoomStatusChange.Data.status;
      }
    })
  }
}
