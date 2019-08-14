function loadprerequisites() {
    $(document).ready(function () { 
        log("Loading required files for site to run.");
        log("Loading header files..."); 
        $("#header").load("/includes/header.inc.php"); 
        log("Loading dialog files in modals...") 
    }); 
    $("#header").ready(function () { 
        $("#dialog").load("/includes/dialogs.inc.php"); 
        log("Loading content into site...") 
    }); 
    $("#dialog").ready(function () {
        $("#content").load("/includes/main_content.inc.php"); 
        log("Loading slideshow.."); 
        setInterval(function () { 
            $("#content").load("/includes/main_content.inc.php") 
        }, 36E5)
    }); 
    $("#content").ready(function () { 
        $("#photos").load("/includes/slideshow.php") 
    }); 
    var g = document.getElementById("id01"), e = document.getElementById("id02"); window.onclick = function (c) { c.target == g ? g.style.display = "none" : c.target == e && (e.style.display = "none") }
}
function log(g) { console.log(g) }

function plusSlides(g) { showSlides(slideIndex += g) }function isLoggedIn() { return !0 };
var img = "https://www.tms.lan/favicon.ico";
function notifyMe(a) {
    if (notificationdisplayed == false) {
        if (Notification.permission === "granted") {
            var text = "Welcome back, " + a;
            var notification = new Notification("Tenant Management System", {
                body: text,
                icon: img
            });
            notificationdisplayed = true;
        } else if (Notification.permission === "default") {
            Notification.requestPermission(function (permission) {
                if (permission === "granted") {
                    var notification = new Notification("Tenant Management System", {
                        body: text,
                        icon: img
                    });
                }
            });
        }
    }
}
function notify(text) {
    if (Notification.permission === "granted") {
        var notification = new Notification("Tenant Management System", {
            body: text,
            icon: img
        });
    } else if (Notification.permission === "default") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                var notification = new Notification("Tenant Management System", {
                    body: text,
                    icon: img
                });
            }
        });
    }
}