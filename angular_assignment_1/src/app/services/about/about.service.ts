import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private aboutObject = {
    title: "About Me",
    img: {url: '../../../assets/img/about.jpg', alt: 'Image' }, 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat. Proin libero ligula, gravida at porttitor eget.',
    buttomHire:{
      class: 'btn',
      href: '#',
      text: 'Hire Me'
    },
    skillsLeft:[
        { skillName: 'Design', percent: 85 },
        { skillName: 'SEO', percent: 95 },  
      ],
    skillRight: [
      { skillName: 'Development', percent: 90 },
      { skillName: 'Marketing', percent: 85 }
    ]   
    
  };

  get AboutObject() {
    return this.aboutObject;
  }

  
}
