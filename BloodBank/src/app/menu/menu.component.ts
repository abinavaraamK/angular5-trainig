import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentInteractionService } from '../component-interaction.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() navLinks: [];  
  @Output() clickedLink = new EventEmitter<string>();
  isSignedIn: boolean;
  constructor(private _service: ComponentInteractionService) {
    this.isSignedIn = false;
   }

  ngOnInit() {
    this._service.userStatus.subscribe(status => {
       this.isSignedIn = status === 'loggedIn' ? true: false;
    })
  }

  navigate(linkRef: string) {
  
  }
}
