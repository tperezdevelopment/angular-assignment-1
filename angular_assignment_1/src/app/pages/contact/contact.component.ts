import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactObject : any;
  constructor( private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactObject = this.contactService.ContactObject;
  }

}
