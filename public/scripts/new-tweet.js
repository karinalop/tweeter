$(document).ready(function() {
  // --- our code goes here ---
  //console.log(window);
  var text = $('textarea[name=text]');
  let counter = $('span.counter');
  var button = $('#tweet-submit');
  //console.dir();

  text.on('keyup', function(event){
    let cLeft = 140 - $(this).val().length;
    counter.text(cLeft);
    if(cLeft < 0){
      $('span.counter').css("color", "red");
      //alert("Tweet is too long");
      $('.tweet-error').text("Tweet is too long!!!");
      $('.tweet-error').css('display', 'block');
    }
    if($(this).val().length > 0 && $(this).val().length <= 140){
      $('.tweet-error').css('display', 'none');
    }

  });

  button.on('click', function(event){
    if(text.val().length === 0){
      //alert("Tweets can't be empty");
      $('.tweet-error').text("XXX Tweet can't be empty!!!");
      $('.tweet-error').css('display', 'block');
      event.preventDefault();
    }
    if(text.val().length > 140){
      event.preventDefault();
      $('.tweet-error').text("Tweet is too long!!!");
      $('.tweet-error').css('display', 'block');
    }

  }); //end button.on

  $('#compose').on('click', function () {
         $('.new-tweet').slideToggle();
         $('textarea').focus();
  });
}); // end document.ready