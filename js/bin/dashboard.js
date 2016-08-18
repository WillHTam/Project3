$(document).ready(function() {

  var serverURL = 'https://project3pockety.herokuapp.com/'
  var currentUser = null

  // We are assuming Local Storage is supported
  // logged out
  $(function () {
    if (!window.localStorage['email'] || !window.localStorage['auth_token']) {
      // $('#login-state').html('Login')
      window.location.href = 'register.html'
    }
    else loadResources()
  })

  //logged in
  // load page jquery and user greeting
  $('.modal-trigger').leanModal();
  $('.greeting').html("Welcome, " + window.localStorage['email'])
  $(".dropdown-button").dropdown();
  $('#login-state').html('Logout').on('click', function() {
    delete window.localStorage.email
    delete window.localStorage.auth_token
    // then redirect
    window.location.href = 'register.html'
  })

  // populate resource cards
  function loadResources () {
    $.ajax({
      // url: serverURL + 'allresources',
      type: 'GET',
      url: serverURL + 'resources',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('email', window.localStorage['email'])
        xhr.setRequestHeader('auth_token', window.localStorage['auth_token'])
        console.log('Loading resources')
      },
      success: function (response) {
        console.log('Received resources from server: ' + response)
        $('.resources').append('<div class="row cards" id="masonry-grid"></div>')
        $.each(response, function (index, item) {
          $('.cards').prepend(
            '<div class="col s4"><div class="card" id="resource" data-id="' + item._id + '"><div class="card-image waves-effect waves-block waves-light"><img class="activator" style="height: 200px" src="' + item.thumbnail + '"></div>' + '<div class="card-content"><span class="card-title activator grey-text text-darken-4 line-clamp" style="line-height: 1.5;"><i class="material-icons right">more_vert</i>' + item.title + '</span><br><br><div id="outer-tags"></div>' + '</div><div class="card-reveal"><span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>' + item.title + '</span><p>' + item.description + '</p><br><div id="inner-tags">' + '</div><br><br><button class="btn waves-effect waves-light edit-resource modal-trigger" href="#edit-resource-modal" type="submit" name="action" id="submit" data-id="' + item._id + '">Edit Tags<i class="material-icons">edit</i></button><br><br><button class="btn waves-effect waves-light delete-resource" type="submit" name="action" id="submit" data-id="' + item._id + '">Delete<i class="material-icons">delete</i></button></div>' +
            '<div class="card-action">' + '<img class="favicon" src="' + 'https://www.google.com/s2/favicons?domain=' + item.site_name + '">' + '<span class="resource-site_name">' + item.site_name + '</span><a href="' + item.url + '" class="resource-original" target="_blank">Open<i class="material-icons right">open_in_new</i></a></div></div></div>'
          )
          // show tags if there are any
          for (var i = 0; i < item.tags.length; i++) {
            if (item.tags[i]) {
              $('#outer-tags').append('<div class="chip">' + item.tags[i] + '</div>')
              $('#inner-tags').append('<div class="chip">' + item.tags[i] + '</div>')
            }}
          }) // end loop populating cards

          $('#masonry-grid').masonry({
            columnWidth: '.col',
            itemSelector: '.col',
          }); // reapply masonry to all content

        }, // end success action
        error: function (xhr, ajaxOptions, thrownError) {
          // else error, redirect to login
          window.location.href = 'login.html'
        }
      }) // end ajax call
    } // end function loadResources

  }) // end document ready
