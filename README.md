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
Step 3, have your component implement `AfterViewInit`
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
    // this.angular2MaterializeService.initAutocomplete('#id, .class, element', {options});
    // this.angular2MaterializeService.initCarousel('#id, .class, element', {options});
    // this.angular2MaterializeService.initCharacterCount('#id, .class, element', {options});
    // this.angular2MaterializeService.initCollapsible('#id, .class, element', {options});
    // this.angular2MaterializeService.initDatePicker('#id, .class, element', {options});
    // this.angular2MaterializeService.initDropdown('#id, .class, element', {options});
    // this.angular2MaterializeService.initFloatingActionButton('#id, .class, element', {options});
    // this.angular2MaterializeService.initMaterialboxed('#id, .class, element', {options});
    // this.angular2MaterializeService.initModal('#id, .class, element', {options});
    // this.angular2MaterializeService.initParallax('#id, .class, element', {options});
    // this.angular2MaterializeService.initPushpin('#id, .class, element', {options});
    // this.angular2MaterializeService.initScrollSpy('#id, .class, element', {options});
    // this.angular2MaterializeService.initSelect('#id, .class, element', {options});
    // this.angular2MaterializeService.initSidenav('#id, .class, element', {options});
    // this.angular2MaterializeService.initSlider('#id, .class, element', {options});
    // this.angular2MaterializeService.initTabs('#id, .class, element', {options});
    // this.angular2MaterializeService.initTapTarget('#id, .class, element', {options});
    // this.angular2MaterializeService.initTooltip('#id, .class, element', {options});
    // this.angular2MaterializeService.toast({options});
    // this.angular2MaterializeService.updateTextFields();
  }
}
```

## TypeScript (JavaScript section for materializecss.com)
For a full list of examples in the github code, check out the example project code here: 
https://github.com/tuffant21/angular2-materialize-v1/tree/master/example-project/src/app/components

### AutoInit
Auto Init allows you to initialize all of the Materialize Components with a single function call that are currently 
rendered in the angular view. It is important to note that you cannot pass in options using this method.

```typescript
constructor(private angular2MaterializeService: Angular2MaterializeV1Service) {}

public ngAfterViewInit(): void {
  this.angular2MaterializeService.autoInit();
}
```

### Carousel
```typescript
// initialize a single carousel with an id
this.angular2MaterializeService.initCarousel('#carousel');

// initialize all carousels with class .carousel
this.angular2MaterializeService.initCarousel('.carousel');

// initialization with options
this.angular2MaterializeService.initCarousel('.carousel', {
  // insert options here
});
```
