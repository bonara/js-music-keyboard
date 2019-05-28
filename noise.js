$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    if ($('#'+`${$(this).html()}`+'Audio')[0].paused){
      $('#'+`${$(this).html()}`+'Audio')[0].play();
    } else {
      $('#'+`${$(this).html()}`+'Audio')[0].currentTime = 0;
    }
    
  });

  $('body').on('keydown', function(event) {
    if (['c','d','e','f','g','a','b'].includes(event.key)) {
      if ($('#'+ event.key +'Audio')[0].paused){
        $('#'+ event.key +'Audio')[0].play();  
      } else {
        $('#'+ event.key +'Audio')[0].currentTime = 0;
      }  
    } 
  });
});
