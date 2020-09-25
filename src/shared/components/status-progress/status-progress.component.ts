import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-progress',
  templateUrl: './status-progress.component.html',
  styleUrls: ['./status-progress.component.scss']
})
export class StatusProgressComponent implements OnInit {

  @Input() public dates: any[] = [];
  constructor() { }

  ngOnInit(): void {
    if(!this.dates.length) {
      this.dates.push((new Date));
      this.dates.push((new Date));
      this.dates.push((new Date));
      this.dates.push((new Date));
    }

    console.log(this.dates)
  }

}
