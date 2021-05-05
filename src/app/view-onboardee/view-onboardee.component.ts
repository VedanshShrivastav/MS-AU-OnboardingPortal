import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccoliteDetailsService } from '../accolite-detail.service';
import { AccoliteDetails } from '../AccoliteDetails';
import { Manager } from '../Manager';
import { ManagerService } from '../manager.service';
import { Onboardee } from '../Onboardee';
import { OnboardeeService } from '../onboardee.service';

@Component({
  selector: 'app-view-onboardee',
  templateUrl: './view-onboardee.component.html',
  styleUrls: ['./view-onboardee.component.css']
})
export class ViewOnboardeeComponent implements OnInit {


  id?: Number;
  mid?: Number;
  bcg?: string;
  graduation?: string;
  status?: string;
  assignedmanager?: string;
  manager: Manager = new Manager();
  onboardee: Onboardee = new Onboardee();
  accolitedetail: AccoliteDetails = new AccoliteDetails();

  constructor(private route: ActivatedRoute, private router: Router,
    private service: OnboardeeService, private accoliteservice: AccoliteDetailsService,
    private managerservice: ManagerService) { }

  ngOnInit(): void {

    this.onboardee = new Onboardee();
    this.accolitedetail = new AccoliteDetails();
    this.manager = new Manager();
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
        this.assign();
      }, error => console.log(error));
      
  }
  
  assign() {
    if (this.accolitedetail.manager == null)
      this.assignedmanager = "Not assigned";

    else {

      this.managerservice.getManager(this.accolitedetail.manager)
        .subscribe(data => {
          console.log(data)
          this.manager = data;
          this.assignedmanager = this.manager.name;
        }, error => console.log(error));

    }

    if (this.accolitedetail.bcg == 'false') {
      this.bcg = "Pending"
    }
    else {
      this.bcg = "Done"
    }

    if (this.accolitedetail.graduation == 'false') {
      this.graduation = " Not completed"
    }
    else {
      this.graduation = "Completed"
    }

    if (this.accolitedetail.status == 'false') {
      this.status = "Pending"
    }

    else {
      this.status = "Onboarded"
    }

  }

  updateOnboardee(id: any) {
    this.router.navigate(['update', id]);
  }

}

