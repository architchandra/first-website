
var request;

$('#contact-form').submit(function(event)  {
  if(request)  {
    request.abort();
  }

  var $form = $(this);
  var $inputs = $form.find("input, select, button, textarea");
  var serializedData = $form.serialize();
  $inputs.prop('disabled', true);

  request = $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzpq7ub1RxAZgOd8Lv9aG_97O1FEx6D_ttzGnwTKB77TOQtFNlK/exec",
    type: "post",
    data: serializedData
  });

  request.done(function(response, textStatus, jqXHR){
    var $html = '<div class="alert alert-success">' + response + '</div>';
    $('.response-msg').html($html);
    $('#contact-form')[0].reset();
    console.log(response);
    console.log(textStatus);
    console.log(jqXHR);
  });

  request.fail(function(jqXHR, textStatus, errorThrown){
    var $html = '<div class="alert alert-danger">' + response + '</div>';
    $('.response-msg').html($html);
    $('#contact-form')[0].reset();
    console.log("The following error occurred: " + textStatus, errorThrown);
  });

  request.always(function(){
    $inputs.prop("disabled", false);
  });

  event.preventDefault();

});
