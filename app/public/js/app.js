window.addEventListener('load', function() {

  var webAuth = new auth0.WebAuth({
    domain: 'drive-override.eu.auth0.com',
    clientID: 'm2uzdpHDZw4awU0AqtZkFKG0ZNiCZAjp',
    responseType: 'token id_token',
    audience: 'https://drive-override.eu.auth0.com/userinfo',
    scope: 'openid',
    redirectUri: window.location.href
  });

  var loginBtn = document.getElementById('btn-login');

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    webAuth.authorize();
  });

});