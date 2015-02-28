'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var ModuleGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.npmInstall();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    this.appname = path.basename(process.cwd());

    // have Yeoman greet the user
    console.log(chalk.magenta('ES6 Module Generator'));

    var prompts = [{
      name: 'appname',
      message: 'What would you like to call your module?',
      default : this.appname,
    },
    {
      name: 'creatorName',
      message: 'What is your name?'
    },
    {
      name: 'githubUser',
      message: 'What is your github user name?'
    },
    {
      name: 'email',
      message: 'What is your email?'
    }];

    this.prompt(prompts, function (props) {

      this.appname = props.appname || this.appname;
      this.creatorName = props.creatorName;
      this.githubUser = props.githubUser;
      this.email = props.email;
      this.appRoot = path.basename(process.cwd()) === this.appname ? this.destinationRoot() : path.join(this.destinationRoot(), this.appname);

      if (process.cwd() !== this.appRoot) {
          this.mkdir(this.appRoot);
          process.chdir(this.appRoot);
      }

      done();
    }.bind(this));
  },

  app: function () {


    this.mkdir('lib');
    this.mkdir('test');

    this.template('_package.json', 'package.json');
  },

  projectfiles: function () {
    this.copy('gitignore', '.gitignore');
    this.copy('npmignore', '.npmignore');

    this.copy('README.md');
    this.copy('CHANGELOG.md');

    this.copy('lib/index.js');

    this.copy('test/harness.js');
    this.template('test/test.js', 'test/test-' + this.appname + '.js');
  }
});

module.exports = ModuleGenerator;
