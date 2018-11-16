import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {

  cauImages: Array<string> = [];
  constructor(
    private http: HttpClient,
    config: NgbCarouselConfig,
    private router: Router
  ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 50000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    for (let i = 1; i < 4; i++) {
      let images = ('../../assets/' + i + '.jpg');
      this.cauImages.push(images);
    }
  }

  bookCycle() {
    this.router.navigate(['/bookCycle'])
  }

}
