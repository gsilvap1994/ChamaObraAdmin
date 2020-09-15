import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

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
      return;
    }

    this.authService.login(this.loginForm.value).subscribe((response: any) => {
      if(!response.token) {
        console.log('deu ruim');
        return;
      }
      console.log('deu bom');
      this.router.navigate(['/area-de-profissionais']);
    })

  }
}
