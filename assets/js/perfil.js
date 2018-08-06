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

// funcion para desloguearse
function logoutWithFirebase(){
  firebase.auth().signOut()
      .then(()=>{
          location.href = './login.html';
      })
      .catch((error)=>{
        console.log("Error de firebase > Código > "+error.code); 
        console.log("Error de firebase > Mensaje > "+error.message); 
      });
}

