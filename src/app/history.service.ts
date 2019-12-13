import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  
  constructor(protected http: HttpClient) { }

  getUsers() {
    return this.http.get('https://localhost:8000/currencyHistory');
  }
}
