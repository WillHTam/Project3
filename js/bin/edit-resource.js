var serverURL = 'https://project3pockety.herokuapp.com/'
console.log('edit-tag.js loaded')


// card button launched modal
$(function listenEdit () {
  // listen for edit button
  $('.resources').on('click', '.edit-resource', function (event) {
    console.log(this)
    var resource = this;
    console.log(resource)
    var resourceID = resource.dataset.id
    console.log('heard edit click event for resource ID ' + resourceID)
    // editResource(resourceID)
  })
})

function editResource (resourceID) {
  console.log(resourceID)
  $.ajax({
    type: 'PUT',
    url: serverURL + 'resources',
    data: 'id=' + resourceID,
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
