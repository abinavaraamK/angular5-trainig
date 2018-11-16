import { Component, OnInit } from '@angular/core';
import { ComponentInteractionService } from '../component-interaction.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _service: ComponentInteractionService) { }

  ngOnInit() {
  }

  logOut() {
  this._service.changeStatus('logOut');
  }
}
