function loadprerequisites(){$(document).ready(function(){log("Loading required files for site to run.");log("Loading header files...");$("#header").load("/includes/header.inc.php");log("Loading dialog files in modals...")});$("#header").ready(function(){$("#dialog").load("/includes/dialogs.inc.php");log("Loading content into site...")});$("#dialog").ready(function(){$("#content").load("/includes/main_content.inc.php");log("Loading slideshow..");setInterval(function(){$("#content").load("/includes/main_content.inc.php")},
36E5)});$("#content").ready(function(){$("#photos").load("/tests/gallery.html");$("#photos").css({height:$("#gallery").height()})});var a=document.getElementById("id01"),b=document.getElementById("id02");window.onclick=function(c){c.target==a?a.style.display="none":c.target==b&&(b.style.display="none")}}function log(a){console.log(a)}function plusSlides(a){showSlides(slideIndex+=a)}function isLoggedIn(){return!0}var img="https://www.tms.lan/favicon.ico";
function notifyMe(a){if(0==notificationdisplayed)if("granted"===Notification.permission){var b="Welcome back, "+a;new Notification("Tenant Management System",{body:b,icon:img});notificationdisplayed=!0}else"default"===Notification.permission&&Notification.requestPermission(function(a){"granted"===a&&new Notification("Tenant Management System",{body:b,icon:img})})}
function notify(a){"granted"===Notification.permission?new Notification("Tenant Management System",{body:a,icon:img}):"default"===Notification.permission&&Notification.requestPermission(function(b){"granted"===b&&new Notification("Tenant Management System",{body:a,icon:img})})}
ten=function(){$("#verify").css({display:"none"});$("#LTContent").css({display:"block"});$("#LTContent").load("/includes/man/tenants.inc.php");log("Loading slideshow..");setInterval(function(){$("#LTContent").load("/includes/man/tenants.inc.php")},36E5)};
