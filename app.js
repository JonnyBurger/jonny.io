$(document).on('scroll', function (e) {
	var max = 45;
	var scrollfactor = window.scrollY / $(window).height();
	var translationZ = Math.max(1, window.scrollY);
	var percentage = scrollfactor*max;
	$('#screen').css('-webkit-transform', 'rotateY(' + percentage + 'deg)');
	$('.layer-1').css('-webkit-transform', 'translateZ(' + translationZ/7 + 'px)');
	$('.layer-2').css('-webkit-transform', 'translateZ(' + translationZ/7 + 'px)');
});