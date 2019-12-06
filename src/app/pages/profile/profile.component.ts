import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../../_services';

@Component({ templateUrl: 'profile.component.html' })
export class ProfileComponent {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

    constructor(
      private account: AuthenticationService, 
      private router: Router
    ) {
  
  
    }


    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.warn(this.profileForm.value);
    }
  }