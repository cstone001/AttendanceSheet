var myarr = [];
var size = 5;

function addTo() {
   myarr = myarr.filter(Boolean); //DOESN'T STORE EMPTY ARRAY VALUES
   myarr.push(document.getElementById("Input").value);
   console.log(myarr);
}

$('#new').click( function() {
   var input = $('#Input').val();
   
  if($("#Input").val() == '') {
    $('#alert').html("<strong>Warning!</strong> You didn't enter a name");
    $('#alert').fadeIn().delay(1500).fadeOut();

    return false;
  } else if (myarr.length > size) {
    $('#alert').html("<strong>Warning!</strong> Your class is full");
    $('#alert').fadeIn().delay(3000).fadeOut();

    $("#Input").hide()
    $("#new").hide()
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
  //ON DOUBLE CLICK REMOVE STUDENT'S NAME AND SLIDE UP
  $(document).ready(function(){
      $("li").dblclick(function(){
          $(this).slideUp('slow', function (){
            $(this).remove();
          });
      });
  }); 
});
