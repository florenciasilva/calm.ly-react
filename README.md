# **calm<span>.</span>ly** social network

Calm<span>.</span>ly nace de una página anterior llamada *Meeus*. La investigación de fondo se mantiene para calm<span>.</span>ly y puedes consultarla [aquí](https://github.com/florenciasilva/cdmx-2018-06-bc-core-am-social-network).

## Desarrollo de Calm<span>.</span>ly

Para el UI de esta red social se utilizó [React](https://reactjs.org/). Se inicializa el proyecto mediante ```create-react-app```.

Se utiliza ```react-materialize``` para los estilos.

Para el backend, se utiliza los servicios de autenticación y bases de datos de [Firebase](https://firebase.google.com/).

## Boilerplate
```
./meeus
│
├── public
│      ├── index.html
│      └── manifest.json 
│
├── src
│    └── Components
│           ├── FirebaseButtons
│           │         ├── FirebaseButtons.js
│           │         └── FirebaseButtons.css
│           ├── FirebaseCredentials
│           │         ├── FirebaseCredentials.js
│           │         └── FirebaseCredentials.css
│           ├── LoginCard
│           │         ├── LoginCard.js
│           │         └── LoginCard.css
│           ├── NewsFeed
│           │         ├── CommentCard.js
│           │         ├── NewsFeed.js
│           │         └── NewsFeed.css
│           ├── RegisterCard
│           │         ├── RegisterCard.js
│           │         └── RegisterCard.css
│           ├── Sidenav
│           │         ├── SideNav.js
│           │         └── SideNav.css
│           └── Routes
│                    └── Routes.js
│
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── registerServiceWorker.js
├── .gitignore
├──  package.json
└──  package-lock.json
```

## Instalación

Para comenzar a contribuir a éste proyecto, debes ```clonar``` éste repositorio, dentro de la carpeta ```meeus```, en tu consola, escribe ```npm-install``` para poder descargar todas las dependencias necesarias para este proyecto.

Una vez instalado, puedes escribir en consola ```npm start``` para levantar un servidor local y poder ver en tiempo real la página web. Por default, cada cambio que guardes en tu editor, se verá reflejado de forma inmediata en el servidor local que levantaste.

Para más información de los comandos de ```create-react-app``` visita su [repositorio](https://github.com/facebook/create-react-app).
