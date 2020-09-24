import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
