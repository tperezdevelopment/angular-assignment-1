import { Component, Input, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  experienceObject: any;
  
  constructor(private experienceService: ExperienceService){}

  ngOnInit(): void {
      this.experienceObject = this.experienceService.ExperienceObject;
  }


}
