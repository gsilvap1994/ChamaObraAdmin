import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-validation-details',
  templateUrl: './professional-validation-details.component.html',
  styleUrls: ['./professional-validation-details.component.scss']
})
export class ProfessionalValidationDetailsComponent implements OnInit {

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
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
