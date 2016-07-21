var serverURL = 'https://project3pockety.herokuapp.com/'
console.log('edit-tag.js loaded')

// $('.modal-trigger').leanModal();

$(function listenEdit () {
  // listen for edit button
  $('.resources').on('click', '.edit-resource', function (event) {
    $('#inner-tags').append(
    '<form id="edit-resource-form" class="col s12" action="https://project3pockety.herokuapp.com/resource" method="post" style="padding: 20px;"><div class="row"><div class="input-field col s12"><label for="tags">Tags</label><input type="text" name="tags" id="tags" value data-role="materialtags"></div></div><button class="btn waves-effect waves-light" type="submit" name="action" id="submit">Update Tags<i class="material-icons right">send</i></button></form>' +

    '<div class="modal-footer"><a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a></div>'
    )
    $(this).closest('.edit-resource').hide()
    $(this).closest('.modal-close').on('click', function () {
      console.log('cancel clicked')
      $(this).closest('form').remove()
      $(this).closest('.modal-footer').remove()
      $(this).closest('.edit-resource').show()
    })

    console.log(this)
    var resource = this;
    console.log(resource)
    var resourceID = resource.dataset.id
    console.log('heard edit click event for resource ID ' + resourceID)
  })
})

$(function () {
  // listen for the form login
  $('#edit-resource-form').on('submit', function (event) {
    event.preventDefault()
    var formData = $(this).serialize()
    editResource(formData)
  })
})

function editResource (formData) {
  var str1 = formData.split('&tags=')
  var str2 = str1[1].split('%2C')
  var result = [str1[0]]
  for (var i=0; i<str2.length; i++ ) {
    result.push(str2[i])
  }
  formData = result.join('&tags=')

  console.log('Form data is' + formData)
  $.ajax({
    type: 'POST',
    url: serverURL + 'resource',
    data: 'tags=' + formData,
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
