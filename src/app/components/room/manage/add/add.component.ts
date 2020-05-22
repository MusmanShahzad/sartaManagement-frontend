import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  AddBuildingForm: FormGroup;
isLoading: boolean = false;
  constructor(private fb: FormBuilder) { }

get name(){
  return (this.AddBuildingForm.controls.name as FormControl);
}
get address(){
  return (this.AddBuildingForm.controls.address as FormControl);
}
get building(){
  return (this.AddBuildingForm.controls.building as FormControl);
}
ngOnInit() {
  this.AddBuildingForm = this.fb.group({
    name:[[''],Validators.required],
    address:[[''],Validators.required],
    building:[[''],Validators.required]
  })
} 
  onSubmit(form){
    console.log(form);
  }

}
