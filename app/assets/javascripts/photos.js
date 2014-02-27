$(document).ready(function() {
  CommentApp.$photosDiv = $('#all_photos');

  $.ajax({
    url: '/photos',
    type: 'get',
    dataType: 'json'
  })
  .done(function(data) {
    CommentApp.renderAllPhotos(data);
  });
});

CommentApp = CommentApp || {};

CommentApp.renderAllPhotos = function(photos) {
  var numPhotos = photos.length, i = 0;
  for(; i < numPhotos; i++) {
    CommentApp.renderPhoto(photos[i]);
  }
};

CommentApp.renderPhoto = function(photo) {
  var $photoImg = $('<img>', {src: photo.url});
  this.$photosDiv.append($photoImg);
}
