import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Service } from '../../../../shared/models/service';

@Component({
  selector: 'app-service-dash',
  templateUrl: './service-dash.component.html',
  styleUrls: ['./service-dash.component.scss']
})
export class ServiceDashComponent implements OnInit {

  public isRoot: boolean = this.router.url === '/servicos';
  public services: Service[] = [
    {
      id: '1',
      image: '/assets/images/test.jpeg',
      name: 'Manuel Almeida',
      categories: ['eletricista', 'pintor'],
      serviceId: '#2222',
      createdAt: {
        label: 'Data',
        date: new Date()
      },
      url: '/servicos/1'
    },
    {
      id: '2',
      image: '/assets/images/test.jpeg',
      name: 'Manuel Almeida',
      categories: ['eletricista', 'pintor'],
      serviceId: '#2222',
      createdAt: {
        label: 'Data',
        date: new Date()
      },
      url: '/servicos/2'
    },
    {
      id: '3',
      image: '/assets/images/test.jpeg',
      name: 'Manuel Almeida',
      categories: ['eletricista', 'pintor'],
      serviceId: '#2222',
      createdAt: {
        label: 'Data',
        date: new Date()
      },
      url: '/servicos/3'
    },
    {
      id: '4',
      image: '/assets/images/test.jpeg',
      name: 'Manuel Almeida',
      categories: ['eletricista', 'pintor'],
      serviceId: '#2222',
      createdAt: {
        label: 'Data',
        date: new Date()
      },
      url: '/servicos/4'
    },
    {
      id: '5',
      image: '/assets/images/test.jpeg',
      name: 'Manuel Almeida',
      categories: ['eletricista', 'pintor'],
      serviceId: '#2222',
      createdAt: {
        label: 'Data',
        date: new Date()
      },
      url: '/servicos/5'
    },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: RouterEvent) => {
      if (routerEvent instanceof NavigationEnd) {
        this.isRoot = routerEvent.url === '/servicos';
      }
    })
  }

}
