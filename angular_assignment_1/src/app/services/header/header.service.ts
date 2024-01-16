import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private headerObject = {
    title: "I'm",
    subtitle: 'Michael Miller',
    headerTyped: ['Web Designer', 'Web Developer', 'Front End Developer', 'Apps Developer', 'Graphic Designer'],
    largeButtom : [
      { href: "#", icon: "fa fa-download", text: 'Resume'},
      { href: "#", icon: "fa fa-hands-helping", text: 'Hire Me' }
    ]
  };
  
  get HeaderObject() {
    return this.headerObject;
  }
}
