$('#new').click( function() {
   var input = $('#Input').val();
  if($("#Input").val() == '') {
    $('#alert').html("<strong>Warning!</strong> You didn't enter a name");
    $('#alert').fadeIn().delay(1500).fadeOut();

    return false
  }
   $("#students").append('<li>' + input + '</li>');

   $('#form')[0].reset();
   var students = $('#students').html();
   localStorage.setItem('students', students);
   return false;
});

if(localStorage.getItem('students')) {
$('#students').html(localStorage.getItem('students'));
}

$('#erase').click( function() {
window.localStorage.clear();
location.reload();
return false;
});


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('present');
  }
});
