# Baufest-HomeTest

Este es un Home Test por parte de Baufest con ejercicios hechos en cypress, Postman y Mobile.<br/>
Este es un repositorio publico como justificacion del ejercicio.<br/>

Esta URL es `https://github.com/ivo692009/baufest-home-test`


## Ejercicio Web con Cypress

## INFORME DE REPORTES

Los reportes generados por las pruebas automatizadas estan en la carpeta reports\html\index.html

## Pre requisitos

-Tener instalado Node.JS<br/>
-Visual Studio o similar<br/>
-Tener instalado git<br/>

## Consignas

-> Ir a la web: https://www.demoblaze.com/index.html<br/>
-> Dar de alta un usuario.<br/>
-> Login y logout con el usuario dado de alta.<br/>
-> Agregar una laptop al carrito.<br/>
-> Comprobar que se agregó al carrito.<br/>

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

Se abrira el navegador una ventana, Seleccionaremos la opcion de "e2e Testing".<br/>
Seleccionaremos el navegador que querramos (Chrome por ejemplo).<br/>
Clickeamos el boton de "Start e2e Testing"
Se abrira el navegador. Y en la pestaña de "Specs" se podra visualizar los tests automatizados.<br/>

### NOTA

No pude hacer andar Cocumber pero dentro de la raiz de las pruebas deje desarrolado los Specs


## Ejercicio Web Service con Postman

## Resumen

Ejercicio utilizando una API de la página PetStore Swagger para realizar peticiones GET POST y PUT, y algunas validaciones.

## Pre requisitos

- Tener una cuenta en postman

## Consignas

-> Tomando como referencia lo documentado en este swagger: https://petstore.swagger.io/<br/>
-> Agregar una mascota realizando un POST al path /v2/pet<br/>
-> Realizar un GET /v2/pet/{petId} para obtener una mascota existente.<br/>
-> Modificar una mascota existente mediante PUT al path /v2/pet.<br/>

En todos los casos validar:

-> Status code esperado.<br/>
-> Schema del response.<br/>

## Ejercicio

La resolucion esta dentro de la carpeta "api" en la seccion "e2e" dentro de cypress. <br/>
Asi mismo, tambien realize la resolucion con Postman<br/>
Dirigirse a la siguiente pagina en donde estan las llamadas junto a las consignas:

`https://www.postman.com/api-testing-cypress/workspace/baufest-hometest/overview`


## Mobile Testing

## Resumen

Ejercicio utilizando una APK para automatizar algunos ejercicios

## Consignas

->A partir de siguiente la APK:
https://github.com/webdriverio/native-demoapp/releases/download/v0.4.0/AndroidNativeDemoApp-0.4.0.apk . 

* Sección Login.
->Realizar Login.
->Realizar Signup.

* Sección forms:
->Completar todos los campos y activar.

* Sección Webview.
-> Realizar una búsqueda de la palabra “browser”
-> Navegar entre los tabs: Docs, API, Help, Versions, Blog, Contribute.

## ACLARACION

Actualmente no tengo los conocimientos sobre la automatizacion de aplicaciones mobiles.<br/> 
Por lo tanto, voy a dejar en una carpeta un archivo de video haciendo el recorrido y los ejercicios del mismo.
Asi mismo voy a dejar un archivo con los casos de prueba y un informe de mejora para la aplicacion.
Estos mismos se encuentran en la carpeta `Mobile Testing`


## POSIBLES MEJORAS

Existen redactados unos archivos de mejoras separado por ejercicios.<br/>
Estos mismos se encuentran en la carpeta `Posibles Mejoras` seguido por el nombre de las aplicaciones.
