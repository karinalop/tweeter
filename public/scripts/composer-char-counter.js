$(document).ready(function() {
  // --- our code goes here ---
  //console.log(window);
  var text = $('textarea[name=text]');

  let counter = $('span.counter');
  console.dir(counter);

  text.on('keyup', function(event){
    let cLeft = 140 - $(this).val().length;
    counter.text(cLeft);
    if(cLeft < 0){
      $('span.counter').css("color", "red");
    }

  });
});