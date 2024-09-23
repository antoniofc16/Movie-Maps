import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../../../app-material.module';

@Component({
  selector: 'mm-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss'],
  standalone: true,
  imports: [AppMaterialModule, CommonModule]
})
export class DropdownListComponent implements OnInit {
  @Input() items: IDropdownListItem[] = [];
  @Input() multiple: boolean = false;
  @Input() label: string = '';
  @Input() value: [] | string = '' || [];
  @Output() valueChange = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onChange(event: any) {
    this.valueChange.emit(event);
  }

}

export interface IDropdownListItem {
  value: string;
  label: string;
}
