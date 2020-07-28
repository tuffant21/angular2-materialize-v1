import {AfterViewInit, Component} from '@angular/core';
import {Angular2MaterializeV1Service} from 'angular2-materialize-v1';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

// syntax highlighting
declare var Prism;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  public title = 'example-project';
  private sidenavInstance: any;
  private collapsibleInstance: any;

  constructor(private router: Router, private angular2MaterializeService: Angular2MaterializeV1Service) {
    this.router.events
      .pipe(filter((evt) => evt instanceof NavigationEnd))
      .subscribe((evt: NavigationEnd) => {
        // syntax highlighting
        Prism.highlightAll();

        switch (evt.urlAfterRedirects) {
          case '/project-setup':
          case '/using-angular2-materialize-v1':
            this.collapsibleInstance.open(0);
            break;
          case '/floating-action-button':
            this.collapsibleInstance.open(1);
            break;
          case '/auto-init':
          case '/carousel':
          case '/collapsible':
          case '/dropdown':
          case '/feature-discovery':
          case '/media':
          case '/modal':
          case '/parallax':
          case '/pushpin':
          case '/scrollspy':
          case '/sidenav':
          case '/tabs':
          case '/toast':
          case '/tooltip':
            this.collapsibleInstance.open(2);
            break;
          case '/autocomplete':
          case '/chips':
          case '/pickers':
          case '/select':
          case '/text-inputs':
            this.collapsibleInstance.open(3);
            break;
          default:
            this.collapsibleInstance.close();
        }
      });
  }

  public ngAfterViewInit() {
    this.sidenavInstance = this.angular2MaterializeService.initSidenav('.sidenav');
    this.collapsibleInstance = this.angular2MaterializeService.initCollapsible('#nav-collapsible');
  }
}
