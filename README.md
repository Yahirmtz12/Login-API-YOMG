### Proyecto Validacion con API
El proyecto trata de utilizar una API para validar los usuarios en la API y de acuerdo a eso darle acceso cuadno se inicie sesion si es que existe 

### PROCESO DE CREACION
1. **Creación del proyecto en Angular**: 
   - Comando para crear el proyecto: `ng new Login-api-YOMG`
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
8. **Ahora el login**:  
   - Comando para crear componentes: `ng generate c components/login`
   - En el archivo se crean los html y el ts que se ocuparan
9. **Implementacion vista Html**:  
   - Se crea un formato en el cual se obtengan los valores del username y el password para leerlos
10. **Validacion con el API**:
   - Se importa los user-service para poder usar el API
   - Se implementa en el login component la inicializacion de donde se guardaran los usuarios de la API esto se hace simplemente con el getUsers que se tiene en user-service
   - Codigo para hacer inicializacion
   - this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
   - Una vez adquirido los usuarios se procede adquirir los valores ingresados en los txtfields y buscar en el API uno que coincida con el , en dado caso que no haya no dara acceso y si si lo hara
   - El codigo para implementar esta validacion es este
   - const user = this.users.find(
      (u) => u.name === username && u.password === password
    );
11. **Finalizacion**:  
  - Finalmente solo se ejecuta el comando `ng serve`
  - Para iniciar login y se muestre para que posteriormente ingresar un usuario valido y que lo dirija a la vista de la tabla de usuarios que es /list
12. **Pruebas**:  
  - Las imagenes de las pruebas estan en la carpeta imagenes del proyecto

