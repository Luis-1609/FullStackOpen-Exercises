## Diagrama de secuencia: creación de una nueva nota en la página:
## https://studies.cs.helsinki.fi/exampleapp/spa
```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: El usuario accede a la versión SPA de la página de notas
    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server -->> browser: HTML document
    deactivate server
    
    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server -->> browser: the CSS file
    deactivate server

    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server -->> browser: the JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON con todas las notas 
    deactivate server
    
