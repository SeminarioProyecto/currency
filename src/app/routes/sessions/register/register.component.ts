import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SessionService } from '../sessions.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers:[SessionService],
})
export class RegisterComponent implements OnInit {
  reactiveForm: FormGroup;
  userData: any[];

  constructor(
    private registration: SessionService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router) {
    this.reactiveForm = this.fb.group({
      email: [''],
      username: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  ngOnInit() {
   
  }

  // confirmValidator = (control: FormControl): { [s: string]: boolean } => {
  //   if (!control.value) {
  //     return { error: true, required: true };
  //   } else if (control.value !== this.reactiveForm.controls.password.value) {
  //     return { error: true, confirm: true };
  //   }
  //   return {};
  // };
  register() {
    this.registration.postUser(this.reactiveForm.value).subscribe(
      user => {
        this.userData = ['mensaje'];
        this.toastr.success(JSON.stringify(this.userData['mensaje']));
        this.router.navigateByUrl('/auth/login');

      },
      (error) => {
        console.error(error);
      }
    );
  }
}
