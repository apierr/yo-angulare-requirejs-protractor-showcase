## Yeoman Angular RequireJs showcase

### Setup

    > mkdir yeoman-angular-requirejs-showcase && cd $_
    > npm install -g generator-angular-require
    > yo angular-require

    # Answer in this way to the following questions 
    Would you like to use Sass (with Compass)? Yes
    Would you like to include Bootstrap? Yes
    Which modules would you like to include? default module

### Run the server and the test

    > grunt serve

    > grunt build 

    > grunt serve:dist

    > grunt test

### Configure Travis CI 

1. Update the Node.js version according the version of your local machine

Issues:

1. If you get the message `Error: EACCES` running the command `yo angular-require`, run the following command
> sudo npm install

2. If you get the message `No compatible version found: grunt-filerev@'>=0.2.2 <0.3.0’`, edit the packages.json file and change the ”grunt-filerev" to 0.2.0

3. If you get the message `Warning: No provider for "framework:jasmine"! (Resolving: framework:jasmine) Use --force to continue.`, it means that `karma-jasmine` module is missed.

> npm install karma-jasmine --save-dev

4. If you get the message `Warning: No provider for "framework:requirejs"! (Resolving: framework:requirejs) Use --force to continue.`,  it means that `karma-requirejs` module is missed.
> npm install karma-requirejs --save-dev

5. If you get the message `Can not load "PhantomJS", it is not registered!`, it means that the `karma-phantomjs-launcher` module is missed.
> sudo npm install karma-phantomjs-launcher --save-dev
