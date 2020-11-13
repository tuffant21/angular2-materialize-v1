# angular2-materialize-v1
Angular 2 support for Materialize CSS v1.0+ framework.

This project has 0 dependencies and requires no dependencies to be installed on your production server. Forget the need 
to install hammerjs or jquery. It is made with vanilla TypeScript and vanilla Angular.

We also added all TypeScript interfaces for materialize options. You can now see what options are available in most 
IDE's for each function.

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
    // this.angular2MaterializeService.dismissAllToasts();
    // const instance(s) = this.angular2MaterializeService.initAutocomplete('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initCarousel('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initCharacterCount('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initChips('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initCollapsible('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initDatePicker('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initDropdown('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initFloatingActionButton('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initMaterialboxed('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initModal('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initParallax('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initPushpin('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initScrollSpy('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initSelect('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initSidenav('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initSlider('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initTabs('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initTapTarget('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initTimepicker('#id, .class, element', {options});
    // const instance(s) = this.angular2MaterializeService.initTooltip('#id, .class, element', {options});
    // const instance = this.angular2MaterializeService.toast({options});
    // this.angular2MaterializeService.textareaAutoResize();
    // this.angular2MaterializeService.updateTextFields();
  }
}
```

Depending on what you pass into the init functions, you can cast the return value to get the class.

```typescript
    // passing in an id will return a single instance
    const instance: IAutocomplete = <IAutocomplete>this.angular2MaterializeService.initAutocomplete('#id', {options});

    // passing in a class will return an array
    const instances: Array<IAutocomplete> = <Array<IAutocomplete>>this.angular2MaterializeService.initAutocomplete('.class', {options});
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

### Autocomplete
```typescript
// initialize a single autocomplete with an id
this.angular2MaterializeService.initAutocomplete('#autocomplete-id');

// initialize all carousels with class .autocomplete
this.angular2MaterializeService.initAutocomplete('.autocomplete');

// initialization with options
this.angular2MaterializeService.initAutocomplete('.autocomplete', {
  // insert options here
});
```

### Carousel
```typescript
// initialize a single carousel with an id
this.angular2MaterializeService.initCarousel('#carousel-id');

// initialize all carousels with class .carousel
this.angular2MaterializeService.initCarousel('.carousel');

// initialization with options
this.angular2MaterializeService.initCarousel('.carousel', {
  // insert options here
});
```

### CharacterCount
```typescript
// initialize a single CharacterCount with an id
this.angular2MaterializeService.initCharacterCount('#characterCount-id');
```

### Chips
```typescript
// initialize a single Chips with an id
this.angular2MaterializeService.initChips('#chips-id');

// initialize all Chips with class .Chips
this.angular2MaterializeService.initChips('.chips');

// initialization with options
this.angular2MaterializeService.initChips('.chips', {
  // insert options here
});
```

### Collapsible
```typescript
// initialize a single Collapsible with an id
this.angular2MaterializeService.initCollapsible('#collapsible-id');

// initialize all Collapsibles with class .Collapsible
this.angular2MaterializeService.initCollapsible('.collapsible');

// initialization with options
this.angular2MaterializeService.initCollapsible('.collapsible', {
  // insert options here
});
```

### Datepicker
```typescript
// initialize a single Datepicker with an id
this.angular2MaterializeService.initDatepicker('#datepicker-id');

// initialize all Datepickers with class .Datepicker
this.angular2MaterializeService.initDatepicker('.datepicker');

// initialization with options
this.angular2MaterializeService.initDatepicker('.datepicker', {
  // insert options here
});
```

### Dropdown
```typescript
// initialize a single Dropdown with an id
this.angular2MaterializeService.initDropdown('#dropdown-trigger-id');

// initialize all Dropdowns with class .Dropdown
this.angular2MaterializeService.initDropdown('.dropdown-trigger');

// initialization with options
this.angular2MaterializeService.initDropdown('.dropdown-trigger', {
  // insert options here
});
```

### FloatingActionButton
```typescript
// initialize a single FloatingActionButton with an id
this.angular2MaterializeService.initFloatingActionButton('#floatingActionButton-id');

// initialize all FloatingActionButtons with class .FloatingActionButton
this.angular2MaterializeService.initFloatingActionButton('.fixed-action-btn');

// initialization with options
this.angular2MaterializeService.initFloatingActionButton('.fixed-action-btn', {
  // insert options here
});
```

