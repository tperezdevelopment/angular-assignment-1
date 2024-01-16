import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  portfolioObject: any;
 
  currentFilter: string = '*'; 

constructor(private portfolioService: PortfolioService, private _lightbox: Lightbox) {}

ngOnInit(): void {
    this.portfolioObject = this.portfolioService.PortfolioObject;
}

setFilter(filter: string): void {
  this.currentFilter = filter;
}

getFilteredItems(): any[] {
  if (this.currentFilter === '*') {
    return this.portfolioObject.portfolioItem;
  } else {
    return this.portfolioObject.portfolioItem.filter((item: any) => item.class === this.currentFilter);
  }
}

open(index: number): void {
  // open lightbox
  var _albums = this.getFilteredItems().map(item => item.img)
  this._lightbox.open(_albums, index);
}

close(): void {
  // close lightbox programmatically
  this._lightbox.close();
}


}
