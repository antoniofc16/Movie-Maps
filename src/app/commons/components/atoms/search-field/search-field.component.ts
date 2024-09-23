import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../../../app-material.module';

@Component({
  selector: 'mm-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  standalone: true,
  imports: [AppMaterialModule, CommonModule]
})
export class SearchFieldComponent implements OnInit {
  @Input() label: string = '';
  @Output() valueChange = new EventEmitter();
  @Input() value: string = '';

  constructor() { }

  ngOnInit() {
  }

  onValueChange(event: any) {
    this.valueChange.emit(event.target.value);
  }

}
