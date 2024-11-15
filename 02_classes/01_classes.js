/** ******************************************************************************************************
 * Clases y enfoque basado en clases

Después de completar esta sección, el estudiante estará familiarizado con
los siguientes temas:

    + Declaración de clase;
    + Propiedades;
    + Captadores y definidores;
    + Herencia;
    + Miembros estáticos;
    + Clases vs. constructores.
 *************************************************************************************************************/

/** **********************************************************************************************************
 * CLASES
 * 
 *      Hasta ahora hemos aprendido varios métodos para crear objetos en JavaScript.
 * Todos los objetos creados hasta el momento representan el modelo sin clases.
 * 
 *      Tambien hemos hablado que existe otro método importante que se introdujo en JavaScript
 * en el estándar ECMAScript6.  Nos referimos a las clases, que son una plantilla de objeto.
 * 
 * Pero ¿Por qué otro método para crear objetos?
 *       Hay dos razones principales:
 * 
 *              1. La  HERENCIA (Inheritance):
 *                         Recuerda los prototipos que usábamos para heredar métodos y
 *                         propiedades de un objeto seleccionado.
 * 
 *                         Y aunque no recuerdes exactamente cómo funcionaban, lo cual
 *                         es muy probable, seguramente recordarás que no era una técnica
 *                         fácil.
 * 
 *                         No es muy intuitivo, sobre todo al principio, y para entenderlo 
 *                         bien hay que dedicarle mucho tiempo practicándolo.
 * 
 *                         En el caso de las clases, la herencia, al menos desde la notación
 *                         en el código, es incomparablemente más simple.
 * 
 *              2.  Las clases se utilizan en la gran mayoría de lenguajes orientados a
 *                  objetos.
 * 
 * JavaScript no permite definir propiedades directamente en el cuerpo de la clase (solo se
 * definen métodos) y no es posible crear campos privados (invisible fuera del objeto y creados
 * en base a la clase) 
 */


/**      ********** ¿Qué es una clase?   *************
 * 
 *     Es una plantilla para crear un tipo particular de objeto.
 * 
 *     Usando la clase y la palabra clave new, podemos crear tantos objetos de un
 *     tipo dado como necesitemos.
 * 
 *     Dentro de la plantilla, especificamos los métodos que aparecerán en el objeto y
 *     sus propiedades.
 * 
 *     Un componente importante de una clase es el constructor, que es una función que se
 *     invoca al crear un objeto basado en la clase.  El constructor se utiliza para iniciar
 *     un nuevo objeto.  Por ejemplo, podemos establecer en él valores iniciales en las 
 *     propiedades del objeto.
 * 
 *     Como probablemente recuerdes en JavaScript existe un método para crear objetos usando 
 *     constructores; desafortunadamente, bajo el mismo nombre hay dos cosas diferentes 
 *     (al menos a nivel de sintaxis del lenguaje).
 *     
 *     Entonces, si el término constructor aparece en el texto, presta atención a si se 
 *     trata de un constructor de clase o de una función constructura utilizada 
 *     directamente para crear un objeto.
 * 
 *      Recuerde: la clase determina qué métodos y propiedades tendrá el objeto creado
 *                sobre su base.
 * 
 *      Sólo el objeto almacenará valores específicos en estas propiedades y proporcionará
 *      los métodos definidos en la clase.
 * 
 *      A veces, a un objeto se lo denomina INSTANCIA de una clase.  Este término se
 *      utiliza, por ejemplo, cuando se habla de métodos definidos en la clase; se trata
 *      de métodos de instancia (con algunas excepciones menores).
 * 
 *      También se dice que el objeto es de un tipo determinado, y el nombre de la
 *      clase se utiliza como designación del tipo.
 * 
 *      Por ejemplo, si creamos un objeto perro a partir de la CLASE ANIMAL, este objeto
 *      sería tipo ANIMAL y, por supuesto, el PERRO sería una instancia ANIMAL.
*/


/**   DECLARACIÓN DE CLASE
 * 
 *   Temas:
 *      + Declaración de clase;
 *      + Expresión de clase;
 *      + El operador instanceof
 * 
 * 
 */

