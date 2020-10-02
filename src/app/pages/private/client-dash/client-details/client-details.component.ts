import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  public client: any = {
    name: 'Maria do Carmo',
    avatar: '/assets/images/test.jpeg',
    createdAt: {
      date: new Date(),
      label: 'Data de Registro'
    },
    cpf: '999.999.999-99',
    phone: '(11) 99999-9999',
    email: 'maria@gmail.com',
    services: [
      {
        id: '1',
        name: 'Manuel Almeida',
        image: '/assets/images/test.jpeg',
        categories: ['eletricista', 'pintor'],
        createdAt: {
          label: 'Data',
          date: new Date()
        },
        url: '/area-de-profissionais/1'
      },
      {
        id: '2',
        name: 'Manuel Almeida',
        image: '/assets/images/test.jpeg',
        categories: ['eletricista', 'pintor'],
        createdAt: {
          label: 'Data',
          date: new Date()
        },
        url: '/area-de-profissionais/2'
      },
      {
        id: '3',
        name: 'Manuel Almeida',
        image: '/assets/images/test.jpeg',
        categories: ['eletricista', 'pintor'],
        createdAt: {
          label: 'Data',
          date: new Date()
        },
        url: '/area-de-profissionais/3'
      },
      {
        id: '4',
        name: 'Manuel Almeida',
        image: '/assets/images/test.jpeg',
        categories: ['eletricista', 'pintor'],
        createdAt: {
          label: 'Data',
          date: new Date()
        },
        url: '/area-de-profissionais/4'
      },
      {
        id: '5',
        name: 'Manuel Almeida',
        image: '/assets/images/test.jpeg',
        categories: ['eletricista', 'pintor'],
        createdAt: {
          label: 'Data',
          date: new Date()
        },
        url: '/area-de-profissionais/5'
      }
    ]
  }
  public filters: { label: string, id: string }[] = [
    {
      id: 'name',
      label: 'Nome',
    },
    {
      id: 'category',
      label: 'Categoria'
    },
    {
      id: 'created_at',
      label: 'Data'
    }
  ]

  public currentFilter: string = '';
  constructor(private notify: ToastrService) { }

  ngOnInit(): void {
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
