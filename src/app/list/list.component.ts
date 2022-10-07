import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../model/model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() tasks: ITask[] = [];
  @Output() change = new EventEmitter<ITask>();

  constructor() {}

  ngOnInit(): void {}

  changeStatus(task: ITask) {
    this.change.emit(task);
  }
}


