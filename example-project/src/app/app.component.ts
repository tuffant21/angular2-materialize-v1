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
  public isGettingStartedActive: boolean;
  public isJavaScriptActive: boolean;

  constructor(private router: Router, private angular2MaterializeService: Angular2MaterializeV1Service) {
    this.router.events
      .pipe(filter((evt) => evt instanceof NavigationEnd))
      .subscribe((evt: NavigationEnd) => {
        this.currentRoute = evt.urlAfterRedirects;
        this.isGettingStartedActive = this.currentRoute === '/project-setup'
          || this.currentRoute === '/using-angular2-materialize-v1';

        this.isJavaScriptActive = this.currentRoute !== '/project-setup'
          && this.currentRoute !== '/using-angular2-materialize-v1'
          && this.currentRoute !== '/about'
          && this.currentRoute !== '/donate';
      });
  }

  public ngAfterViewInit() {
    //   this.angular2MaterializeService.initSidenav('.sidenav');
    //   this.angular2MaterializeService.initCollapsible('.collapsible');
    this.angular2MaterializeService.autoInit();
  }
}
