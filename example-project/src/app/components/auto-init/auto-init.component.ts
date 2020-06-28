import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Angular2MaterializeV1Service} from 'angular2-materialize-v1';

@Component({
  selector: 'app-auto-init',
  templateUrl: './auto-init.component.html',
  styleUrls: ['./auto-init.component.css']
})
export class AutoInitComponent implements OnInit, AfterViewInit {

  constructor(private angular2MaterializeService: Angular2MaterializeV1Service) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.angular2MaterializeService.autoInit();
  }

}
