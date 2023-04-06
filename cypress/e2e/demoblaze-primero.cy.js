//Ejercicio de Baufest 

//Consignas:
//-Ir a la web: https://www.demoblaze.com/index.html
//-Dar de alta un usuario.
//-Login y logout con el usuario dado de alta.
//-Agregar una laptop al carrito
//-Comprobar que se agregó al carrito.


describe('Demoblaze', () => {
  it('Alta de usuario + Login y Logout del usuario dado de alta', () => {
    //Visitamos la pagina
    cy.visit('https://www.demoblaze.com/index.html')
    
  })
})