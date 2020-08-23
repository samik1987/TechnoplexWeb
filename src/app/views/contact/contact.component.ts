import { Component, OnInit } from '@angular/core';
import { Inquery } from '../../model/inqueryModel'
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  inquery : Inquery = {
    firstName : null,
    lastName: null,
    email: null,
    mobile: null,
    country:null,
    subject:null,
    gender: null,
    message:null,

  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(inqueryForm){
    console.log(inqueryForm)
    console.log(inqueryForm.value)
  }

}
