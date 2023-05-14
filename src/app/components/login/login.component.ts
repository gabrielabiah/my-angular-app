import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public error = null;

  constructor (
    private authservice: AuthService,
    private token: TokenService,
    private router: Router
    ) {}

  public form = {
    email: null,
    password: null
  }

  onSubmit() {
    return this.authservice.login(this.form).subscribe({
      next: data => this.handleResponse(data),
      error: error => this.handleError(error)
    });
  }

  handleResponse(data:any){
    this.token.handle(data.access_token);
    this.authservice.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');

  }

  handleError(error:any){
    this.error = error.error.error;
  }
}
