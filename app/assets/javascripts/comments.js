$(document).ready(function() {
  CommentApp.$commentsDiv = $('#all_comments');

  $.ajax({
    url: '/comments',
    type: 'get',
    dataType: 'json'
  })
  .done(function(data) {
    CommentApp.renderAllComments(data);
  });
});

CommentApp = CommentApp || {};

CommentApp.renderAllComments = function(comments) {
  var numComments = comments.length, i = 0;
  for(; i < numComments; i++) {
    CommentApp.renderComment(comments[i]);
  }
};

CommentApp.renderComment = function(comment) {
  var $commentDiv = $('<div>', {text: comment.content});
  this.$commentsDiv.append($commentDiv);
}
