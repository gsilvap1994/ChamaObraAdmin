import { Component, OnInit, Input } from '@angular/core';

import { ListItem } from 'src/shared/models/list-item';
import { Professional } from 'src/shared/models/professional';
import { Client } from 'src/shared/models/client';
import { ProfessionalValidation } from 'src/shared/models/professional-validation';
import { Service } from 'src/shared/models/service';
import { Admin } from 'src/shared/models/admin';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  @Input() public listView: ListItem[] = [];
  @Input() public isClientOrProfessional: boolean;
  @Input() public smallImage: boolean = false;

  private _item: Professional = {
    image: '/assets/images/test.jpeg',
    name: 'Teste',
    categories: ['eletricista', 'pintor', 'encanador'],
    status: 'Ativo',
    id: '0',
    createdAt: {
      date: new Date(),
      label: 'Data de Registro'
    },
    url: '/area-de-profissionais/'
    // actions: ['email', 'delete']
  };

  public firstItem: ListItem;
  constructor() { }

  ngOnInit(): void {
    if(!this.listView.length) {
      for (let index = 0; index < 6; index++) {
        let item = { ...this._item};
        console.log(`${parseInt(item.id) + 1}`)
        item.id = `${index + 1}`;
        item.url = item.url + item.id,
        console.log(item)
        this.listView.push(item)
      }
    }

    this.firstItem = this.listView[0];
    console.log(this.listView)


  }

}
