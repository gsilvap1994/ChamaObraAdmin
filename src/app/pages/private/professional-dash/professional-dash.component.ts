import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-professional-dash',
  templateUrl: './professional-dash.component.html',
  styleUrls: ['./professional-dash.component.scss']
})
export class ProfessionalDashComponent implements OnInit {

  constructor(private router: Router) { }
  public isRoot: boolean = this.router.url === '/area-de-profissionais';

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: RouterEvent) => {
      if(routerEvent instanceof NavigationEnd) {
        this.isRoot = routerEvent.url === '/area-de-profissionais';
      }
    })
  }

}
