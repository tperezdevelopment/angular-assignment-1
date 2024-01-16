import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactObject = {
    title: 'Contact',
    contactInfo: [
      { icon: 'fa fa-user', text:'Michael Miller' },
      { icon: 'fa fa-tag', text: 'Web Designer & Developer' },
      { icon: 'fa fa-envelope', aLink: 'mailto:info@example.com', text: 'info@example.com'},
      { icon: 'fa fa-phone', aLink: 'tel:+1234567890', text: '+123-456-7890'},
      { icon: 'fa fa-map-marker', text: '123 Street, Los Angeles, CA, USA'}
    ],
    socialNetwork: [
      { aclass:'btn', href: "#", icon: "fab fa-twitter" },
      { aclass:'btn', href: "#", icon: "fab fa-facebook-f" },
      { aclass:'btn', href: "#", icon: "fab fa-linkedin-in" },
      { aclass:'btn', href: "#", icon: "fab fa-instagram" },
      { aclass:'btn', href: "#", icon: "fab fa-youtube" }
    ],
    form: {      
      buttom:{
        text: 'Send Message',
        class: 'btn',
        type: 'submit'
      }
    }
  };

  get ContactObject(){
    return this.contactObject;
  }

  
}
