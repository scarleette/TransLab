$(document).ready(function(){
  $('.sidenav').sidenav();
});

window.onload = () =>{
  firebase.auth().onAuthStateChanged( user =>{
      if(user){ //Si está logeado, mostraremos la opción loggedIn
        perfil(user);
        agregarTarjetas(user);
      }
  });
}
// funcion para rescatar el correo del usuario y crear usuario en firebasedatabase
function perfil(user) {
  const correoUsuarioLogueado = document.getElementById('correoUsuario');
  const correo = user.email;
  correoUsuarioLogueado.innerHTML = `<h5>${correo}</h5>`;
  const idUser = user.uid;
  const correoUsuario = user.email;
  // console.log(idUser);
  firebase.database().ref('users/'+ idUser).set({
    id: idUser,
    email: correoUsuario,
  })
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
};

const formulario = document.getElementById('formulario');
function agregarTarjetas(user) {
  const tarjetaNueva = document.getElementById('tarjetaNueva').value;
  const tarjeta1 = document.getElementById('tarjeta1');
  tarjeta1.innerHTML += `<h6><strong>Tarjeta : ${tarjetaNueva}<strong><h6>`;
};

formulario.addEventListener('submit', agregarTarjetas);
