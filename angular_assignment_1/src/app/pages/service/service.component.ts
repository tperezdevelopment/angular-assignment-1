import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  serviceObject: any;

  constructor(private serviceService: ServiceService){}

  ngOnInit(): void {
      this.serviceObject = this.serviceService.ServiceObject;
  }

}
