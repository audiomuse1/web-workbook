
var playerTurn = 'X';
$(function() {
  $('[data-cell]').on('click', function() {
    $(this).text(playerTurn);
    checkWin();
    playerTurn = (playerTurn === 'X' ? 'O' : 'X');
  });

    function checkWin() {
      if (
        //column wins//
        $('div[data-cell=0]').text() === playerTurn &&
        $('div[data-cell=3]').text() === playerTurn &&
        $('div[data-cell=6]').text() === playerTurn
        ||
        $('div[data-cell=1]').text() === playerTurn &&
        $('div[data-cell=4]').text() === playerTurn &&
        $('div[data-cell=7]').text() === playerTurn
        ||
        $('div[data-cell=2]').text() === playerTurn &&
        $('div[data-cell=5]').text() === playerTurn &&
        $('div[data-cell=8]').text() === playerTurn
        ||
        //row wins//
        $('div[data-cell=0]').text() === playerTurn &&
        $('div[data-cell=1]').text() === playerTurn &&
        $('div[data-cell=2]').text() === playerTurn
        ||
        $('div[data-cell=3]').text() === playerTurn &&
        $('div[data-cell=4]').text() === playerTurn &&
        $('div[data-cell=5]').text() === playerTurn
        ||
        $('div[data-cell=6]').text() === playerTurn &&
        $('div[data-cell=7]').text() === playerTurn &&
        $('div[data-cell=8]').text() === playerTurn
        ||
        //diagonal wins//
        $('div[data-cell=0]').text() === playerTurn &&
        $('div[data-cell=4]').text() === playerTurn &&
        $('div[data-cell=8]').text() === playerTurn
        ||
        $('div[data-cell=2]').text() === playerTurn &&
        $('div[data-cell=4]').text() === playerTurn &&
        $('div[data-cell=6]').text() === playerTurn
      )
        $('#announce-winner').text("Player-" + playerTurn + "-wins!");
    }
        $('#clear').on('click', function () {
        $('[data-cell]').text('');
        location.reload();
      })
        $('#clear').on('click', function () {
        $('#announce-winner').hide();
        location.reload();
      })
  });
