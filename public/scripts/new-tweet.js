$(document).ready(function() {
  // --- our code goes here ---

  var text = $('textarea[name=text]');
  let counter = $('span.counter');
  var button = $('#tweet-submit');
  var form = $('#tweet-form');

  text.on('keyup', function(event){
    let cLeft = 140 - $(this).val().length;
    counter.text(cLeft);
    if(cLeft < 0){
      $('span.counter').css("color", "red");
      $('.tweet-error').text("Tweet is too long!!!");
      $('.tweet-error').css('display', 'block');
    }
    if($(this).val().length >= 0 && $(this).val().length <= 140){
      $('.tweet-error').css('display', 'none');
      $('span.counter').css("color", "black");
    }

  });//end text.on

  button.on('click', function(event){
    if(text.val().length === 0){
      $('.tweet-error').text("Tweet can't be empty!!!");
      $('.tweet-error').css('display', 'block');
      event.preventDefault();
    }
    if(text.val().length > 140){
      event.preventDefault();
      $('.tweet-error').text("Tweet is too long!!!");
      $('.tweet-error').css('display', 'block');
      $('textarea').focus();
    }

  }); //end button.on

  $('#compose').on('click', function () {
         $('.new-tweet').slideToggle();
         $('textarea').focus();
  }); //end compose.on

  form.on('submit',function(){
    counter.text(0);
    counter.css("color", "black");
    $('textarea').focus();

  }); //end form.on

}); // end document.ready