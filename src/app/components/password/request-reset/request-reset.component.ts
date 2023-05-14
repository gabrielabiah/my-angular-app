import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.scss']
})
export class RequestResetComponent {
  public form = {
    email: null
  }

  constructor(private authservice: AuthService){}

  onSubmit(){
    this.authservice.sendPasswordResetLink(this.form).subscribe(
      {
        next: data => this.handleResponse(data),
        error: error => console.log(error.error.error)
      }
    )
  }

  handleResponse(res:any){
    console.log(res)
    this.form.email = null;
  }
}
