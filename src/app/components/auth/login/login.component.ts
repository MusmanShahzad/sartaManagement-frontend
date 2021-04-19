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
    this.loginService.LoginDataObservable.subscribe(message => {
      this.isLoading = false;
      if (message == null) {
        this.isLoading = false;
      }
    }
    );
    this.loginService.UpdateLogin(this.loginForm.value.email, this.loginForm.value.password)
    // this.isLoading = true;
  }
  regiterNevigate() {
    this.router.navigate(['/auth/register']);
  }

}
