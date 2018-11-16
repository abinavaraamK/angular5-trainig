import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestDonorComponent } from './request-donor/request-donor.component';
import { DonorDetailsComponent } from './donor-details/donor-details.component';
import { CampDetailsComponent } from './camp-details/camp-details.component';
import { RegisterDonorComponent } from './register-donor/register-donor.component';
import { LoginComponent } from './login/login.component';
import { IndividualDonorComponent } from './individual-donor/individual-donor.component';

const routes: Routes =  [{
  path:'view-donor',
  component: RequestDonorComponent
},{
  path:'view-donor/:id',
  component: IndividualDonorComponent
},{
  path:'donor-details',
  component:DonorDetailsComponent
},{
  path:'camp-details',
  component:CampDetailsComponent
},{
  path:'',
  component:LoginComponent
},{
  path:'register-donor',
  component: RegisterDonorComponent
}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
