
// display or hide input field on click on +
$('.fa-plus').on('click', function(){
  $('input').slideToggle();
})


// change css style on click on a to do
$('ul').on('click', 'li', function(){
  $(this).toggleClass('done');
})


// add tex on keypress in input
$('input').on('keypress', function(e){
  if (e.which === 13) {
      value = $('input').val();
      $('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + value + '</li>');
      $('input').val('');
  }
})

// delete to do
$('ul').on('click','span', function(e){
  e.stopPropagation(); // click on X ll stop the propagation the li ll be remove but the css ll not chage it at done
  $(this).parent().fadeOut();
})
