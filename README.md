# Baufest-HomeTest

Este es un Home Test por parte de Baufest con ejercicios hechos en cypress, Postman y Mobile.


## Ejercicio Web con Cypress


## Pre requisitos

-Tener instalado Node.JS
-Visual Studio o similar
-Tener instalado git

## Consignas

-> Ir a la web: https://www.demoblaze.com/index.html
-> Dar de alta un usuario.
-> Login y logout con el usuario dado de alta.
-> Agregar una laptop al carrito.
-> Comprobar que se agregó al carrito.

## Primeros pasos

Para clonar el repositorio:

`git clone https://github.com/ivo692009/baufest-home-test`

Este proyecto utiliza Node.js como gestor de paquetes, por lo tanto debemos descargar las librerías que podríamos no tener.
Para eso se ejecuta el siguiente comando dentro de la carpeta del proyecto:

`npm install`

Así mismo, antes de ejecutar Cypress debemos previamente tener el paquete npx para la ejecución rápida de la interfaz gráfica de Cypress:

`npm install -g npx`

Una vez que ya tengamos todo pasamos a ejecutar Cypress:

`npx cypress open`


## Ejercicio Web Service con Postman

## Resumen

Ejercicio utilizando una API de la página PetStore Swagger para realizar peticiones GET POST y PUT, y algunas validaciones.

## Pre requisitos

- Tener una cuenta en postman

## Consignas

-> Tomando como referencia lo documentado en este swagger: https://petstore.swagger.io/
-> Agregar una mascota realizando un POST al path /v2/pet
-> Realizar un GET /v2/pet/{petId} para obtener una mascota existente.
-> Modificar una mascota existente mediante PUT al path /v2/pet.

En todos los casos validar:

-> Status code esperado.
-> Schema del response.

## Ejercicio

Dirigirse a la siguiente pagina en donde estan las llamadas junto a las consignas:

`https://www.postman.com/api-testing-cypress/workspace/baufest-hometest/overview`
