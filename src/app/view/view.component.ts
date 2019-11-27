import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  contact: Contact;
  name:string;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContact().subscribe((data: Contact) => {
      this.contact = data;
      console.log(this.contact);
      this.name = this.contact['nom'];
      console.log (this.name);
    });
  }

}
