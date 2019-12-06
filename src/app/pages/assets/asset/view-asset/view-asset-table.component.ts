import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

import { User } from '../_models';
import {  UserService, AuthenticationService } from '../../../../_services';


@Component({ selector: 'view-asset-table', templateUrl: 'view-asset-table.component.html' })
export class ViewAssetTableComponent {


    constructor(
      private account: AuthenticationService, 
      private router: Router
    ) {
  
  
    }

  }