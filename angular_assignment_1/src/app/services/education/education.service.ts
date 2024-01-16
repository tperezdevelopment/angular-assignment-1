import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationObject = {
    title: "Education",
    timeline: [
        {
          from: '01-Jan-2020',
          to: '31-Dec-2050',
          h3: 'Master Degree',
          p: `Lorem ipsum dolor sit amet elit suscipit orci.
               Donec molestie velit id libero.`
        },
        {
          from: '01-Jan-2020',
          to: '31-Dec-2050',
          h3: 'Bachelor Degree',
          p: `Lorem ipsum dolor sit amet elit suscipit orci.
               Donec molestie velit id libero.`
        },
        {
          from: '01-Jan-2020',
          to: '31-Dec-2050',
          h3: 'Associate Degree',
          p: `Lorem ipsum dolor sit amet elit suscipit orci.
               Donec molestie velit id libero.`
        },
        {
          from: '01-Jan-2020',
          to: '31-Dec-2050',
          h3: 'High Degree',
          p: `Lorem ipsum dolor sit amet elit suscipit orci.
               Donec molestie velit id libero.`
        }
      ]    
  };
  get EducationObject() {
    return this.educationObject;
  }
  

}
