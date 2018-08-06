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