import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Chart} from '../models/chart';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  getChartDetails(name: string): Observable<Chart> {
    return this.http.get<Chart>(`http://localhost:8000/api/charts/${name}`);
  }
}
