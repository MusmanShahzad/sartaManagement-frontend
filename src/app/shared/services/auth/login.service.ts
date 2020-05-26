import { User } from './../../graphql/service';
import { Injectable } from '@angular/core';
import { LoginUserGQL } from '../../graphql/service';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private LoginData= new BehaviorSubject(localStorage.getItem('token'));
  LoginDataObservable = this.LoginData.asObservable();

constructor(private LoginUser:LoginUserGQL,private toastr: ToastrService,private router: Router) { }
UpdateLogin(email,password) {
  this.LoginUser.mutate({ email,password}).subscribe(ele=>{
    if(ele.data.LoginUser.Errors&&ele.data.LoginUser.Errors.length>0){
      ele.data.LoginUser.Errors.forEach(ele=>{
        this.toastr.error(ele.error);
      });
      this.LoginData.next(null);
      return;
    }
    if(ele.errors&&ele.errors.length>0){
      ele.errors.forEach(error=>{
        this.toastr.error(error.message,'server error');
      })
      this.LoginData.next(null);
      return;
    }
    if(!ele.data.LoginUser.Data.user.status){
      this.toastr.error('You have been blocked','Blocked');
      this.LoginData.next(null);
      return;
    }
    localStorage.setItem('token', ele.data.LoginUser.Data.token);
    localStorage.setItem('type', ele.data.LoginUser.Data.user.userType.toString());
    this.LoginData.next(ele.data.LoginUser.Data.token);
    this.toastr.success('Login Success','Success');
          setTimeout(()=>{
            this.router.navigate(['/dashboard']);
          },1000);
    return;
  });
}
logout(){
  localStorage.clear();
  this.LoginData.next(null);
}

}
