import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review/review.service';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviewObject: any;
  
  constructor( private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewObject = this.reviewService.ReviewObject;
  }

  
}
