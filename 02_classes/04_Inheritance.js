/***********************  Inheritance  ********************************** 
 * 
 * TEMAS:
 *      ++ Shadowing
 *      ++ Herencia desde una función constructora
*/


/********* Herencia           
 * 
 * Una de las principales razones para discutir clases en JavaScript fue simplificar
 * la notación de herencia.
 * 
 * De hecho, el nuevo mecanismo todavía funciona en prototipos, pero su sintaxis es
 * mucho más simple.
 * 
 * Para indicar que una clase hereda métodos y propiedades de otra clase, usamos
 * la palabra clave  -----> extends.
 * 
 * Por lo tanto, la nueva clase extiende la definición de la clase anterior
 * (sin modificar la clase base, por supuesto).
 * 
 * Class Limosina --------------> extends ------------> Class Vehiculo
 * 
 * Volviendo a nuestra pequeña empresa de transporte, se nos ocurrió una idea:  distinguir
 * entre vehículos de pasajeros y de mercancias.
 * 
 * El número de asientos será importante para los pasajeros, por eso decidimos crear una
 * nueva clase Bus en función de la clase Vehicle.
 * 
 * ¿Por qué utilizar la clase Vehicle para este propósito?
 * 
 * Los autobuses tendrán todas las propiedades de los vehículos, por lo que solo nos falta
 * AMPLIARNOS con la propiedad especificando el número de plazas.
 * 
 * La nueva clase Bus extenderá  la clase Vehicle y tendrá su propio constructor, en el 
 * que definiremos e inicializaremos la propiedad del asiento.
 * 
 */

class Vehicle { 
    constructor({id, latitude, longitude}){ 
        this.id = id; 
        this._position = {latitude, longitude}; 
        this.status = "unavailable"; 
        this.time = Date.now();
    };
    
    set position({latitude, longitude}) { 
        this.time = Date.now(); 
        this.longitude = longitude; 
        this.latitude = latitude; 
    };
    
    get position() { 
        return { 
            latitude: this.latitude, 
            longitude: this.longitude 
        }; 
    
    };
    };
    
    let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
    vehicle.position = {longitude: 18.193121, latitude: 59.378654};
    console.log(vehicle.position);

//XXXXXXXXXXXXXXXXXXXXXXXXXXXD XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXD*/
/** A partir de esta línea nada funcionará, no te preocupes lo arreglaremos
 * más adelante, la razón, estamos armando una torre
 * Perdonen las molestias, desarrolladores trabajando*/
class Bus extends Vehicle {
    constructor({seats}) {
        this.seats = seats;
    }
}
let bus = new Bus({seats: 40}); 
console.log(bus.seats); // -> 40
console.log(bus.id); // -> ! undefined


/** A primera vista, todo parece estar bien.  Tenemos una nueva clase Bus, una extensión de
 * la clase Vehicle y su instancia, el objeto bus.
 * 
 * La propiedad seats tiene un valor correcto, pero algo no esta bien con la propiedad id.
 * Resulta que tiene un valor indefinido, al igual que otras propiedades heredades de la
 * clase Vehicle.
 * 
 * ¿Por qué sucedió esto?  Olvidamos pasar los argumentos necesarios para iniciar las
 * propiedades restantes al nuevo constructor.
 * 
 * Vamos a corregir esto  
 Hasta aquí el error XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXD
 Pero seguimos trabajando.*/


 /**Al crear un nuevo objeto, proporcionamos todos los argumentos necesarios y los recibimos
  * en el constructor.
  * 
  * Entonces, ¿por qué sigue sin funcionar como esperamos?  Por una sencilla razón.
  * 
  * Aunque recibimos todos los valores necesarios en el nuevo constructor, no hacemos
  * nada con ellos.
  * 
  * Para solucionar esto, podríamos establecer las propiedades necesarias una por una en 
  * el nuevo constructor, pero de esta manera prácticamente reescribiríamos el
  * constructor Vehicle ya existente.
  * 
  * En este punto nos puede ayudar una nueva palabra clave: super    &&&&&&&&
  * Puede utilizarse en la herencia de clases para llamar al constructor de la clase
  * base ( en nuestro caso le clase Vehicle)
  * 
  * ¡Esto es lo que necesitamoa!
  * 
  * Arreglemos el código nuevamente.
  * 
  * Esta vez todo funciona bien.
  * 
  * De esta forma, ya podemos crear una clase a partir de una clase existente usando 
  * herencia (o, según la nomenclatura de JavaScript, extendiendola).
  * 
  * Por cierto en JavaScript, la clase base que ampliamos a menudo se denomina
  * superclase.
  */
