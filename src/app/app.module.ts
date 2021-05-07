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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { ViewOnboardeeComponent } from './view-onboardee/view-onboardee.component';
import { FilterbynamePipe } from './filterbyname.pipe';
import { TrendsComponent } from './trends/trends.component';
import { ChartsModule } from 'ng2-charts';
import { VacancyComponent } from './vacancy/vacancy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { config } from 'rxjs';

//export function provideConfig(return config;) {}

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
    TrendsComponent,
    VacancyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatCardModule,
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
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
