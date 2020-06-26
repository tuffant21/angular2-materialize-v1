import {AfterViewInit, Component} from '@angular/core';
import {Angular2MaterializeV1Service} from 'angular2-materialize-v1';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  public currentRoute: string;
  public title = 'example-project';

  constructor(private router: Router, private angular2MaterializeService: Angular2MaterializeV1Service) {
    this.currentRoute = this.router.url;
    console.log(this.currentRoute);
    this.router.events
      .pipe(filter((evt) => evt instanceof NavigationEnd))
      .subscribe((evt: NavigationEnd) => {
        this.currentRoute = evt.urlAfterRedirects;
      });
  }

  ngAfterViewInit() {
    this.angular2MaterializeService.initSidenav('.sidenav');
  }
}
