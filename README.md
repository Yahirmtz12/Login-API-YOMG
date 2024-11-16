### Proyecto con una API
El proyecto trata de una API que tiene usuarios y tiene contraseñas, correos etc, el proposito de este es ver como el API se imprime en una tabla e imprime todos los usuarios 

### PROCESO DE CREACION
1. **Creación del proyecto en Angular**: 
   - Comando para crear el proyecto: `ng new consumo-api-YOMG`
2.**Servicios para darle diseño con Boostrap y dependencias**:
   - Comando: `npm install bootstrap y npm install -g @angular/cli`
3. **Generacion de el servicio del API**: 
   - Comando para crear componentes: `ng generate service services/user`
   - De ahi se hace el codigo para poder obtener el servicio y obtener con un metodo a los usuarios
   - El metodo es getUsers()
4. **Componente de la tabla**:
   - Comando para crear componentes: `ng generate component components/user-list`
   - De ahi se hace el codigo llamar al servicio y con el llamar a los usuarios para ponerlos en la      tabla
5. **Vista de la tabla de usuarios**:
  - Para poder visualizar a los usuarios se necesita una vista y es ahi donde entra el HTML de user list en donde se llamaran 
6. **Integración Boostrap**:
   - En el HTML de user-list es donde se usa el boostrap e implementan la paginacion con depencendias de angular 
7. **Modificacion en app components y routes**:  
   - Se deben de importar el componente de user list en el app.component.ts
   - En el archivo routes se implementa la ruta para que por default se abra el html user-list y se pueda visualizar
8. **Finalizacion**:  
  - Finalmente solo se ejecuta el comando `ng serve`
  - Para iniciar el navegador y visualizar la lista
9. **Pruebas**:  
  - Las imagenes de las pruebas estan en la carpeta imagenes del proyecto
### Preguntas
1. ¿Qué ventajas tiene el uso de servicios en Angular para el consumo de APIs?
Los servicios centralizan el código para consumir APIs, eso es lo que facilita su reutilización en varios componentes de la aplicación , asi tambien al tener la lógica de consumo de API en un servicio separado, es más fácil realizar pruebas unitarias
2. ¿Por qué es importante separar la lógica de negocio de la lógica de presentación?
Separar estas lógicas permite actualizar o modificar la lógica de negocio sin afectar la interfaz de usuario, lo que hace que el código sea más fácil de mantener
3. ¿Qué otros tipos de datos o APIs podrías integrar en un proyecto como este?
Un ejemplo muy utililzado en proyectos web puede ser de la geolocalización si el proyecto necesita datos de ubicación, podrías usar APIs de servicios como Google Maps o OpenStreetMap.

