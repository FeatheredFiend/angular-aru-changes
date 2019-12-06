import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class DataService {
    constructor() { }

  applyFilter(filterValue: string) {
    filterValue.trim().toLowerCase();
  }
}