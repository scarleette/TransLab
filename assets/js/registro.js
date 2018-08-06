const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e =>  {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(email.length != 0 && password.length != 0) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(Response => {
        userId  = Response;
        console.log(userId);
        location.href = '../html/login.html';
        console.log('ya envie los datos');  
      }).catch((error)=>{
        console.log(error);
      });
    }
});

console.log(userId);
