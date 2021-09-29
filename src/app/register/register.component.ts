import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  showPassword = true;
  showConfirmPassword = true;
  reactiveForm: FormGroup;
  submitted: Boolean = false;
  registerForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private router: Router
  ) {
    this.reactiveForm = this.formBuilder.group({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmpassword: new FormControl('', [Validators.required]),

    }, {
      Validators: this.MustMatch('password', 'confirmpassword')
    })
  }
  get f() { return this.reactiveForm.controls }

  get firstname() {
    return this.reactiveForm.get('firstname');
  }

  get lastname() {
    return this.reactiveForm.get('lastname');
  }

  get username() {
    return this.reactiveForm.get('username');
  }

  get password() {
    return this.reactiveForm.get('password');
  }
  get confirmPassword() {
    return this.reactiveForm.get('confirmPassword');
  }
  get gender() {
    return this.reactiveForm.get('gender');
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.MustMatch) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
      }
      else {
        matchingControl.setErrors(null)
      }
    }
  }
  ngOnInit(): void {

  }

  onSubmit() {
    this.submitted = true;
    if (this.reactiveForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.reactiveForm.value, null, 4));
    let body = {
      "firstname": this.reactiveForm.controls.firstName.value,
      "lastname": this.reactiveForm.controls.lastname.value,
      "username": this.reactiveForm.controls.username.value,
      "password": this.reactiveForm.controls.password.value,
      "confirmPassword": this.reactiveForm.controls.confirmPassword.value,
      "gender": ""
    };
    this.userservice.registerUser(body).subscribe();

  }
  
}