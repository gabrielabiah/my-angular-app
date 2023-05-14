import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.scss']
})
export class ResponseResetComponent {
  public error =[];

  public form = {
    email : null,
    password: null,
    password_confirmation: null,
    resetToken: null
  }

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
    )
    {
      route.queryParams.subscribe(params =>{
        this.form.resetToken = params['token']
      })
    }

    onSubmit() {
      return this.authService.resetPassword(this.form).subscribe({
        next: data => this.handleResponse(data),
        error: error => this.handleError(error)
      });
    }

    handleResponse(data:any) {
      this.router.navigateByUrl('/login');
    }

    handleError(error:any){
      //console.log(error.error.message);
      this.error = error.error.message;
    }
}
