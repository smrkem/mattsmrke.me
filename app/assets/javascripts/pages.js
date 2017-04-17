$( function() {
  $('#messageMeModal').on('shown.bs.modal', function () {
    $('#message-me-body').focus()
  });

  $('#message-me-send').click( function() {
    var message = $('#message-me-body').val();
    send_message(message);
  });
});

function send_message(message) {
  $.ajax({
    type: 'POST',
    url: 'messages',
    dataType: 'json',
    data: { message: message },
    success: function(data) {
      show_modal(data.message);
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log(xhr.status);
      console.log(thrownError);
    }
  });
}

function show_modal(message) {
  $('.modal-content').fadeOut('fast', function(){
    $('.modal-title').text("Thanks");
    $('.modal-body').html('<p>' + message + '</p>');
    $('#message-me-send').remove();
    $(this).fadeIn('fast');
  });
}
