import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { RequestDonorComponent } from './request-donor/request-donor.component';
import { DonorDetailsComponent } from './donor-details/donor-details.component';
import { MenuComponent } from './menu/menu.component';
import { CampDetailsComponent } from './camp-details/camp-details.component';
import { PastCampsComponent } from './past-camps/past-camps.component';
import { FutureCampsComponent } from './future-camps/future-camps.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchDonorComponent } from './search-donor/search-donor.component';
import { FormsModule }   from '@angular/forms';
import { LocationListComponent } from './location-list/location-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustomFilterPipe } from './custom-filter.pipe';
import { RegisterDonorComponent } from './register-donor/register-donor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IndividualDonorComponent } from './individual-donor/individual-donor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    RequestDonorComponent,
    DonorDetailsComponent,
    MenuComponent,
    CampDetailsComponent,
    PastCampsComponent,
    FutureCampsComponent,
    LoginComponent,
    LogoutComponent,
    SearchDonorComponent,
    LocationListComponent,
    CustomFilterPipe,
    RegisterDonorComponent,
    IndividualDonorComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LocationListComponent]
})
export class AppModule { }
