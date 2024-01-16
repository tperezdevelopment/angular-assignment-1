import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviewObject = {
    title: "Review",
    reviewList: [
      {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed eu suscipit orci. Donec molestie velit id libero blandit, 
            quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis.
            Ut tempor tellus eu sem pharetra feugiat.`,
       img: {src: '../../../assets/img/review-1.jpg', alt: 'Image'},
       name: 'Client Name',
       profession:'Profession'
      },
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed eu suscipit orci. Donec molestie velit id libero blandit, 
              quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis.
              Ut tempor tellus eu sem pharetra feugiat.`,
         img: {src: '../../../assets/img/review-2.jpg', alt: 'Image'},
         name: 'Client Name',
         profession:'Profession'
        },
        {
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed eu suscipit orci. Donec molestie velit id libero blandit, 
                quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis.
                Ut tempor tellus eu sem pharetra feugiat.`,
           img: {src: '../../../assets/img/review-3.jpg', alt: 'Image'},
           name: 'Client Name',
           profession:'Profession'
          }
    ]
  };

  get ReviewObject() {
    return this.reviewObject;
  }
}
