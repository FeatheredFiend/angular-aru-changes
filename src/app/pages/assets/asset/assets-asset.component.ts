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

@Component({ templateUrl: 'assets-asset.component.html' })
export class AssetsAssetComponent {






    constructor(
      private account: AuthenticationService, 
      private router: Router
    ) {
  
  
    }

  }