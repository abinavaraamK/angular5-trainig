import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.css']
})
export class DonorDetailsComponent implements OnInit {
  cardDetails: [];
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.http.get('http://localhost:3000/details').subscribe((res) => {
      this.cardDetails = res as [];
    })
  }

  navigateUser(from: string) {
    if (from !== 'Camp Details' && from !== 'Register') {
      this.router.navigate(['view-donor']);
    } else if (from !== 'Register') {
      this.router.navigate(['camp-details']);
    } else {
      this.router.navigate(['register-donor']);
    }


  }
}
