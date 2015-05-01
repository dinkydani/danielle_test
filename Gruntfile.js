module.exports = function(grunt) {

  "use strict";

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          "src/stylesheets/application.css":"src/stylesheets/application.scss"
        }
      }
    },

    handlebars: {
      options: {
        namespace: "Squarecat.templates"
      },
      all: {
        src: ["src/templates/*.hbs"],
        dest: "src/javascript/templates.js"
      }
    },

    watch: {
      sass: {
        files: ["src/stylesheets/**/*.scss"],
        tasks: ["sass"]
      },
      handlebars: {
        files: ["src/templates/**/*.hbs"],
        tasks: ["handlebars"]
      }
    },

    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      all: ["Gruntfile.js", "src/javascript/**/*.js", "!src/javascript/templates.js"]
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-contrib-handlebars");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default task(s).
  grunt.registerTask("default", ["jshint", "sass", "handlebars", "watch"]);

};