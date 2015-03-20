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

    > grunt serve # test the  live reload server 

    > grunt build 

    > grunt serve:dist

    > grunt test

### Configure Travis CI 

1. Update the Node.js version according the version of your local machine


### Configure protractor with grunt

1. Install the `grunt-protractor-runner` module instead of `protractor`

2. Edit the `Gruntfile.js` file adding the line 

        grunt.loadNpmTasks('grunt-protractor-runner');

3. In your project's Gruntfile, add a section named protractor to the data object passed into grunt.initConfig().

        grunt.initConfig({
          protractor: {
            options: {
              configFile: "node_modules/protractor/example/conf.js", // Default config file
              keepAlive: true, // If false, the grunt process stops when the test fails.
              noColor: false, // If true, protractor will not use colors in its output.
              args: {
                // Arguments passed to the command
              }
            },
            your_target: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
              options: {
                configFile: "e2e.conf.js", // Target-specific config file
                args: {} // Target-specific arguments
              }
            },
          },
        })

4 Copy the protractor test and configuration from this [repository](https://github.com/angular/protractor/tree/master/example).

5. Run the `grunt protractor` command trying to fix possible errors.

        > grunt protractor

### Issues:

1. If you get the message `Error: EACCES` running the command `yo angular-require`, run the following command

        > sudo npm install

2. If you get the message `No compatible version found: grunt-filerev@'>=0.2.2 <0.3.0’`, edit the packages.json file and change the ”grunt-filerev" to 0.2.0

3. If you get the message `Warning: No provider for "framework:jasmine"! (Resolving: framework:jasmine) Use --force to continue.`, it means that `karma-jasmine` module is missed.

        > npm install karma-jasmine --save-dev

4. If you get the message `Warning: No provider for "framework:requirejs"! (Resolving: framework:requirejs) Use --force to continue.`,  it means that `karma-requirejs` module is missed.

        > npm install karma-requirejs --save-dev

5. If you get the message `Can not load "PhantomJS", it is not registered!`, it means that the `karma-phantomjs-launcher` module is missed.

        > sudo npm install karma-phantomjs-launcher --save-dev

6. If you get the message `[launcher] Error: Error: Could not find chromedriver at ...` you need to run the following command:

        > ./node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update

7. If you get the message `Warning: Couldn't find the `compass` binary.` using the `Travis CI`you should add in your `.travis.yml` file, in the `before_script` section, the command:

        - 'gem update --system'
        - 'gem install compass'
