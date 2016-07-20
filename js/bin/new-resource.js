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
  console.log(formData)
  $.ajax({
    type: 'POST',
    url: serverURL + 'resources',
    data: formData,
    beforeSend: function (xhr) {
      xhr.setRequestHeader('email', window.localStorage['email'])
      xhr.setRequestHeader('auth_token', window.localStorage['auth_token'])
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
    }
  })
}
