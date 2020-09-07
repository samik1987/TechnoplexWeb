import { Component, OnInit } from '@angular/core';
import { Inquery } from '../../model/inqueryModel'
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { MailService } from 'src/app/Service/mail.service';
import { Router } from '@angular/router';

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

  constructor(private _mailService : MailService,private rt: Router) { }

  ngOnInit(): void {
    debugger;
  }

  submit(inqueryForm){
    debugger;
    this._mailService.SendMail(inqueryForm.value).subscribe((data)=>{   
        
       alert("Thank For Contacting With US.We Will get back to you soon.");   
       this.rt.navigate(['/']);
       
 
    });
    //console.log(inqueryForm)
    //console.log(inqueryForm.value)
  }

}
