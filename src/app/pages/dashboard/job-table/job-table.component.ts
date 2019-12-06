import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User, Job, Building } from '../../_models';
import { UserService, AuthenticationService } from '../../../_services';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { getCountJob } from '../../_helpers';

declare const getCountJob: any;




const Job_Data: Job[] = [
  { id: 1, asset: 'ARU-Hot-Tap-01', building: 'ARU', task: 'Flush for Two Minutes', duedate: '01/12/2019', finisheddate: '01/12/2019', status: 'Passed', staff: 'John Smith', comment: 'Tap Flow Rate was very Slow' },
  { id: 2, asset: 'ARU-Cold-Tap-01', building: 'ARU', task: 'Flush for Two Minutes', duedate: '01/12/2019', finisheddate: '01/12/2019', status: 'Passed', staff: 'John Smith', comment: 'Tap Flow Rate was very Slow' },
  { id: 3, asset: 'ARU-Cold-Tap-02', building: 'ARU', task: 'Flush for Two Minutes', duedate: '01/12/2019', finisheddate: '01/12/2019', status: 'Failed', staff: 'John Smith', comment: 'Tap Flow Rate was very Hot' },
  { id: 4, asset: 'CUH-Cold-Tap-02', building: 'CUH', task: 'Flush for Two Minutes', duedate: '03/12/2019', finisheddate: '03/12/2019', status: 'Passed', staff: 'John Smith', comment: 'Tap Flow Rate was very Hot' },
  { id: 5, asset: 'CUH-Hot-Shower-01', building: 'CUH', task: 'Flush for Two Minutes', duedate: '01/12/2019', finisheddate: '01/12/2019', status: 'Passed', staff: 'John Smith', comment: 'Tap Flow Rate was very Fast' },
  { id: 6, asset: 'CUH-Cold-Shower-01', building: 'CUH', task: 'Flush for Two Minutes', duedate: '01/12/2019', finisheddate: '01/12/2019', status: 'Passed', staff: 'John Smith', comment: '' },
  { id: 7, asset: 'CUH-Hot-Shower-02', building: 'CUH', task: 'Flush for Two Minutes', duedate: '04/12/2019', finisheddate: '', status: 'Work in Progress', staff: 'John Smith', comment: 'Tap was Broken' },
  { id: 8, asset: 'CUH-Cold-Shower-02', building: 'CUH', task: 'Flush for Two Minutes', duedate: '01/12/2019', finisheddate: '01/12/2019', status: 'Pending', staff: 'John Smith', comment: 'Tap Flow Rate was very Slow' },
  { id: 9, asset: 'CUH-Hot-Cal-01', building: 'CUH', task: 'Inspect Hatches', duedate: '01/12/2019', finisheddate: '01/12/2019', status: 'Pending', staff: 'John Smith', comment: 'Hatch was Broken' },
  { id: 10, asset: 'UOC-Hot-Cal-02', building: 'UOC', task: 'Inspect Hatches', duedate: '01/12/2019', finisheddate: '01/12/2019', status: 'Pending', staff: 'John Smith', comment: 'Hatch was Missing' },
  { id: 11, asset: 'UOC-Hot-Tap-01', building: 'UOC', task: 'Flush for Two Minutes', duedate: '01/12/2019', finisheddate: '', status: 'Cancelled', staff: 'John Smith', comment: 'Tap Flow Rate was very Slow' },
  { id: 12, asset: 'UOC-Cold-Tap-01', building: 'UOC', task: 'Flush for Two Minutes', duedate: '01/12/2019', finisheddate: '11/12/2019', status: 'N/A', staff: 'John Smith', comment: 'Tap Flow Rate was very Slow' },
  { id: 13, asset: 'UOC-Cold-Tap-02', building: 'UOC', task: 'Flush for Two Minutes', duedate: '01/12/2019', finisheddate: '01/12/2019', status: 'Passed', staff: 'John Smith', comment: 'Tap Flow Rate was very Hot' },
  { id: 14, asset: 'UOC-Hot-Shower-01', building: 'UOC', task: 'Flush for Two Minutes', duedate: '01/12/2019', finisheddate: '01/12/2019', status: 'N/A', staff: 'John Smith', comment: 'Tap Flow Rate was very Fast' },
  { id: 15, asset: 'UOC-Cold-Shower-01', building: 'UOC', task: 'Flush for Two Minutes', duedate: '11/12/2019', finisheddate: '01/12/2019', status: 'Failed', staff: 'John Smith', comment: '' },
  { id: 16, asset: 'UOC-Hot-Shower-02', building: 'UOC', task: 'Flush for Two Minutes', duedate: '01/12/2019', finisheddate: '01/12/2019', status: 'Failed', staff: 'John Smith', comment: 'Tap was Broken' },
  { id: 17, asset: 'IWH-Cold-Shower-02', building: 'IWH', task: 'Flush for Two Minutes', duedate: '01/12/2019', finisheddate: '01/12/2019', status: 'Failed', staff: 'John Smith', comment: 'Tap Flow Rate was very Slow' },
  { id: 18, asset: 'IWH-Hot-Cal-01', building: 'IWH', task: 'Inspect Hatches', duedate: '01/12/2019', finisheddate: '01/12/2019', status: 'Pending', staff: 'John Smith', comment: 'Hatch was Broken' },
  { id: 19, asset: 'IWH-Hot-Cal-02', building: 'IWH', task: 'Inspect Hatches', duedate: '01/12/2019', finisheddate: '', status: 'Cancelled', staff: 'John Smith', comment: 'Hatch was Missing' },
];



@Component({ selector: 'dashboard-job-table', templateUrl: 'job-table.component.html' })
export class JobDashboardComponent {
  user: User = null;

  // Data for Bottom Row Building Table
  displayedColumnsJobs: string[] = ['id', 'asset', 'building', 'task', 'duedate', 'finisheddate', 'status', 'staff', 'comment'];
  dataSourceJobs = new MatTableDataSource(Job_Data);


  // Sorting
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  static dataSourceJobs: any;

  ngOnInit() {
    this.dataSourceJobs.sort = this.sort;
   }
   
  //Filtering for Top Row Building Table
  applyFilterJobs(filterValue: string) {
    this.dataSourceJobs.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceJobs.paginator) {
      this.dataSourceJobs.paginator.firstPage();
    }
  }

  constructor(
    private account: AuthenticationService,
    private router: Router
  ) {

    this.user = this.user;
  }
}

