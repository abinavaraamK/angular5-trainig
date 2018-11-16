import { Component, OnInit } from '@angular/core';
import { FooterLinks } from '../footer-links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerDesc: Array<FooterLinks> = [];
  constructor() { }

  ngOnInit() {
    this.makeLinks();
  }

  makeLinks() {
    this.footerDesc = [ 
      { linkHref: 'twitter.com', linkText:'twitter', style:'fa fa-2x fa-twitter'},
      { linkHref: 'instagram.com', linkText:'instagram', style:'fa fa-2x fa-instagram'},
      { linkHref: 'facebook.com', linkText:'facebook', style:'fa fa-2x fa-facebook'}
    ]
  }

}
