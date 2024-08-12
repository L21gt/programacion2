/**************    REFERENCIAS                
 * Recordemos a la palabra clave const en las declaraciones
 * 
 * const x = 10;
   x = 20;	// TypeError: Assignment to constant variable.

   El valor ingresado xse considera una constante y está protegido 
   contra cambios.
   
   Se puede esperar que esto funcione de manera similar para los objetos.

   const contact = {};
   contact = { email: "RonaldSMurphy@freepost.org"}; // TypeError: Assignment to constant variable.
   
   No podemos cambiar el valor que declaramos como const.
 */

// Probemos algo más
const contact = {};
contact.email = "RonaldSMurphy@freepost.org";

console.log(contact.email);

//Resulta que no solo no se genera ninguna excepción, 
//sino que el objeto se amplía con un nuevo campo al que se asigna el valor.

//Este valor se puede modificar o eliminar fácilmente más adelante

contact.email = "rsmurphy@briazz.com";
console.log(contact.email);
delete contact.email;
console.log(contact.email);

/**               EL OBJETO CONST SE PUEDE MODIFICAR    
 * 
 * Según la documentación de JavaScript, "una constante no puede cambiar 
 * mediante reasignación" y "una constante no puede volver a declararse" .
 * 
 * Esto se puede ver de forma ideal en el caso de tipos simples
 * const x = 10;
   x = 20;	// TypeError: Assignment to constant variable.

   En el caso de tipos complejos (es decir, matrices y objetos), 
   las variables y constantes (las palabras clave var, let, const)
   no contienen el objeto completo. Solo contienen la referencia al objeto.

   Por lo tanto, la constpalabra clave protege únicamente la referencia,
   la dirección, contra cambios. No podemos cambiar la referencia.

   En el caso de los objetos, const está diseñado para proteger contra una
   nueva declaración o asignación de un nuevo objeto.
 * 
 */

/****************        COMPARANDO OBJETOS    *************
 * 
 * 
 * Como ya sabemos que en el caso de objetos en variables y constantes 
 * solo se almacenan las referencias
*/

var point1 = {x: 10, y: 20};
var point2 = {x: 10, y: 20};

console.log(point1 === point2); // false, la comparación se refiere a las
                                // referencias de objetos independientes.



let point3 = point1;

console.log(point1 === point3); // true, ambas variables tienen referencia
                                // al mismo objeto.

// Ahora comprobemos que en ambas variables hay una referencia al
//mismo objeto
point3.z = 40;

console.log(point3.z);  // 40
console.log(point1.z);  // 40
console.log(point2.z);  // undefined

//JavaScript no tiene un mecanismo listo para comparar dos objetos
//por sus propiedades (comparación profunda).  Debemos escribir una
//función recursiva.


/**************    COPIAR OBJETOS      ****************
 *     (copiar referencias (), clonar, fusionar)
 * 
 * 
 * 
 */
let point10 = {x:10, y: 20 };
let point11 = point10;    // copia la referencia
let point12 = {};
Object.assign(point12, point10);  //  copia las propiedades en un nuevo objeto

console.log(point12.x); //10
console.log(point12.y); //20

console.log(point11.x); //10
console.log(point11.y); //20

console.log(point11 === point10); // true
console.log(point10 === point12); // false
console.log(point11 === point12); // false

//Asignaremos  a point13 object, primero point10 y luego {z:100}
let point13 = {};
Object.assign(point13, point10, {z: 100});//cambia el orden de point10 y z
console.log(point13.z); //Observa el comportamiento en pythontutor

//La lista de objetos fuente puede ser más larga
var point14 = {};
Object.assign(point14, point13, {z: 200, color: "red"});

console.log(point14.z);  // 200, el valor más a la derecha gana


//estamos estudiando diferentes formas de copiar y extender objetos
let point20 = {x:10, y: 20 };
let point22 = Object.assign({}, point20); //Las propiedades de point20
                    // a un nuevo objeto vacío, y point22 es una copia exacta
let point23 = Object.assign({}, point20, {z: 100});


//Hagamos casi lo mismo con el operador de propagación ...  , spread operator
let point30 = {x:10, y: 20 };
let point32 = { ...point30};
//El operador de propagación (...point30) se utiliza para crear una 
//copia superficial de point30. El resultado es un nuevo objeto point32 
//con las mismas propiedades x: 10 y y: 20.
let point33 = { ...point30, z: 100};

/**  
 * Comparación y utilidad:
Object.assign(): Copia todas las propiedades enumerables de uno o más 
                 objetos fuente a un objeto destino. 
                 Es útil cuando necesitas hacer una copia superficial 
                 de un objeto o combinar varios objetos en uno solo.

Operador de propagación (...): Es una forma más moderna y sintácticamente
                               más limpia para realizar las mismas tareas.
                               Además, es más conciso y suele preferirse 
                               por su claridad.

Ambas técnicas son útiles para copiar y extender objetos, 
pero el operador de propagación suele ser más fácil de leer y escribir.
 */

//Otro ejemplo
/** Los dos códigos prodiciran el mismo efecto
 * 
 * let point34 = { ...point33, ...{z: 200, color: "red"});
 * let point4 = { ...point33, z: 200, color: "red");
 */