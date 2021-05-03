import { AddBuildingGQL } from './../../../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  AddBuildingForm: FormGroup;
  isLoading: boolean = false;
  constructor(private fb: FormBuilder, private AddBuilding: AddBuildingGQL, private toastr: ToastrService) { }
  get rooms() {
    return (this.AddBuildingForm.controls.rooms as FormArray);
  }
  get name() {
    return (this.AddBuildingForm.controls.name as FormControl);
  }
  get address() {
    return (this.AddBuildingForm.controls.address as FormControl);
  }
  get room() {
    return (this.fb.group({
      name: [[''], Validators.required],
      address: [[''], Validators.required]
    }));
  }
  ngOnInit() {
    this.AddBuildingForm = this.fb.group({
      name: [[''], Validators.required],
      address: [[''], Validators.required],
      rooms: this.fb.array([])
    })
  }
  AddRoom() {
    this.rooms.push(this.room);
  }
  RemoveRoom(index) {
    this.rooms.removeAt(index);
  }
  onSubmit(form) {
    this.isLoading = true;
    this.AddBuilding.mutate({ ...form.value }).pipe(finalize(() => {
      this.isLoading = false;
    })).subscribe(ele => {
      if (ele.errors && ele.errors.length > 0) {
        ele.errors.forEach(error => {
          this.toastr.error(error.message, 'server error');
        });
        return;
      }
      if (ele.data.AddBuilding.Errors && ele.data.AddBuilding.Errors.length > 0) {
        ele.data.AddBuilding.Errors.forEach(error => {
          this.toastr.error(error.message, 'server error');
        });
        return;
      }
      this.toastr.success('Successfully added Building', 'Success');
    })
  }

}
