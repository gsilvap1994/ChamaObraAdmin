import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { ImageCardComponent } from './components/image-card/image-card.component';



@NgModule({
  declarations: [FeaturedCardComponent, ImageCardComponent],
  imports: [
    CommonModule
  ],
  exports: [FeaturedCardComponent, ImageCardComponent]
})
export class SharedModule { }
