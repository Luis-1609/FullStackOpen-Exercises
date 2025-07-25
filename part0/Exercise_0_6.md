## Diagrama de secuencia: creación de una nueva nota en la página:
## https://studies.cs.helsinki.fi/exampleapp/spa
```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Usuario escribe una nota y presiona "Save"

    browser->>server: POST /exampleapp/new_note_spa (con nota en JSON)
    activate server
    server-->>browser: 201 Created
    deactivate server

    Note right of browser: El JS de la SPA actualiza el estado local (Por ejemplo, en un array de notas)

    Note right of browser: El DOM se re-renderiza con la nueva nota (sin reload ni nuevo GET)
