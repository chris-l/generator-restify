/*jslint node: true, indent: 2 */
'use strict';
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg     : grunt.file.readJSON('package.json'),
    <% if (useJSLint) { %>jslint  : {
      all     : {
        src : ['package.json', 'Gruntfile.js', 'index.js', 'routes/**/*.js', 'common/**/*.js', 'tests/**/*.js'],
        directives : {
          indent : 2,
          node : true
        }
      }
    },<% } else { %>jshint  : {
      all     : ['package.json', 'Gruntfile.js', 'index.js', 'routes/**/*.js', 'common/**/*.js', 'tests/**/*.js']
    },<% } %>
    jasmine_node : {
      options : {
        extensions: 'js',
        specNameMatcher: 'spec'
      },
      all     : [
        'tests/'
      ]
    }
  });

  grunt.loadNpmTasks('<% if (useJSLint) { %>grunt-jslint<% } else { %>grunt-contrib-jshint<% } %>');
  grunt.loadNpmTasks('grunt-jasmine-node');

  // Default task(s).
  grunt.registerTask('default', [
    '<% if (useJSLint) { %>jslint<% } else { %>jshint<% } %>',
    'jasmine_node'
  ]);

};

