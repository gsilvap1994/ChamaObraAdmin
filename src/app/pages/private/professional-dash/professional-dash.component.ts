import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-professional-dash',
  templateUrl: './professional-dash.component.html',
  styleUrls: ['./professional-dash.component.scss']
})
export class ProfessionalDashComponent implements OnInit {

  constructor(private router: Router, private notify: ToastrService) { }
  public isRoot: boolean = this.router.url === '/area-de-profissionais';
  public filters: { label: string, id: string }[] = [
    {
      id: 'name',
      label: 'Nome',
    },
    {
      id: 'category',
      label: 'Categoria',
    },
    {
      id: 'status',
      label: 'Status',
    },
    {
      id: 'created_at',
      label: 'Data de registro'
    }

  ]
  public currentFilter: string = '';

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: RouterEvent) => {
      if(routerEvent instanceof NavigationEnd) {
        this.isRoot = routerEvent.url === '/area-de-profissionais';
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
