/**
 * A partir de las versiones (>1.3) la forma de crear un controlador
 * pasa de ser:
 * 
 * function AppCtrl($scope) {
 *      $scope.name = "World";
 * }
 * 
 * A instanciarse de la manera indicada en el documento.
 * 
 * Actualizado: la estructura de los modulos en AngularJS es la
 * siguiente:
 * 
 * - angular.module("app", []) => La función 'module' establece un módulo
 *   que tendrá como nombre el primer parámetro que le pasemos, en este caso, "app".
 *   Los corchetes indican un array en el que se pueden especificar dependencias
 *   que se pueden inyectar en el módulo, por ejemplo, 'ngRoute'.
 * 
 * - .controller("AppCtrl", function ($scope)) => El método '.controller()' nos
 *   permite establecer controladores dentro del módulo, con los que podremos
 *   gestionar el funcionamiento de nuestra aplicación.
 * 
 * Por defecto, cuando indicamos la directiva 'ng-app' sin pasar ningún parámetro,
 * AngularJS establece un módulo que trae por defecto, permitiendonos ver las fucionalidades
 * básicas del core. Si quisieramos crear un controlador, tendríamos que crear un módulo
 * y pasarlo como parámetro a la directiva 'ng-app'.
 * 
 * ========================================================================================
 * 
 * El servicio '$routeProvider' nos permite utilizar los métodos 'when' y 'otherwise'
 * para establecer las rutas de nuestra aplicación. Dentro de método 'when'
 * podemos establecer una vista (plantilla html) y un controlador que la gestionará.
 * Si especificamos un controlador, tendremos que definirlo en nuestro módulo.
 * Con el método 'otherwise' estableceremos la ruta a seguir por nuestra aplicación
 * cuando esta no sepa que vista mostrar al usuario.
 * 
 * ========================================================================================
 * 
 * Inyectando el servicio '$locationProvider' podremos establecer un prefijo a nuestras rutas,
 * por ejemplo:
 * 
 *          https://localhost:8000/#/add-contact
 * 
 * En la ruta proporcionada arriba, podemos observar que hay un hashtag '#' que precede a
 * nuestra ruta. Este prefijo podemos cambiarlo si utilizamos una aplicación estructurada
 * en perfiles, por ejemplo. En nuestro caso hemos decidido eliminarlo con el método
 * 'html5Mode'.
 */

angular.module("app", ['ngRoute']).config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        controller: 'indexCtrl',
        templateUrl: 'assets/partials/index.html'
    })
    .when('/add-contact', {
        controller: 'addCtrl',
        templateUrl: 'assets/partials/add.html'
    })
    .when('/contact/:id', {
        controller: 'contactCtrl',
        templateUrl: 'assets/partials/contact.html'
    })
    .otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
}).controller("indexCtrl", function($scope) {

}).controller("addCtrl", function($scope) {

}).controller("contactCtrl", function($scope, $routeParams) {

})