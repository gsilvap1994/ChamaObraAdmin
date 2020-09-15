import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }


  public isAuthenticated(): boolean {
    // logica de recuperação se o usuário está autenticado ou não;
    const user = window.localStorage.getItem('user');
    return !!JSON.parse(user);
  }


  public login(credentials: { username: string, password: string }): Observable<any> {
    // logica de requisição para login

    if(credentials.username === 'gsilvap1994@gmail.com' && credentials.password === '123456') {
      // localStorage
      const response: { token: string, type: string } = {
        token: '681AFE34439CF1A3939F032F7BAB1DDE',
        type: 'admin'
      };
      window.localStorage.setItem('user',  JSON.stringify(response));
      return of(response);
    }
    return of({
      status: '404',
      message: 'Wrong credentials'
    })
  }

  public logout(): void {
    window.localStorage.clear();
    this.router.navigate(['/entrar/login']);
  }

}
