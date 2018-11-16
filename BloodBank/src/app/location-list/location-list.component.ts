import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  locations = ['vijaya','SRM','Womens care','Apollo','Cauvery','Medway'];
  selected:BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }


  ngOnInit() {
  }

  setLocation(loc: string) {
    this.selected.next(loc);
  }
}
