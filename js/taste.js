/* ================================================================ 
This copyright notice must be untouched at all times.
Copyright (c) 2009 Stu Nicholls - stunicholls.com - all rights reserved.
=================================================================== */
$(document).ready(function(){

$(".lcell").hover(function() {
	console.log('onhover');

	// $('.ldesc').hide();
	$(this).find('.ldesc').animate({"top": "0px"}, 400, "swing");
	$(this).find('.ldesc .cellname a').show(200);
},function(){
	console.log('next...');
	$(this).find('.ldesc').animate({"top": "233px"}, 400, "swing");
	$(this).find('.ldesc .cellname a').hide(200);
});

});
// ,function() {
// 	$(this).find("ldesc").stop(true,false).animate({"top": "233px"}, 400, "swing");
// }