$(document).ready(function() {

  $.ajax({
    url: 'http://project3pockety.herokuapp.com/allresources',
    success: function (data) {
      $('#cards').append('<div>HI</div>')
      // $.each(data, function (index, item) {
      //   $('#cards').append('<div class="col s6"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="images/work3.jpg"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">Date from InstaParser goes here</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span><p>Here is the summary to be grabbed from Instaparser on the server side.</p></div><div class="card-action"><a href="' + item.url + '">Go to original</a></div></div></div>'
      //   )
      // })
    }

  })


}) // end document ready