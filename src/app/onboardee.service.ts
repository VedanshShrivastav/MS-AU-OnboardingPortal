import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Onboardee } from './Onboardee';

@Injectable({
  providedIn: 'root'
})
export class OnboardeeService {

  private baseurl="http://localhost:8080/PersonalInfo"
  constructor( private http:HttpClient) { }


  getOnboardeeList():Observable <Onboardee[]> {
    return this.http.get<Onboardee[]>(`${this.baseurl}`);
  }

  getOnboardee(id: any): Observable<any> {
    return this.http.get(`${this.baseurl}/${id}`);
  }

  updateOnboardee(value: Onboardee):Observable <any> {
    return this.http.put(`${this.baseurl}`, value);
  }

  createOnboardee(onboardee: Object): Observable<Object> {
    return this.http.post(`${this.baseurl}`, onboardee);
  }

  deleteOnboardeebyId(id:any): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`);
  }

}
