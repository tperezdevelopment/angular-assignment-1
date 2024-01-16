import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private serviceObject = {
    title: "Service",
    serviceList: {
      class: 'srv-col',
      list: [
        {
          i: 'fa fa-desktop',
          h3: 'Web Design',
          p: `Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.`
        },
        {
          i: 'fa fa-laptop',
          h3: 'Web Development',
          p: `Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.`
        },
        {
          i: 'fa fa-search',
          h3: 'SEO',
          p: `Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.`
        },
        {
          i: 'fa fa-envelope-open-text',
          h3: 'Digital Marketing',
          p: `Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.`
        },
      
      ]
    }
  };
  get ServiceObject() {
    return this.serviceObject;
  }

}
