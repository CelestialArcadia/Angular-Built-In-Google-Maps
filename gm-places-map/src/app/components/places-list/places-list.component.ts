import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss'],
})
export class PlacesListComponent implements OnInit {
  @Input() places: Place[] = [];

  @Output() edit = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onEdit(idx: number) {
    this.edit.emit(idx);
  }

  onRemove(idx: number) {
    this.remove.emit(idx);
  }
}
