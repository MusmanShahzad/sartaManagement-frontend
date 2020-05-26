import { Component, OnInit, Input } from '@angular/core';
import { Building, CreateRequestGQL } from 'src/app/shared/graphql/service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buildingCard',
  templateUrl: './buildingCard.component.html',
  styleUrls: ['./buildingCard.component.css']
})
export class BuildingCardComponent implements OnInit {
@Input() item:Building;
requestLoading = false;
requestVisible = true;
  constructor(private toastr: ToastrService,private CreateRequests:CreateRequestGQL) { }

  ngOnInit() {
    console.log(this.item);;
  }
  CreateRequest(id){
    this.requestLoading=true;
    this.CreateRequests.mutate({building:id}).subscribe(ele=>{
      if(ele.data.CreateRequest.Errors&&ele.data.CreateRequest.Errors.length>0){
        ele.data.CreateRequest.Errors.forEach(error=>{
          this.toastr.error(error.message,error.error);
        })
      }
      else{
        this.toastr.success('request sended Successfully');
        this.requestVisible=false;
      }
      this.requestLoading=false;
    })
  }

}
