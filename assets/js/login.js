const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e =>  {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(email.length != 0 && password.length != 0) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(Response => {
          location.href = '../html/inicio.html';
      }).catch((error)=>{
        console.log(error);
      });
    }
});