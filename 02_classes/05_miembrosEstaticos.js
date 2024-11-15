/************************ MIEMBROS ESTÄTICOS **********************************
 * 
 * Temas: 
 *     Miembros estáticos
 * 
 * 
 * Miembros estáticos:
 *      En las clases, además de los métodos y propiedades regulares, también podemos
 * definir métodos y propiedades estáticos.
 * 
 * Estos campos que no aparecerán en elobjeto creado; se asociarán solo con la clase.
 * 
 * Puede parecer un poco ilógico y es difícil encontrar una justifiación para la existencia de
 * tales campos estáticos en este momento, así que intentemos analiarlos más de cerca.
 * 
 * ¿Recuerdas nuestra clase almostEmptyClass?  Además del constructor definimos el 
 * método sayHi dentro de ella.
 * 
 * Agreguemos el método sayHello, esta vez estático.  La declaración dentro del cuerpo
 * de la clase debe estar precedida por la palabra clave static. 
 */

class AlmostEmptyClass {

    constructor(sth) {
        console.log(sth);
    };
    
    sayHi() {
        console.log("Hi!")
    };
    
    static sayHello() {
        console.log("Hello!")
    };
    
    };
    
    let almostEmptyObject = new AlmostEmptyClass(120); // 120
    almostEmptyObject.sayHi(); // -> Hi!
    almostEmptyObject.sayHello(); // error
    AlmostEmptyClass.sayHello(); // -> Hello!

/**Como ya lo habíamos previsto, el método estático no aparece en el nuevo archivo
 * almostEmptyObject.  En cambio, está disponible directamente en la clase AlmostEmptyClass.
 * 
 * Declarar y utilizar métodos estáticos es muy sencillo.
 * 
 * Sin embargo, no será tan fácil encontrar una respuesta a la pregunta de por qué
 * utilizar tal mecanismo, y en este momento, puede parecerle absolutamente inútil o
 * incluso sin sentido.
 * 
 * Nada más lejos de la reaidad. Con frecuencia, tenemos que crear métodos de herramientas que
 * operen sobre varios objetos de un tipo determinado (es decir, instancias de una clase).
 * Un ejemplo simple puede ser un método que verifique si los objetos son iguales o no.
 * La desición de si los objetos se consideran iguales o diferentes corresponderá a
 * alguien que escriba un método de comparación apropiado.
 * 
 * Un método de este tipo no está relacionado lógicamente con un solo objeto (o instancia),
 * sino con el tipo de este objeto.
 * 
 * Por lo tanto, no debe colocarse dentro del objeto.
 * Esta conectado con la clase, por lo que es un candidato ideal para el rol de
 * método estático.
 * 
 * 
 * Los miembros estáticos en JavaScript son propiedades y métodos que pertenecen a la clase 
 * en si misma, en lugar de a las instancias de una clase.  Esto significa que puedes
 * acceder a estos miembros directamente a través de la clase, sin necesidad de una
 * instancia de clase
 * 
 * Definición de Miembros Estáticos
 * 
 * Para definir un miembro estático en una clase en JavaScript, se utiliza la palabra
 * clave static. Aquí hay un ejemplo básico:
 * 
  */

class MyClass {
    // Método estático
    static myStaticMethod() {
        return 'Este es un método estático';
    }

    // Propiedad estática
    static myStaticProperty = 'Esta es una propiedad estática';

    // Método de instancia
    myInstanceMethod() {
        return 'Este es un método de instancia';
    }
}

// Acceso a miembros estáticos
console.log(MyClass.myStaticMethod()); // 'Este es un método estático'
console.log(MyClass.myStaticProperty); // 'Esta es una propiedad estática'

// Creación de una instancia de la clase
const myInstance = new MyClass();

// Acceso a métodos de instancia
console.log(myInstance.myInstanceMethod()); // 'Este es un método de instancia'

// Intento de acceso a miembros estáticos desde una instancia (no funcionará)
console.log(myInstance.myStaticMethod); // undefined
console.log(myInstance.myStaticProperty); // undefined

