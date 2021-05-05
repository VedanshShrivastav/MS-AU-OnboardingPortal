import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from '../Manager';
import { ManagerService } from '../manager.service';
import { Onboardee } from '../Onboardee';
import { OnboardeeService } from '../onboardee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  onboardee: Onboardee = new Onboardee();
  submitted = false;
  manager: Manager[]=[];

  constructor(private router: Router, private service: OnboardeeService, private mservice :ManagerService) {}

  ngOnInit(): void {
    this.getManager();
  }

  private getManager(){
    this.mservice.getManagerList().subscribe(data => {
      this.manager = data
      console.log(data);
    }
    );
  }

  save() {
    this.service
      .createOnboardee(this.onboardee).subscribe(data => {
        console.log(data);
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['Dashboard']);
  }

} 
