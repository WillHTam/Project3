// $(document).ready(function(){
//
//
//   $('#form').on('submit', function (event) {
//     var first_name = $('#first_name').val();
//     var last_name = $('#last_name').val();
//     var email = $('#email').val();
//     var password = $('#password').val();
//     $.ajax({
//       url: "https://project3pockety.herokuapp.com/register",
//       type: post,
//       success: function (data) {
//         $.post(" ", function (data) {
//           $('#poster').html('');
//         })
//       }, // end success
//       error: function (request, errorType, errorMessage) {
//         alert('Error: ' + errorType + ', ' + errorMessage + ' :(');
//       },
//       timeout: 3000,
//       beforeSend: function () {
//         $('#submit').attr('value', 'submitting...');
//       },
//       complete: function () {
//         $('#search').attr('value', 'Submitted!');
//       }
//     });  // end poster getJSON
//   }); // end submit event
//
//
// }); // end document ready
