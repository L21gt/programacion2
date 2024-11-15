/************************* Clases vs Constructores *********************
 * 
 * TEMAS:
 *      ++ Clases vs constructores
 * 
 ************************************************************************/

/*******    Clases vs. constructores
 * 
 * Probablemente ya te habrás dado cuenta de que las clases en JavaScript son muy similares
 * a las funciones constructoras (la técnica constructora de creación de objetos).
 * 
 * La gran mayoria de lo que aparece en JavaScript con clases es en realidad simplemente
 * azúcar sintáctica sobre la herencia base prototipada existente (la mayoría, pero no todo).
 * 
 * El concepto de azúcar sintáctico en programación es una técnica y que sólo sirve
 * para la conveniencia del programador.
 * 
 * Por lo tanto, las clases en JavaScript no son una filosofía completamente nueva, solo
 * un envoltorio nuevo y ligeramente más conveniente para lo que ya existía.
 * 
 * Compara dos fragmentos de código, funcionalmente idénticos, uno escrito con clases 
 * y el otro con constructores.  Deberías detectar fácilmente las similitudes y las
 * diferencias.
 * 
 * Por cierto, ten en cuenta que declaramos dos métodos con el mismo nombre.
 * 
 * ¿Cómo es posible? Uno es un método común (prototipo), por lo que está relacionado
 * con el objeto creado (con la instancia).  El otro es estático.
 * 
 * En otras palabras, está relacionado con la clase o, en el caso de las técnicas de 
 * constructor, con un constructor.
 * 
 */

//Primer fragmento

class TestClass { 
    constructor(arg) {
        this.arg = arg;
        console.log(this.arg);
    }; 
    
    showSth() { 
        console.log("I'm prototyped!");
    };
    
    static showSth() { 
        console.log(`Hi, I'm static!`);
    };  
}; 

let testClass = new TestClass("Hello");
testClass.showSth(); // -> I'm prototyped!
TestClass.showSth(); // -> I'm static!

console.log(test instanceof TestClass);

//Segundo fragmento
let Test = function(arg) { 
    this.arg = arg;
    console.log(this.arg);
}; 
    

Test.prototype.showSth = function() { 
    console.log("I'm prototyped!");
};
    
Test.showSth = function() { 
    console.log(`Hi, I'm static!`);
};  


let testPrototype = new Test("Hello");
testPrototype.showSth(); // -> I'm prototyped!
Test.showSth(); // -> I'm static!

console.log(test instanceof Test);

/** La versión del código que utiliza funciones constructoras está escrita correctamente,
 * pero es un poco inusual, para que sea más fácil compararla con el código que utiliza
 * clases.
 * 
 * Entre otras cosas, muestra por qué los métodos regulares (no estáticos) que aparecen en el
 * objeto creado se denominan prototipos.
 * 
 * Si hubiéramos escrito un código normal y no un código de referencia para comparar, 
 * probablemente crearíamos algo como esto:
 * 
 *
 * */
 let Test = function(arg) { 
    this.arg = arg;
    this.showSth = function() { 
        console.log("I'm prototyped!");
    };
    console.log(this.arg);
}; 
        
Test.showSth = function() { 
    console.log(`Hi, I'm static!`);
};

/**Generalmente, la elección entre usar clases y constructors es muy subjetiva.
 * 
 * Ambos métodos te ofrecen exactamente las mismas opciones. Si trabajas solo, simplemente
 * eliges el método que te resulte más cómodo.
 * 
 * Si estás es un equipo más grande, probablemente te impondrán el método para producir
 * código consistente.
 * 
 * También puede suceder que el marco(framework) o las bibliotecas que vayas a utilizar te obliguen
 * a utilizar un determinado método (por ejemplo, las clases han sido durante mucho tiempo
 * la base del marco(framework) React)
 */

/********************     RESUMEN    ************************************************
 * 
 * Las clases en JavaScript son en realidad sólo una adición al modelo prototipico existente
 * de gestión de objetos.
 * 
 * Sin embargo, permiten una transición relativamente fácil a este lenguaje desde otros
 * lenguajes orientados a objetos que utilizan modelos de clases.
 * 
 * El uso de clases también simplifica enormemente la herencia o, según la nomenclatura
 * de JavaScript, la extensión.
 * 
 * Las clases de JavaScript están muy simplificadas en comparación con las clases en 
 * lenguajes como Java o C++.
 * 
 * Esto se puede ver, por ejemplo, en la forma en gran medida no regulada de declarar
 * propiedades, incluidas privadas.
 * 
 * Sin embargo, resulta que este modelo en la mayoría de los casos es absolutamente
 * suficiente y permite crear proyectos realmente complejos
 */

 