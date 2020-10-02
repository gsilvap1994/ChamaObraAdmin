import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { QuillModule } from 'ngx-quill';

import { MessageCardComponent } from './components/message-card/message-card.component';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { NotesComponent } from './components/notes/notes.component';
import { StatusProgressComponent } from './components/status-progress/status-progress.component';
import { RichTextEditorComponent } from './components/rich-text-editor/rich-text-editor.component';
import { ListItemComponent } from './components/list-item/list-item.component';

import { NavbarComponent } from './templates/navbar/navbar.component';
import { ListViewComponent } from './templates/list-view/list-view.component';

import { CategoryPipe } from './pipes/category.pipe';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
  declarations: [
    MessageCardComponent,
    FeaturedCardComponent,
    ImageCardComponent,
    NotesComponent,
    StatusProgressComponent,
    RichTextEditorComponent,
    NavbarComponent,
    ListItemComponent,
    CategoryPipe,
    ListViewComponent,
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot( {
      modules: {
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'script': 'sub' }, { 'script': 'super' }],
          [{ 'align': [] }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          ['blockquote', { 'list': 'ordered' }, { 'list': 'bullet' },],
          ['link', 'image', 'video'],
          ['code-block'],
          ['clean']

        ],
      }
    })
  ],
  exports: [
    MessageCardComponent,
    FeaturedCardComponent,
    ImageCardComponent,
    NotesComponent,
    StatusProgressComponent,
    RichTextEditorComponent,
    ListItemComponent,
    NavbarComponent,
    ListViewComponent,
    CategoryPipe,
    FiltersComponent
  ]
})
export class SharedModule { }
