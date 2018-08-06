$(document).ready(function(){
  $('.sidenav').sidenav();
});

window.onload = () =>{
  firebase.auth().onAuthStateChanged( user =>{
      if(user){ //Si está logeado, mostraremos la opción loggedIn
        perfil(user);        
      }
  });
}
// funcion para rescatar el correo del usuario
function perfil(user) {
  const correoUsuarioLogueado = document.getElementById('correoUsuario');
  const correo = user.email;
  correoUsuarioLogueado.innerHTML = `<h5>${correo}</h5>`;
};


