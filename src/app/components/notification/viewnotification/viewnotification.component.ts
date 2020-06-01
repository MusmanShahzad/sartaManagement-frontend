import { GetAllNotificationsOfUserGQL } from './../../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { ExtensionDataService } from 'src/app/shared/services/extensionData.service';

@Component({
  selector: 'app-viewnotification',
  templateUrl: './viewnotification.component.html',
  styleUrls: ['./viewnotification.component.css']
})
export class ViewnotificationComponent implements OnInit {
  complains:any;
  constructor(private GetAllNotificationsOfUser:GetAllNotificationsOfUserGQL,private extensions:ExtensionDataService) { }

  ngOnInit() {
    this.GetAllNotificationsOfUser.watch({},{fetchPolicy:'network-only'}).valueChanges.subscribe((ele)=>{
      this.complains = ele.data.GetAllNotificationsOfUser;
    })
  }
  checkVideoExtension(url){
    return this.extensions.checkVideoExtension(url);
  }
  checkImageExtension(url){
    return this.extensions.checkImageExtension(url);
  }

}
