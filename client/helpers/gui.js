/**
 * This function will resize the wrapper and all the columns
 * based on preferred layout and size of screen.
 */
resizeLayout = function() {
  var _cols = Session.get('layout') || 4,
      _body = $('body'),
      _menuTop = $('#menuTopBar'),
      _wrapper = $('#wrapper'),
      _col1 = $('#col1'),
      _col2 = $('#col2'),
      _col3 = $('#col3'),
      _col4 = $('#col4');

  // set our wrapper to cover the entire screen minus the top bar
  _wrapper.height(_body.height() - _menuTop.height());

  // reisze our col4 for now
  var w = _wrapper.width();

  switch(_cols) {
    case 1:
      _col4.width(w).css({left: 0});
      break;
    case 2:
      w -= _col1.width();
      _col4.width(w).css({left: _col1.width()});
      break;
    case 3:
      w -= _col1.width() + _col2.width();
      _col2.css({left: _col1.width()});
      _col4.width(w).css({left: Math.abs(_wrapper.width() - w)});
      break;
    case 4:
      w -= _col1.width() + _col2.width() + _col3.width();
      _col2.css({left: _col1.width()});
      _col3.css({left: (_col1.width() + _col2.width())});
      _col4.width(w).css({left: Math.abs(_wrapper.width() - w)});
      break;
  }
};

/**
 * This function will be called everytime the
 * window resizes.
 * @param  {object} e Resize event object.
 */
$(window).on('resize', function(e) {
  resizeLayout();
});
