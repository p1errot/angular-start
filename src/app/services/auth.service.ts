import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .map(response => {
        let result = response.json();

        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }

        return false;
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    // Method from angular2-jwt
    return tokenNotExpired();
    // let jwtHelper = new JwtHelper(),
    //   token = localStorage.getItem('token'),
    //   expirationDate,
    //   isExpired;
    
    // if (!token)
    //   return false;
    
    // expirationDate = jwtHelper.getTokenExpirationDate(token),
    // isExpired = jwtHelper.isTokenExpired(token);
    
    // return !isExpired;
  }
}

