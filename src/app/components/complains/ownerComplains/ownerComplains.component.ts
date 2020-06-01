import { GetAllComplaintsOfOwnerGQL, Complain } from './../../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { ExtensionDataService } from 'src/app/shared/services/extensionData.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ownerComplains',
  templateUrl: './ownerComplains.component.html',
  styleUrls: ['./ownerComplains.component.css']
})
export class OwnerComplainsComponent implements OnInit {
  complains:Complain[];
  type;

  constructor(private GetAllComplaintsOfOwner:GetAllComplaintsOfOwnerGQL,private extensions:ExtensionDataService,
    private router: ActivatedRoute,private route:Router) {
    this.type = localStorage.getItem('type');
   }

  ngOnInit() {
    
    this.GetAllComplaintsOfOwner.watch({},{fetchPolicy:'network-only'}).valueChanges.subscribe(data =>{
      this.complains = data.data.GetAllComplaintsOfOwner;
    });
  }
  checkVideoExtension(url){
    return this.extensions.checkVideoExtension(url);
  }
  checkImageExtension(url){
    return this.extensions.checkImageExtension(url);
  }
  sendRequest(id){
        
  }
}
