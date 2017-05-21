var btn = $("button");

$(document).ready(function() {


  btn.on("click", function() {
      url();
  });

  function url() {
    var url = "http://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";
    var tweet = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

    $.getJSON(url, function(data) {
      // console.log(data);
      $(".quote").html(data.quoteText);

      if (data.quoteAuthor.length > 0) {
          $(".author").html(data.quoteAuthor);
          $("a").attr("href", tweet + data.quoteText + " - " + data.quoteAuthor);
      }

      else {
        $(".author").html("Author: Unknown");
        $("a").attr("href", tweet + data.quoteText + " - Unknown");
      }


    });

  }

});
