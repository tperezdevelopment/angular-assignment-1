import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  educationObject: any;

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
      this.educationObject = this.educationService.EducationObject;
  }
}
