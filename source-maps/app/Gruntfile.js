module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      demo: {
        options: {
          sourceMap: true,
          sourceMapName: 'source.map'
        },
        files: {
          'js/compressed.js': [
            'js/jquery.js',
            'js/setup.js',
            'js/script.js',
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [
    'uglify',
  ]);
};