import { Component,NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User, Job, Building } from '../_models';
import { UserService, AuthenticationService } from '../../../_services';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { JobDashboardComponent } from '../job-table/job-table.component';

declare const getCountBuilding: any;



const Building_Data: Building[] = [
{ id: 1, name: 'ARU', number: 3 },
{ id: 2, name: 'CUH', number: 6 },
{ id: 3, name: 'IOC', number: 7 },
{ id: 4, name: 'IWH', number: 3 },
];
@NgModule({
  imports: [
    JobDashboardComponent
  ]
})


@Component({ selector: 'dashboard-building-table', templateUrl: 'building-table.component.html' })
export class BuildingDashboardComponent  {



    user: User = null;
  // Data for Top Row Building Table
  displayedColumnsBuildings: string[] = ['id', 'name', 'number'];
  dataSourceBuildings = new MatTableDataSource(Building_Data);



  // Filtering for Top Row Building Table
  applyFilterBuildings(filterValue: string) {
    this.dataSourceBuildings.filter = filterValue.trim().toLowerCase();
  }

  // Sorting
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  ngOnInit() {
    this.dataSourceBuildings.sort = this.sort;
  }
  constructor(
    private account: AuthenticationService,
    private router: Router
  ) {

    this.user = this.user;
  }
}

