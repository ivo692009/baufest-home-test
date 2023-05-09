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
import DemoblazeObject from '../support/pageObjects/Demoblaze/demoblaze_PO'

describe('Demoblaze en partes', () => {

  Cypress.on('uncaught:exception',(err, runnable) =>{
    return false
  })

    const master = new DemoblazeObject()

    master.visitHome()
    
    

  
  it.only('Alta de usuario + Login + Logout del usuario dado de alta', () => {
    
    
   
  })

  it('Alta de usuario + Login + Compra de laptop + Logout del usuario dado de alta', () => {
    

   
  })
  
})