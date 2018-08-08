$(document).ready(function(){
  $('.sidenav').sidenav();
});

window.onload = () =>{
  firebase.auth().onAuthStateChanged( user =>{
      if(user){ //Si está logeado, mostraremos la opción loggedIn
      }
  });
}
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