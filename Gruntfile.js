const clean = require('postcss-clean');
const cssnext = require('postcss-cssnext');
const importer = require('postcss-easy-import');
const stylelint = require('stylelint');

module.exports = function (grunt) {
  grunt.initConfig({
    postcss: {
      options: {
        map: {
          inline: false,
          annotation: 'dist/css',
        },
        processors: [
          importer(),
          stylelint(),
          cssnext(),
          clean({
            level: 2,
          }),
        ],
      },
      dist: {
        src: 'src/css/index.css',
        dest: 'dist/css/index.min.css',
      },
    },
    watch: {
      css: {
        files: ['src/css/**/*.css'],
        tasks: ['postcss'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', []);
  grunt.registerTask('css', ['postcss']);
};
