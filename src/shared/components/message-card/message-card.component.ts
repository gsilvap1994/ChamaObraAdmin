import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {

  @Input() public message: Message;
  @Input() public image: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.message);
  }

}
