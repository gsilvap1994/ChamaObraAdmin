import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  API_URL: string = `${environment.API_URL}/auth`;

  public isAuthenticated(): boolean {
    // logica de recuperação se o usuário está autenticado ou não;
    const user = window.localStorage.getItem('user');
    return !!JSON.parse(user);
  }


  public login(credentials: { username: string, password: string }): Observable<any> {
    // logica de requisição para login

    if(credentials.username === 'chama@obra.com' && credentials.password === '123') {
      const response: { token: string, type: string } = {
        token: '681AFE34439CF1A3939F032F7BAB1DDE',
        type: 'admin'
      };
      window.localStorage.setItem('user',  JSON.stringify(response));
      return of(response);
    }

    // this.http.post(`${this.API_URL}/admins`, credentials).subscribe((data: any) => {
    //   console.log(data);
    // });

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
