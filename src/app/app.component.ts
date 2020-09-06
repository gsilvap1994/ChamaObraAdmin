import { Component, OnInit } from '@angular/core';
import { Message } from 'src/shared/models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin-panel';

  public message: Message = {
    author: '',
    messageHour: '',
    messageHeader: '',
    messageText: '',
    isSystem: true,
    type: 'professional'
  };

  ngOnInit() {
    this.message.author = 'Maria';
    this.message.messageHour = '11:40';
    this.message.messageHeader = 'Nova solicitação de serviço';
    this.message.messageText = 'Boa tarde, preciso que instale algumas tomadas. Todo o material já está no local do serviço. Obrigado.';
  }
}
