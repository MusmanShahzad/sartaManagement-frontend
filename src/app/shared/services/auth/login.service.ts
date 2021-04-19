import { User } from './../../graphql/service';
import { Injectable } from '@angular/core';
import { LoginUserGQL } from '../../graphql/service';
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private LoginData = new BehaviorSubject(localStorage.getItem('token'));
  LoginDataObservable = this.LoginData.asObservable();

  constructor(private LoginUser: LoginUserGQL, private toastr: ToastrService, private router: Router) { }
  UpdateLogin(email, password) {
    return this.LoginUser.mutate({ email, password }).pipe(
      map(ele => {
        if (ele.data.LoginUser.Errors && ele.data.LoginUser.Errors.length > 0) {
          this.LoginData.next(null);
          return ele;
        }
        if (ele.errors && ele.errors.length > 0) {
          this.LoginData.next(null);
          return ele;
        }
        if (!ele.data.LoginUser.Data.user.status) {
          this.LoginData.next(null);
          return ele;
        }
        // localStorage.setItem('token', ele.data.LoginUser.Data.token);
        // localStorage.setItem('type', ele.data.LoginUser.Data.user.userType.toString());
        this.LoginData.next(ele.data.LoginUser.Data.token);
        setTimeout(() => {
          // this.router.navigate(['/dashboard']);
        }, 1000);
        return ele;
      })
    );
  }
  logout() {
    localStorage.clear();
    this.LoginData.next(null);
  }

}
function tap(arg0: (ele: any) => void): import("rxjs").OperatorFunction<import("apollo-link").FetchResult<import("./../../graphql/service").LoginUserMutation, Record<string, any>, Record<string, any>>, unknown> {
  throw new Error('Function not implemented.');
}

