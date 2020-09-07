import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent implements OnInit {

  public form: FormGroup;
  @Output() editorValue: EventEmitter<String> = new EventEmitter<String>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      editor: ['']
    })

    this.form.controls.editor.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe((value: string) => {
      console.log(value);
      this.editorValue.emit(value);
    })
  }

}
