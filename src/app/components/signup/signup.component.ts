import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {


  constructor (
    private authservice: AuthService,
    private token: TokenService,
    private router: Router
    ) {}

  public error = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }

  onSubmit() {
    return this.authservice.signup(this.form).subscribe({
      next: data => this.handleResponse(data),
      error: error => this.handleError(error)
    });
  }

  handleResponse(data:any) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }

  handleError(error:any){
    console.log(error.error.message);
    this.error = error.error.errors;
    console.log(this.error)
  }
}
