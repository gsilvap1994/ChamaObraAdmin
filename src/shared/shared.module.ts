import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { NotesComponent } from './components/notes/notes.component';



@NgModule({
  declarations: [FeaturedCardComponent, ImageCardComponent, NotesComponent],
  imports: [
    CommonModule
  ],
  exports: [FeaturedCardComponent, ImageCardComponent, NotesComponent]
})
export class SharedModule { }
