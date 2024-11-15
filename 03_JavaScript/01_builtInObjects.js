/******************************************** Built in Objects ***********
 * 
 * Temas:
 *      + Tipos de datos simples
 *      + Tipos de datos compuestos
 *      + JSON, Math, an RegExp
 */




/*********** Built in Objects  (Objetos Incorporados)
 * 
 * Ahora que hemos aprendido a definir y crear sus propios objetos utilizando técnicas como 
 * literales, constructores o clases-
 * 
 * La estructura de estos objetos, es decir, las propiedades y métodos que contienen, obviamente
 * resultará de lo que necesites en este momento.
 * 
 * Sin embargo, no tenemos por qué hecerlo todo nosotros mismos.  En JavaScript, muchas de 
 * las funcionalidades del lenguaje se proporcionan en forma de objetos predefinidos y 
 * listos para usar.
 * 
 * Si, por ejemplo, quieres hacer algo de matemática, buscarás Math y usarás JSON para 
 * convertir un objeto a un formato que pueda enviarse a través de la red.
 * 
 * Estós son algunos de los objetos integrados estándar.
 * 
 * > x = undefined
 * < undefined
 * > Math.sin(x)
 * 
 * |
 * |      de      nd
 * |     n  f    u  e    d
 * |    u    i  d    f  e
 * |          ne      in
 * |_________________________
 * 
 * El término "objeto integrado" es un término generalmente aceptado, utilizado por
 * ejemplo en el estándar ECMScript o la documentación de Web Docs de MDN (Mozilla Developer
 * Network), que es la ayuda más completa para desarrolladores web
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript
 * 
 * Muchos de esos objetos, como Math y JSON, son en realidad objetos comunes. Los usamos
 * dando el nombre del objeto y el método o propiedad que le es específico, por ejemplo
 * JSON.stringify.
 * 
 * Sin embargo no todos los objetos "incorporados" son objetos ordinarios.
 * 
 * Es simplemente un término general bajo el cual, en muchos casos, también se ocultan
 * clases o funciones integradas como Object o Date.
 * 
 * Entonces ¿no deberíamos llamarlas clases integradas?
 * 
 * No necesariamente; como dijimos antes, en JavaScript todo, excepto los primitivos, es un
 * objeto, incluidas las clases y funciones.
 * 
 * Por lo tanto, se ha adoptado una convención de nombres unificada para todos los elementos
 * (objetos, clases, funciones, constructores) integrados del lenguaje.
 * 
 * Sin embargo, antes de utilizar uno de los objetos integrados, recuerda comprobar
 * si realmente es un objeto o si quizás una clase a partir de la cual crearás un objeto
 * de un tipo específico.
 * 
 * 
 * Analizaremos en profundidad algunos objetos seleccionados, que probablemente sean los más
 * utilizados en la práctica diaria de JavaScript.  Al mismo tiempo, en esta etapa del
 * aprendizaje, también son los más fáciles de entender.
 * 
 * Ya hemos encontrado algunos de estos objetos (verificar la fecha actual es un ejemplo)
 * y otros se presentarán más adelante en el curso (como Promise).
 * 
 * Puedes encontrar una lista completa en las páginas MDN Web Docs.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
 * 
 * Te recomiendo que visites este sitio web.  Considéralo una fuente básica de información
 * sobre JavaScript, que te ayudará no solo en este curso, sino en tu trabajo.
 * 
 * Lo que has aprendido hasta ahora te ayudará a comprender qué ponen a nuestra disposición
 * los objetos integrados y cómo lo hacen.
 * 
 * El uso de métodos y propiedades, la creación de objetos, la comprobación de sus tipos e
 * instancias no deberían causarte ningún problema.  También será importante distinguir
 * entre métodos y propiedades estáticos y prototipos ( o, en otras palabras, métodos y
 * propiedades de instancias).
 * 
 * Hablamos de la diferencia entre estos métodos en la sección sobre clases.  Vale la pena 
 * recordar aquí algunos datos básicos sobre este tema.  Si había un método en la definición 
 * de clase, normalmente era un método prototipo o un método de instancia.  Este método
 * estaba disponible en un objeto basado en la clase.
 * 
 * Para eso son las clases ¿no?
 * 
 * Sin embargo, si precediéramos la declaración del método con la palabra clave static,
 * indicaríamos que debía tratarse como estático y no lo encontraríamos en el objeto resultante.
 * 
 * Veamos un ejemplo del módulo anterior:
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

/** No repasaremos todo el ejemplo aquí: un vistazo debería ser suficiente para recordar
 * de que se trata.
 * 
 * Si aún tienes dudas, vuelve a las explicaciones del módulo anterior antes de 
 * continuar.
 */

/**Por qué es tan importante para nosotros la distinción entre campos estáticos y prototipos?
 * 
 * Porque la maypría de los objetos integrados que estamos estudiando utilizarán ambos.
 * 
 * Sin comprender esta diferencia, tendrá un problema tanto con la documentación que 
 * describe los objetos seleccionados como con su uso correcto.
 * 
 * CONTINUARÁ...
 * 
 * Lo siguiente te ayudará a comprenderlo mejor
 * ******************************************************************************************
 * 
 * Campos Estáticos
1. Definición:

Los campos estáticos son propiedades y métodos que pertenecen a la clase en sí misma, 
no a las instancias de la clase.
Se definen usando la palabra clave static.

2. Acceso:

Se accede a los campos estáticos directamente a través de la clase,
no a través de las instancias.

3. Uso:

Los campos estáticos son útiles para definir métodos de utilidad o constantes que no dependen
 de las instancias de la clase.
 * Echemos un vistazo, por eje
 */
 class MyClass {
    static staticField = "I am a static field";
    
    static staticMethod() {
        return "I am a static method";
    }
}

