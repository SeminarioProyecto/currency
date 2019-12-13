import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SessionService } from '../sessions.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [SessionService]
})
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup;
  userData: any;

  constructor(
    private logged: SessionService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router) {
    this.reactiveForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit() {}

  login() {
    this.logged.login(this.reactiveForm.value).subscribe(
      user => {

        this.userData = user['mensaje'];
        this.toastr.success(this.userData);
        if (this.userData == 'Haz ingresado con tu cuenta') {
          this.router.navigateByUrl('/');
        } else {
          this.router.navigateByUrl('/auth/login');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
