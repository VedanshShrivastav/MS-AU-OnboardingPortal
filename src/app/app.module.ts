import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider} from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { UpdateOnboardeeComponent } from './update-onboardee/update-onboardee.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { ViewOnboardeeComponent } from './view-onboardee/view-onboardee.component';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FilterbynamePipe } from './filterbyname.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    UpdateOnboardeeComponent,
    NavComponent,
    CreateComponent,
    ViewOnboardeeComponent,
    FilterbynamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: 
        [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "1082434179022-91hjd0pmdlql2u9bbo4otiejkdvjqrpt.apps.googleusercontent.com" 
              )
          }
        ]
      } as SocialAuthServiceConfig,
    },
    BsDatepickerConfig
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
