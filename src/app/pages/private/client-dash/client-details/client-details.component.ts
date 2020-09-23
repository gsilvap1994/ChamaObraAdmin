import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  public client: any = {
    name: 'Maria do Carmo',
    avatar: '/assets/images/test.jpeg',
    createdAt: {
      date: new Date(),
      label: 'Data de Registro'
    },
    cpf: '999.999.999-99',
    phone: '(11) 99999-9999',
    email: 'maria@gmail.com',
    services: [
      {
        id: '1',
        name: 'Manuel Almeida',
        image: '/assets/images/test.jpeg',
        categories: ['eletricista', 'pintor'],
        createdAt: {
          label: 'Data',
          date: new Date()
        },
        url: '/area-de-profissionais/1'
      },
      {
        id: '2',
        name: 'Manuel Almeida',
        image: '/assets/images/test.jpeg',
        categories: ['eletricista', 'pintor'],
        createdAt: {
          label: 'Data',
          date: new Date()
        },
        url: '/area-de-profissionais/2'
      },
      {
        id: '3',
        name: 'Manuel Almeida',
        image: '/assets/images/test.jpeg',
        categories: ['eletricista', 'pintor'],
        createdAt: {
          label: 'Data',
          date: new Date()
        },
        url: '/area-de-profissionais/3'
      },
      {
        id: '4',
        name: 'Manuel Almeida',
        image: '/assets/images/test.jpeg',
        categories: ['eletricista', 'pintor'],
        createdAt: {
          label: 'Data',
          date: new Date()
        },
        url: '/area-de-profissionais/4'
      },
      {
        id: '5',
        name: 'Manuel Almeida',
        image: '/assets/images/test.jpeg',
        categories: ['eletricista', 'pintor'],
        createdAt: {
          label: 'Data',
          date: new Date()
        },
        url: '/area-de-profissionais/5'
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