/** + Declaración de clase 
 * 
 *Para ayudarte a definir tu primera clase, idearemos un escenario simple, que modificaremos
  gradualmente a medida que avancemos.

*Supongamos que tenemos una pequeña empresa de transporte con diferentes vehículos. 
 Para empezar, solo nos interesa localizar estos vehículos. Cada uno de ellos tendrá su
 propio identificador (que daremos arbitrariamente mediante una cadena de caracteres).
 Cada vehículo también estará en un estado determinado (“libre”, “ocupado”, “no disponible”).
 Su posición geográfica estará determinada por las propiedades de longitud y latitud. Además, 
 se almacenará la hora de la última actualización de la posición.

*Antes de pasar a las declaraciones de clases, intentaremos escribir nuestro escenario 
 utilizando un método previamente aprendido basado en constructores 
 (o más precisamente, las funciones constructoras ).


*/

let Vehicle = function(id, latitude, longitude){

    this.setPosition = function(latitude, longitude) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    
    this.id = id;
    this.status = "unavailable";
    this.time = Date.now();
    this.latitude = latitude;    
    this.longitude = longitude;
    
    };
    
    let vehicle = new Vehicle("AL1024", 59.358615, 17.947589);
    vehicle1.setPosition(59.367647, 18.213451);
    console.log(vehicle1);
    
    /**
     * Hemos definido la función Vehicle que se utilizará como constructor. 
     * Como recordatorio, cada llamada a esta función precedida por la palabra clave new
     * creará un nuevo objeto. Y lo que habrá en este objeto depende del contenido de 
     * nuestra función constructora y de los argumentos que se le proporcionen. 
     * Según nuestro escenario, hemos definido las siguientes propiedades: 
     * id, status, time, latitude y longitude, y el método setPosition.
     * 
     * Tenga en cuenta el uso del método Date.now al iniciar la propiedad de tiempo. 
     * Devuelve la hora actual. El formato de la hora es bastante específico: 
     * la cantidad de milisegundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC 
     * (la época de UNIX). Con la ayuda de otros métodos de fecha, podemos convertir este 
     * formato a algo más legible, pero por el momento no es necesario hacerlo.
     */
    
    /**
     * Vamos a darle un poco de orden a nuestro código.
    
        En primer lugar, el mismo código se repite en dos lugares, es decir, 
        en el método setPosition y... ¿puedes indicar dónde?
    
        Esto es una redundancia y ya podemos deshacernos de ella utilizando el método setPosition 
        en la etapa de iniciación del objeto.
     */
    let Vehicle1 = function(id, latitude, longitude){
    
        this.setPosition = function(latitude, longitude) {
            this.time = Date.now();
            this.longitude = longitude;
            this.latitude = latitude;
        };
        
        this.id = id;
        this.status = "unavailable";
        this.setPosition(latitude, longitude);
        };
    
    // puedes ver la diferencia
    /**
     * Podemos mejorar una cosa más: la forma en que se pasan los argumentos al constructor y 
     * al método setPosition.
    
        Lo que vamos a presentar en un momento no es sólo sobre constructores y no está 
        directamente relacionado con los objetos, pero en nuestra opinión es un buen lugar para
        conocer la nueva técnica.
    
        Todo lo que hemos escrito hasta ahora es lo más correcto posible.
    
        Sin embargo, pasar algunos argumentos, especialmente de un tipo similar, a veces puede 
        generar algunas ambigüedades, errores y, como resultado, equivocaciones.
    
        La posición que describimos con latitud y longitud es un ejemplo perfecto de esto.
    
        Al pasar los argumentos al constructor al crear un objeto, debemos recordar que la 
        latitud se da antes que la longitud.
    
        Generalmente no habrá ningún problema con eso, porque en la mayoría de aplicaciones 
        SIG (Sistema de Información Geográfica) se utiliza este orden de coordenadas, y 
        finalmente lo recordaremos.
    
        A veces, sin embargo, especialmente cuando se especifica la posición en el mar, 
        se utiliza el orden inverso, dando primero la longitud y luego la latitud.
    
        Si alguien tiene que lidiar con una notación de este tipo, puede cometer un error por 
        reflejo y dar argumentos en el orden incorrecto.
     */
    
    /**
     * Podemos ayudarnos creando un objeto sobre la marcha a partir de todos los argumentos, 
     * que pasaremos a la función (en este caso al constructor) como un único argumento.
    
        ¿Qué cambia esto? Cada campo de un objeto de este tipo debe tener un nombre y el 
        orden de los campos es irrelevante (por cierto, esta es la diferencia básica entre una 
        matriz y un objeto).
    
        La forma más fácil de demostrarlo es modificar nuestro ejemplo.
     */
        let Vehicle2 = function(initialData){
            let {id, latitude, longitude} = initialData;
            
            this.setPosition = function(latitude, longitude) {
                this.time = Date.now();
                this.longitude = longitude;
                this.latitude = latitude;
            };
            
            this.id = id;
            this.status = "unavailable"; 
            this.setPosition(latitude, longitude);
            };
            
            let vehicle1 = new Vehicle2({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
            let vehicle2 = new Vehicle2({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
    
    /**
     * Al llamar al constructor, pasamos un argumento: un objeto con los campos id latitude,
     * y longitude(cuyo orden es arbitrario).
    
       Los valores se reconocerán por sus nombres, no por su orden.
       El constructor acepta este objeto como parámetro initialData y lo descompone en 
       campos individuales. La siguiente línea:
     
            let {id, latitude, longitude} = initialData;
       
        Puede parecer bastante extraño y, sin duda, necesita una explicación adicional. 
        Esto se llama TAREA DE DESESTRUCTURACIÓN.
    
        Este mecanismo, que se utiliza tanto en objetos como en tablas, se analizará con más 
        detalle en el próximo capítulo. 
        En nuestro ejemplo, funciona de la siguiente manera:
                + Se declaran las variables locales id, latitud y longitud;
                + Las propiedades con los mismos nombres se encuentran en el objeto initialData;
                + Los valores de estas propiedades se asignan a las variables locales que se 
                  acaban de crear.
    
             Así que esta línea en realidad no es nada más que:
                let id = initialData.id;
                let latitude = initialData.latitude;
                let longitude = initialData.longitude;
    
    
     */
    
    /**
     * El uso de initialData es un poco redundante y se puede lograr exactamente el mismo efecto 
     * utilizando una asignación destructiva directamente en el parámetro de función 
     * (aquí en el constructor).
    
       Vamos a mejorarlo
    
       Utilizaremos la misma técnica en el método setPosition y finalmente agregaremos un nuevo 
       método getPosition.
     */
       let Vehicle3 = function({id, latitude, longitude}){
    
        this.setPosition = function({latitude, longitude}) {
            this.time = Date.now();
            this.longitude = longitude;
            this.latitude = latitude;
        };
        
        this.getPosition = function() {
            return {
                latitude: this.latitude,
                longitude: this.longitude
            };
        };
        
        this.id = id;
        this.status = "unavailable";
        this.setPosition({latitude, longitude});
        };
        
        let vehicle3_1 = new Vehicle3({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
        let vehicle3_2 = new Vehicle3({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
    
    /**
     * Así que tenemos un ejemplo listo para usar de una función constructora, con la que hemos 
     * creado dos objetos de prueba.
    
       Así que todo lo que tenemos que hacer es convertirlo en una clase.
     */
    
    /** Declaración de Clases **********************************************************************
     * 
     *      Vamos a introducir una nueva palabra clave en JavaScript para la creación de
     *      clases, y sorprendentemente es class.
     * 
     *      La forma más simple de declaración de clase y uso para crear un objeto 
     *      puede verse así:
     * 
     *              class EmptyClass {};
                    let emptyObject = new EmptyClass;
            
            Nuestra clase EmptyClass no contiene nada, como la emptyObject que se creó a partir de 
            ella. Tenga en cuenta que el nombre de la clase comienza con una letra mayúscula 
            (es solo una práctica, pero definitivamente debe apegarse a ella) y 
            creamos un objeto utilizando el operador new. 
            Ambas restricciones son idénticas a la técnica de creación de objetos utilizando 
            constructores. 
            Las definiciones de clase pueden incluir métodos con los que se equiparán los 
            nuevos objetos.
    
            Además, cada clase debe tener un CONSTRUCTOR, es decir, una función que se llamará 
            al crear un nuevo objeto a partir de ella. 
            El constructor no tiene un nombre, pero en cada clase se nombra de la misma manera: 
            constructor.
    
            En nuestro ejemplo, además de constructor, agregaremos el método de ejemplo sayHi.
     
     */
    
    class AlmostEmptyClass {
    
        constructor(sth) {
            console.log(sth);
        };
        
        sayHi() {
            console.log("Hi!")
        };
        
        };
        
        let almostEmptyObject = new AlmostEmptyClass(120); // -> 120
        almostEmptyObject.sayHi(); // -> Hi!
    
    /**
     * En realidad, esto es todo lo que necesitas saber para definir una clase simple 
     * (aún no estamos pensando en la herencia y problemas similares).
    
        Vale la pena destacar solo un detalle cosmético: 
               asegurarse de que los métodos de la clase no estén separados por comas.
    
              Ojo con eso, porque por la similitud visual de las clases con la declaración de 
              un objeto usando notación literal (en ambos casos usamos llaves) es la causa más
              común de errores entre programadores principiantes que usan clases en JavaScript.
     */
    
    
    /**
     * 
     */
    
    //Volvamos al ejemplo con los vehículos que acabamos de ver.  En el
    //ejemplo anterior, utilizamos la técnica de constructores.  Ahora
    //escribiremos lo mismo utilizando clases.
    
    class Vehicle4 {
    
        constructor({id, latitude, longitude}){
           this.setPosition = function({latitude, longitude}) {
               this.time = Date.now();
               this.longitude = longitude;
               this.latitude = latitude;
           };
       
           this.getPosition = function() {
               return {
                   latitude: this.latitude,
                   longitude: this.longitude
               };
           };
       
           this.id = id;
               this.status = "unavailable";
           this.setPosition({latitude, longitude});
        };
       };
       
       let vehicle4_1 = new Vehicle4({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
       let vehicle4_2 = new Vehicle4({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
    
    
    /**
     * Tener el ejemplo anterior abierto en otra ventana te permitirá observar las diferencias, 
     * que resultarán menores.
    
        De acuerdo con el patrón presentado anteriormente, declaramos una clase Vehicle. 
        Por el momento, solo contiene el constructor.
    
        Copiamos el contenido de la función Vehicle del ejemplo anterior.
    
        Se utiliza en nuestra clase this y tiene el mismo significado que antes. 
        Indica un objeto específico (una instancia) creado a partir de esta clase.
    
       ¿Es cierto que los cambios son menores?
    
    
       Luego creamos dos objetos, vehicle4_1 y vehicle4_2, del tipo Vehicle4 
       (es decir, objetos basados ​​en la clase Vehicle4).
    
       Estos objetos, por supuesto, tendrán todas sus propiedades definidas en el constructor
       de la clase y los métodos declarados en el cuerpo de la clase.
    
       La creación de un objeto no es diferente de lo que aprendimos al discutir la técnica de los
       constructores.
     */
    
    /**
     * 
    El ejemplo es correcto, pero no muy elegante.
    
    Los métodos getPosition y setPosition se declaran innecesariamente dentro del constructor.
    
    El código será más legible si usamos lo que proporciona la clase y cambiamos el lugar de 
    su declaración.
    */
    class Vehicle5 {
    
        constructor({id, latitude, longitude}){
            this.id = id;
        this.status = "unavailable";
            this.setPosition({latitude, longitude});
        };
        
        setPosition({latitude, longitude}) {
            this.time = Date.now();
            this.longitude = longitude;
            this.latitude = latitude;
        };
        
        getPosition() {
            return {
                latitude: this.latitude,
                longitude: this.longitude
            };
        };
        };
        
        let vehicle5_1 = new Vehicle5({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
        vehicle5_1.setPosition({longitude: 18.193121, latitude: 59.378654});
        console.log(vehicle5_1.getPosition());
    
    
    
    /** 
    Estarás de acuerdo en que ahora parece un poco más simple, ¿no?
    
    A primera vista, puedes ver que un objeto creado sobre la base de esta clase 
    tendrá los métodos getPosition y setPosition.
     */
    
    /**      EXPRESIÓN DE CLASE  (capacidad de almacenarla en una variable)
     * 
     * Las clases, al igual que las funciones, se tratan en JavaScript como 
     * CIUDADANOS DE PRIMERA CLASE.
     *      Se trata de un concepto de la teoría de los lenguajes de programación, que 
     * establece que una determinada entidad puede ser tratada en igualdad de condiciones con
     * otras entidades, como por ejemplo los tipos de datos simples.
     * 
     * Lo importante de esta complicada definición es que dicha entidad puede pasarse
     * como argumento, der devuelta por una función y almacenada en una variable
     * 
     */
    //Veamos esto con funciones
    
    function namedFunction() {   //La declaramos con un nombre, es decir, 
                                 //es una función con nombre
        console.log("I'm named, I hope ... ") 
        };
        
        let anonymousFunction = function() { //función anónima, nada entre function y () y
                                             //esta contenida en una variable, la cual
                                            // es una referencia a la función
        console.log("I'm a bit anonymous ...")
        };
        
        let notExactlyAnonymousFunction = function anotherNamedFunction() {
        console.log("I'm confused ...")
        };
        
        namedFunction();	// -> I'm named, I hope ...
        anonymousFunction();	// -> I'm a bit anonymous ...
        notExactlyAnonymousFunction();	// -> I'm confused ...
    
    /**La capacidad de almacenar una función en una variable (es decir, una expresión de función)
     * indica que las funciones en JvaScript son CIUDADANOS DE PRIMERA CLASE.
     * 
     * Lo mismo ocurre con las clases.  Podemos declarar una clase con nombre, como hemos hecho
     * en los ejemplos anteriores, pero también podemos almacenar clases sin nombre en una
     * variable.
     * 
     * Por analogía, lo llamaremos expresión de clase. ¿Recuerdas nuestro ejemplo de la 
     * clase AlmostEmptyClass?
     * 
     * Declarémosla usando una expresión de clase:
     */
    let AlmostEmptyClass1 = class {
    
        constructor(sth) {
            console.log(sth);
        };
        
        sayHi() {
            console.log("Hi!")
        };
        
        };
        
        let almostEmptyObject1 = new AlmostEmptyClass1(120); // 120
        almostEmptyObject.sayHi(); // -> Hi!
    
    /** Observa que a pesar de ser sutituido por una variable, sigue siendo una clase, no
     * un objeto.
     * 
     * Como puedes ver, al compararlas, la diferencia afecta solo a la primera línea de nuestor
     * ejemplos:
     * 
     * ...
    class AlmostEmptyClass {
    ...
    
    ...
    let AlmostEmptyClass = class {
    ...
    
     */
    
    /******************    EL OPERADOR instanceof     ****************************
     * Volvamos a algunos conceptos anteriores.  Entre otros, apareció el nombre de la
     * INSTANCIA.
     * 
     * Esto es lo que llamamos un objeto creado a partir de una clase (un objeto es una instancia
     * de una clase).  Si nos fijamos en el último ejemplo, podemos decier que almostEmptyObject1 es
     * una INSTANCIA de la clase AlmostEmptyClass1. Alternativamente, podemos decir que
     * almostEmptyObject es de un TIPO AlmostEmptyClass.
     * 
     * En nuestro sencillo ejemplo, esto se hace evidente de inmediato. No hay mucho código y, 
     * en el mismo lugar, declaramos una clase y creamos un objeto.
     * 
     * ¿Pero qué hacer si queremos saber el tipo de objeto de un código más complejo?
     * 
     * Un código de este tipo puede contener miles de líneas, dividirse en muchos archivos y puede
     * incluir bibliotecas y fragmentos de código escritos no solo por nosotros.  Podemos operar
     * con muchos objetos y, a menudo, incluso cuando sabemos qué clases tenemos, es posible que 
     * no estemos seguros de si un objeto determinado es una instancia de una clase determinada.
     * 
     * Ya hemos visto anteriormente el operador typeof, que nos permite comprobar los tipos de 
     * variables y valores.  Veamos si también puede ser útil en este caso:
    */
    console.log(typeof almostEmptyObject1); // CONSOLA-> "object"
    
    /**Desafortunadamente, resulta, como probamos antes, que typeof aplicado a almostEmptyObject1
     * devolverá "object".
     * 
     * Esrta es una información verdadera, pero no es lo que esperábamos.  Buscamos la clase a 
     * partir de la cual se creó el objeto, y no solo una conformación de que el objeto
     * es un objeto.
     * 
     * Por eso necesitamos usar otro medios.
     * 
     * En cada objeto (o quizás en casi todos los objetos, y ciertamente en uno que se crea
     * utilizando la clase o la función constructora) encontramos el campo "constructor"
     * 
     * En esta etapa del aprendizaje no tenemos que analizar demasiado el contenido de este
     * campo, basta con saber que en él encontraremos, entre otras, la propiedad name.
     * Esta propiedad debe contener el nombre de la clase a partir de la cual se creó 
     * nuestro objeto.
     * 
     * Vamos a comprobarlo:
     */
    console.log(almostEmptyObject1.constructor.name); // CONSOLA-> "AlmostEmptyClass1"
    /**Esta vez el efecto está en línea con nuestras expectativas.  Por cierto si se
     * crea un objeto utilizando la técnica del constructor, constructor.name indicará el
     * nombre de la función constructora.  Intente reescribir la clase AlmostEmptyClass en
     * la función constructora, por ejemplo AlmostEmpty.
     * 
     * Utilice esta función para crear un objeto y vverificar el campo constructor.name
     * 
     * Sin embargo, en la práctica, el operador instanceof se utiliza con más frecuencia
     * que constructor.name.  No es una alternativa en el sentido literal de la palabra.
     * El operador instanceof no devuelve el nombre de la clase cuyo objeto es una instancia,
     * sini que solo comprueba si la clase y el objeto están relacionados.
     * 
     * Devuelve true o false, confirmando o negando que el objeto especificado es 
     * una instancia de la clase especificada.
     * 
     * Entonces, para poder utilizar este operador, necesitamos tener una idea de qué clase
     * estamos buscando.
     * 
     * En la mayoría de los casos, esto es absolutamente suficiente.
     */
    console.log(almostEmptyObject1 instanceof AlmostEmptyClass1); // CONSOLA-> true
    console.log(almostEmptyObject1 instanceof String); // CONSOLA-> false
    let str = new String("test me");
    console.log(str instanceof String); // CONSOLA-> true
    
    /**Hagamos un experimento más.
     * Ya hemos comprobado que el operador instanceof funciona como se espera para almostEmptyObject1
     * y hemos confirmado que el objeto es una instancia de AlmostEmptyClass1.
     * 
     * Repitamos la prueba, pero esta vez en lugar de AlmostEmptyClass, usemos la clase Object
     * genérica.
     */
    console.log(almostEmptyObject1 instanceof Object); // -> true
    
    /**El resultado puede ser ligeramente sorprendente y necesita ser explicado
     * 
     * En Primer lugar, todos los objetos creados con el uso de clases heredan implícitamente de la
     * clase Object.  Imaginemos que tenemos la clase ABC que se hereda abiertamente de la clase
     * DEF, y esta a su vez de la clase GHI.  La clase GHI se escribe desde cero, pero por
     * defecto hereda de la clase genérica Object.
     * 
     * Entonces, en algún lugar al comienzo de esta cadena está la clase Object, y la clase ABC
     * también hereda de ella (la herencia se analirá con mas detalle)
     * 
     * La segunda cuestión que hay que aclarar es el mismo comportamiento de instanceof.  Prueba 
     * toda la cadena de herencia de la clase especigicada.  Si creamos un objeto abc basado
     * en la clase ABC, entonces todas serán verdaderas:
     * 
     * abc instanceof ABC; // -> true
        abc instanceof DEF; // -> true
        abc instanceof GHI; // -> true
        abc instanceof Object; // -> true
    
    Entonces, en el caso de los objetos, el operador typeof solo devolverá una confirmación de 
    que lo que estamos examinando es un objeto.
    
    El operador instanceof nos permitirá confirmar (o negar) que el objeto indicado es una 
    instancia de una determinada clase.
    
    Sin embargo, cuando buscamos un nombre de clase, podemos utilizar la propiedad constructor.name
    del objeto.
    
     */
    
    