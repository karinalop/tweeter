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
      alert("Tweet is too long");
    }

  });

  button.on('click', function(event){
    if(text.val().length === 0){
      alert("Tweets can't be empty");
      event.preventDefault();
    }
  });
}); // end document.ready