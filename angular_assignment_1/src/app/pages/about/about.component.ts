import { Component, OnInit,  } from '@angular/core';
import { AboutService } from 'src/app/services/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  aboutObject: any;
  
  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
      this.aboutObject = this.aboutService.AboutObject;
  }
}
