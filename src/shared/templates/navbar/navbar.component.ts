import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navLinks: any[] = [
    { id: 'professional', icon: 'user', isActive: false, name: 'Profissionais', url: '/area-de-profissionais'},
    { id: 'client', icon: 'users', isActive: false, name: 'Contratantes', url: '/area-de-contratantes'},
    { id: 'validate-professinal', icon: 'user-check', isActive: false, name: 'Validar Profissionais', url: '/validacao-profissionais'},
    { id: 'services', icon: 'clipboard', isActive: false, name: 'Serviços', url: '/servicos'},
    { id: 'admin', icon: 'sliders', isActive: false, name: 'Administradores', url: '/administradores'},
    { id: 'vars', icon: 'edit', isActive: false, name: 'Variáveis', url: '/variaveis'},
    { id: 'policy', icon: 'lock', isActive: false, name: 'Política', url: '/politica'},
  ]
  public dateNow: Date = new Date();
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.activate();
    this.updateDateNow();
    console.log('hello hello')
  }

  updateDateNow(): void {
    let now: Date = new Date();
    let updateIn: number = now.getSeconds()*1000;

    setTimeout(() => {
      this.dateNow = new Date();
      this.updateDateNow();
    }, 60000 - updateIn)
  }

  activate(): void {
    this.navLinks = this.navLinks.map((link: any) => {
      if(this.router.url.indexOf(link.url) !== -1) {
        link.isActive = true;
        return link;
      }
      link.isActive = false;
      return link;
    })

    console.log(this.navLinks)
  }

  logout(): void {
    this.authService.logout();
  }

}
