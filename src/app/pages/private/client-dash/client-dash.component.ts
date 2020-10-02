import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Client } from 'src/shared/models/client';

@Component({
  selector: 'app-client-dash',
  templateUrl: './client-dash.component.html',
  styleUrls: ['./client-dash.component.scss']
})
export class ClientDashComponent implements OnInit {

  public isRoot: boolean = this.router.url === '/area-de-contratantes';
  public clients: Client[] =  [
    {
      id: '1',
      image: '/assets/images/test.jpeg',
      name: 'Maria do carmo',
      createdAt: {
        date: new Date,
        label: 'Data de Registro'
      },
      url: '/area-de-contratantes/1'
    },
    {
      id: '2',
      image: '/assets/images/test.jpeg',
      name: 'Maria do carmo',
      createdAt: {
        date: new Date,
        label: 'Data de Registro'
      },
      url: '/area-de-contratantes/2'
    },
    {
      id: '3',
      image: '/assets/images/test.jpeg',
      name: 'Maria do carmo',
      createdAt: {
        date: new Date,
        label: 'Data de Registro'
      },
      url: '/area-de-contratantes/3'
    },
    {
      id: '4',
      image: '/assets/images/test.jpeg',
      name: 'Maria do carmo',
      createdAt: {
        date: new Date,
        label: 'Data de Registro'
      },
      url: '/area-de-contratantes/4'
    },
    {
      id: '5',
      image: '/assets/images/test.jpeg',
      name: 'Maria do carmo',
      createdAt: {
        date: new Date,
        label: 'Data de Registro'
      },
      url: '/area-de-contratantes/5'
    },
    {
      id: '6',
      image: '/assets/images/test.jpeg',
      name: 'Maria do carmo',
      createdAt: {
        date: new Date,
        label: 'Data de Registro'
      },
      url: '/area-de-contratantes/6'
    }
  ]
  public filters: { label: string, id: string }[] = [
    {
      id: 'name',
      label: 'Nome',
    },
    {
      id: 'created_at',
      label: 'Data de registro'
    }
  ]
  public currentFilter: string = '';
  constructor(private router: Router, private notify: ToastrService) { }

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: RouterEvent) => {
      if (routerEvent instanceof NavigationEnd) {
        this.isRoot = routerEvent.url === '/area-de-contratantes';
      }
    })
  }

  filterClicked(id: string) {
    if (!this.currentFilter) {
      this.currentFilter = id;
      this.notify.info(`Filtro escolhido: ${id}`);
      return;
    }

    if (this.currentFilter && this.currentFilter == id) {
      return;
    }

    this.notify.info(`Filtro escolhido: ${id}`);
    this.currentFilter = id;

  }

}
