import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/auth/login.service';
import { ToastrService } from 'ngx-toastr';

type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoading = false;
  public newUser = false;
  public loginForm: FormGroup;
  public formErrors: FormErrors = {
    email: '',
    password: '',
  };
  public errorMessage: any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService) {
    this.loginForm = fb.group({
      email: ['owner@gmail.com', [Validators.required, Validators.email]],
      password: ['12345678', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/dashboard']);
    }
  }

  // Simple Login
  login() {
    this.isLoading = true;
    // this.loginService.LoginDataObservable.subscribe(message => {

    //   if (message == null) {
    //     this.isLoading = false;
    //   }
    // }
    // );
    this.loginService.UpdateLogin(this.loginForm.value.email, this.loginForm.value.password).subscribe(ele => {
      this.isLoading = false;
      if (ele.data.LoginUser.Errors && ele.data.LoginUser.Errors.length > 0) {
        ele.data.LoginUser.Errors.forEach(ele => {
          this.toastr.error(ele.error);
        });
        // this.LoginData.next(null);
        return;
      }
      if (ele.errors && ele.errors.length > 0) {
        ele.errors.forEach(error => {
          this.toastr.error(error.message, 'server error');
        })
        // this.LoginData.next(null);
        return;
      }
      if (!ele.data.LoginUser.Data.user.status) {
        this.toastr.error('You have been blocked', 'Blocked');
        // this.LoginData.next(null);
        return;
      }
      // localStorage.setItem('token', ele.data.LoginUser.Data.token);
      // localStorage.setItem('type', ele.data.LoginUser.Data.user.userType.toString());
      this.toastr.success('Login Success', 'Success');
      if (ele.data.LoginUser.Data.user.userType !== 2) {
        this.toastr.warning('This user has not been implemented yet', 'In progress');
      }
      // setTimeout(() => {
      //   // this.router.navigate(['/dashboard']);
      // }, 1000);
      return;
    })
    // this.isLoading = true;
  }
  regiterNevigate() {
    this.router.navigate(['/auth/register']);
  }

}
