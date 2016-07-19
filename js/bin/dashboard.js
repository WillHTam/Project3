$(document).ready(function() {

  var serverURL = 'https://project3pockety.herokuapp.com/'
  var currentUser = null

  // We are assuming Local Storage is supported
  $(function () {
    if (!window.localStorage['email'] || !window.localStorage['auth_token']) window.location.href = 'login.html'
    else loadResources()
  })

  // load page jquery and user greeting
  $('.modal-trigger').leanModal();
  $('.greeting').html("Welcome, " + window.localStorage['email'])

  // populate resource cards
  function loadResources () {
    $.ajax({
      // url: serverURL + 'allresources',
      type: 'GET',
      url: serverURL + 'resources',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('email', window.localStorage['email'])
        xhr.setRequestHeader('auth_token', window.localStorage['auth_token'])
        console.log('sending ajax for loading resources')
      },
      success: function (response) {
        console.log('receive response from server: ' + response)
        $.each(response, function (index, item) {
          $('.cards').append('<div class="col s6"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="images/work3.jpg"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4" style="line-height: 1.5;"><i class="material-icons right">more_vert</i>' + item.title + '</span><p><br><div class="chip">Tag</div><div class="chip">Tag 2 yo!<!-- <i class="material-icons">close</i> --></div></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>' + item.title + '</span><p>' + item.summary + '</p><p><br><div class="chip">Tag<i class="material-icons">close</i></div><div class="chip">Tag 2 yo!<i class="material-icons">close</i></div></p></div><div class="card-action">' + '<img class="favicon" src="' + 'http://www.google.com/s2/favicons?domain=' + item.site_name + '">' + '<span class="resource-site_name">' + item.site_name + '</span><a href="' + item.url + '" class="resource-original" target="_blank">Open original<i class="material-icons right">open_in_new</i></a></div></div></div>'
        )
      })
    }, // end success action
    // error: function (xhr, ajaxOptions, thrownError) {
    //   // else error, redirect to login
    //   window.location.href = 'login.html'
    // }
  }) // end ajax call
} // end function loadResources

// // add new resource
// $(function () {
//   // listen for the add new resource form
//   $('#login-form').on('submit', function (event) {
//     event.preventDefault()
//     var formData = $(this).serialize()
//     login(formData)
//   })
// })
//
// function login (formData) {
//   $.ajax({
//     type: 'POST',
//     url: serverURL + 'login',
//     data: formData,
//     success: function (response) {
//       // success save the repsonse
//       window.localStorage.email = $('#email').val()
//       window.localStorage.auth_token = response.auth_token
//       // then redirect
//       window.location.href = 'dashboard.html'
//     },
//     error: function (xhr, ajaxOptions, thrownError) {
//       // else output error
//       console.log(xhr.status)
//       console.log(thrownError)
//       window.alert('Login Failed')
//     }
//   })
// }

}) // end document ready
