class DemoblazeObject{

    visitHome(){

        before(()=>{

        //Visitamos la pagina
        cy.visit('https://www.demoblaze.com/index.html')
        //Validamos que estemos en la pagina deseada
        cy.title().should("eq", "STORE")
        cy.screenshot("screen para cargar la pagina")
        })

    }



}//fin de la clase

export default DemoblazeObject;