$(document).ready(function() {
  $.ajax({
    url: '/comments',
    type: 'get',
    dataType: 'json'
  })
  .done(function(data) {
    console.log(data);
  });
});
