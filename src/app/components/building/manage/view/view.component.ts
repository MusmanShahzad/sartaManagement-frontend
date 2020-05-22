import { GetBuildingByIdGQL, Building, CreateRequestGQL } from './../../../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  isLoading = false;
  building: Building;
  type;
  constructor(private route:ActivatedRoute,private GetBuildingById:GetBuildingByIdGQL,
    private CreateRequests:CreateRequestGQL,private toastr: ToastrService) { }

  ngOnInit() {
    this.type=localStorage.getItem('type');
    this.isLoading = true;
    this.route.paramMap.subscribe(queryParams => {
      this.GetBuildingById.watch({buildingId: queryParams.get('id')}).valueChanges.subscribe(ele=>{
        setTimeout(()=>{
          this.building=ele.data.GetBuildingById;
          this.isLoading = false;
        },5000);
      })
    })
  }
  CreateRequest(id){
    this.CreateRequests.mutate({building:id}).subscribe(ele=>{
      if(ele.data.CreateRequest.Errors&&ele.data.CreateRequest.Errors.length>0){
        ele.data.CreateRequest.Errors.forEach(error=>{
          this.toastr.error(error.message,error.error);
        })
      }
      else{
        this.toastr.success('request sended Successfully');
        this.type=-1;
      }
    })
  }

}
