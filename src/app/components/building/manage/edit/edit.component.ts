import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { AddBuildingGQL, GetBuildingByIdGQL, UpdateBuildingGQL } from 'src/app/shared/graphql/service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  AddBuildingForm: FormGroup;
  isLoading: boolean = false;
    constructor(private fb: FormBuilder,private AddBuilding:AddBuildingGQL, 
      private toastr: ToastrService,private GetBuildingById:GetBuildingByIdGQL,
      private UpdateBuilding:UpdateBuildingGQL,private route:ActivatedRoute) { }
  get rooms(){
    return (this.AddBuildingForm.controls.rooms as FormArray);
  }
  get name(){
    return (this.AddBuildingForm.controls.name as FormControl);
  }
  get address(){
    return (this.AddBuildingForm.controls.address as FormControl);
  }
  get room(){
    return (this.fb.group({
      name:['',Validators.required],
      address:['',Validators.required]
      }));
  }
  id:String;
    ngOnInit() {
      this.route.paramMap.subscribe(queryParams => {//queryParams.get('id')
      this.id=queryParams.get('id');
      this.GetBuildingById.watch({buildingId:queryParams.get('id')}).valueChanges.subscribe(ele=>{
        this.AddBuildingForm = this.fb.group({
          name:[ele.data.GetBuildingById.name,Validators.required],
          address:[ele.data.GetBuildingById.address,Validators.required],
          rooms:this.fb.array([])
        })
      })
        })
      this.AddBuildingForm = this.fb.group({
        name:['',Validators.required],
        address:['',Validators.required],
        rooms:this.fb.array([])
      })
    }
    AddRoom(){
      this.rooms.push(this.room);
    }
    RemoveRoom(index){
      this.rooms.removeAt(index);
    }
    onSubmit(form){
      this.UpdateBuilding.mutate({...form.value,id:this.id}).subscribe(ele=>{
        if(ele.errors&& ele.errors.length>0){
          ele.errors.forEach(error=>{
            this.toastr.error(error.message,'server error');
          });
          return;
        }
        if(ele.data.UpdateBuilding.Errors&&ele.data.UpdateBuilding.Errors.length>0){
          ele.data.UpdateBuilding.Errors.forEach(error=>{
            this.toastr.error(error.message,'server error');
          });
          return;
        }
        this.AddBuildingForm = this.fb.group({
          name:[ele.data.UpdateBuilding.Data.name,Validators.required],
          address:[ele.data.UpdateBuilding.Data.address,Validators.required],
          rooms:this.fb.array([])
        })
        this.toastr.success('Successfully added Building','Success');
      })
    }
  
  
}
