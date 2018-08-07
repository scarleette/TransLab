$(document).ready(function(){
  $('.sidenav').sidenav();
});

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
  const otraTarjeta = parseInt(document.getElementById('otraTarjeta').value);
  const apiBip = fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${otraTarjeta}`)
    .then(response => {
      return response.json();
  }).then (response => {
  console.log(response)
  const datosApi = response;
  // console.log(datosApi);
  const saldoTarjeta = response.saldoTarjeta;
  const saldoTarjetaSinSimbolos = Number(saldoTarjeta.replace(/[$,.]+/g, ""));
  // console.log(saldoTarjeta);
  const selectTarifa = document.getElementById('tarifas');
  const horario = selectTarifa.options[selectTarifa.selectedIndex].value;
  // console.log(horario);
  const header1 = document.getElementById('titulo1');
  const mostraTarifa = document.getElementById('tarifa');
  const header2 = document.getElementById('titulo2');
  const resultado = saldoTarjetaSinSimbolos - horario;
  const saldoFinal = document.getElementById('saldoFinal');
  header1.innerHTML = `<h6><strong>Tarifa</strong></h6>`
  mostraTarifa.innerHTML = `<p><strong>Tarjeta :${horario}</strong></p>`;
  header2.innerHTML = `<h6><strong>Saldo</strong></h6>`;
  saldoFinal.innerHTML = `<p><strong>Tarjeta :${resultado}</strong></p>`
  });
}