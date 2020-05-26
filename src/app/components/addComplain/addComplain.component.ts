import { CreateComplainGQL } from './../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addComplain',
  templateUrl: './addComplain.component.html',
  styleUrls: ['./addComplain.component.css']
})
export class AddComplainComponent implements OnInit {
complainForm:FormGroup;
  constructor(private fb:FormBuilder,private CreateComplain:CreateComplainGQL,private toastr: ToastrService) { }
get complain(){
  return this.complainForm.get('complain');
}
  ngOnInit() {
    this.complainForm = this.fb.group({
      complain:['',Validators.required]
    });
  }
  addComplain(){
    this.CreateComplain.mutate({...this.complainForm.value}).subscribe(ele=>{
      if(ele.data.CreateComplain.Errors){
      ele.data.CreateComplain.Errors.forEach(error=>{
        this.toastr.error(error.message,error.error);
      })
    }
    else{
      this.toastr.success('complain sended Successfully','success');
    }
    })
  }

}
