function doubleScrolls(item) {
  item.wrap('<div style="overflow-x: scroll;" class="wrapper"></div>')
  const wrapper = $('.wrapper');
  wrapper.prepend('<div style="position: absolute;margin-top:-20px;height: 20px;overflow-x: scroll;" class="topscroll"><div style="height: 1px;" class="fake"></div></div>');
  const topscroll = $('.topscroll');
  $('.fake').width(item.width());
  $('.topscroll').width(wrapper.width());
  
  topscroll.scroll(function(e){
      wrapper.scrollLeft($(this).scrollLeft());
	});
	wrapper.scroll(function(e){
      topscroll.scrollLeft($(this).scrollLeft());
	});
}