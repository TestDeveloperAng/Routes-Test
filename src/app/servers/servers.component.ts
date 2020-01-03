import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers = [];

  constructor(private serviceService : ServiceService) {
    this.servers = this.serviceService.servers;
   }

  ngOnInit() {
  }

}