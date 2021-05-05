import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccoliteDetailsService } from '../accolite-detail.service';
import { AccoliteDetails } from '../AccoliteDetails';
import { Manager } from '../Manager';
import { ManagerService } from '../manager.service';
import { Onboardee } from '../Onboardee';
import { OnboardeeService } from '../onboardee.service';

@Component({
  selector: 'app-update-onboardee',
  templateUrl: './update-onboardee.component.html',
  styleUrls: ['./update-onboardee.component.css']
})
export class UpdateOnboardeeComponent implements OnInit {


  bcg?: string;
  graduation?: string;
  status?: string;

  id?: Number;
  mid?:Number;
  
  onboardee: Onboardee = new Onboardee();
  accolitedetail: AccoliteDetails = new AccoliteDetails();
  manager: Manager[]= [];
  
  m: Manager=new Manager();
  assignedmanager?:string;

  constructor(private route: ActivatedRoute, private router: Router, 
              private service: OnboardeeService, private accoliteservice: AccoliteDetailsService,
              private managerservice: ManagerService) { }

  ngOnInit(): void {

    this.onboardee = new Onboardee();
    this.accolitedetail = new AccoliteDetails();
    this.id = this.route.snapshot.params['id'];

    this.service.getOnboardee(this.id)
      .subscribe(data => {
        console.log(data)
        this.onboardee = data;
      }, error => console.log(error));

    this.accoliteservice.getAccoliteDetails(this.id)
      .subscribe(data => {
        console.log(data)
        this.accolitedetail = data;
      }, error => console.log(error));

    this.managerservice.getManagerList()
      .subscribe(data => {
        console.log(data)
        this.manager = data;
      }, error => console.log(error));
    
    this.mid = this.accolitedetail.manager;

    if(this.mid==null)
    this.assignedmanager="Not assigned";
    
    else{

      this.managerservice.getManager(this.mid)
        .subscribe(data => {
          console.log(data)
          this.m = data;
          this.assignedmanager = this.m.name;
        }, error => console.log(error));

    }

    if(this.accolitedetail.location==null)
    {
      this.accolitedetail.location="Not assigned"
    }

    this.bcg = this.accolitedetail.bcg;
    this.graduation = this.accolitedetail.graduation;
    this.status = this.accolitedetail.status;
  }

  updateOnboardee() {

    this.service.updateOnboardee(this.onboardee)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));

    this.accoliteservice.updateAccoliteDetails(this.accolitedetail)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));

      this.gotoList();
  }
  
  onSubmit() {
    
    if(this.bcg == null) 
    this.accolitedetail.bcg='true';
    else
    this.accolitedetail.bcg=this.bcg;

    if (this.accolitedetail.graduation == null)
      this.graduation = 'true';
    else
    this.accolitedetail.graduation = this.graduation;

    if (this.status == null)
      this.accolitedetail.status = 'true';
    else
    this.accolitedetail.status = this.status;

    this.updateOnboardee();
  
  }

  gotoList() {
    this.router.navigate(['Dashboard']);
  }

}
