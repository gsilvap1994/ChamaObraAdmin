import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-template',
  templateUrl: './public-template.component.html',
  styleUrls: ['./public-template.component.scss']
})
export class PublicTemplateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.router.url === '/entrar') {
      this.router.navigateByUrl('/entrar/login');
    }
  }

}
