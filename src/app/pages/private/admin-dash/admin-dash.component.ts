import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/shared/models/admin';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss']
})
export class AdminDashComponent implements OnInit {

  public admins: Admin[] = [
    {
      id: '1',
      image: '/assets/images/test.jpeg',
      name: 'Bruno Santos',
      createdAt: {
        label: 'Data',
        date: new Date()
      },
      actions: ['email', 'delete']
    },
    {
      id: '2',
      image: '/assets/images/test.jpeg',
      name: 'Bruno Santos',
      createdAt: {
        label: 'Data',
        date: new Date()
      },
      actions: ['email', 'delete']
    },
    {
      id: '3',
      image: '/assets/images/test.jpeg',
      name: 'Bruno Santos',
      createdAt: {
        label: 'Data',
        date: new Date()
      },
      actions: ['email', 'delete']
    },
    {
      id: '4',
      image: '/assets/images/test.jpeg',
      name: 'Bruno Santos',
      createdAt: {
        label: 'Data',
        date: new Date()
      },
      actions: ['email', 'delete']
    },
    {
      id: '5',
      image: '/assets/images/test.jpeg',
      name: 'Bruno Santos',
      createdAt: {
        label: 'Data',
        date: new Date()
      },
      actions: ['email', 'delete']
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
