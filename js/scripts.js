function createBoard()
{
  var board = "";
  var applied_class = "";

  for(var i = 0; i < 12; i++)
  {
    board += '<div class="row board_row">';
    for(var j = 0; j < 12; j++)
    {
      if(i % 2 == 0)
        applied_class = (j % 2 == 0 ? "black" : "white");
      else {
        applied_class = (j % 2 == 0 ? "white" : "black");
      }

      board += '<div class="col-md-1 board_cell ' + applied_class + '"></div>';
    }

    board += '</div>'
  }
  return board;
}

$("#board_container").html(createBoard());
