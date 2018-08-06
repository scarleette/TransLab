$(document).ready(function(){
  $('.sidenav').sidenav();
});

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', e => {
  e.preventDefault();
  const tarjetaConsultada = document.getElementById('tarjetaConsultada').value;
  const saldoTarjeta = document.getElementById('saldoTarjeta');
  const tituloDatos = document.getElementById('titulo');
  const apiBip = fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${tarjetaConsultada}`)
    .then(response => {
      return response.json();
  }).then (response => {
  // console.log(response)
  const datosApi = response;
  console.log(datosApi);
  tituloDatos.innerHTML = `<h6><strong>Datos de la tarjeta</strong></h6>`
  saldoTarjeta.innerHTML = `<p><strong>Tarjeta numero :</strong> ${response.id}</p>
  <p><strong>Contrato :</strong>${response.estadoContrato}</p>
  <p><strong>Saldo :</strong> ${response.saldoTarjeta}</p>
  <p><strong>Fecha :</strong>${response.fechaSaldo}</p>`;
  });
})
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