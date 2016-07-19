var serverURL = 'https://project3pockety.herokuapp.com/'

$(function () {
  // listen for the form login
  $('#new-resource-form').on('submit', function (event) {
    event.preventDefault()
    var formData = $(this).serialize()
    newResource(formData)
  })
})

function newResource (formData) {
  $.ajax({
    type: 'POST',
    url: serverURL + 'resource',
    data: formData,
    success: function (response) {
      // success save the repsonse
      window.localStorage.email = $('#email').val()
      window.localStorage.auth_token = response.auth_token
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
