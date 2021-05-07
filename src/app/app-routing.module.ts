import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authorization/auth.guard';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { TrendsComponent } from './trends/trends.component';
import { UpdateOnboardeeComponent } from './update-onboardee/update-onboardee.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { ViewOnboardeeComponent } from './view-onboardee/view-onboardee.component';

const routes: Routes = [
{
    path: 'login', component: LoginComponent
},
{
    path: '', redirectTo: '/login', pathMatch: 'full'
},
{
    path: 'Dashboard',canActivate:[AuthGuard] , component: DashboardComponent
},
{
    path: 'home', canActivate: [AuthGuard], component:NavComponent
},
{
    path: 'update/:id', canActivate: [AuthGuard], component: UpdateOnboardeeComponent
},
{
    path: 'create', canActivate: [AuthGuard], component: CreateComponent

},
{
    path: 'view/:id', canActivate: [AuthGuard], component: ViewOnboardeeComponent
        
},
{  
    path: 'Trends', canActivate: [AuthGuard], component: TrendsComponent

},
{
    path: 'vacancy', canActivate: [AuthGuard], component: VacancyComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
