// Code goes here

$(document).ready(function(){
  
  alert("Document loaded!");
  
  $('#link1').click(function() {
  
    alert("You clicked on a link!");
  
  });

  $('#button1').click(function() {
  
   $(this).hide();
  
  });
  
  $('#button2').click(function() {
    
    $('#image1').hide();
    
  });

  $('#button3').click(function() {
    
    $('#image1').show();
    
  });

  // Clicking button 4 will hide the image,
  // change the text on the button
  // and allow to make the image re-appear.
  
  $('#button4').click(function() {
  
    if ($('#image2').is(':visible')) {
 
      $('#image2').hide();
      $('#button4').html('Click me again and image will be shown again!');
         
    }
    
    else {

      $('#image2').show();
      $('#button4').html('Click me, and magic will happen!');
      
    }
  

  });
  
  $('#submit').click(function(event) {
    
    event.preventDefault();

    
    $('h1').html('Changed the header text');
    var name = $('input[name=name]').val();
    console.log(name);
    var email = $('input[name=email]').val();
    console.log(email);
    
    // Change the input of name to another value. For demo:
    $('input[name=name]').val('Value set');  });
  
});



