$(document).ready(function(){
  $(document).on('keyup', function(e){
    // e.which == 81 ? updatePlayerPosition(1) : updatePlayerPosition(2);
    if ( e.which == 81 ){
      updatePlayerPosition(1);
      if ( $("tr#player1_strip td:nth-child(14)").hasClass("active") ){
        alert("Player 1 wins!");

      }
    }
    if ( e.which == 80 ){
      updatePlayerPosition(2);
      if ( $("tr#player2_strip td:nth-child(14)").hasClass("active") ){
        alert("Player 2 wins!");
      }
    }
  });
});

function updatePlayerPosition(player){
  $activeSquare = $( "tr#player" + player + "_strip td.active");
  activeIndex = $activeSquare.index();
  childNum = activeIndex + 2;
  $newActiveSquare = $( "tr#player" + player + "_strip td:nth-child(" + childNum + ")");
  $activeSquare.css( "background-image","url('imgs/rainbow2.png')" );
  $activeSquare.removeClass( "active" );
  $newActiveSquare.addClass( "active" );
}







