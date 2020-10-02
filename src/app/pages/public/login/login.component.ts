import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../../../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService,
    private notify: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.initLoginForm();
  }

  initLoginForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }


  doLogin(): void {
    console.log(this.loginForm)
    if(this.loginForm.invalid) {
      this.notify.error('Preencha corretamente o usuário e a senha!')
      return;
    }

    this.authService.login(this.loginForm.value).subscribe((response: any) => {
      if(!response.token) {
        this.notify.error('Email e/ou senha inválidos.', 'Tente novamente');
        return;
      }

      this.notify.success('Login efetuado com sucesso!');
      this.router.navigate(['/area-de-profissionais']);
    })

  }
}
