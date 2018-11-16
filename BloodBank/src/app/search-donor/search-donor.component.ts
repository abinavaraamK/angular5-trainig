import { Component, OnInit, ViewChild, ViewContainerRef, Input, EventEmitter, Output } from '@angular/core';
import { ComponentInjectorService } from '../component-injector.service';
import { LocationListComponent } from '../location-list/location-list.component';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-donor',
  templateUrl: './search-donor.component.html',
  styleUrls: ['./search-donor.component.css']
})
export class SearchDonorComponent implements OnInit {

  @ViewChild('locRef', { read: ViewContainerRef }) ViewContainerRef;
  locationVal: string = '';
  searchKey: string = '';
  showThis: boolean;
  showThat: boolean; 
  @Input() donorList: string[];
  @Output() emitSearch: EventEmitter<{}> = new EventEmitter();
  constructor(private _service: ComponentInjectorService) { }

  ngOnInit() {
    this.showThis = true;
    this.showThat = true;
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      map(donor => donor.length < 1 ? [] : this.donorList.filter(item => item.bloodGroup.indexOf(donor) > -1).
        map(val => val.bloodGroup))
    );

  updateEmit() {
    setTimeout(() => {
      this.emitSearch.emit({key1:this.searchKey,key2:this.locationVal});
    },500)
    
  }
  showLocation() {
    this._service.setViewRef(this.ViewContainerRef)
    const comRef = this._service.addComponent(LocationListComponent) as LocationListComponent;
    comRef.selected.subscribe(val => {
      this.locationVal = val;
      //his.emitSearch.emit({key1:this.searchKey,key2:this.locationVal});
      if (this.locationVal) {
        this.removeLocation();
      }
    })
  }

  removeLocation() {
    this._service.removeComponent(LocationListComponent);
  }


}
