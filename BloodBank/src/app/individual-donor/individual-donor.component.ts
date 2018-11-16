import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-individual-donor',
  templateUrl: './individual-donor.component.html',
  styleUrls: ['./individual-donor.component.css']
})
export class IndividualDonorComponent implements OnInit  {
  donor: any = {
    name:'',
    bloodGroup:''
  };
  constructor(private active: ActivatedRoute,
    private http: HttpClient) { 
    
  }

  ngOnInit() {
    this.active.params.subscribe((param) => {
      this.donor.name = param.id;
    })

    this.http.get('http://localhost:3000/donors/?name='+this.donor.name).subscribe( (res) => {
      this.donor = res[0];
    })

    this.http.get('http://localhost:3000/donationHistory?name='+this.donor.name).subscribe( (res) => {
      
    })
  }
}
