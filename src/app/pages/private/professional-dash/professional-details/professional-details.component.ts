import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.scss']
})
export class ProfessionalDetailsComponent implements OnInit {

  constructor() { }
  public professional: any = {
    avatar: '/assets/images/test.jpeg',
    name: 'Manuel Almeida',
    categories: ['eletricista', 'pintor', 'marceneiro', 'pedreiro'],
    cpf: '999.999.999-99',
    address: 'R. Cardoso, 67 - Planalto Paulista - São Paulo - SP',
    phone: '(11) 99999-9999',
    email: 'manuel@gmail.com',
    operate_at: 'São Paulo',
    account: {
      holder: 'Manuel Almeida',
      cpf: '999.999.999-99',
      bank: 'Nome do banco',
      agency: '0000',
      account_number: '00000000-0',
      account_type: 'Conta corrente'
    },
    wallet: {
      receivable: 400.00,
      balance: 1750.00
    },
    clients: [
      {
        id: '1',
        image: '/assets/images/test.jpeg',
        name: 'Maria do carmo',
        createdAt: {
          date: new Date(),
          label: 'Data de registro'
        },
        url: '/area-de-contratantes/1'
      },
      {
        id: '2',
        image: '/assets/images/test.jpeg',
        name: 'Maria do carmo',
        createdAt: {
          date: new Date(),
          label: 'Data de registro'
        },
        url: '/area-de-contratantes/2'
      },
      {
        id: '3',
        image: '/assets/images/test.jpeg',
        name: 'Maria do carmo',
        createdAt: {
          date: new Date(),
          label: 'Data de registro'
        },
        url: '/area-de-contratantes/3'
      },
      {
        id: '4',
        image: '/assets/images/test.jpeg',
        name: 'Maria do carmo',
        createdAt: {
          date: new Date(),
          label: 'Data de registro'
        },
        url: '/area-de-contratantes/4'
      },
      {
        id: '5',
        image: '/assets/images/test.jpeg',
        name: 'Maria do carmo',
        createdAt: {
          date: new Date(),
          label: 'Data de registro'
        },
        url: '/area-de-contratantes/5'
      },
      {
        id: '6',
        image: '/assets/images/test.jpeg',
        name: 'Maria do carmo',
        createdAt: {
          date: new Date(),
          label: 'Data de registro'
        },
        url: '/area-de-contratantes/6'
      }
    ]
  }

  ngOnInit(): void {
  }

}
