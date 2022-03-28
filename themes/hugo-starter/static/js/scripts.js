function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;path=/';
}

let isCookieConsent = getCookie("consent");
const cookieButton = document.querySelector('.b-cookie__button');

if(!isCookieConsent) {
  document.body.classList.add('is-noConsent');
}

cookieButton.addEventListener('click', function(e){
  e.preventDefault();
  setCookie("consent","cookiesconsented",90);
  document.body.classList.remove('is-noConsent');
});

window.onload = function(){
    var anchors = document.getElementById('blog').getElementsByTagName('a');
    for (var i=0; i<anchors.length; i++){
      anchors[i].setAttribute('target', '_blank');
    }
  }