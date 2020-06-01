import { GetAllRoomsGQL, CreateRequestGQL, Room } from './../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { Rooms } from 'src/app/shared/graphql/service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
rooms;
type ;
isLoading:boolean = false;
showButton=true;
  constructor(private GetAllRooms:GetAllRoomsGQL,private CreateRequests:CreateRequestGQL,private toastr: ToastrService) { }

  ngOnInit() {
    this.isLoading = true;
    this.type = localStorage.getItem('type');
    this.GetAllRooms.watch({},{fetchPolicy:'no-cache'}).valueChanges.subscribe(ele=>{
      this.rooms = ele.data.GetAllRooms;
      this.isLoading = false;
    })
  }
  CreateRequest(id){
    this.CreateRequests.mutate({roomId:id},{fetchPolicy:'no-cache'}).subscribe(ele=>{
      if(ele.data.CreateRequest.Errors&&ele.data.CreateRequest.Errors.length>0){
        ele.data.CreateRequest.Errors.forEach(error=>{
          this.toastr.error(error.message,error.error);
        });
      }
      else{
        this.toastr.success('request sended Successfully');
      }
    })
  }

}
