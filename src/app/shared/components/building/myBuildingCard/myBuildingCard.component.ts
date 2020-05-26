import { RemoveAgentGQL } from './../../../graphql/service';
import { Component, OnInit, Input } from '@angular/core';
import { Building } from 'src/app/shared/graphql/service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-myBuildingCard',
  templateUrl: './myBuildingCard.component.html',
  styleUrls: ['./myBuildingCard.component.css']
})
export class MyBuildingCardComponent implements OnInit {
@Input() item: Building
type;
  constructor(private RemoveAgent:RemoveAgentGQL,private toastr: ToastrService,private router:Router) { }

  ngOnInit() {
    this.type = localStorage.getItem('type');
    console.log(this.item);
  }
  editRedirect(id){
    this.router.navigate(['/building/manage/edit',id]);
  }
  viewRedirect(id){
    this.router.navigate(['/building',id]);
  }
  removeAgentBtn(id){
    this.RemoveAgent.mutate({buildingId:id}).subscribe(ele=>{
      if(ele.data.RemoveAgent.Errors&&ele.data.RemoveAgent.Errors.length>0){
        ele.data.RemoveAgent.Errors.forEach(error=>{
          this.toastr.error(error.message,'Unsuccessfully');
        });
        return;
      }
      this.item.agentId=null;
    })
  }
}
