// Cookie - Consent ||PRAKTIKANT-KOD||

$(document).ready(function() {
  checkCookie();
 $( "#banner-cookie" ).click(function() {
  $( "#banner-cookie" ).addClass("hide");
   setCookie("consentCookie", true, 30);
 });

});


function setCookie() {
  var cname = "consentCookie";
  var cvalue = "true";
  var exdays = 30;
  console.log("sätter kaka");
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

    console.log(cvalue);
};

function GeeeetCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
        else {
          console.log("no cookieMonster");
        }
    }
    return "";
};

function checkCookie() {
    var cookieName=GeeeetCookie("consentCookie");
    if (!cookieName != "") {
      $("#banner-cookie").removeClass("hide");
    }
};
