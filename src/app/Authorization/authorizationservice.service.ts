import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationserviceService {

  user ?: SocialUser;
  loggedIn ?: boolean;
  private idToken1 ?: String;

  constructor(private router: Router,private authservice : SocialAuthService) { }


  checkLogin(){
    this.authservice.authState.subscribe((user) =>{
      this.user = user;
      this.loggedIn = (user != null);
      
      if(this.loggedIn){
        this.idToken1 = user!.idToken;
        this.router.navigate(['Dashboard']);
        this.setUserId();



      }
    })
    
  }
  setUserId()
  {
    localStorage.setItem('uid',this.user!.idToken);
  }

  logout(): void {
    localStorage.clear();
    this.idToken1 = "";
    this.loggedIn = false;
    this.user = new SocialUser();
    this.authservice.signOut();
    this.router.navigate(['/login']);      
  }
}
