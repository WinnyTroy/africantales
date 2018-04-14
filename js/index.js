$.coinFlip = function () {
  return Math.random() > .5;
}
var x;
var y;

$(document).ready(function () {
  x = $('.page').first().outerWidth();
  y = $('.page').first().outerHeight();
  $.grit();


  $('.flip').each(function (i, elem) {
    $(elem).css({ 'z-index': (100 - i) }).attr('i', i);

  });

  $(window).resize(function () {
    x = $('.page').first().outerWidth();
    y = $('.page').first().outerHeight();
    $.grit();
  });
});

$.grit = function () {
  var str = ' ';

  var maxY = Math.min((y / 2), 100);
  var maxX = Math.min((x / 2), 100);


  for (var i = 0; i < (maxY * maxX) ; i++) {

    var top = Math.ceil(Math.random() * y);
    var left = Math.ceil(Math.random() * x);

    str += left + 'px ' + top + 'px '

    if ($.coinFlip()) {
      str += 'black, '
    }
    else {
      if ($.coinFlip()) {
        str += '#f3e2c7, '
      }
      else {

        if ($.coinFlip()) {
          str += '#6c1b00, '
        }
        else {
          str += ', '
        }
      }

    }

  }

  str = str.substring(0, str.length - 2);
  $('#look').text('.bg:before,.bg:after{ text-shadow:' + str + ';}');
}


$(document).on('click', '#turn-left', function (e) {
  var thisOne;
  if ($('.selected').length == 0 && $('.flipped').length == 0) {
    thisOne = $('.flip').first();
    $('.flip').first().addClass('selected');
  }
  else if ($('.selected').length > 0 && $('.flipped').length >= 0) {
    var nxt = $('.selected').next();

    thisOne = $('.selected');
    $('.selected').addClass('flipped').removeClass('selected');
    $(nxt).addClass('selected');
  }

  $(thisOne).css({ 'z-index': $(thisOne).attr('i') });

});


$(document).on('click', '#turn-right', function (e) {
  var thisOne;
  if ($('.selected').length == 0) {
    thisOne = $('.flipped').last();
    $(thisOne).prev().removeClass('flipped').addClass('selected');
    $(thisOne).removeClass('selected flipped');
  }
  else {
    var prev = $('.selected').prev();

    thisOne = $('.selected');
    $(prev).removeClass('flipped').addClass('selected');
    $(thisOne).removeClass('selected flipped');
  }

  $(thisOne).css({ 'z-index': 100 - parseInt($(thisOne).attr('i')) });

});