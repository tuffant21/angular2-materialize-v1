# angular2-materialize-v1
Angular 2 support for Materialize CSS v1.0+ framework.

## Getting Started
Feel free to take a look at the example-project to help you get started. 

First, install materialize-css at the latest version if you haven't already
> npm install materialize-css@next

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
