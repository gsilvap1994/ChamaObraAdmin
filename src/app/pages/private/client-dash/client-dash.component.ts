import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: RouterEvent) => {
      if (routerEvent instanceof NavigationEnd) {
        this.isRoot = routerEvent.url === '/area-de-contratantes';
      }
    })
  }

}
