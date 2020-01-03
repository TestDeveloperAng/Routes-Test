import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../shared/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serviceService: ServiceService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serviceService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        console.log(queryParams);
      }
    )

    this.activatedRoute.fragment.subscribe(
      (fragment) => {
        console.log(`Fragment is :- ` + fragment);
      }
    )
  }

}