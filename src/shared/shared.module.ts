import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageCardComponent } from './components/message-card/message-card.component';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { NotesComponent } from './components/notes/notes.component';
import { StatusProgressComponent } from './components/status-progress/status-progress.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MessageCardComponent,
    FeaturedCardComponent,
    ImageCardComponent,
    NotesComponent,
    StatusProgressComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MessageCardComponent,
    FeaturedCardComponent,
    ImageCardComponent,
    NotesComponent,
    StatusProgressComponent,
  ]
})
export class SharedModule { }