class Bus2 extends Vehicle {
    constructor({seats, id, latitude, longitude}) {
        super({id, latitude, longitude});
        this.seats = seats;
    }
    }
    let bus2 = new Bus2({seats: 4, longitude: 18.213423, latitude: 59.367628, id: "AL1024"}); 
    console.log(bus2.seats); // -> 4
    console.log(bus2.id); // -> "AL1024"


/**********************  Shadowing             
 * 
 * Al ampliar una clase, es posible que experimentes un EFECTO SOMBRA.
 * 
 * Esto sucede, por ejemplo, cuando en una nueva clase se ha definido un método
 * con el mismo nombre que el método de la clase base.
 * 
 * En tal situación, el nuevo método definido en la clase que extiende la clase base
 * "gana", y reemplaza al antiguo.
 * 
 * Sin embargo, tienes la opción de llamar a un método de clase base con sombra.
 * Una vez más, la palabra clave super viene al rescate.
 * 
 * Analicemos un caso simple, en el que AlmostEmptyClass se está ampliando la clase
 * creando una nueva clase ExtendedClass.
 * 
 * La clase base, además del constructor, tiene un solo método: sayHi.  En la nueva
 * clase, definiremos un nuevo métodocon el mismo nombre.
 * 
 * A esto añadiremos dos métodos, newHi y oldHi.
 * 
 * El método newHi hará referencia sayHi a esto.  El método oldHi utilizará super en
 * lugar de esto.
 * 
 * Veamos el código.
*/

class AlmostEmptyClass { 
    constructor(sth) { 
        console.log(sth); 
    }; 
    sayHi() { 
        console.log("Hi!") 
    }; 
    }; 
    
    class ExtendedClass extends AlmostEmptyClass {
    constructor(name) {
        super("I am super ...");
        this.name = name;
    };
    sayHi() { 
        console.log(`Hi ${this.name}!`); 
    };
    newHi() {
        this.sayHi();
    }
    oldHi() {
        super.sayHi();
    };
    };
    
    let obj = new ExtendedClass("Bob"); // -> I’m super ...
    obj.sayHi();    // -> Hi Bob!
    obj.newHi();    // -> Hi Bob!
    obj.oldHi();    // Hi!


/*******************  Herencia de una función constructora
 * 
 * La nueva clase no solo puede extender otra clase.
 * 
 * En este mecanismo de herencia, también podemos utilizar funciones constructoras,
 * es decir, un método separado para crear objetos.
 * 
 * Definamos un constructor llamado AlmostEmpty, que será el equivalente exacto
 * a AlmostEmptyClass del ejemplo anterior
 */

let AlmostEmpty1 = function(sth) { 
    console.log(sth); 
    this.sayHi = function() { 
            console.log("Hi!") 
        }; 
    };

/** La palabra clave extends nos permite crear una nueva clase basada en dicho constructor.
 * 
 * En este caso, tratamos el nombre de la función constructora como el nombre de la clase base
 * 
 */

class ExtendedClass1 extends AlmostEmpty1 {
    constructor(name) {
        super("I’m super ...");
        this.name = name;
    };
    sayHi() { 
        console.log(`Hi ${this.name}!`); 
    };
};

let obj1 = new ExtendedClass1("Bob");
obj1.sayHi();    // -> Hi Bob!

/**También puedes usar objetos y otras clases para expandir clases, pero la técnica
 * es un poco más compleja y no generaremos más confusión.
 */