/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


 var createTweetElement = function (tweetData){

 let $tweet = $("<article>").addClass("tweet");

 let $img = $("<img>").addClass("tweet-img").attr("src", tweetData.user.avatars.small);
 let $h3 = $("<h3>").addClass("tweet-h3").text(tweetData.user.name);
 let $address = $("<address>").addClass("tweet-address").text(tweetData.user.handle);
 let $header = $("<header>").addClass("tweet-header");

 $header.append($img).append($h3).append($address);

 let $p = $("<p>").text(tweetData.content.text);
 let $footer = $("<footer>").addClass("tweet-footer");//.text(tweetData.created_at);
 let $timestamp = $("<div>").addClass("timestamp").text(moment(tweetData.created_at).fromNow()).appendTo($footer);
 let $pIcons = $("<div>").addClass("icons").appendTo($footer);
 let $iflag =$("<i>").addClass("far fa-flag").appendTo($pIcons);
 let $iRetweet =$("<i>").addClass("fas fa-retweet").appendTo($pIcons);
 let $iHeart =$("<i>").addClass("far fa-heart").appendTo($pIcons);


 $tweet.append($header).append($p).append($footer);


 return $tweet;
}


//----------------------------------------------

function renderTweets(tweets){
  tweets.forEach(element =>{
    $('#tweets-container').prepend(createTweetElement(element));
  });
}


$(document).ready(function(){


  function loadTweets(){
    $.ajax('tweets/', { method: 'GET' })
    .then(function (res) {
      renderTweets(res);
    });
  }//end function loadtweets

  loadTweets(); //initial load

  $('form').on('submit', function(event) {
       event.preventDefault();
       console.log('heard submit event');
       let data = $(this).serialize();
       console.log('data', data);

      $.ajax({
         url: '/tweets',
         method: 'POST',
         data: data
        }).then(
         (res) => {
           loadTweets();
           let form = document.getElementById('tweet-form');
           form.reset();
         }, // success (200-300)
         (err) => { console.log('error') } // 400-500
        )
      });

});

