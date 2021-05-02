import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { UpdateOnboardeeComponent } from './update-onboardee/update-onboardee.component';

const routes: Routes = [
{
    path: 'login', component: LoginComponent
},
{
    path: '', redirectTo: '/login', pathMatch: 'full'
},
{
    path: 'Dashboard', component: DashboardComponent
},
{
    path:'home', component:NavComponent
},
{
    path: 'update/:id', component: UpdateOnboardeeComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
