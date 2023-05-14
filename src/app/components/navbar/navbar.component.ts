import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 public loggedIn: boolean = false;


 constructor(
  private authservice: AuthService,
  private router: Router,
  private token: TokenService
 ) {}

 ngOnInit() {
  this.authservice.authStatus.subscribe(value => this.loggedIn = value);
 }

 logout(event: MouseEvent){
  event.preventDefault();
  this.token.remove();
  this.authservice.changeAuthStatus(false);
  this.router.navigateByUrl('/login');
 }
}
