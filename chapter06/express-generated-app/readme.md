## Setup
  ```
    npx express-generator --view=ejs express-generated-app
  ```

## Options
  The express-generator can scaffold applications with the following view engines:
  + EJS (--view=ejs) 
  + Handlebars (--view=hbs)
  + Hogan.js (--view=hjs)
  + pug (--view=pug)
  + Twig (--view=twig)
  + Vash (--view=vash)
  
  It's also possible to generate your application without a view engine by specifying the `--no-view` argument.

  JADE VERSUS PUG

  Jade is the former name for the Pug templating engine. The express-generator will currently default to using Jade if you omit the --view argument, but the jade module has not been maintained since the rename to Pug. It is therefore always recommended to specify the --view or --no-view arguments, as the jade module has been deprecated.

  You can also specify which CSS engine you'd like to use via the --css argument. The following CSS engines are supported:
  + LESS
  + Stylus
  + Compass
  + Sass