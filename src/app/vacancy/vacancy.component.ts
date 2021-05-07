import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacancies } from '../vacancies';
import { VacanciesService } from '../vacancies.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  id?: number;
  nameSearch: String = '';
  vacancy: Vacancies[] = [];
  p: number = 1;

  constructor(private vacancyservices:VacanciesService, private router:Router ) { }

  ngOnInit(): void {
    this.getVacanciesList();
  }
  
  getVacanciesList(){
    this.vacancyservices.getVacanciesList().subscribe(data=>{this.vacancy=data})
  }
}
