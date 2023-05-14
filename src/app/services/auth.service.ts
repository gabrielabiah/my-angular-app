import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(
    private http: HttpClient,
    private token: TokenService
    ) { }



  signup(data:any){
    return this.http.post(`${this.baseUrl}/signup`, data)
  }
  login(data:any){
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());

  authStatus = this.loggedIn.asObservable();

  authStatus1 = this.loggedIn.asObservable().subscribe(value => this.isLoggedIn = value);


  changeAuthStatus(value: boolean){
    this.loggedIn.next(value)
  }

  sendPasswordResetLink(data:any){
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }

  resetPassword(data:any){
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }
}
