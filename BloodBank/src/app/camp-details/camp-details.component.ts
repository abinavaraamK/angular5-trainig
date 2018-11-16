import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { PastCampsComponent } from '../past-camps/past-camps.component';
import { FutureCampsComponent } from '../future-camps/future-camps.component';

@Component({
  selector: 'app-camp-details',
  templateUrl: './camp-details.component.html',
  styleUrls: ['./camp-details.component.css']
})
export class CampDetailsComponent implements OnInit, AfterViewInit {

  @ViewChild('futureCamp') pastComp: PastCampsComponent;
  @ViewChild('pastCamps') futureCamp: FutureCampsComponent;
  pastData: string[];
  futureData: string[];
  constructor(private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.pastData = this.pastComp.getFutureDetails('dec');
    this.futureData = this.futureCamp.getFutureDetails('dec');
    this.changeRef.detectChanges();
  }

}
