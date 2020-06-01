import { GetAllBookingsOfUserGQL, Booking, BookingStatusRejectGQL, BookingStatusAcceptGQL } from './../../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewBooking',
  templateUrl: './viewBooking.component.html',
  styleUrls: ['./viewBooking.component.css']
})
export class ViewBookingComponent implements OnInit {
  type;
  constructor(private GetAllBookingsOfUser:GetAllBookingsOfUserGQL,private BookingStatusReject:BookingStatusRejectGQL,
    private BookingStatusAccept:BookingStatusAcceptGQL,private toastr: ToastrService) { 
    this.type = localStorage.getItem('type');
  }
  bookings:Booking[]
  ngOnInit() {
    this.GetAllBookingsOfUser.watch({},{fetchPolicy:'network-only'}).valueChanges.subscribe((data)=>{
      this.bookings = data.data.GetAllBookingsOfUser;
    })
  }
  acceptBooking(id){
    this.BookingStatusAccept.mutate({bookingId: id}).subscribe(ele=>{
      if(ele.data.BookingStatusAccept.Errors&&ele.data.BookingStatusAccept.Errors.length>0){
        ele.data.BookingStatusAccept.Errors.forEach(error => {
          this.toastr.error(error.message,error.error);
        })
        return
      }
      else{
        this.toastr.success('Booking Accepted Success','Success');
        this.GetAllBookingsOfUser.watch({},{fetchPolicy:'network-only'}).valueChanges.subscribe((data)=>{
          this.bookings = data.data.GetAllBookingsOfUser;
        })
      }
    })
  } 
  rejectBooking(id){
    this.BookingStatusReject.mutate({bookingId: id}).subscribe(ele=>{
      if(ele.data.BookingStatusReject.Errors&&ele.data.BookingStatusReject.Errors.length>0){
        ele.data.BookingStatusReject.Errors.forEach(error => {
          this.toastr.error(error.message,error.error);
        })
        return
      }
      else{
        this.toastr.success('Booking Reject Success','Success');
        this.GetAllBookingsOfUser.watch({},{fetchPolicy:'network-only'}).valueChanges.subscribe((data)=>{
          this.bookings = data.data.GetAllBookingsOfUser;
        })
      }
    })
  }  

}
