var serverURL = 'https://project3pockety.herokuapp.com/'

$(function () {
  // listen for the form login
  $('#register-form').on('submit', function (event) {
    event.preventDefault()
    var formData = $(this).serialize()
    signin(formData)
  })
})

function signin (formData) {
  $.ajax({
    type: 'POST',
    url: serverURL + 'register',
    data: formData,
    success: function (response) {
      // then redirect to login page
      window.location.href = 'login.html'
    },
    error: function (xhr, ajaxOptions, thrownError) {
      // else output error
      console.log(xhr.status)
      console.log(thrownError)
      window.alert('Registration Failed')
    }
  })
}
