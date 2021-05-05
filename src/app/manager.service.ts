import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from './Manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private baseurl = "http://localhost:8080/Manager"

  constructor(private http: HttpClient) { }

  getManagerList(): Observable<Manager[]> {
    return this.http.get<Manager[]>(`${this.baseurl}`);
  }

  getManager(id: any): Observable<any> {
    return this.http.get(`${this.baseurl}/${id}`);
  }
}
