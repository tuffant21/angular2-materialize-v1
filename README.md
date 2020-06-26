# angular2-materialize-v1
Angular 2 support for Materialize CSS v1.0+ framework.

This project has 0 dependencies and requires no dependencies to be installed on your production server. Forget the need 
to install hammerjs or jquery. It is made with vanilla JavaScript and vanilla Angular. 

## Getting Started
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
