/*jslint node: true, indent: 2 */
'use strict';
var util, path, yeoman, chalk, RestifyGenerator;

util = require('util');
path = require('path');
yeoman = require('yeoman-generator');
chalk = require('chalk');


RestifyGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done, prompts;

    done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You are using a restify generator'));

    prompts = [
      {
        type: 'list',
        name: 'lint',
        message: 'What code linter would you prefer to use?',
        choices: [
          'jshint',
          'jslint'
        ],
        default: 0
      }
    ];

    this.prompt(prompts, function (props) {
      this.useJSLint = props.lint === 'jslint';

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('common');
    this.mkdir('routes');
    this.mkdir('tests');

    this.copy('_package.json', 'package.json');
    this.copy('_index.js', 'index.js');
    this.copy('routes/index.js', 'routes/index.js');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
  }
});

module.exports = RestifyGenerator;
