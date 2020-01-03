import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../shared/service.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server : {id : number, name:string, status : string};
  constructor(private serviceService : ServiceService, private route : ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.server = this.serviceService.getServer(id);
    this.route.params.subscribe(
      (params) => {
        this.server = this.serviceService.getServer(params[id]);
      }
    )
  }

}