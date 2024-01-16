import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
 private sidebarObject = {
    img: {url: '../../../assets/img/profile.jpg', alt: 'Image'},
    menuSidebar: [
      { name:'Home', href: '/header', icon: 'fa fa-home' },
      { name:'About', href:'/about', icon: 'fa fa-address-card' },
      { name:'Education', href:'/education', icon: 'fa fa-star' },
      { name:'Experience', href:'/experience', icon: 'fa fa-certificate' },
      { name:'Service', href:'/service', icon: 'fa fa-tasks' },
      { name:'Portfolio', href:'/portfolio', icon: 'fa fa-file-archive' },
      { name:'Review', href:'/review', icon: 'fa fa-binoculars' },
      { name:'Contact', href:'/contact', icon: 'fa fa-envelope' }  
    ],
    socialNetwork: [
      { href: "#", icon: "fab fa-twitter" },
      { href: "#", icon: "fab fa-facebook-f" },
      { href: "#", icon: "fab fa-linkedin-in" }
    ]    
  };

  get SidebarObject() {
    return this.sidebarObject
  }
  
}
