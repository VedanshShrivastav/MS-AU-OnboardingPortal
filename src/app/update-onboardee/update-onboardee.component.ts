import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Onboardee } from '../Onboardee';
import { OnboardeeService } from '../onboardee.service';

@Component({
  selector: 'app-update-onboardee',
  templateUrl: './update-onboardee.component.html',
  styleUrls: ['./update-onboardee.component.css']
})
export class UpdateOnboardeeComponent implements OnInit {

  id?: Number;
  onboardee: Onboardee = new Onboardee();

  constructor(private route: ActivatedRoute, private router: Router, private service: OnboardeeService) { }

  ngOnInit(): void {
    
    this.onboardee = new Onboardee();
    this.id = this.route.snapshot.params['id'];

    this.service.getOnboardee(this.id)
      .subscribe(data => {
        console.log(data)
        this.onboardee = data;
      }, error => console.log(error));
      
  }

  updateOnboardee() {
    this.service.updateOnboardee(this.onboardee)
      .subscribe(data => {
        console.log(data);
        this.gotoList();
      }, error => console.log(error));
  }
  
  onSubmit() {
    this.updateOnboardee();
  
  }

  gotoList() {
    this.router.navigate(['Dashboard']);
  }

}