/**Caracteristicas de los Miembros Estáticos
 * 
 *   1. Pertenencia a la Clase:
 *        +  Los miembros estáticos pertenecen a la clase en si misma, no a las
 *           instancias de una clase.
 *        +  Se accede a ellos utilizando el nombre de la clase, no a través de una
 *           instancia.
 *   2. Acceso Directo:
 *        +  Puedes acceder a los miembros estáticos directamente a través de la clase
 *           sin necesidad de crear una instancia.
 *   3. No Accesibles desde Instancias:
 *        +  Los miembros estáticos no son accesibles desde las instancias de la clase.
 *           intentar acceder a un miembro estático desde una instancia devolverá 
 *           undefined.
 */
//Ejemplo: Imagina que tienes una clase MathUtils que proporciona métodos estáticos
//para realizar operaciones matemáticas:

class MathUtils {
    // Método estático para sumar dos números
    static add(a, b) {
        return a + b;
    }

    // Método estático para restar dos números
    static subtract(a, b) {
        return a - b;
    }
}

// Uso de métodos estáticos
console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.subtract(5, 3)); // 2

// Intento de acceso a métodos estáticos desde una instancia (no funcionará)
const mathInstance = new MathUtils();
console.log(mathInstance.add); // undefined
console.log(mathInstance.subtract); // undefined

/**En este ejemplo:

       +  MathUtils.add y MathUtils.subtract son métodos estáticos que se pueden llamar 
          directamente a través de la clase MathUtils.
       +  Intentar acceder a estos métodos desde una instancia de MathUtils (mathInstance) 
          no funcionará y devolverá undefined.
Resumen
Los miembros estáticos en JavaScript son propiedades y métodos que pertenecen a la clase en sí 
misma, no a las instancias de la clase. 
Se definen utilizando la palabra clave static y se accede a ellos directamente a través de 
la clase. No son accesibles desde las instancias de la clase. */ 

/**
 * Volvamos a nuestro ejemplo con la clase Vehicle.
 * 
 * Digamos que queremos poder probar si dos objetos de esta clase no describen el
 * mismo vehículo por casualidad.
 * 
 * Para este propósito, no realizaremos una comparación profunda de todos los campos (debes
 * recordar este término de temas anteriores sobre objetos)
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

static isSameId(v1, v2) {
    return v1.id === v2.id;
};
};

let vehicle1 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
let vehicle2 = new Vehicle({longitude: 0, latitude: 0, id: "AL1024"});
let vehicle3 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1026"});

Vehicle.isSameId(vehicle1, vehicle2); // -> true
Vehicle.isSameId(vehicle1, vehicle3); // -> false

/**
 * Basta con comparar sus identificadores, es decir, propiedades id.
 * 
 * Agregamos un método isSameId.
 * 
 * Tenga en cuenta que realizar comaraciones con este método solo tendrá sentido para
 * los objetos que son instancias de la clase Vehicle y no es un método universal para
 * todos los objetos.
 * 
 * El nevo método estático, asociado a la clase Vehicle, nos permite comparar objetos
 * que son instancias de esta clase.
 * 
 * La forma de referirse al método estático, por ejemplo es nuestro caso Vehicle.isSameId
 * suguiere una coosa más: Utilizamos la notación de puntos, por lo que las clases en
 * JavaScript también son objetos.
 * 
 * Según el principio citado al principio del modulo anterior, en JavaSccript todo, excepto
 * los primitivos, es un objeto.
 * 
 * No pensaremos demasiado en ello en este momento, pero prestemos atención únicamente
 * a una onsecuencia de este hecho.
 * 
 * El método estático (o también propiedad) se puede definir no sólo en el cuerpo de la clase 
 * utilizando la palabra clave static.
 * 
 * También podríamos hacerlo después de la declaración de clase, por ejemplo de esta manera:
 * 
 * Vehicle.isSameId =  function(v1, v2) {
        return v1.id === v2.id;
    };

 */
