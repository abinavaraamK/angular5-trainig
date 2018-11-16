import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ComponentInteractionService } from '../component-interaction.service';

@Component({
  selector: 'app-register-donor',
  templateUrl: './register-donor.component.html',
  styleUrls: ['./register-donor.component.css']
})
export class RegisterDonorComponent implements OnInit {

  private registrationForm: FormGroup;
  constructor(private _service: ComponentInteractionService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.registrationForm = new FormGroup({
      name: new FormControl(''),
      bloodGroup: new FormControl(''),
      mobileNumber: new FormControl(''),
      hospital: new FormControl(''),
    });
  }

  submitForm() {
    if (this.registrationForm) {
      this._service.addDonor(this.registrationForm.value as {});
    }
  }
}
