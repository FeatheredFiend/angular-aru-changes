import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../../../_services';

@Component({ templateUrl: 'assets-asset.component.html' })
export class AssetsAssetComponent {


    constructor(
      private account: AuthenticationService, 
      private router: Router
    ) {
  
  
    }

  }