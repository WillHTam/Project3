var serverURL = 'https://project3pockety.herokuapp.com/'
console.log('edit-tag.js loaded')

$(function listenEdit () {
  // listen for edit button
  $('.resources').on('click', '.edit-resource', function (event) {
    $('header').append(
    '<div id="edit-resource-modal" class="modal open" style="z-index: 1003; display: block; opacity: 1; transform: scaleX(1); top: 10%;">' +

    '<div class="modal-content"><h4 class="header"></h4><form id="edit-resource-form" class="col s12" action="https://project3pockety.herokuapp.com/resources" method="post"><div class="row"><div class="input-field col s12"><label for="tags">Tags</label><input type="text" name="tags" id="tags" value data-role="materialtags"></div></div><button class="btn waves-effect waves-light" type="submit" name="action" id="submit">Update<i class="material-icons right">send</i></button></form></div>' + 

    '<div class="modal-footer"><a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Cancel</a></div></div>'
    )

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
