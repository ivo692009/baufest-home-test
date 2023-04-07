import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("Ingreso a la pagina", () => {
    cy.visit('https://www.demoblaze.com/index.html');
});

Then("Deberia validar que estoy en la pagina", () => {
    cy.title().should("eq", "STORE")
});

When("Clickeo en Sing Up", () => {
    cy.get('#signin2').should("be.visible").click()
    cy.wait(1000)
});

When("Ingreso el {word}", (usuario) => {
    cy.get('#sign-username').should("be.visible").type(usuario)
    //Creamos una espera de un segundo para la carga correta de la informacion
    cy.wait(1000)
});

When("Ingreso la {word}", (contra) => {
    cy.get('#sign-username').should("be.visible").type(contra)
    //Creamos una espera de un segundo para la carga correta de la informacion
    cy.wait(1000)
});


When("Clickeo el boton de Crear", () => {
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("be.visible").click()
    cy.wait(1000)
});

Then("Se crea el usuario nuevo", () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`This user already exist.`)
        //Y si el usuario ya existe, lanzamos un mensaje de error forzado
        throw new Error("El usuario ya existe")
});

When("Clickeo en Log In", () => {
    cy.get('#login2').should("be.visible").click()
    cy.wait(1000)
});

When("Ingreso el {word}", (usuario) => {
    cy.get('#loginusername').should("be.visible").type(usuario)
    cy.wait(1000)
});

When("Ingreso la {word}", (contra) => {
    cy.get('#loginpassword').should("be.visible").type(contra)
    cy.wait(1000)
});

When("Clickeo el boton de Logear", (usuario) => {
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("be.visible").click()
    cy.wait(1000)
});

Then("El usuario esta logeado", (usuario) => {
    cy.get('#nameofuser').should("be.visible").contains(usuario)
});

When("Hago Click en la barra lateral para filtar laptops", () => {
    cy.xpath("/html/body/div[5]/div/div[1]/div/a[3]").should("be.visible").click()
    cy.wait(1500)
});

When("Selecciono la Laptop", () => {
    cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').should("be.visible").contains("MacBook air").click()
    cy.wait(1000)
 });

When("Clickeo el boton de comprar", () => {
    cy.get('.col-sm-12 > .btn').should("be.visible").click()
});

When("Voy al carrito", () => {
    cy.get('#cartur').should("be.visible").click()
    cy.wait(1000)
});
    
Then("Valido que la laptop esta para comprar", () => {
    cy.get('.col-lg-8 > h2').should("be.visible").contains("Products")
    cy.get('.success > :nth-child(2)').should("be.visible").contains("MacBook air")
    cy.wait(1000) 
});

When("Clickeo el boton de Logout", () => {
    cy.get('#logout2').should("be.visible").click()
    cy.wait(1000)
});

Then("El usuario esta deslogeado", () => {
    cy.get('#login2').should("be.visible").contains("Log in")
});
