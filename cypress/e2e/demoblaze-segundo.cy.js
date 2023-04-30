//Ejercicio de Baufest 

//Consignas:
//-Ir a la web: https://www.demoblaze.com/index.html
//-Dar de alta un usuario.
//-Login y logout con el usuario dado de alta.
//-Agregar una laptop al carrito
//-Comprobar que se agregó al carrito.

//NOTA: Este ejercicio se puede hacer en varias partes y lo separare en dos, en singin + login + logout y la compra

//Esta una referencia para las ayudas para los comandos con cypress
/// <reference types="cypress" />

//Agregamos esta referencia para utilizar el Xpath como funcion
require('cypress-xpath');

describe('Demoblaze en partes', () => {


    beforeEach(() => {
    //Visitamos la pagina
    cy.visit('https://www.demoblaze.com/index.html')
    //Validamos que estemos en la pagina deseada
    cy.title().should("eq", "STORE")
    })
  
  it.only('Alta de usuario + Login + Logout del usuario dado de alta', () => {
    
    //Creamos una variable que vamos a utilizar como usuario y contraseña
    let usuario="JosueJosue2"
    let contra="PedroPascal2"
    //Sing Up pasando por parametros usuario y contraseña
    cy.SingUp(usuario,contra)
    //Log In pasando por parametros usuario y contrañse
    cy.LogInU(usuario,contra)
    //Deslogeamos
    cy.LogOutU();
   
  })

  it('Alta de usuario + Login + Compra de laptop + Logout del usuario dado de alta', () => {
    

    //Creamos una variable que vamos a utilizar como usuario y contraseña
    let usuario="JosueJosue2"
    let contra="PedroPascal2"

    cy.LogInU(usuario,contra)

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
  
})