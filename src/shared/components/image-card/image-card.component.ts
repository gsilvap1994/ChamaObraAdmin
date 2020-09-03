import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {


  @Input() serviceImage: string;
  @Input() serviceName: string;
  @Input() isService: boolean;
  @Output() eventEmitter: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  buttonClicked(id: string): void {
    console.log(id);
    this.eventEmitter.emit(id);
  }


}
