var serverURL = 'https://project3pockety.herokuapp.com/'

$(function () {
  // listen for the form login
  $('#login-form').on('submit', function (event) {
    event.preventDefault()
    var formData = $(this).serialize()
    login(formData)
  })
})

function login (formData) {
  $.ajax({
    type: 'POST',
    url: serverURL + 'login',
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
      window.alert('Login Failed')
    }
  })
}
