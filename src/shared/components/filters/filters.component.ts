import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() filters: [{
    label: 'string'
  }]

  @Output() emitClickEvent: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  filterClick(id: string) {
    this.emitClickEvent.emit(id);
  }

}
