import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  fields = [
    { name: 'name', placeholder: 'Name', type: 'text', icon: 'assets/images/NAME ICON.png' },
    { name: 'lastname', placeholder: 'Lastname', type: 'text', icon: 'assets/images/LASTNAME ICON.png' },
    { name: 'email', placeholder: 'Email', type: 'email', icon: 'assets/images/MAIL ICON.png' },
    { name: 'password', placeholder: 'Password', type: 'password', icon: 'assets/images/PASSWORD ICON.png' },
    { name: 'confirmPassword', placeholder: 'Confirm Password', type: 'password', icon: 'assets/images/CONFIRM PASSWORD ICON.png' },
  ];


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
