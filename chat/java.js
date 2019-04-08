var main = function() {

  $('form').submit(function(event) {
   var $input = $(event.target).find('input');
   var comment = $input.val();

   if (comment !== "") {
      var html = $('<p class="text">').text(comment);
      html.appendTo('#messages');
      $input.val("");
    }
    return false;
  });
};

$(document).ready(main);

