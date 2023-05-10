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
//Importamos el objeto donde tenemos nuestro recorrido y validaciones
import DemoblazeObject from '../support/pageObjects/Demoblaze/demoblaze_PO'

describe('Demoblaze en partes', () => {

  Cypress.on('uncaught:exception',(err, runnable) =>{
    return false
  })
    //Creamos la instacia objeto 
    const master = new DemoblazeObject()

    //Tenemos que crear el usuario y contraseña del nuevo usuario que necesitemos
    //para este ejercicio
    let usuario="josehermandes12"
    let password="josesitomartines"
  it('Alta de usuario + Login + Logout del usuario dado de alta', () => {
    master.visitHome()
    master.SingUp(usuario,password)
    master.LogIn(usuario,password)
    master.LogOut()
   
  })

  it.only('Login + Compra de laptop', () => {
    master.visitHome()
    master.LogIn(usuario,password)
    master.Compra()
   
  })
  
})