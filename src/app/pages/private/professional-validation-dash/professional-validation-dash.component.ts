import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

import { ProfessionalValidation } from '../../../../shared/models/professional-validation';

@Component({
  selector: 'app-professional-validation-dash',
  templateUrl: './professional-validation-dash.component.html',
  styleUrls: ['./professional-validation-dash.component.scss']
})
export class ProfessionalValidationDashComponent implements OnInit {


  public professinals: ProfessionalValidation[] = [
    {
      id: '1',
      name: 'Maria do Carmo',
      image: '/assets/images/test.jpeg',
      categories: ['eletricista', 'pintor'],
      createdAt: {
        label: 'Data',
        date: new Date()
      },
      status: 'Pendente',
      url: '/validacao-profissionais/1'
    },
    {
      id: '2',
      name: 'Maria do Carmo',
      image: '/assets/images/test.jpeg',
      categories: ['eletricista', 'pintor'],
      createdAt: {
        label: 'Data',
        date: new Date()
      },
      status: 'Pendente',
      url: '/validacao-profissionais/2'
    },
    {
      id: '3',
      name: 'Maria do Carmo',
      image: '/assets/images/test.jpeg',
      categories: ['eletricista', 'pintor'],
      createdAt: {
        label: 'Data',
        date: new Date()
      },
      status: 'Registrado',
      url: '/validacao-profissionais/3'
    },
    {
      id: '4',
      name: 'Maria do Carmo',
      image: '/assets/images/test.jpeg',
      categories: ['eletricista', 'pintor'],
      createdAt: {
        label: 'Data',
        date: new Date()
      },
      status: 'Registrado',
      url: '/validacao-profissionais/4'
    },
    {
      id: '5',
      name: 'Maria do Carmo',
      image: '/assets/images/test.jpeg',
      categories: ['eletricista', 'pintor'],
      createdAt: {
        label: 'Data',
        date: new Date()
      },
      status: 'Registrado',
      url: '/validacao-profissionais/5'
    },
  ]
  public isRoot: boolean = this.router.url === '/validacao-profissionais'
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: RouterEvent) => {
      if (routerEvent instanceof NavigationEnd) {
        this.isRoot = routerEvent.url === '/validacao-profissionais';
      }
    })
  }

}
