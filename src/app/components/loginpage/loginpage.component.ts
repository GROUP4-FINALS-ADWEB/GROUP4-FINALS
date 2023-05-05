import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  
  storedUsername: string = "admin";
  storedPassword: string = "admin";
  
  constructor(private router: Router) {}
  
  login() {
    const { username, password } = this.loginForm.value;
    if (username === this.storedUsername && password === this.storedPassword) {
      alert("Login successful!");
      this.router.navigate(['/list']);
    } else {
      alert("Invalid username or password.");
    }
  }
}
