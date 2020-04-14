import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailValidators } from './validators/emailValidators.validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  form = new FormGroup({
    email: new FormControl('', [Validators.required, EmailValidators.noSpacePermitted]),
    password: new FormControl()
  })


  get email()
  {
    return this.form.get('email');
  }

}
