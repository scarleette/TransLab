$(document).ready(function(){
  $('select').formSelect();
});
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
};

function calcular() {
  const otraTarjeta = document.getElementById('otraTarjeta').value;
  const selectTarifa = document.getElementById()
}