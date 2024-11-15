/************************************  PROPIERTIES  *******************************************
 * TEMAS:
 *       -- Definición de propiedades dentro de los métodos de clase
 *       -- Declaración directa dentro del cuerpo de la clase
 * 
 * 
 * 
 * Los objetos, además de los métodos, obiamente contienen propiedades.
 * 
 * Por lo tanto, las clases deben poder definirlas.
 * 
 * Esto requiere una explicación adicional, porque la sintaxis de clase original introducida
 * en JavaScript en ECMAScript 6 no ofrece posibilidad de declarar explícitamente propiedades
 * dentro del cuerpo de la clase.
 * 
 * Esta posibilidad se añadió hace relativamente poco tiempo, pero todavía es una
 * técnica experimental.
 * 
 * Discutiremos dos métodos para declarar una propiedad:  en el cuerpo del constructor y
 * los métodos, y una alternativa, la nueva, en el cuerpo de la clase.
 * 
 * Ambos tipos de declaración se pueden utilizar simultáneamente en clase.
 */

/**********  Definición de propiedades dentro de los métodos de clase **************** 
 * 
 * Al introducir clases en el lenguae JavaScript, se asumió que las propiedades se
 * definirían según las necesidades dentro de los cuerpos del constructor y los
 * métodos.
 * 
 * Para ser honestos, no es realmente una declaración verdadera.  Nos aprovechamos del hecho
 * de que si intentamos almacenar el valor en una propiedad inexistente, se creará automá-
 * ticamente.
 * 
 * Se utiliza exactamente la misma técnica en el método constructor que aprendimos.
 * 
 * Esto no es especialmente complicado.  El único inconveniente puede ser la legibilidad del
 * código de una clase de este tipo: a primera vista, puede que tengamos problemas
 * para localizar todas las propiedades (su definición puede estar dispersa en diferentes
 * métodos).
 * 
 * En el siguiente ejemplo con la clase Vehicle, declaramos las propiedades exactamente
 * de esta manera, así que veámoslo nuevamente.
*/

class Vehicle {

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

/** En el constructor, declaramos implícitamente las dos propiedaes id y status, asignándoles
 * los valores dados al crear un nuevo objeto.
 * 
 * Inicialmente, el objeto aún no tiene dichos campos, por lo que se crean.  Solo entonces
 * se almacenan en ellos los valores pasados (se lleva a cabo la inicialización).
 * 
 * Luego se llama al método setPosition, en su cuerpo hacemos referencia a las propiedades
 * time, longitude y latitude, ya que cuando llamamos al método setPosition por primera
 * vez estas propiedades aún no existen, por lo que si intentamos asignarles algo las 
 * crearemos primero.
 * 
 * Las llamadas posteriores al método setPosition, por ejemplo vehicle.setPosition(0,0),
 * por supuesto solo darán como resultados la asignación de nuevos valores a propiedades
 * existentes.
 * 
 */

/************  Declaración directa dentro del cuerpo de la clase   
 * 
 * Con el tiempo, se introdujo en JavaScript la posibilidad de declarar explicitamente
 * propiedades en el cuerpo de la clase, de forma similar a la declaración de 
 * métodos.
 * 
 * Además, se introdujo una distinción entre propiedades PÚBLICAS y PRIVADAS. 
 * Las propiedades PÚBLICAS son aquellas a las que se puede acceder desde fuera del objeto
 * (es decir, en nuestro ejemplo con la clase Vehicle, todas las propiedades).
 * Las propiedades PRIVADAS no están disponibles fuera del objeto; solo los métodos
 * del objeto tienen acceso a ellas.
 * 
 * NOTA:  La declaración de propiedades públicas y privadas en el cuerpo de la clase es
 *        una "función experimental", que todavía se encuentra en la etapa de estandarización
 *        y no se puede asumir que todos los navegadores la soporten.  Opcionalmente, se
 *        pueden utilizar soluciones como Babel, es decir, sistemas de construcción que
 *        funcionan como una especie de compilador.  Analizan nuestro código JavaScript y,
 *        entre otras cosas. "traducen" ciertas construcciones que aún no son un estándar
 *        común en otras equivalentes.  Sin embargo, el uso de constructores queda 
 *        definitivamente fuera del alcance de nuestro curso. Por lo tanto, aprenderemos
 *        a crear declaraciones de propiedades en el cuerpo de la clase, pero preferiremos 
 *        utilizarlas.
 */

class Vehicle1 {

    status = "unavailable"; //declaración de propiedad fuera del constructor
    
    constructor({id, latitude, longitude}){
        this.id = id;
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

/**En nuestro ejemplo, un buen candidato para una declaración de este tipo es la
 * propiedad status.  Se inicia al crear un objeto, pero no depende de los argumentos
 * del constructor.  Siempre tiene el valor "unavailable" al principio.  Por lo tanto,
 * será una declaración combinada con inicialización.
 * 
 * Sencillo, ¿no?
 * 
 * La propiedad status aparece directamente en el cuerpo de la clase, esta vez sin el
 * this.  La propiedad se inicia en el mismo lugar (esta parte desaparece del constructor).
 * 
 * Intente crear un objeto de esta clase y verifique si esta propiedad realmente existe y
 * qué valor tiene.
 * 
 * Con el tiempo, se introdujo en JavaScript la posibilidad de declarar explícitamente
 * propiedades en el cuerpo de la clase, de forma similar a la declaración de métodos.
 * 
 * También tenemos la posibilidad de definir ciertas propiedades como privadas (al igual
 * que los métodos, pero como se trata de técnicas experimentales, nos quedaremos sólo
 * con las propiedades).
 * 
 * Declaramos una propiedad privada en el cuerpo de una clase y marcamos su "privacidad"
 * comenzando el nombre con #.
 * 
 * En nuestro ejemplo, las propiedades longitude y latitude sonideales para esto.
 * Hemos preparado los métodos getPosition y setPosition que nos permiten leer y
 * modificar la posición almacenada con estas dos propiedades.
 * 
 * No es necesario permitir el acceso directo a estas propiedades desde el exterior.
 * Veamos un ejemplo
 */

class Vehicle2 {

    status = "unavailable";
    #longitude;
    #latitude;
    
    constructor({id, latitude, longitude}){
        this.id = id;
        this.setPosition({latitude, longitude});
    };
    
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.#longitude = longitude;
        this.#latitude = latitude;
    };
    
    getPosition() {
        return {
            latitude: this.#latitude,
            longitude: this.#longitude
        };
    };
    };
    
    let vehicle = new Vehicle2({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
    console.log(vehicle.getPosition());
    console.log(vehicle.#longitude); // ReferenceError: error is not defined

/** En el  cuerpo de la clase, agregamos las declaraciones de los campos #longitude y
 * #latitude.  Se inicializan las primera vez que se llama a a setPosition.
 * 
 * Como puedes ver, están disponibles para nuestros métodos de objeto:
 * getPosition y setPosition.
 * 
 * Intentar acceder a ellos directamente desde fuera del objeto dará como resultado que
 * se genere una excepción.
 * 
 * NOTA:
 *      Más adelante en el curso, no utilizaremos declaraciones de propiedad en el cuerpo
 *      de la clase.  Nos ceñiremos al enfoque clásico con declaraciones en los cuerpos del
 *      constructor y los métodos.  Sin embargo, deberías estar familizrizado con esta técnica
 *      porque probablemente se convertirá en un estándar muy pronto.
 */