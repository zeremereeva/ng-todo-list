import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status } from '../../model/model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() title = '';
  @Input() status: Status = 'pending';
  @Input() inner = '';
  @Input() checked = false;

  @Output() change = new EventEmitter<boolean>();

  constructor() {}

  getStatusName(status: string) {
    let statusName = '';

    if (status === 'pending') {
      statusName = 'Pending';
    } else if (status === 'progress') {
      statusName = 'In Progress';
    } else if (status === 'completed') {
      statusName = 'Completed';
    } else if (status === 'cancelled') {
      statusName = 'Cancelled';
    }

    return statusName;
  }

  getInnerName(inner: string) {
    let innerName = '';

    if (inner === 'minor') {
      innerName = 'Minor';
    } else if (inner === 'normal') {
      innerName = 'Normal';
    } else if (inner === 'critical') {
      innerName = 'Critical';
    }

    return innerName;
  }

  ngOnInit(): void {}

  changeStatus(status: any) {
    console.log(status.target.checked);
    this.change.emit(status.target.checked);
  }
}
