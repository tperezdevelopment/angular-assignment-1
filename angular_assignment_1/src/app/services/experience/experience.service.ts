import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experienceObject =  {
    title: "Experience",
    timeline: [
        {
          from: '01-Jan-2020',
          to: '31-Dec-2050',
          h3: 'Codex Solution',
          h4: 'San Francisco, CA',
          h5: 'Project Manager',
          p: `Lorem ipsum dolor sit amet elit suscipit orci.
               Donec molestie velit id libero.`
        },
        {
          from: '01-Jan-2020',
          to: '31-Dec-2050',
          h3: 'Soft Solution Ltd',
          h4: 'San Francisco, CA',
          h5: 'Web Developer',
          p: `Lorem ipsum dolor sit amet elit suscipit orci.
               Donec molestie velit id libero.`
        },
        {
          from: '01-Jan-2020',
          to: '31-Dec-2050',
          h3: 'ABC Soft Ltd',
          h4: 'San Francisco, CA',
          h5: 'Web Designer',
          p: `Lorem ipsum dolor sit amet elit suscipit orci.
               Donec molestie velit id libero.`
        },
        {
          from: '01-Jan-2020',
          to: '31-Dec-2050',
          h3: 'Soft Agency',
          h4: 'San Francisco, CA',
          h5: 'Web Designer',
          p: `Lorem ipsum dolor sit amet elit suscipit orci.
               Donec molestie velit id libero.`
        }
      ]
  };
  get ExperienceObject() {
    return this.experienceObject;
  }
}
