import { Component, OnInit } from '@angular/core';
import { Message } from 'src/shared/models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin-panel';

  public message1: Message = {
    author: '',
    messageHour: '',
    messageHeader: '',
    messageText: '',
    isSystem: true,
    type: 'professional'
  };

  public message2: Message = {
    author: '',
    messageHour: '',
    messageHeader: '',
    messageText: '',
    isSystem: false,
    type: 'professional'
  };

  public message3: Message = {
    author: '',
    messageHour: '',
    messageHeader: '',
    messageText: '',
    isSystem: false,
    type: 'client'
  };

  ngOnInit() {
    this.message1.author = 'Maria';
    this.message1.messageHour = '11:40';
    this.message1.messageHeader = 'Nova solicitação de serviço';
    this.message1.messageText = 'Boa tarde, preciso que instale algumas tomadas. Todo o material já está no local do serviço. Obrigado.';

    this.message2.author = 'Maria';
    this.message2.messageHour = '11:40';
    this.message2.messageHeader = 'Nova solicitação de serviço';
    this.message2.messageText = 'Boa tarde, preciso que instale algumas tomadas. Todo o material já está no local do serviço. Obrigado.';


    this.message3.author = 'Maria';
    this.message3.messageHour = '11:40';
    this.message3.messageHeader = 'Nova solicitação de serviço';
    this.message3.messageText = 'Boa tarde, preciso que instale algumas tomadas. Todo o material já está no local do serviço. Obrigado.';

  }
}
