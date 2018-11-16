import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageLinks: [{},{},{}];
  constructor() {
    this.pageLinks = [
      {linkRef:'view-donor', linkText:'Search Donor'},
      {linkRef:'request-blood', linkText:'Request  Blood'},
      {linkRef:'dontation-camps', linkText:'Dontation Camps'}
    ]
   }

  ngOnInit() {
  }

  propogate(event) {
    alert(event);
  }
}
