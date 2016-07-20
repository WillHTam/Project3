var serverURL = 'https://project3pockety.herokuapp.com/'
console.log('delete-resource.js loaded')

$(function listenDelete () {
  // listen for delete button
  $('.cards').on('click', '#delete', function (event) {
    console.log('heard click!')
    var resource = document.getElementById('resource');
    var resourceID = resource.dataset.id
    console.log('heard delete click event for resource ID ' + resourceID)
    deleteResource(resourceID)
  })
})

function deleteResource (resourceID) {
  console.log(resourceID)
  $.ajax({
    type: 'DELETE',
    url: serverURL + 'resources',
    data: resourceID,
    beforeSend: function (xhr) {
      xhr.setRequestHeader('email', window.localStorage['email'])
      xhr.setRequestHeader('auth_token', window.localStorage['auth_token'])
      xhr.setRequestHeader('id', resourceID)
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
      window.alert('Deleting Resource Failed')
    }
  })
}
