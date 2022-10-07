import { Component, OnInit } from '@angular/core';
import { ITask } from '../model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tasks: ITask[] = [
    {
      title: 'Evaluate the addition and deletion of user IDs.',
      status: 'pending',
      inner: 'minor',
      checked: false,
    },
    {
      title: 'Identify the implementation team.',
      status: 'progress',
      inner: 'normal',
      checked: false,
    },
    {
      title: 'Batch schedule download/process.',
      status: 'pending',
      inner: 'critical',
      checked: false,
    },
    {
      title: 'Monitor system performance and adjust hardware.',
      status: 'pending',
      inner: 'minor',
      checked: false,
    },
    {
      title: 'Install console machines and prerequisite software.',
      status: 'pending',
      inner: 'critical',
      checked: false,
    },
    {
      title: 'Design a relatively simple business system',
      status: 'pending',
      inner: 'critical',
      checked: false,
    },
    {
      title: 'Define users and workflow',
      status: 'cancelled',
      inner: 'minor',
      checked: false,
    },
  ];

  completedTasks: ITask[] = [];
  constructor() {}

  ngOnInit(): void {}

  changeStatus(taskTarget: ITask) {
    const index = this.tasks.findIndex(
      (task) => task.title === taskTarget.title
    );

    if (index !== -1) {
      const completedTask = this.tasks[index];
      completedTask.checked = true;
      completedTask.status = 'completed';

      // клик жасалган элементты новый completedTasks массивына коширу
      this.completedTasks.push(completedTask);

      // tasks деген массивтан клик жасалган элементты оширу
      this.tasks.splice(index, 1);
    }
    console.log('index', index);
  }
}
