import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  createform!: FormGroup;

  constructor(private router: Router, private service: OnboardeeService, private mservice :ManagerService) {}

  ngOnInit(): void {
    this.createform=new FormGroup({
      'inputfname' : new FormControl('',Validators.required),
      'inputlname': new FormControl(null, Validators.required),
      'inputDOB': new FormControl(null, Validators.required),
      'inputContact': new FormControl(null, [Validators.required, Validators.pattern(/(7|8|9)\d{9}$/)]),
      'inputEmail': new FormControl(null, [Validators.required, Validators.email])

    })

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
