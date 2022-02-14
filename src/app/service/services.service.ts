import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pipe } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


interface Dashboard {
  thisMonth: {
    avgSatisfactionRate: number,
    totalLowRatings: number,
    totalRatings: number
  },
  thisWeek: {
    avgSatisfactionRate: number,
    totalLowRatings: number,
    totalRatings: number
  },
  today: {
    avgSatisfactionRate: number,
    totalLowRatings: number,
    totalRatings: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getFeedback = () => {
    return this.http.get(`https://mocki.io/v1/b13ede61-6615-4c73-835d-10806656a46b`);
  }

  getDashboard = (): Observable<Dashboard> => {
    return this.http.get<Dashboard>(`https://mocki.io/v1/0ac236ec-19ac-4048-88a3-510d3d02165a`)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Not Found"); 
  }
}
