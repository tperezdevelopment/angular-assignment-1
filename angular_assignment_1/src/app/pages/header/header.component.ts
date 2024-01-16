import { Component,OnInit} from '@angular/core';
import { HeaderService } from 'src/app/services/header/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{ 
  headerObject: any;
  
  constructor (private headerService : HeaderService){}

  ngOnInit(): void {
      this.headerObject = this.headerService.HeaderObject;
  }

}
