import { Component, OnInit } from '@angular/core';
import { SidebarService } from './../../services/sidebar/sidebar.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  sidebarObject : any;
  isCollapsed = true;

  constructor(private sidebarService: SidebarService){}
  ngOnInit(): void {
        this.sidebarObject = this.sidebarService.SidebarObject;
  }
 

}
