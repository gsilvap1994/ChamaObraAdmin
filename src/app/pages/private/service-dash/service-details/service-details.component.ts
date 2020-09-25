import { Component, OnInit } from '@angular/core';
import { Message } from '../../../../../shared/models/message';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {

  constructor() { }
  public service: any = {
    client: {
      name: 'Maria do Carmo',
      avatar: '/assets/images/test.jpeg'
    },
    professional: {
      name: 'Manuel Almeida',
      avatar: '/assets/images/test.jpeg'
    },
    type: 'Instalação de tomadas',
    budget: 180.00,
    date: new Date(),
    address: 'Rua Cardoso, 73, Planalto Paulista - São Paulo - SP',
    instructions: 'Boa tarde, preciso que instale algumas tomadas, todo o material já está no local do serviço. Obrigada.',
    progress: [
      new Date(),
    ],
    photos: ['/assets/images/test.jpeg', '/assets/images/test.jpeg']
  };

  public messages: Message[] | any[]= [
    {
      isSystem: false,
      author: 'Maria',
      type: 'client',
      messageHeader: 'Nova solicitação de serviço',
      messageHour: '14:40',
      messageText: 'Boa tarde, preciso que instale algumas tomadas. Todo o material já está no local do serviço. Obrigado',
    },
    '/assets/images/test.jpeg',
    {
      isSystem: true,
      messageText: 'O valor foi alterado para R$ 180,00'
    },
    {
      isSystem: true,
      messageText: 'O profissional aceitou o serviço'
    },
    {
      isSystem: false,
      type: 'professional',
      author: 'Manuel',
      messageHour: '14:41',
      messageText: 'Boa tarde, Maria! Já aceitei sua solicitação'
    },
    {
      isSystem: false,
      author: 'Maria',
      type: 'client',
      messageHour: '14:42',
      messageText: 'Obrigado Manuel! Estarei te esperando na obra terça.',
    },
  ]
  public chat: boolean = false;

  ngOnInit(): void {
  }

}
