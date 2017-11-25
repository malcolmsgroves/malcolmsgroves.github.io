$tabs = $('.tabs');
$container = $('.container');
$frame = $('.frame');

let frame = {
  tiles: 0,
  snake: 1,
  minesweeper: 2,
  tic_tac_toe: 3,
}


$tabs.on('click', function(event) {
  console.log('clicked');
  let tabId = $(event.target).attr('id');
  highlightTab(tabId);
});

let highlightTab =  function(id) {
	$('li').children().removeClass('selected');
  $(`a#${id}`).addClass('selected');
  $frame.animate({
    top: frame[id] * -600,
  }, 400);
};

$(highlightTab('tiles'));
