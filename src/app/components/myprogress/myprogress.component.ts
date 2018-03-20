import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-myprogress',
  templateUrl: './myprogress.component.html',
  styleUrls: ['./myprogress.component.scss']
})
export class MyprogressComponent implements OnInit {

  myprogress = {
    title: 'My progress',
    summary: 'Track your progress through your qualification. You may work through these learning areas in any order.',
    item1: {
      title: 'Accounts preparation',
      task: '10/10 tasks',
      status: 'Completed'
    },
    item2: {
      title: 'Accounting Systems and Controls',
      task: '10/10 tasks',
      status: 'Completed'
    },
    item3: {
      title: 'Management Accounting',
      task: '10/10 tasks',
      status: 'Completed',
      module: {
        title1: 'Module 1 - Credit Management',
        title2: 'Module 2 - Cash and Treasury Management',
        title3: 'Module 3 - External auditing'
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
