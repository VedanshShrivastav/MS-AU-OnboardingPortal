import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccoliteDetails } from './AccoliteDetails';

@Injectable({
  providedIn: 'root'
})
export class AccoliteDetailsService {


  str1:string='trends1';
  
  private baseurl = "http://localhost:8080/Onboarding"
  constructor(private http: HttpClient) { }


  getAccoliteDetailsList(): Observable<AccoliteDetails[]> {
    return this.http.get<AccoliteDetails[]>(`${this.baseurl}`);
  }

  getAccoliteDetails(id: any): Observable<any> {
    return this.http.get(`${this.baseurl}/${id}`);
  }

  getcountPerLocation():Observable<any>{
    return this.http.get(`${this.baseurl}/${this.str1}`);
  }

  updateAccoliteDetails(value: AccoliteDetails): Observable<any> {
    return this.http.put(`${this.baseurl}`, value);
  }

  createAccoliteDetails(onboardee: any): Observable<any> {
    return this.http.post(`${this.baseurl}`, onboardee);
  }

  deleteAccoliteDetailsbyId(id: any): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`);
  }
}
