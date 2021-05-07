import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Vacancies } from './vacancies';

@Injectable({
  providedIn: 'root'
})
export class  VacanciesService {

  private baseurl = "http://localhost:8080/Vacancies"

  constructor(private http: HttpClient) { }

  getVacanciesList(): Observable< Vacancies[]> {
    return this.http.get< Vacancies[]>(`${this.baseurl}`);
  }

  getVacancies(id: any): Observable<any> {
    return this.http.get(`${this.baseurl}/${id}`);
  }
}
