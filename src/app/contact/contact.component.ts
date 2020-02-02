import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Contact } from '../contact';
import * as $ from "jquery";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  mail = new Contact('','','','','');
  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService

  ) { }

  ngOnInit() {
    this.initForm()

  }
  initForm() {
    this.contactForm = this.formBuilder.group(
      {
        firstname: ['', [Validators.required, Validators.pattern(/[a-zA-Z]/)]],
        name: ['', [Validators.required, Validators.pattern(/[a-zA-Z]/)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.pattern(/^(0[1-68])(?:[ _.-]?(\d{2})){4}$/)]],
        message: ['', [Validators.required, Validators.pattern(/[a-zA-Z]/)]],
      }
    );
  }
  onSubmit()
  {
   this.mail = this.contactForm.value;

   this.contactService.createEmail(this.mail).subscribe(
     data => {

     if( data['isSuccess'] = true ){
       console.log('okok');
       $('#popup_mail_confirm').modal('toggle');
       this.contactForm.reset();
     }

   },
   error => {
    console.log("error is:", error);
   }
   );
  }



}
