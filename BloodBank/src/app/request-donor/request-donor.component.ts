import { Component, OnInit } from '@angular/core';
import { DonorList } from '../donor-list';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ComponentInteractionService } from '../component-interaction.service';

@Component({
  selector: 'app-request-donor',
  templateUrl: './request-donor.component.html',
  styleUrls: ['./request-donor.component.css']
})
export class RequestDonorComponent implements OnInit {

  Donors: Array<DonorList> = [];
  searchedVal1: string;
  searchedVal2: string;
  fieldName1: string;
  fieldName2: string;
  newUser: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private _service: ComponentInteractionService
  ) { }

  ngOnInit() {
    this.searchedVal1 = 'OAS';
    this.fieldName1 = 'bloodGroup';
    this.fieldName2 = 'reqHospital';
    this._service.emitNewDonor.subscribe((user: any) => {
      if (user != ""){
        this.Donors.push(user);
      }
        
    })
    this.getDonors();
  };

  getDonors() {
    this.http.get(' http://localhost:3000/donors').subscribe((res) => {
      let response = res as [];
      response.map(val => this.Donors.push(val));
    })
  }

  updateFilter(event) {
    console.log(event);
    this.searchedVal1 = event.key1;
    this.searchedVal2 = event.key2;
    console.log(this.searchedVal1)
  }
  navigate(id: string) {
    this.router.navigate(['/view-donor',id])
  }
}
