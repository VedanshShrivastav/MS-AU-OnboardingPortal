import { Component, OnInit } from '@angular/core';
import { OnboardeeService } from '../onboardee.service';
import {Onboardee} from '../Onboardee'
import {Router} from '@angular/router'
import { AccoliteDetails } from '../AccoliteDetails';
import { AccoliteDetailsService } from '../accolite-detail.service';
import { ManagerService } from '../manager.service';
import { Manager } from '../Manager';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  onboardee:Onboardee[]=[];
  accolitedetails: AccoliteDetails[] =[];
  nameSearch:string = '';
  mname:string[]=[];
  manager:Manager []=[];
  m:Manager=new Manager();

  constructor(private service:OnboardeeService,private accoliteservice:AccoliteDetailsService, 
              private managerservice:ManagerService ,private router:Router ) { }

  ngOnInit(): void {
    this.getOnboradee();
    this.getDetails();
    this.getmanager();
    
    
  }

  private getmanager()
  {
    this.managerservice.getManagerList().subscribe(data => {
      this.manager = data;
      console.log(data);
      this.getname();
    });
  }

  private getOnboradee() {
    this.service.getOnboardeeList().subscribe(data=>{
      this.onboardee=data
      console.log(data);
    }
    );
  }

  private getDetails() {
    this.accoliteservice.getAccoliteDetailsList().subscribe(data => {
      this.accolitedetails = data
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

  getname()
  {
    for (let i = 0; i < this.accolitedetails.length; i++) {
      if (this.accolitedetails[i].status == 'true'){
        console.log("here")
        this.managerservice.getManager(this.accolitedetails[i].manager)
          .subscribe(data => {
            this.m = data;
            this.mname[i]=this.m.name;
            console.log(data)
          }, error => console.log(error));
      }

        this.mname[i] = "not assigned";
     
    }
    console.log(this.mname);   
  }
}
