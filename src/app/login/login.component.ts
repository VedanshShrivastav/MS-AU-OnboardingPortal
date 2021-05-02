import { Component, OnInit } from '@angular/core';
import { SocialAuthService ,GoogleLoginProvider, SocialUser } from "angularx-social-login";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser = new SocialUser;
  GoogleLoginProvider = GoogleLoginProvider;

  constructor(private authService: SocialAuthService, private router: Router) { }


  signInWithGoogle(): any {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.goToDashboard();
  }

  private goToDashboard() {
    this.router.navigate(['/Dashboard']);
  } 

  signOut(): any {
    this.authService.signOut();
  }

ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });
  }
}
