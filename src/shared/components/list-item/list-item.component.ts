import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// import { ListItem } from '../../models/list-item';
import { Admin } from '../../models/admin';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() public item: Admin = {
    image: '/assets/images/test.jpeg',
    name: 'Teste',
    // categories: ['eletricista', 'pintor', 'encanador'],
    // status: 'Ativo',
    id: '2222',
    // serviceId: '#123'
    createdAt: {
      date: new Date(),
      label: 'Data'
    },
    actions: ['email', 'delete']
  };
  @Input() public smallImage: boolean = false;
  @Input() public routeLinks: boolean = true;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.smallImage)
    console.log(this.item)
  }

  onActionClick(action: string): void {
    console.log(action);
    this.buttonClicked.emit(action);
  }

}
