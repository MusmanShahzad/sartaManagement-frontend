import {
  RemoveTenantFromRoomGQL
} from './../../../../shared/graphql/service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  GetRoomOfOwnerGQL
} from 'src/app/shared/graphql/service';
import {
  ToastrService
} from 'ngx-toastr';

@Component({
  selector: 'app-myRoom',
  templateUrl: './myRoom.component.html',
  styleUrls: ['./myRoom.component.css']
})
export class MyRoomComponent implements OnInit {
  rooms;
  type;
  isLoading: boolean = false;
  constructor(private getRoomOfOwner: GetRoomOfOwnerGQL, private toastr: ToastrService,
    private RemoveTenantFromRoom: RemoveTenantFromRoomGQL) {}

  ngOnInit() {
    this.type = localStorage.getItem('type');
    this.isLoading = true;
    this.getRoomOfOwner.watch({}, {
      fetchPolicy: 'network-only'
    }).valueChanges.subscribe(element => {
      this.rooms = element.data.getRoomOfOwner;
      this.isLoading = false;
    })
  }
  RemoveTenant(id) {
    this.RemoveTenantFromRoom.mutate({
      roomId: id
    }).subscribe(ele => {
      if (ele.data.RemoveTenantFromRoom.Errors && ele.data.RemoveTenantFromRoom.Errors.length > 0) {
        ele.data.RemoveTenantFromRoom.Errors.forEach(error => {
          this.toastr.error(error.message, error.error);
        })
      } else {
        this.toastr.success('request sended Successfully');
        this.isLoading = true;
        this.getRoomOfOwner.watch({}, {
          fetchPolicy: 'network-only'
        }).valueChanges.subscribe(element => {
          this.rooms = element.data.getRoomOfOwner;
          this.isLoading = false;
        })
      }
    })
  }

}