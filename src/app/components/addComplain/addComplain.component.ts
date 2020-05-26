import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addComplain',
  templateUrl: './addComplain.component.html',
  styleUrls: ['./addComplain.component.css']
})
export class AddComplainComponent implements OnInit {
complainForm:FormGroup;
  constructor(private fb:FormBuilder) { }
get complain(){
  return this.complainForm.get('complain');
}
  ngOnInit() {
    this.complainForm = this.fb.group({
      complain:['',Validators.required]
    })
  }

}
