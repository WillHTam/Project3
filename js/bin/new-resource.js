var serverURL = 'https://project3pockety.herokuapp.com/'

$(function () {
  // listen for the form login
  $('#new-resource-form').on('submit', function (event) {
    event.preventDefault()
    var formData = $(this).serialize()
    console.log("Submitting data:" + formData)
    newResource(formData)
  })
})

function newResource (formData) {

  var str1 = formData.split('&tags=')
  var str2 = str1[1].split('%2C')
  var result = [str1[0]]
  for (var i=0; i<str2.length; i++ ) {
    result.push(str2[i])
  }
  formData = result.join('&tags=')

  console.log(formData)
  $.ajax({
    type: 'POST',
    url: serverURL + 'resources',
    data: formData,
    beforeSend: function (xhr) {
      xhr.setRequestHeader('email', window.localStorage['email'])
      xhr.setRequestHeader('auth_token', window.localStorage['auth_token'])
      $('#submit').html('Stashing...');
      console.log('sending ajax for new resource')
    },
    success: function (response) {
      // then redirect
      window.location.href = 'dashboard.html'
    },
    error: function (xhr, ajaxOptions, thrownError) {
      // else output error
      console.log(xhr.status)
      console.log(thrownError)
      window.alert('Stashing New Resource Failed')
    },
    complete: function() {
      $('#submit').html('Stashed <i class="material-icons right">done</i>')
    }
  })
}
