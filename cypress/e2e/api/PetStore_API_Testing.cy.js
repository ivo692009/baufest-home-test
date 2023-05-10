
// -> Agregar una mascota realizando un POST al path /v2/pet.
// -> Realizar un GET /v2/pet/{petId} para obtener una mascota existente.
// -> Modificar una mascota existente mediante PUT al path /v2/pet.

// En todos los casos validar:
// -> Status code esperado.
// -> Schema del response.


/// <reference types="cypress" />

require('cypress-xpath');

describe('PET STORE API testing', function() {
    let datos;
    //Creamos una variable con el numero de ID de la mascota que vamos a buscar
    let mascotaBuscar = 10;
    it('GET metodo', function() {
   
        datos=cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/pet/"+mascotaBuscar,
            headers:{
                accept: "application/json"
            }
        })
        .then((response)=>{
            //Convertimos la respuesto JSON a string
            let datos;
            datos=JSON.parse(JSON.stringify(response.body))

            //Validaciones
            expect(response.status).to.eq(200)
            expect(datos).has.property('category')
            expect(datos).has.property('status',"string")
            expect(datos).has.property('name',"doggie")

        })

       
    })

    it('POST metodo', function() {
   
        datos=cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/pet",
            body:{
                    "id": 101,
                    "category": {
                      "id": 0,
                      "name": "string"
                    },
                    "name": "Pedro",
                    "photoUrls": [
                      "URL de la foto"
                    ],
                    "tags": [
                      {
                        "id": 0,
                        "name": "Canino"
                      }
                    ],
                    "status": "available"
            }
        })
        .then((response)=>{
            //Convertimos la respuesto JSON a string

            let datos;
            datos=JSON.parse(JSON.stringify(response.body))

             //Validaciones

            expect(response.status).to.eq(200)
            expect(datos).has.property('category')
            expect(datos).has.property('status',"available")
            expect(datos).has.property('name',"Pedro")
        })

    })

    it('PUT metodo', function() {
   
      datos=cy.request({
          method: "PUT",
          url: "https://petstore.swagger.io/v2/pet",
          body:{
            "id": 101,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "JOSE",
            "photoUrls": [
              "URL de la nueva foto"
            ],
            "tags": [
              {
                "id": 0,
                "name": "Gatuno"
              }
            ],
            "status": "available"
          }
      })
      .then((response)=>{
          //Convertimos la respuesto JSON a string

          let datos;
          datos=JSON.parse(JSON.stringify(response.body))

           //Validaciones

          expect(response.status).to.eq(200)
          expect(datos).has.property('category')
          expect(datos).has.property('status',"available")
          expect(datos).has.property('name',"JOSE")
          expect(datos.tags[0]).has.property('name',"Gatuno")
      })

  })
   
   })
   