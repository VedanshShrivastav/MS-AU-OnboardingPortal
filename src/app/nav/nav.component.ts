import { Component, OnInit } from '@angular/core';

import { AuthorizationserviceService } from '../Authorization/authorizationservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authservice:AuthorizationserviceService) { }

  ngOnInit(): void {
  }

  signOut(): void {
    this.authservice.logout();
  }
}
