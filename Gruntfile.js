module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      karma: {
        files: ['src/{,**/}*.coffee'],
        tasks: ['coffeelint', 'karma:unit:run']
      }
    },

    coffee: {
      dist: {
        options: {
          bare: true
        },
        files: [{
          'angular-notifications.js': 'src/notifications.coffee'
        }]
      }
    },

    coffeelint: {
      files: 'src/{,**/}*.coffee'
    },

    concat: {
      "angular-notifications.tpl.js": {
        src: 'angular-notifications.js',
        dest: 'angular-notifications.tpl.js'
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      },

      ci: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    ngmin: {
      withoutTemplates: {
        src: 'angular-notifications.js',
        dest: 'angular-notifications.min.js',
      },
      withTemplates: {
        src: 'angular-notifications.tpl.js',
        dest: 'angular-notifications.tpl.min.js'
      }
    },

    ngtemplates: {
      module: {
        options: {
          base: 'src',
          prepend: 'notifications/',
          app: 'notifications',
          concat: 'angular-notifications.tpl.js'
        },
        src: 'src/notifications.tpl.html',
        dest: 'angular-notifications.tpl.js'
      }
    },

    uglify: {
      dist: {
        files: ['angular-notifications.min.js', 'angular-notifications.tpl.min.js']
      }
    }
  });

  grunt.registerTask('build', [
    'coffee',
    'ngtemplates',
    'concat',
    'ngmin',
    'uglify'
  ]);

  // Default task.
  grunt.registerTask('default', ['watch']);
};