### Materialbox
```typescript
// initialize a single Materialbox with an id
this.angular2MaterializeService.initMaterialbox('#materialbox-id');

// initialize all Materialboxs with class .Materialbox
this.angular2MaterializeService.initMaterialbox('.materialboxed');

// initialization with options
this.angular2MaterializeService.initMaterialbox('.materialboxed', {
  // insert options here
});
```

### Modal
```typescript
// initialize a single Modal with an id
this.angular2MaterializeService.initModal('#modal-id');

// initialize all Modals with class .Modal
this.angular2MaterializeService.initModal('.modal');

// initialization with options
this.angular2MaterializeService.initModal('.modal', {
  // insert options here
});
```

### Parallax
```typescript
// initialize a single Parallax with an id
this.angular2MaterializeService.initParallax('#parallax-id');

// initialize all Parallaxs with class .Parallax
this.angular2MaterializeService.initParallax('.parallax');

// initialization with options
this.angular2MaterializeService.initParallax('.parallax', {
  // insert options here
});
```

### Pushpin
```typescript
// initialize a single Pushpin with an id
this.angular2MaterializeService.initPushpin('#pushpin-id');

// initialize all Pushpins with class .Pushpin
this.angular2MaterializeService.initPushpin('.pushpin');

// initialization with options
this.angular2MaterializeService.initPushpin('.pushpin', {
  // insert options here
});
```

### ScrollSpy
```typescript
// initialize a single ScrollSpy with an id
this.angular2MaterializeService.initScrollSpy('#ScrollSpy-id');

// initialize all ScrollSpys with class .ScrollSpy
this.angular2MaterializeService.initScrollSpy('.scrollspy');

// initialization with options
this.angular2MaterializeService.initScrollSpy('.scrollspy', {
  // insert options here
});
```

### Select
```typescript
// initialize a single Select with an id
this.angular2MaterializeService.initSelect('#Select-id');

// initialize all elements of type select
this.angular2MaterializeService.initSelect('select');

// initialize all Selects with class .select
this.angular2MaterializeService.initSelect('.select');

// initialization with options
this.angular2MaterializeService.initSelect('.select', {
  // insert options here
});
```

### Sidenav
```typescript
// initialize a single Sidenav with an id
this.angular2MaterializeService.initSidenav('#Sidenav-id');

// initialize all Sidenavs with class .Sidenav
this.angular2MaterializeService.initSidenav('.sidenav');

// initialization with options
this.angular2MaterializeService.initSidenav('.sidenav', {
  // insert options here
});
```

### Slider
```typescript
// initialize a single slider with an id
this.angular2MaterializeService.initSlider('#slider-id');

// initialize all sliders with class .slider
this.angular2MaterializeService.initSlider('.slider');

// initialization with options
this.angular2MaterializeService.initSlider('.slider', {
  // insert options here
});
```

### Tabs
```typescript
// initialize a single Tabs with an id
this.angular2MaterializeService.initTabs('#Tabs-id');

// initialize all Tabss with class .Tabs
this.angular2MaterializeService.initTabs('.tabs');

// initialization with options
this.angular2MaterializeService.initTabs('.tabs', {
  // insert options here
});
```

### TapTarget
```typescript
// initialize a single TapTarget with an id
this.angular2MaterializeService.initTapTarget('#TapTarget-id');

// initialize all TapTargets with class .tap-target
this.angular2MaterializeService.initTapTarget('.tap-target');

// initialization with options
this.angular2MaterializeService.initTapTarget('.tap-target', {
  // insert options here
});
```

### Timepicker
```typescript
// initialize a single Timepicker with an id
this.angular2MaterializeService.initTimepicker('#Timepicker-id');

// initialize all Timepickers with class .timepicker
this.angular2MaterializeService.initTimepicker('.timepicker');

// initialization with options
this.angular2MaterializeService.initTimepicker('.timepicker', {
  // insert options here
});
```

### Tooltip
```typescript
// initialize a single Tooltip with an id
this.angular2MaterializeService.initTooltip('#Tooltip-id');

// initialize all Tooltips with class .Tooltip
this.angular2MaterializeService.initTooltip('.tooltipped');

// initialization with options
this.angular2MaterializeService.initTooltip('.tooltipped', {
  // insert options here
});
```

### toast
```typescript
// initialization with options
this.angular2MaterializeService.toast({
  // insert options here
});

// dismiss toasts
this.angular2MaterializeService.dismissAllToasts();
```

### textareaAutoResize
```typescript
this.angular2MaterializeService.textareaAutoResize();
```

### updateTextFields
```typescript
this.angular2MaterializeService.updateTextFields();
```
