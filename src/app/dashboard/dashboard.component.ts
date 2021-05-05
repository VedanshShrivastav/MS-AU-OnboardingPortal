import { Component, OnInit } from '@angular/core';
import { OnboardeeService } from '../onboardee.service';
import {Onboardee} from '../Onboardee'
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  onboardee:Onboardee[]=[];
  
  nameSearch:string = '';

  constructor(private service:OnboardeeService, private router:Router ) { }

  ngOnInit(): void {
    this.getOnboradee();
  }

  private getOnboradee() {
    this.service.getOnboardeeList().subscribe(data=>{
      this.onboardee=data
      console.log(data);
    }
    );
  }

  updateOnboardee(id:any){
    this.router.navigate(['update',id]);
  }

  createOnboardee() {
    this.router.navigate(['create']);
  }

  deleteOnboardee(id:any){
    this.service.deleteOnboardeebyId(id).subscribe(data=>{});
    this.ngOnInit();
  }

  viewOnboardee(id:any){
    this.router.navigate(['view',id]);
  }
}
