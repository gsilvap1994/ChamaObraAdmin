import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navLinks: any[] = [
    { id: 'professional', icon: 'user', isActive: true, name: 'Profissionais', url: '/'},
    { id: 'client', icon: 'users', isActive: false, name: 'Contratantes', url: '/'},
    { id: 'validate-professinal', icon: 'user-check', isActive: false, name: 'Validar Profissionais', url: '/'},
    { id: 'services', icon: 'clipboard', isActive: false, name: 'Serviços', url: '/'},
    { id: 'admin', icon: 'sliders', isActive: false, name: 'Administradores', url: '/'},
    { id: 'vars', icon: 'edit', isActive: false, name: 'Variáveis', url: '/'},
    { id: 'policy', icon: 'lock', isActive: false, name: 'Política', url: '/'},
  ]
  public dateNow: Date = new Date();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
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

  activate(id: string): void {
    this.navLinks = this.navLinks.map((link: any) => {
      console.log(link)
      if(id === link.id) {
        console.log(link.id)
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
