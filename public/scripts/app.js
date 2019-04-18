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
 let $footer = $("<footer>").addClass("tweet-footer").text(tweetData.created_at);

 $tweet.append($header).append($p).append($footer);


 return $tweet;
}


// Fake data taken from tweets.json
/*
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];
*/

function creatTweetDataObject(str){

}


//----------------------------------------------

function renderTweets(tweets){
  tweets.forEach(element =>{
    $('#tweets-container').prepend(createTweetElement(element));
  });
}

// Test / driver code (temporary)


$(document).ready(function(){
    //renderTweets(data);

  function loadTweets(){
    $.ajax('tweets/', { method: 'GET' })
    .then(function (res) {
      //console.log('Success: ', res);
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

