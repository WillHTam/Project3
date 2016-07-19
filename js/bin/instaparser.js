console.log('instaparser.js loaded')

$(document).ready(function () {
  $.ajax({
    url: 'https://www.instaparser.com/api/1/article',
    data: {
      api_key: 'c6eaaf5f735c4dfc9b96d3bc7fbf104c',
      url: 'http://edition.cnn.com/2016/07/18/politics/mike-pence-mothers-day-care/index.html'
    },
    success: function (result) {
      console.log("Successful request to instaparser!")
      $('.title').html(result.title);
    },
    error: function () {
      console.log('ajax error')
    }
  });
})
