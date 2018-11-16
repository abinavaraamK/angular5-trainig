import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AvailabilityComponent } from './availability/availability.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes =  [
  {
    path:'availability',
    component:AvailabilityComponent
  },{
    path:'bookCycle',
    component:BookingComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
