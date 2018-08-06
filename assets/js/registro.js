const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e =>  {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if(email.length != 0 && password.length != 0) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(Response => {
      const user = Response;
      return user;
      console.log('ya envie los datos');
    }).then(user => {
      location.href = '../html/login.html';
    }).catch((error)=>{
    console.log(error);
    });
  }
});