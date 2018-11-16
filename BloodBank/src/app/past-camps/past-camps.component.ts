import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-camps',
  templateUrl: './past-camps.component.html',
  styleUrls: ['./past-camps.component.css']
})
export class PastCampsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getFutureDetails(month: string): string[] {
    return ['Maverix','Saveetha','Infi','CTS']
    }
}
