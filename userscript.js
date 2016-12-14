// ==UserScript==
// @name        4sanity
// @namespace   msm
// @include     *//4programmers.net*
// @version     1
// @grant       none
// ==/UserScript==

$("#sidebar").css('display', 'none');
$("#index").css('paddingRight', '0');

// unsticky header
$("body").css('padding-top', '0');
$("header").css('position', 'relative');

// remove red badge from Praca
$(".badge.new:contains(Nowość)").css('display', 'none');

// throw away box-job-offers
$("#box-job-offers").css('display', 'none');

// remove breadcrumb
var styles = "#breadcrumb-fixed { display: none !important; }";
$('<style>'+ styles +'</style>').appendTo(document.head);

// remember forum tab
var mainUrl = $('#index ul.nav-tabs li.active a[href^="http://4programmers.net/Forum"]').attr('href') || localStorage.getItem('mainUrl');
localStorage.setItem('mainUrl', mainUrl);
$('a:not(ul.nav-tabs)[href="http://4programmers.net/Forum"]').attr('href', mainUrl);
