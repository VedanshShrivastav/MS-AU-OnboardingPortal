import { Component, OnInit } from '@angular/core';
import { SocialAuthService ,GoogleLoginProvider, SocialUser } from "angularx-social-login";
import {Router} from '@angular/router';
import { AuthorizationserviceService } from '../Authorization/authorizationservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser = new SocialUser;
  GoogleLoginProvider = GoogleLoginProvider;

  constructor(private authservice: SocialAuthService, private router: Router,
              private authorizationService:AuthorizationserviceService) { }

  loginWithGoogle(): void {
    this.authservice.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      this.authorizationService.checkLogin();
    }, (err) => {
      console.log(err);
      alert("Please login through correct account and check password");
    }
    );
  }


  signInWithGoogle(): any {
    this.authservice.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.goToDashboard();
  }

  private goToDashboard() {
    this.router.navigate(['/Dashboard']);
  } 

  signOut(): any {
    this.authservice.signOut();
  }

ngOnInit() {
    this.authservice.authState.subscribe(user => {
      this.user = user;
    });
  }
}
