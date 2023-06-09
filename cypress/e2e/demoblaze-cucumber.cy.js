//Ejercicio de Baufest 

//Consignas:
//-Ir a la web: https://www.demoblaze.com/index.html
//-Dar de alta un usuario.
//-Login y logout con el usuario dado de alta.
//-Agregar una laptop al carrito
//-Comprobar que se agregó al carrito.

//NOTA: Esta seccion va a estar separada para una mejor especificacion para cucumber

//Esta una referencia para las ayudas para los comandos con cypress
/// <reference types="cypress" />
//Agregamos esta referencia para utilizar el Xpath como funcion
require('cypress-xpath');

//Creamos una variable que vamos a utilizar como usuario y contraseña
//en caso de que ya exista solo debemos modificar esta variable para el ejercicio
const uyc = "pedroperez119"


describe('Demoblaze', () => {
  
  beforeEach('Visitamos la pagina', ()=>{
    //Visitamos la pagina
    cy.visit('https://www.demoblaze.com/index.html')
    //Validamos que estemos en la pagina deseada
    cy.title().should("eq", "STORE")
  })

  it('Alta de usuario', () => {
   
    //seleccionamos para crear una cuenta
    cy.get('#signin2').should("be.visible").click()
    cy.wait(1000)
    //ponemos el usuario y contraseña y luegos apretamos el boton de crear cuenta
    cy.get('#sign-username').should("be.visible").type(uyc)
    //Creamos una espera de un segundo para la carga correta de la informacion
    cy.wait(1000)
    cy.get('#sign-password').should("be.visible").type(uyc)
    cy.wait(1000)
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("be.visible").click()
    //esperamos un segundo
    cy.wait(1000)
    //Existe un error que solo ocurre una alerta que no es visible en la pagina
    //Como mejora se podria agregar
    //Abajo validamos la alerta que ocurre de que si el usuario ya existe
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`This user already exist.`)
      //Y si el usuario ya existe, lanzamos un mensaje de error forzado
      throw new Error("El usuario ya existe")
    })
    cy.wait(1000)

    //
    
  })

  
  
  it('Login del usuario dado de alta', () => {
 
    //Entramos en la parte de logear para entrar
    cy.get('#login2').should("be.visible").click()
    cy.wait(1000)
    //colocamos el usuario y contraseña que elegimos
    cy.get('#loginusername').should("be.visible").type(uyc)
    cy.wait(1000)
    cy.get('#loginpassword').should("be.visible").type(uyc)
    cy.wait(1000)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("be.visible").click()
    //Validamos que exitosamente el usuario se logea
    cy.get('#nameofuser').should("be.visible").contains(uyc)

  })

  it('Compra de laptop', () => {
    

    //Seleccionamos el apartado de Laptops en la barra lateral 
    cy.xpath("/html/body/div[5]/div/div[1]/div/a[3]").should("be.visible").click()
    cy.wait(1500)
    //Seleccionamos el item de una macbook y validamos que sea una MacBook air
    cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').should("be.visible").contains("MacBook air").click()
    cy.wait(1000)
    //apretamos el boton de agregar el carro
    cy.get('.col-sm-12 > .btn').should("be.visible").click()
    //Vamos a la seccion de carrito para ver si esta el producto
    cy.get('#cartur').should("be.visible").click()
    cy.wait(1000)
    //Validamos que estamos en el lugar
    cy.get('.col-lg-8 > h2').should("be.visible").contains("Products")
    //Validamos que esta agregado el producto
    cy.get('.success > :nth-child(2)').should("be.visible").contains("MacBook air")
    cy.wait(1000)
    
    //En este punto ya habremos agregado al carro el producto sin realizar el logout
  })
  
  it('Logout del usuario dado de alta', () => {

   //Entramos en la parte de logear para entrar
   cy.get('#login2').should("be.visible").click()
   cy.wait(1000)
   //colocamos el usuario y contraseña que elegimos
   cy.get('#loginusername').should("be.visible").type(uyc)
   cy.wait(1000)
   cy.get('#loginpassword').should("be.visible").type(uyc)
   cy.wait(1000)
   cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("be.visible").click()
   //Validamos que exitosamente el usuario se logea
   cy.get('#nameofuser').should("be.visible").contains(uyc)

    //Realizamos el logout del usuario
    cy.get('#logout2').should("be.visible").click()
    cy.wait(1000)
    // //validamos que aparesca el boton de "sing in" una ves deslogeado el usuario
    cy.get('#login2').should("be.visible").contains("Log in")

    //En este punto ya estamos deslogeados y realizado el ejercicio
  })
})