import { AddBookingGQL } from './../../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addBooking',
  templateUrl: './addBooking.component.html',
  styleUrls: ['./addBooking.component.css']
})
export class AddBookingComponent implements OnInit {
bookingForm: FormGroup;

  constructor(private addBooking:AddBookingGQL,private toastr: ToastrService,private fb:FormBuilder) { }

  ngOnInit() {
    this.bookingForm=this.fb.group({
      booking:['',Validators.required],
      date:['',Validators.required],
      type:['',Validators.required]
    });
  }
  submit(){
    console.log(this.bookingForm.value);
    this.addBooking.mutate({...this.bookingForm.value}).subscribe(res =>{
      if(res.data.AddBooking.Errors&&res.data.AddBooking.Errors.length>0){
        res.data.AddBooking.Errors.forEach(error=>{
          this.toastr.error(error.message,error.error);
        })
      }
    })
  }

}
