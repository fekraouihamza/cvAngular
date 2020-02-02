import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private http: HttpClient) { }

  getContact() {
    return this.http.get<Contact>('http://localhost:8090/angularPhp/email.php');
  }

  createEmail(email: Contact) {
    return this.http.post('https://www.fekraoui-hamza.fr/angularPhp/email.php', JSON.stringify(email));
  }
}
