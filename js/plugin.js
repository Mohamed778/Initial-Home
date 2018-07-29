$(document).ready(function(){
"use strict";
$("html").niceScroll({
  cursorcolor: "#46c0e5",
  cursorwidth:"6px",
  cursorborder:"1px solid aquamarine",
cursorborderradius:"10%"
});
});

$('section aside .list-group-item').click(function(){
   $(this).addClass('active').siblings().removeClass('active');
    $($(this).data('target')).fadeIn().siblings().hide();
});
$('#login .btn-secondary').click(function(){
   "use strict";
    $('#clinic,#pharmacy,#hospital,#login').css('display','none');
    $('#signup').css('display','block');
  });
$(function(){
"use strict";
var winH = $(window).height(),
    upper =$('Header').innerHeight();
$('section ').height(winH - upper);
});
