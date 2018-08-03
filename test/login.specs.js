// assert: afirmar; assert es una propiedad de chai(extension de mocha);
const assert = require('chai').assert;
global.window = global;
//Sólo enlaza el archivo, parecido al script de html
require('../src/js/login'); 

//Describe es una funcion que que recibe dos parametros la descripcion de nuestro test y una funcion anonima.
describe('Validar emails', ()=>{ 
  describe('Debería verificar si existe el arroba', ()=>{
    // it es una especificación del describe que es mas general
    it('Debería el correo tener solo un arroba', ()=>{ 
      //Caso de prueba,equal es una funcion de asserts
      //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
      // en esta linea se afirma que el correo solo debe tener un arroba
      assert.equal(validarEmail("asdf@asdf.com"), true); 
      //en esta linea se afirma que no debe tener mas de un arroba
      assert.equal(validarEmail("asdf@@asdf.com"), false);
      //en esta linea se afirma que si no tiene arroba sea false
      assert.equal(validarEmail("asdf.com"), false);
    });
    it('Debería el correo tener un arroba antes del dominio', ()=>{
        assert.equal(validarEmail(".com@asdf"), false);
        assert.equal(validarEmail("fabian@laboratoria.la"), true);
    });
});
  describe('Debería verificar si tiene un dominio', ()=>{
    it('Tiene un punto y luego solo caracteres del alfabeto', ()=>{
      assert.equal(validarEmail('asdf@asdf'), false);
      assert.equal(validarEmail('asdf@asdf.'), false);
    });
  });
});

// Test para validar contraseña
describe('validar contraseña', ()=>{
  it('deberia tener solo 8 caracteres', ()=> {
    assert.equal(validarClave('asdfcerf'), true);
    assert.equal(validarClave('asdcdesrf'), false);
  });
  it('deberia tener solo numeros', ()=> {
    assert.equal(validarClave('adsfdf', 1), false);
    assert.equal(validarClave('12345678'), true);
    });
  });