// Acceso a campos estáticos
console.log(MyClass.staticField); // "I am a static field"
console.log(MyClass.staticMethod()); // "I am a static method"

// Intento de acceso a campos estáticos a través de una instancia
let instance = new MyClass();
console.log(instance.staticField); // undefined
console.log(instance.staticMethod); // undefined

/**
 * Prototipos
 * 
1.Definición:

Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan propiedades
y métodos de otros objetos.

Cada función constructora tiene una propiedad prototype que se utiliza para definir métodos 
y propiedades que serán compartidos por todas las instancias de esa función.

2.Acceso:

Los métodos y propiedades definidos en el prototipo son accesibles a través de las instancias
de la clase.

3. Uso:

Los prototipos son útiles para definir métodos y propiedades que deben ser compartidos por 
todas las instancias de una clase, ahorrando memoria.
 */

function MyClass() {
    this.instanceField = "I am an instance field";
}

// Definición de métodos en el prototipo
MyClass.prototype.instanceMethod = function() {
    return "I am an instance method";
};

// Creación de instancias
let instance1 = new MyClass();
let instance2 = new MyClass();

// Acceso a métodos y propiedades del prototipo
console.log(instance1.instanceMethod()); // "I am an instance method"
console.log(instance2.instanceMethod()); // "I am an instance method"

// Acceso a propiedades de instancia
console.log(instance1.instanceField); // "I am an instance field"
console.log(instance2.instanceField); // "I am an instance field"

/**
 * 
 * Comparación
Aspecto	                 Campos Estáticos	                     Prototipos
Definición	    Usando la palabra clave static	      Usando la propiedad prototype de la función
Acceso	              A través de la clase	               A través de las instancias
Uso	             Métodos y propiedades que no 	         Métodos y propiedades compartidos por 
                 dependen de las instancias                     todas las instancias
Ejemplo de 
Acceso	             MyClass.staticMethod()	                  instance.instanceMethod()
Memoria	        No se duplica para cada instancia	    Compartido entre todas las instancias

Resumen
Campos Estáticos: Son propiedades y métodos que pertenecen a la clase en sí misma y 
                  se acceden directamente a través de la clase.

Prototipos: Son propiedades y métodos que pertenecen a las instancias de la clase y
            se definen en la propiedad prototype de la función constructora. 
            Estos métodos y propiedades son compartidos por todas las instancias, 
            lo que ahorra memoria.

Ambos mecanismos son útiles en diferentes contextos y se utilizan para diferentes propósitos
en la programación orientada a objetos en JavaScript.
***********************************************************************************************
 */

/** ...CONTINUEMOS
 * 
 * Echemos un vistazo, por ejemplo, al constructor Number, que se utiliza para crear
 * objetos que son envueltos en el primitivo number (lo analizaremos mas adelante).
 */

let n = new Number(100.123);
let fixed = n.toFixed(2);
let test1 = Number.isInteger(100);
let test2 = n.isInteger(100); // -> n.isInteger is not a function, esta línea es un error

/**En nuestro ejemplo, creamos el objeto n, usando el constructor Number.
 * 
 * EN la documentación de Number, encontramos información indicando que contiene el método
 * toFixed, que devuelve una cadena con nuestro número usando notación de punto fijo
 * (especificamos el número de dígitos después del punto decimal que nos interesa).
 * 
 * Es un método prototipo (o método de instancia).
 * 
 * Entonces lo usamos utilizando el objeto creado por el constructor Number.
 * 
 * Por lo tanto en la segunda línea del ejemplo (252), aparece n.toFixed(2) 
 * 
 * El método funciona sobre un objeto particular y opera sobre sus propiedades, en 
 * nuestro caso sobre el valor 100.23
 * 
 * En la misma documentación podemos encontrar información sobre otro método, esta vez estático:
 * isInteger.
 * 
 * Este método nos permite probar si el número es un número entero.
 * 
 * Es un método estático, por lo que no está conectado con el objeto creado (instancia) sino
 * con el constructor (o en otros casos, con la clase).
 * 
 * Entonces el método no funciona en el objeto.
 * 
 * Utiliza solo el valor pasado como argumento de llamada.
 * 
 * Dividamos los objetos discutidos en tres grupos.  Nuestra división es arbitraria, y no
 * proviene directamente ni de la documentación ni de la forma en que se aplican.  Estamos
 * guiados por la usabilidad de los objetos, así que no te sorprendas si miras otros 
 * materiales sobre objetos incorporados y encuentras una clasificación diferente.
 * 
 * El primer grupo son objetos que representan tipos de datos simples:
 *          - Boolean
 *          - Number
 *          - String
 *          - Date
 * 
 * El segundo grupo incluye objetos que representan tipos de datos compuestos:
 *          - Array
 *          - Set
 *          - Map
 *          - Object
 * 
 * El tercer grupo está formado por objetos que no están relacionados con tipos de datos,
 * pero que simplifican nuestro trabajo diario con JavaScript:
 *         - JSON
 *         - Math
 *         - RegExp
 * 
 * La anterior no es una visión completa de los objetos estandares incorporados.
 * 
 * Soló llegaremos a conocer un conjunto muy básico.
 * 
 * Cada uno de losobjetos será discutido desde un punto de vista estrictamente funcional, y
 * esto no será un análisis exhaustivo de todos los métodos y propiedades disponibles.
 * 
 * Nos centraremos sólo en los métodos y propiedades que son los más útiles en la
 * programación pr´sctica, o que se necesitan para entender otros mecanismos.
 * 
 * Si estás interesado en expandir tus conocimientos es esta área, echa una vista a las
 * páginas de MDN.
 * 
 */