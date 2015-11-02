// Thanks to Paul Irish
// https://dl.dropboxusercontent.com/u/39519/sourcemapapp/index.html

$('button').click(function(e) {
  var text = $(this).text().trim();

  document.body.style.backgroundColor = text;
});