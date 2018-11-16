import { Component, OnInit } from '@angular/core';
import { ComponentInteractionService } from '../component-interaction.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  formConfig: any;
  constructor(private _service: ComponentInteractionService
    , private _builder: FormBuilder) {
    this.formConfig = [
      { label: 'Name', type: 'type', name: 'UserName', constraint: Validators.required },
      { label: 'Password', type: 'password', name: 'Password', constraint: Validators.required }
    ]
  }

  ngOnInit() {
    this.loginForm = this._builder.group({});

    this.formConfig.forEach(config => {
      this.loginForm.addControl(config.name,
        new FormControl('', [config.constraint]))
    });
  }

  signIn() {
    this._service.changeStatus('loggedIn');
  }
}
