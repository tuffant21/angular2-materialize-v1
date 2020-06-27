# angular2-materialize-v1
Angular 2 support for Materialize CSS v1.0+ framework.

This project has 0 dependencies and requires no dependencies to be installed on your production server. Forget the need 
to install hammerjs or jquery. It is made with vanilla TypeScript and vanilla Angular. 

## Project Setup
Feel free to take a look at the example-project to help you get started. 

First, install materialize-css at the latest version if you haven't already
> npm install materialize-css@next

Then install angular2-materialize-v1 to get this package
> npm install angular2-materialize-v1

Go to `angular.json` and find projects->PROJECT_NAME->architect->build->options and add 
* `"node_modules/materialize-css/dist/css/materialize.min.css"` to the styles array (first in list)
* `"node_modules/materialize-css/dist/js/materialize.min.js"` to the scripts array

It should look like the following
```json
{
  "projects": {
    "PROJECT_NAME": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/materialize-css/dist/css/materialize.min.css",
              "...ect (DON'T ADD THIS LINE)"
            ],
            "scripts": [
              "node_modules/materialize-css/dist/js/materialize.min.js"
            ]
          }
        }
      }
    }
  }
}
``` 

If you want material icons, go into the `index.html` and add `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">` to the head like so.
```html
<html>
<head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- ect -->
</head>
<body>
</body>
</html>
```

After the dependencies are installed, you will be able to use angular2-materialize-v1!

## Using angular2-materialize-v1
To begin, import `Angular2MaterializeV1Service` in any angular `component` you wish to use it in.
```typescript
import {Angular2MaterializeV1Service} from 'angular2-materialize-v1';
```
Step 2, inject it into your component using the constructor
```typescript
constructor(private angular2MaterializeService: Angular2MaterializeV1Service) ...
```
Step 3, have you exported component class implement `AfterViewInit`
```typescript
export class AppComponent implements AfterViewInit ...
```
Final step, implement ngAfterViewInit. ngAfterViewInit is where you will call any Angular2MaterializeV1Service 
functions. It is necessary that you use this hook instead of `constructor` or `ngOnInit` because the view must load 
before trying to make calls to it.
```typescript
public ngAfterViewInit(): void {
    this.angular2MaterializeService.SOME_FUNCTION();
}
```
The final class should look like this.
```typescript
import {AfterViewInit, Component} from '@angular/core';
import {Angular2MaterializeV1Service} from 'angular2-materialize-v1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    
  constructor(private angular2MaterializeService: Angular2MaterializeV1Service) {}

  public ngAfterViewInit() {
    // NOTE - autoInit() only works on the currently loaded items in view
    // this.angular2MaterializeService.autoInit();
    // this.angular2MaterializeService.initAutocomplete();
    // this.angular2MaterializeService.initCarousel();
    // this.angular2MaterializeService.initCharacterCount();
    // this.angular2MaterializeService.initCollapsible();
    // this.angular2MaterializeService.initDatePicker();
    // this.angular2MaterializeService.initDropdown();
    // this.angular2MaterializeService.initFloatingActionButton();
    // this.angular2MaterializeService.initMaterialboxed();
    // this.angular2MaterializeService.initModal();
    // this.angular2MaterializeService.initParallax();
    // this.angular2MaterializeService.initPushpin();
    // this.angular2MaterializeService.initScrollSpy();
    // this.angular2MaterializeService.initSelect();
    // this.angular2MaterializeService.initSidenav();
    // this.angular2MaterializeService.initSlider();
    // this.angular2MaterializeService.initTabs();
    // this.angular2MaterializeService.initTapTarget();
    // this.angular2MaterializeService.initTooltip();
    // this.angular2MaterializeService.toast();
    // this.angular2MaterializeService.updateTextFields();
  }
}
```
