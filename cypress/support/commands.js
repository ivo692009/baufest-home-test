// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('SingUp', (username, password) => { 

    cy.get('#signin2').should("be.visible").click()
    cy.wait(1000)
    //ponemos el usuario y contraseña y luegos apretamos el boton de crear cuenta
    cy.get('#sign-username').should("be.visible").type(username)
    //Creamos una espera de un segundo para la carga correta de la informacion
    cy.wait(1000)
    cy.get('#sign-password').should("be.visible").type(password)
    cy.wait(1000)
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("be.visible").click()
    //esperamos un segundo
    cy.wait(1000)
    cy.on('window:alert', (str) => {

        if(str == 'This user already exist.'){
            //Y si el usuario ya existe, lanzamos un mensaje de error forzado
            throw new Error("El usuario ya existe")
            cy.visit('https://www.demoblaze.com/index.html')
            cy.wait(1000)
        }
        //expect(str).to.equal(`This user already exist.`)
        
        })
    })

Cypress.Commands.add('LogInU', (username, password) => { 
    //Entramos en la parte de logear para entrar
    cy.get('#login2').should("be.visible").click()
    cy.wait(1000)
    //colocamos el usuario y contraseña que elegimos
    cy.get('#loginusername').should("be.visible").type(username)
    cy.wait(1000)
    cy.get('#loginpassword').should("be.visible").type(password)
    cy.wait(1000)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("be.visible").click()
    //Validamos que exitosamente el usuario se logea
    cy.get('#nameofuser').should("be.visible").contains(username)

})

Cypress.Commands.add('LogOutU',() => { 

    cy.get('#logout2').should("be.visible").click()
    cy.wait(1000)
    // //validamos que aparesca el boton de "sing in" una ves deslogeado el usuario
    cy.get('#login2').should("be.visible").contains("Log in")

    //En este punto ya estamos deslogeados y realizado el ejercicio
  })