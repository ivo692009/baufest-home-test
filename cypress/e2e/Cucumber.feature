Feature: Tests de Demoblaze
  Scenario: Visitamos la pagina de demoblaze
    When Ingreso a la pagina
    Then Deberia validar que estoy en la pagina

    Scenario Outline: Scenario Outline name: Creamos un nuevo Usuario
    When Ingreso a la pagina
    When Clickeo en Sing Up
    When Ingreso el <usuario>
    When Ingreso la <contra>
    When Clickeo el boton de Crear
    Then Se crea el usuario nuevo

Examples:
    | usuario | contra |
    | Rodrigo  | Rodrigo551 |
#     | Jose  | Rodrigo2315 |
#     | Pedro  | Rodrigo689|
#     | Mariano | Rodrigo12689 |
#     | Romina  | Rodrigo12315217 |
#     | Jesica | Rodrigo1231246 |
#     | Martina  | Rodrigo2256 |
#     | Andrea  | Rodrigo125177 |

Scenario Outline: Scenario Outline name: Login del usuario
    When Ingreso a la pagina
    When Deberia validar que estoy en la pagina
    When Clickeo en Log In
    When Ingreso el <usuario>
    When Ingreso la <contra>
    When Clickeo el boton de Logear
    Then El usuario esta logeado <usuario>
    
    Examples:
    | usuario | contra |
    | Rodrigo  | Rodrigo551 |

   Scenario Outline: Scenario Compra de Laptop
    When Ingreso a la pagina
    When Deberia validar que estoy en la pagina
    When Clickeo en Log In
    When Ingreso el <usuario>
    When Ingreso la <contra>
    When Clickeo el boton de Logear
    When El usuario esta logeado <usuario>
    When Hago Click en la barra lateral para filtar laptops
    When Selecciono la Laptop
    When Clickeo el boton de comprar
    When Voy al carrito
    Then Valido que la laptop esta para comprar

Examples:
    | usuario | contra |
    | Rodrigo  | Rodrigo551 |

    Scenario Outline: Scenario Outline name: Login y Logout
    When Ingreso a la pagina
    When Deberia validar que estoy en la pagina
    When Clickeo en Log In
    When Ingreso el <usuario>
    When Ingreso la <contra>
    When Clickeo el boton de Logear
    When Clickeo el boton de Logout
    Then El usuario esta deslogeado
    
    Examples:
    | usuario | contra |
    | Rodrigo  | Rodrigo551 |