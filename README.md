# CHALLENGE AMIGO SECRETO - G8
Este programa de aprendizaje es un desafio para desarrollar un programa web que es de ingresar una lista de amigos y realizar un sorteo entre ellos aleatoriamente para saber cual es el amigo secreto elegido.

## Características
- Solo puedes agregar nombres.
- Validación de que el campo solo registra letras mas no números o caracteres especiales.
- Validación que no se repita algun nombre al registrar.
- Sortea el amigo secreto con el boton "Sortear amigo".
- Reiniciar el juego con el boton "Empezar de nuevo".

## 🚧 Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

- `assets`: Carpeta donde se encuentran las imagenes que se utilizan.
- `app.js`: Archivo JavaScript que contiene la lógica de la aplicación.  
- `index.html`: El archivo HTML principal que contiene la estructura de la página.
- `styles.css`: Archivo CSS que contiene los estilos de la página.

## 🔨 Funciones JavaScript

Las funciones principales están definidas en `app.js`:

- `agregarAmigo()`: Agrega un nuevo amigo a la lista.
- `validarNombreletras(nombre)`: Validación que solo debe ser letras al ingresar el nombre.
- `validacionNoduplicados(nombreAmigo)`: Validación de que no se repita un nombre ya ingresado (evita duplicidad).
- `mostrarLista()`: Muestra la lista de amigos en la interfaz.
- `sortearAmigo()`: Sortea un amigo secreto al azar.
- `restablecer()`: Restablece el juego del amigo secreto dejando tdos los campos en blanco.

## 💻 Como Usar

1. **Adicionar Amigos**:
   - Digite el nombre de um amigo en el campo de entrada y hace click en "Añadir".
   - Luego aparecerá los nombres como una lista cada vez que agregue uno.

2. **Sortear Amigo Secreto**:
   - Después de adicionar los nombres de los amigos, haga click en el boton "Sortear amigo".
   - El sistema realizara al azar el sorteo de la lista de amigos ingresados y mostrar en una etiqueta el amigo secreto.

3. **Reiniciar el Juego**
   - Si desea reiniciar el juego, haga click en el boton "Empezar de nuevo" y tdoos los campos quedarán en blanco para comenzar a ingresar los nombres de los amigos.

## 🔧 Instalación

1. Clona el repositorio en tu máquina local:
    ```bash
    git clone https://github.com/Yeikoc/challenge-amigo-secreto-esp.git
    ```
2. Abre el archivo `index.html` en tu navegador favorito para empezar a usar la aplicación.

### 🔥 Ejecución local
![image](https://github.com/user-attachments/assets/6cf9bb0b-5a9b-41b0-85c4-93cf3e0f9c5a)

Tambien puedes descargar el proyecto comprimido (*.zip) en tu equipo no requiere ninguna instalación adicional. Simplemente descomprime, abre el archivo `index.html` y empieza a usar la aplicación.

