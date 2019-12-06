import { FormGroup, FormControl } from '@angular/forms';

import { Component,NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User, Asset } from '../_models';
import { UserService, AuthenticationService } from '../../../_services';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { JobDashboardComponent } from '../job-table/job-table.component';



const Asset_Data: Asset[] = [
{ id: 1, barcode: 'ARU', type: "Tap" },
{ id: 2, barcode: 'CUH', type: "Shower" },
{ id: 3, barcode: 'IOC', type: "Calorifier" },
{ id: 4, barcode: 'IWH', type: "Sink" },
];

@Component({ templateUrl: 'assets-asset.component.html' })
export class AssetsAssetComponent {




    user: User = null;
  // Data for Top Row Asset Table
  displayedColumnsAssets: string[] = ['id', 'barcode', 'type'];
  dataSourceAssets = new MatTableDataSource(Asset_Data);


  // Filtering for Top Row Asset Table
  applyFilterAssets(filterValue: string) {
    this.dataSourceAssets.filter = filterValue.trim().toLowerCase();
  }

  // Sorting
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  ngOnInit() {
    this.dataSourceAssets.sort = this.sort;
  }



    constructor(
      private account: AuthenticationService, 
      private router: Router
    ) {
  
  
    }

  }