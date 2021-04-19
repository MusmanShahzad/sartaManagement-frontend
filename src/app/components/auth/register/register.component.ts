import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterUserGQL } from 'src/app/shared/graphql/service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //   {
  //     admin:0,
  //     tenant:1,
  //     owner:2,
  //     agent:3
  // }
  userTypes = [{ value: 0, text: 'admin' }, { value: 1, text: 'tenant' }, { value: 2, text: 'owner' }, { value: 3, text: 'agent' }];
  registerForm: FormGroup;
  isLoading: boolean = false;
  constructor(private fb: FormBuilder, private RegisterUser: RegisterUserGQL, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      userType: ['', Validators.required]
    })
  }
  register(val) {
    //console.log(typeof val.userType);
    val.userType = parseInt(val.userType);
    this.RegisterUser.mutate(val).subscribe(ele => {
      if (ele.data.RegisterUser.Errors && ele.data.RegisterUser.Errors.length > 0) {
        ele.data.RegisterUser.Errors.forEach(error => {
          this.toastr.error(error.message, error.error);
        });
        return;
      }
      this.toastr.success('Registered Successfully', 'Success');
      // localStorage.setItem('token', ele.data.RegisterUser.Data.token);
      // localStorage.setItem('type', ele.data.RegisterUser.Data.user.userType.toString());
      setTimeout(() => {
        // this.router.navigate(['/dashboard']);
      }, 1000);
    })
  }
}
