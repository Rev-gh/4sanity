// ==UserScript==
// @name        4sanity
// @namespace   msm
// @include     *//4programmers.net*
// @version     1
// @grant       none
// ==/UserScript==

// remove sidebar
$("#sidebar").css('display', 'none');
$("#index").css('paddingRight', '0');

// unsticky header
$("body").css('padding-top', '0');
$("header").css('position', 'relative');

// remove red badge from Praca
$(".badge.new:contains(Nowość)").css('display', 'none')
