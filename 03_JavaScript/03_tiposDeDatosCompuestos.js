/*******************   TIPOS DE DATOS COMPUESTOS ********************* 
 * 
 * Temas:
 *     + Array
 *     + Set
 *     + Map
 *     + Object
 * 
 *************************************************************************/

/***** Tipos de datos compuestos*******
 * 
 * Cuando hablamos de tipos de datos compuestos, nos referimos a estructuras para almacenar
 * muchos valores de diferentes tipos en diferentes formas.
 * 
 * Estas estructuras difieren en la forma en que se identifican, acceden u organizan
 * los valores.
 * 
 * Prácticamente siempre son dinámicos, es decir, permiten cambiar tanto los valores 
 * almacenados en ellos como el tamaño de la estructura.
 * 
 * Echemos un vistazo a varios tipos compuestos seleccionados disponibles en JavaScript
 * 
 * 
 ************ ARRAY 
 * 
 * El constructor Array se utiliza para crear matrices, colecciones ordenadas de elementos.
 * 
 * Una matriz es una estructura de datos compuesta que puede contener muchos elementos
 * de diferentes tipos, y su tamaño y contenido pueden cambiar.
 * 
 * Obtenemos acceso a elementos particulares conociendo su número sucesivo en la matriz (es
 * decir, su indice).
 * 
 * El concepto básico de matrices y su uso debería resultarte familiar desde la primera
 * parte del curso.
 * 
 * 
 * ***Creación de un array
 * 
 * Podemos crear nuevas matrices de mchas manera. Hasta ahora hemos utilizado la técnica de
 * los literales, utilizando corchetes en la declaración.
 * 
 * Cuando creamos una matriz de esta manera, nos referimos al constructor Array implícitamente,
 * aunque nado nos impide llamarlo explícitamente.
 * 
 * Veamos el siguiente ejemplo:
 */
 let array1 = []; // -> []
 let array2 = [2, 4, "six"]; // -> [2, 4, "six"]
 let array3 = new Array(); // -> []
 let array4 = new Array(2); // -> [undefined, undefined]
 let array5 = new Array(2, 4, "six"); // -> [2, 4, six]
 let array6 = new Array("2"); // -> ["2"]
 
 console.log(`array2 : ${typeof array2} : ${array2 instanceof Array} : ${array2.length}`); // -> array2 : object : true : 3
 console.log(`array5 : ${typeof array5} : ${array5 instanceof Array} : ${array5.length}`); // -> array5 : object : true : 3
 /**Como puedes ver, utilizamos ambas técnicas con éxito para crear nuevas matrices.
  * 
  * Echemos un vistazo más de cerca al propio constructor.
  * 
  * Si no le damos níngún argumento al constructor, se creará una matriz vacía (que contiene 
  * cero elementos).
  * 
  * Pasar exactamente un argumento, que es un número positivo, creará una matriz de la longitud
  * de este argumento.  Todos los elementos de la matriz serán undefined.
  * 
  * Si especificas más argumentos, o un único argumento que no sea un número, el
  * constructor creará una matriz de los argumentos dados.
  * 
  * Independientemente de si hemos creado la matriz usando corchetes o usando explícitamente
  * un constructor, accedemos a los elementos individuales especificando el número de
  * elementos entre corchetes después del nombre de la matriz.
  * 
  * Recuerde que los elementos de una matriz estan indexados desde 0.
  * 
  * Si damos un índice fuera del alcance de la matriz, obtenemos un valor indefinido.
  * Sigamos con el ejemplo anterior:
  */
 console.log(array2[0]); // -> 2
 console.log(array5[2]); // -> "six"
 console.log(array5[5]); // -> undefined
 /**La  única propiedad prototipo útil del constructor Array es length, con el
  * cual podemos comprobar cuantos elementos contiene nuestro array.
  * 
  * Aquí no encontramos nada especialmente interesante.
  * 
  * Sin embargo, el conjunto de métodos prototipo es muy extenso.  Eligiremos entre ellos algunos
  * de los más útiles.
  * 
  * Si quieres echar un vistazo al resto, puedes encontrar una descripción en el
  * sitio MDN.
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  */

 /****** Fusionando Matrices (Merging Arrays)
  * 
  * Iniciaremos con el método concat.
  * 
  * Se utiliza para combinar dos matrices en una.  Ninguna de las matrices originales se
  * modifica.
  * 
  * El método crea una nueva matriz que consta de los elementos de la matriz almacenados en 
  * el objeto y los elementos de la matriz adjuntos proporcionados como argumentos de llamada.
  * 
  * La mayoría de los métodos constructores Array devuelven copias modificadas de la 
  * matriz, y solo unas pocas operan directamente en la matriz del objeto.
  * 
  * En la descripción de cada método indicaremos claramente si estamos operando sobre la 
  * copia o el original.
  * 
  * Veamos el siguiente ejemplo:
  */
let array11 = [10, 20, 30];
let array12 = ["cat", "dog"];
let array13 = array11.concat(array12); // -> [10, 20, 30, "cat", "dog"];

console.log(array11.length); // -> 3
console.log(array12.length); // -> 2
console.log(array13.length); // -> 5

console.log(array13[0]); // -> 10
console.log(array13[3]); // -> "cat"
/**Como puedes ver, el método devuelve una nueva matriz combinada, que podemos, por
 * ejemplo, almacenar en una variable.
 */

/***** Agregar y eliminar elementos   push y unshift             
 * 
 * Podemos agregar nuevos elementos a una matriz existente.
 * 
 * Esto se hace usando los métodos push(agregando elementos al final de la matriz),
 * y unshift(agregar elementos al comienzo de la matriz) métodos.
 * 
 * Ambos métodos aceptan cualquier número de argumentos que se interpretan
 * como elementos nuevos.
 * 
 * Ambos métodos modificaran una matriz existente (es decir, funcionan en el lugar).
 * 
 * Mira el código a continuación:
 */
let array21 = [10, 20, 30]; // -> [10, 20, 30]
array21.push(100); // -> [10, 20, 30, 100]
array21.push(50, "dog"); // -> [10, 20, 30, 100, 50, "dog"]
array21.unshift("cat", 90, 80); // -> ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"]

/****    Agregar y eliminar elementos pop y shift
 * 
 * Tambien tenemos los métodos el pop y shift.
 * 
 * Se llaman sin argumentos y cada uno de ellos elimina un elemento de la matriz
 * (pop desde el final de la matriz, shift desde el principio).
 * 
 * Ambos métodos devuelven el elemento eliminado, que podemos, por ejemplo, almacenar
 * en una variable o, como en este ejemplo particular, mostramos en la consola.
 * 
 * Mira el código:
 */
console.log(array21.length); // -> 9
console.log(array21.shift()); // -> cat
console.log(array21.length); // -> 8

console.log(array21.pop()); // -> dog
console.log(array21.length); // -> 7

/***** Agregar y eliminar elementos sin usar métodos     
 * 
 * También podemos agregar un nuevo elemento sin usar métodos simplemente haciendo
 * referencia a un índice de matriz inexistente.
 * 
 * El espacio en la matriz entre el último elemento existente y el elemento recién 
 * insertado se llenará con elementos undefined si es necesario.
 * 
 * También podemos eliminar el elemento seleccionado usando el comando delete(este no es
 * un método de Array).
 * 
 * El lugar que queda después del elemento eliminado contendrá undefined.
 * 
 * Mira el ejemplo: 
 */
let array41 = [10, 20, 30]; // -> [10, 20, 30]
array41[3] = 100; // -> [10, 20, 30, 100]
array41[5] = 1000; // -> [10, 20, 30, 100, undefined, 1000]
delete array41[1]; // -> [10, undefined, 30, 100, undefined, 1000]
console.log(array41[1]); // -> undefined

/*******  Avanzando por lo elementos de la matriz      
 * 
 * uno de los métodos más utilizados de el constructor Array es el forEach, que nos 
 * permite recorrer todos los elementos de la matriz.
 * 
 * Esta es una alternativa elegante a lo ordinario, el bucel for, que utilizamos para 
 * este proposito antes.
 * 
 * Echemos un vistazo a un ejemplo que utiliza el bucle for:
 */
let array51 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
for(let index=0; index<array51.length; index++) {
    console.log(`${index} : ${array51[index]}`); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 
                                                //      : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 
                                                //      : 50 -> 8 : dog
}
/** La construcción es muy sencilla.
 * Fijamos la variable index a 0 y aumentando en 1 en cada iteración hasta que el índice
 * sea igual a la longuitud de la matriz.
 * 
 * En cada iteración, mostramos el index y el elemento de matruz correspondiente.
 * 
 * ¿Existe una manera aún más fácil de hacer esto? Resulta que sí hay una manera.
 * 
 * Sin embargo, lo vamos a simplificar gradualmente, complicando aún más el código
 * inicialmente.
 * 
 * Crearemos la función  toConsole, que tomará tres parámetros: item, index, y array.
 * Este es el formato impuesto por el método forEach.
 * 
 * El nombre de la función a llamar s lo damos al método forEach ¿Qué pasa entinces?
 */
function toConsole(item, index, array) {
    console.log(`${index} : ${item}`);
}
array51.forEach(toConsole); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog
/**El método forEach recorre todos los elementos de la matriz almacenados en nuestro objeto
 * (en este ejemplo, array51).
 * 
 * Para cada elemento, llama a una función que se le ha pasado como argumento (toConsole).
 * 
 * Cada llamada a esta dunción recibirá los argumentos item e index diferentes.
 * 
 * El argumento de la matriz será el mismo cada vez: es solo nuestra matriz completa
 * (en la práctica rara vez se usa).
 * 
 * Intentemos simplicar nuestro ejemplo:
 */
array51.forEach(function (item, index) {
    console.log(`${index} : ${item}`);
});

/**¿Qué ha cambiado?
 * 
 * Hemos abandonado la declaración eplícita de nuestra función toConsole y se utilizó una 
 * función anónima en su lugar.
 * 
 * Esta función no tiene nombre, por lo que no podemos hacer referencia a ella desde otro
 * lugar delcódigo.
 * 
 * Sin embargo, no nos importa, porque la función sólo será utilizada por el 
 * método forEach.
 * 
 * Asi que no le hemos dado elnombre de la función al método, sino toda la función anónima.
 * 
 * Por cierto, eliminamos la matriz de la lista de parámetros de nuestra función, que de todos
 * modos no estabamos usando.
 * 
 * Vayamos un paso más allá y cambiemos nuestra función ordinaria a una función del array:
 */
array51.forEach( (item, index) => {
    console.log(`${index} : ${item}`);
});
/**Como puedes ver, el cuerpo de la función(es decir lo que hay dentro de la función) no ha
 * cambiado.
 * 
 * Las funciones de flecha nos permiten simplificar aún más la notación eliminando los
 * paréntesis alrededor del cuerpo de la función (en el cuerpo de la función solo se ejecuta
 * un comando y el bloque no es necesario).
 */
array51.forEach( (item, index) => console.log(`${index} : ${item}`));
/**Eso es lo que queríamos.
 * 
 * Compara este fragmento de código con la construcción escrita con el bucle for y verás
 * que ahora parece mucho más simple y elegante.
 * 
 * Acostúmbrate a este tipo de construcción.
 * 
 * En primer lugar, muchos métodos de matriz funcionan según un principio similar y, en 
 * segundo lugar, en aplicaciones reales, rara vez verá los bucles for o while.
 */

/****** Los métodos every & some  
 * 
 * Una técnica similar se utiliza, entre otras, en dos métodos consecutivos: every y some.
 * 
 * El primero, every, comprueba si todos los elementos de la matriz cumplen una determinada
 * condición que hemos dado.
 * 
 * El segundo método, some, tiene éxito si al menos uno de los elementos cumple la condición.
 * Los métodos retornan tru en caso de éxito, o false en caso de fallo.
 * 
 * Ambos toman como argumento una función que permitirá probar un solo elemento.
 * 
 * Ambos some y every recorren la matriz, llamado a la función dada para elementos 
 * individuales (every cuando todos y some cuando uno, de los elementos sa tisface nuestra condición).
 */
let array61 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];

let anyNumberPresent = array61.some( (item) => {
    if(typeof item === "number") {
        return true;
    } else {
        return false;
    }
}); // -> true
/**Esta vez usamos la función de flecha anónima y la pasamos como argumento al método
 * some.  La función en el ejemplo solo toma el elemento del parámetro, aunque, como
 * en forEach, podemos usar los parámetros index y array si es necesario.  Nuestra 
 * función comprueba si el artículo es un number primitivo.
 * 
 * Si es así, devuelve true y, si no, devuelve false.  Aquí, por supuesto, podemos 
 * usar cualquier lógica y decidimos cómo funciona nuestra función de prueba, qué es
 * true y qué es false. En el caso del método some, basta con que la función de un 
 * elemento devuelva true.  Entonces el método some también devuelve true.
 * 
 * En el caso del método every, la función debe devolver true para todos los 
 * elementos de la matriz probados.  Sólo entonces every retornará true.
 * 
 * En nuestro ejemplo, el resultado de la llamada  array61.some restornará
 * la variable anyNumberPresent.
 * 
 * Nuestro código de función es un poco redundante, así que simplifiquémoslo. 
 * El operador typeof regresa true o false, por lo que toda la instrucción condicional if es
 * realmente innecesaria.
 */
anyNumberPresent = array61.some( (item) => {
    return (typeof item === "number");
}); // -> true
/**Sólo hay una instrucción en el bloque de funciones, por lo que podemos quitar
 * los corchetes que la enciarran.
 * 
 * Tenga en cuenta que ne las funciones de flecha, donde no utilizamos llaves para
 * marcar el bloque de funciones, la palabra clave return también desaparece.
 * 
 * La función de flecha devuelve automáticamente el resultado de dicha instrucción única.
 * 
 * Como solo hay un párametro item pasado a la función, también podemos omitir los paréntesis
 * que rodean el parámetro.
 */
anyNumberPresent = array1.some( item => typeof item === "number"); // -> true
/**Hemos preparado un ejemplo similar para el método every  
 * 
 * Esta vez queremos verificar si todos los elementos en el array son números mayores que 0:
*/
let array22 = [90, 80, 10, 20, 30, 100, 50];
let allPositive = array22.every(item => item > 0); // -> true

/******** Filtrando
 * 
 * El uso del otro método, el filter, es muy similar.
 * 
 * Al igual que el método every, llama a una función de prueba que hemos escrito para cada
 * elemento matriz.
 * 
 * En esta función, decidimos si un solo elemento ha pasado la prueba (devolvemos true) 
 * o no (devolvemos false)
 * 
 * El método filter copia todos los elementos que han pasado nuestra prueba y los devuelve
 * como una nueva matriz.
 * 
 * Es decir, en realidad filtra la matriz original mediante la función de prueba de
 * elemento único.
 * 
 * Recalquemoss eso nuevamente: el método filter crea y devuelve una nueva matriz(no modifica
 * la original).
 * 
 * Mira el código.
 * 
 */
let array31 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
console.log(array31.length); // -> 9
let numbers = array31.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
console.log(numbers.length); // -> 7
console.log(array31.length); // -> 9
/** * En el ejemplo, la variable numbers obtiene esos elementos del array31 que son primitivos
 * number.
 * 
 * En la función de prueba, utilizamos sólo el parámetro item, aunque al igual que en
 * every, some, o forEach, también podemos usar otros: index y array. */

/*******  Elmentos de mapeo
 * 
 * Otro método interesante es map.
 * 
 * Como filter, devuelve una nueva matriz del mismo tamaño que la original.
 * 
 * La nueva matriz se crea realizando la acción que inventamos en cada elemento de la 
 * matriz original
 */
let array17 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let squarePower = array17.filter(item => typeof item === "number").map(item => item*item); 
                                            // -> [8100, 6400, 100, 400, 900, 10000, 2500]

/** En el ejemplo, esta acción es trivial y el nuevo elemento se obtiene
 * multiplicando el elemento original por si mismo.
 * 
 * Sin embargo, la lógica de tal acción puede ser mucha más compleja y depende sólo de 
 * nosotros y nuestras necesidades.
 * 
 * Tenga en cuenta que en el ejemplo,primero usamos el método filter para
 * copiar solo los elementos que son números de arra17.
 * 
 * Sólo en el siguiente paso llamamos al método map,utilizando el encadenamiento de métodos.
 * 
 * Puedes observar que se han añadido nuevos elementos a squarePower.
 * 
 * La función basada en el método map toma los argumentos itam, inde, array, aunque nuestro
 * ejemplo nos hemos limitado a utilizar el argumento item.
 */

/********   Sorting 
 * 
 * Un método muy útil es sort, que ordena los elementos de la matriz.  Esta vez, estamos 
 * operando en la matriz original y no haremos una copia de ella.
 * 
 * Cuando llamamos al método sorte, el orden cambia y es visible en la matriz.
 * 
 * ¿En qué orden están ordenados los elemetos el arreglo(array)?.  Depende sólo de 
 * nosotros.
 * 
 * El método sort, al igual que los métodos anteriore, acepta una función que hemos creado.
 * 
 * Será una función que compara los dos elemento de la matriz y decide qué elemento debe
 * ser anterior y qué elemento debe ser el siguiente en orden.
 * 
 * La función toma dos parámetros: first y second, que corresponden a los dos elementos
 * que se comparan.
 * 
 * Si pensamos que el elemento first debe preceder al second, devolvemos un valor negativo
 * (por ejemplo -1).  Si el primero debe moverse después del segundo, devolvemos un valor
 * positivo.
 * 
 * Regresar 0 significa que pensamos que los elementos son iguales (en términos de orden
 * de clasificación).  EL método sort llama repetidamente (e implícitamente) a una función de
 * comparación para diferentes elementos hasta que se ordena la matriz.
 * 
 * Observa el código:
*/
let array18 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let numbers18 = array18.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
console.log(numbers18[0]);
numbers18.sort((first, second) => {
if( first < second) {
    return -1
} else if(first == second) {
    return 0;
} else {
    return 1;
}
}); // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers18[0]);

/**En elejemplo, filtramos los elementos de la matriz array18, colocando sólo aquellos que son
 * números en el array numbers18.
 * 
 * En el siguiente paso, ordenamos los elementos usando el método sort. 
 * La función de clasificación que estamos usando contiene una lógica estremadamente
 * simple.
 * 
 * Compara números adyacentes y establece el orden ascendente(los elementos más pequeños
 * precederán a los más grandes).
 * 
 * La clasificación se realiza directamente sobre los elementos del array numbers18.
 * Por supuesto, también en este caso podemos simplificar un poco nuesto código 
 */
numbers18.sort((first, second) =>  first - second);// [10, 20, 30, 50, 80, 90, 100]
//Debes analizar este código y comprenderlo tú mismo.
/**El resultado es igual que el ejemplo anterior, más elaborado.
 *
 * Ten en cuenta que la función de comparación no tiene que devolver exactamente los valores
 * -1 y 1.
 * 
 * El método sort tratará cualquier número negativo o positivo devuelto por esa
 * función de la misma manera.
 */

/*****     Reduciendo la matriz *******   
 * 
 * El método reduce, que ahora vamos a abordar, puede causar algunos problemas
 * a la hora de intentar entenderlo.
 * 
 * Su concepto es muy simple.  El método recorre todos los elemntos del array empezando
 * por la izquierda, y para cada elemento llama a la función que hemos escrito.
 * 
 * Entonces, ¿en qué se diferencia del forEach?
 * 
 * Bueno, difiere en qué parámetros toma y qué devuelve nuestra función
 * (llamada función reductora).
 * 
 * Veamos un ejemplo:
*/
let numbers10 = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
let sum = numbers10.reduce((accumulator, item) => accumulator + item);
console.log(sum); // -> 380
/**El  se llamará al método reduce para la matriz numbers, que contiene siete números
 * diferentes.
 * 
 * Presta atención a la función reductora y especialmente a sus parámetros: accumulator e item.
 * 
 * Mientras que el parámetro item es bastante obvio(este es otro elemento de la matriz visitada
 * por reduce), el parámetro acumulator es nuevo. En este parámetro se pasa el valor devuelto 
 * por la llamada anterior de la función reductora.
 * 
 * Intentemos seguir paso a paso, lo que sucede después de ejecutar nuestro código.
 * 
 * El método reduce comienza a recorrer la matriz desde la izquierda, omitiendo el primer
 * elemento, es decir, 10.
 * 
 * Por lo tanto, la primera llamada a la función de reducción en nuestro ejemplo se refiere
 * al elemento 20.
 * 
 * El resultado de la llamada a la función de reducción anterior (el párametro accumulator)
 * también debe probarse.
 * 
 * Como esta es la primera llamada y no tenemos ese resultado previo, se pasa el primer
 * elemento de la matriz, es decir 10.
 * 
 * La función también obtiene, como item, el elemento 20.
 * 
 * Nuestra función suma estos dos valores y los devuelve.
 * 
 * Recuerda que en la función arrow, si no utilizamos llaves que encierran el bloque
 * de funciones, el valor de la operación ejecutada se devuelve automáticamente(sin 
 * necesidad de utilizar la palabra clave return).
 * 
 * Luego reduce los movimientos al elemento 30.
 * 
 * Un valor de 30(calculado en la llamada anterior de la función de reducción) se pasa a la
 * función de reducción como acumulador, y como item nuestro elemento visitado 30 se pasa.
 * 
 * El resultado de la suma (60) es devuelto por la función.  El siguiente elemento visitado
 * es 50.
 * 
 * La función de reducción que se llama recibe el valor 60 calculado en el paso anterior, y
 * elemnto 50, los suma y los devuelve.
 * 
 * Las llamadas se repiten hasta el último elemento de la matriz, y el método reduce devuelve
 * el valor de la última llamada a la función reductora, en nuestro caso la última suma.
 * 
 * La función reductora no tiene por qué limitarse a sumar o incluso realizar operaciones
 * artiméticas.
 * 
 * podemos ponerle casi cualquier lógica.
 * 
 * Sin embargo, resumir es tan simple que nos permite centrarnos en comprender el funcionamiento
 * del método reduce en sí y la cadena de llamadas a funciones de reducción.
 * 
 * El método reduce puede, además de su función reductora, aceptar otro argumento.
 * Este es el valor inicial.
 * 
 *Si lo pasamos, reducir no omite el primer elemento al recorrer la matriz.

 La función de reducción llamada para el primer elemento recibirá un valor inicial como
 accumulator.

 Más elcomportamiento de reduce será el mismo que en el ejemplo discutido anteriormente.

 Nota:
     El valor inicial (el número 1000 en el siguiente ejemplo) es un parámetro del método
    reduce, no la función de reducción
 *  
 */
let anotherSum = numbers.reduce((accumulator, item) => accumulator + item, 1000);
console.log(anotherSum); // -> 1380

/**Veamos otro ejemplo del uso de reducir, esta vez demostrando una lógica ligeramente
 * diferente de la función de reducción.
 * 
 * Lo usaremos para convertir la matriz en un objeto con claves que son elementos de la matriz
 * y los valores que son índices de esos elementos.
 */
let strangeObj = numbers.reduce((accumulator, item, index) => {
    accumulator[item] = index;
    return accumulator;
} , {});
console.log(strangeObj); // -> {10: 0, 20: 1, 30: 2, 50: 3, 80: 4, 90: 5, 100: 6}
/**Un objeto vacío(notación literal - llaves vacías) se da como valor inicial para
 * reduce.
 * 
 * Cada vez que se llama a la función reduce, comenzando desde el primer elemento de la matriz,
 * se asegura un nuevo campo al objeto recibido de la llamada anterior y se devuelve el objeto
 * modificado.
 * 
 * Intenta analizar este código un poco más detenidamente y no te preocupes si parece un poco
 * confuso al principio: el método reduce (y métodos similares) han creado problemas para 
 * todos los estudiantes de programación.
 * 
 * Esto puede parecer un poco arcaico, pero sería bueno si pudieras trazar los tres ejemplos
 * de reducción que se muestran en una hoja de papel con un lápiz en la mano.
 * 
 * Escriba cada paso, verifique qué obtiene cada llamada de reducción y qué se devuelve en 
 * cada paso.
*/

/*****       Invertir el orden de los elementos 
 * 
 * Otro método Array, reverse, afortunadamente es mucho más facíl de usar.
 * 
 * Este método le permite invertir el orden de los elementos de la matriz, trabaja
 * sobre la matriz(modificamos la matriz original).
 * 
 * Y eso es todo lo que necesitas saber al respecto, porque ni siquiera requiere argumentos.
 * 
 * Veamos un ejemplo:
*/
let numbers19 = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers19[0]); // -> 10
numbers19.reverse(); // -> [100, 90, 80, 50, 30, 20, 10]
console.log(numbers19[0]); // -> 100
numbers19.reverse(); // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers19[0]); // -> 10

/*****    Buscando un elemento              
 * 
 * El contructor Array también ofrec varios métodos para buscar elementos específicos
 * en la matriz.
 * 
 * Los métodos includes, indexOf, y lastIndex toman como argumento el valor que buscamos 
 * en el array.
 * 
 * El método include devuelve true si el artículo está ubicado (en caso contrario, devuelve false)
 * 
 * El método indexOf devuelve el índice (es decir, la posición) del primer elemento que se
 * encuentra en el array con el valor que estamos buscando, o -1 si fallamos.
 * 
 * En el caso de este método, comenzamos la búsqueda desde el lado izquierdo de la matriz
 * (es decir, desde el principio).
 * 
 * El método lastIndexOf funciona de manera similar, la única diferencia es que la búsqueda
 * comienza desde el lado derecho (desde el final de la matriz).
 * 
 * Veamos un ejemplo:
 */
let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];

console.log(myPets.includes("shark")); // -> true 
console.log(myPets.includes("unicorn")); // -> false

console.log(myPets.indexOf("dog")); // -> 1
console.log(myPets.lastIndexOf("dog")); // -> 6
console.log(myPets.indexOf("unicorn")); // -> -1
/** también tenemos métodos de búsqueda un poco más avanzados a nuestra disposición, es 
 * decir, find y findIndex.
 * 
 * Ambos métodos toman una función de prueba como parámetro (de manera similara algunos o
 * todos los métodos)
 * 
 * Los métodos find y findIndex pasan por sucesivos elementos de la matriz llamando a la 
 * función de prueba.
 * 
 * Dentro de la función decidimos si un elemento visitado es el que buscamos, devolviendo
 * true o false respectivamente.
 * 
 * La búsqueda finalizada después de encontrar el primer elemento para el cual una llamada
 * a la función de prueba es exitosa o después de llegar al último elemento.
 * 
 * El método find devuelve true si encontramos un artículo que cumple con nuestra condición,
 * y false si no es así.
 * 
 * El método findIndex devolverá el índice del elemento encontrado si tiene éxito, o -1 si no
 * tiene éxito.
 * 
 * Veamos un ejemplo:
 */
let myPets1 = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];

console.log(myPets1.find(item => item.length > 3)); // -> hamster
console.log(myPets1.find(item => item.includes("og"))); // -> dog
console.log(myPets1.find(item => item.includes("fish"))); // -> undefined

console.log(myPets1.findIndex(item => item.length > 3)); // -> 2
console.log(myPets1.findIndex(item => item.includes("og"))); // -> 1
console.log(myPets1.findIndex(item => item.includes("fish"))); // -> -1

/*****     Copiar una parte seleccionada de la matriz 
 * 
 * También podemos utilizar el método slice, que aprendimos cuando discutimos el
 * constructor String.
 * 
 * El método le permite copiar una parte seleccionada de la matriz.
 * 
 * Acepta uno o dos argumentos.
 * 
 * El primer argumento determina el índice desde el que comenzamos a copiar.
 * 
 * Si es un valor negativo, el índice se cuenta hacia atrás desde el final de la 
 * matriz.
 * 
 * El segundo argumento es el índice del final del fragmento copiado de la matriz
 * (el elemento en este índice no se copiará).
 * 
 * Si se omite el segundo argumento, el método slice copia todos los elementos desde
 * el índice incial hasta el final de la matriz.
 * 
 * El método no afecta la matriz original y devuelve una copia de la parte seleccionada
 * de la matriz.
 * 
 * Veamos un ejemplo:
*/
let myPets3 = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let p1 = myPets3.slice(3); // ->  ["canary", "shark", "cat", "dog"]
let p2 = myPets3.slice(3, 5); // -> ["canary", "shark"]
let p3 = myPets3.slice(-3); // -> ["shark", "cat", "dog"]
let p4 = myPets3.slice(-3, -1); // -> ["shark", "cat"]

/*****   Eliminar y reemplazar una parte seleccionada      
 * 
 * Un método con un nombre similar, splice, trabaja para un cambio de lugar y modifica
 * la matriz original.
 * 
 * Podemos usarlo de dos manera.
 * 
 * La primera forma nos permite eliminar elementos seleccionados de la matriz.
 * 
 * Los elementos a eliminar se indican mediante uno o dos argumentos.
 * 
 * El primer argumento es el índice del primer elemento que se eliminará y el
 * segundo argumento es el número de elementos que se eliminarán.
 * 
 * El índice puede ser un valor negativo (luego lo contamos desde el final de la matriz).
 * 
 * Omitir el segundo argumento significa que queremos eliminar todos los elementos desde 
 * el índice inicial indicado hasta el final de la matriz.
 * 
 * Lo importante es que el método devuelva los elementos eliminados(por ejemplo, podemos 
 * almacenarlos en una variable o, como en el ejemplo, mostrarlos).
 * 
 * Mira el ejemplo:
 */
let myPets4 = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let removedPets = myPets4.splice(2, 3); 
console.log(myPets4); // -> ["cat", "dog", "cat", "dog"]
console.log(removedPets); // -> ["hamster", "canary", "shark"]

/**EL método splice también se puede utilizar para insertar nuevos elementos en la matriz.
 * 
 * Es por ello que se te muestra los dos argumentos anteriores.
 * 
 * EL primer argumento es el índice inicial, mientras que el segundo es el número de elementos
 * que se eliminarán del índice.
 * 
 * Esta vez hay que aportar ambos argumentos.
 * 
 * Si no queremos borrar nada, entonces le damos 0 como segundo argumento.
 * 
 * Para cualquier argumento posterior, damos los valores que se ubicarán en un lugar 
 * específico de la matriz.
 * 
 * Por lo tanto, podemos llamar splice para eliminar simultánamente  varios elementos 
 * seleccionados e insertar otros nuevos en su lugar, o podemos agregar nuevos desde el índice
 * indicado sin eliminar los existentes.
 * 
 * Mira el ejemplo.
 */
let myPets19 = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
myPets19.splice(2, 0, "rabbit", "guinea pig");
console.log(myPets19); 
// -> ["cat", "dog", "rabbit", "guinea pig", "hamster", "canary", "shark", "cat", "dog"]

/*******  Asignación desestructurante       
 * 
 * En JavaScript existe una versión de esta técnica para matrices:
 * 
 * Veamos el siguiente fragmento de código:
 */
let myPets20 = ["cat", "dog", "hamster", "canary"];
let pet1 = myPets20[0];
let pet3 = myPets20[2];
let pet4 = myPets20[3];
console.log(pet1); // -> cat
console.log(pet3); // -> hamster
/**Hemos asignado elementos seleccionados de la matriz myPets20 a las variables pet1, pet2,
 * y pet3.  Se puede lograr el mismo efecto utilizando una asignación desestructurante.
 */
let [pet1Ds, , pet3Ds, pet4Ds] = myPets20;
console.log(pet1Ds); // -> cat
console.log(pet3Ds); // -> hamster

/**Como puede ver, esta forma de notación es un poco más simple y se notará especialmente
 * con una gran cantidad de sustitutos.  Las variables recién declaradas se colocan después
 * de la palabra clave let entre corchetes y separada por comas.
 * 
 * Se les asignan valores de los index del array myPets20.
 * 
 * Si no queremos copiar ninguno de los elementos de la matriz, podemos marcarlo dejando un
 * campo en blanco separado por comas.
 * 
 * Pero, ¿Qué sucede si un elemento de la matriz no se encuentra en la posición dada?
 */
 myPets = ["cat", "dog"];
 [pet1, , pet3] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> undefined
/**Como puedes ver, se sustituirá dicha variable por un valor indefinido(en nuestro caso pet3)
 * 
 * La asignación desestructurante nos permite prepararvalores predeterminados, 
 * que se usarán sino hay ningún elemento en la matriz (de lo contrario, se ignora el valor
 * predeterminado)
 */
myPets = ["cat", "dog"];
[pet1 = "fish", , pet3 = "fish"] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> fish

/******* El operador spread      
 * 
 * Una técnica igualmente útil es el uso del operador spread (...).
 * 
 * Permite la distribución de la matriz en elementos individuales donde se espera
 * una lista de elementos o argumentos.
 * 
 * El ejemplo más sencillo es utilizar elementos de una matriz existnte para
 * crear una nueva
 */
let array71 = [100, 200, 300];
let array72 = [1000, 2000];
let array73 = [10, 20, ...array71, 500, ...array72]; 
            //-> [10, 20, 100, 200, 300, 500, 1000, 2000]
/** El operador también se puede utilizar para distribuir la matriz entre los 
 * elementos mientras se pasan como argumentos de la función.
 */
let testFn = (a, b, c, d) => a + b + c + d;
let array = [10, 20, 30, 40];
console.log(testFn(...array)); // -> 100


/**********************   Tipo de dato compuesto SET   **************************************
 * 
 * EL constructor Set se utiliza para crear una colección de elementos únicos.
 * 
 * Elementos del mismo valor no pueden aparecer en una colección de este tipo.
 * 
 * Se ignorará cualquier intento de agregar un elemento que ya esté enla colección.
 * 
 * Podemos tratar la colección como un bolso, en elque ponemos elementos diferentes y únicos.
 * 
 * Es difícil ordenar algo en la bolsa, por lo que no nos interesa el orden de los elementos.
 * 
 * El constructor Set proporciona métodos para verificar si hay un elemento en particular
 * en nuestra bolsa y revisa todos los elementos uno por uno (es decir, sacándolos de la bolsa).
 * 
 * Set se diferencia de una matriz en que los elementos no están ordenados y no tienen una
 * posición claramente definida (esto es una simplificación, pero es completamente aceptable
 * desde el punto de vista del uso de Set).
 * 
 * Además, los mismos elementos podrían aparecer en la matriz en diferentes posiciones.
 * 
 * Formalmente, cada elemento de la colección consta de una clave y un valor.
 * 
 * Sin embargo, en la práctica ambos atributos son exactamente iguales.
 * 
 * Por lo tanto, es más fácil pensar que un elemento establecido tiene solo elvalor, sin
 * una clave.
 * 
 * Los valores almacenados pueden ser de cualquier tipo, tanto simples como compuestos.
 */

/******** El constructor Set   *********** 
 * El constructor Set se puede invocar sin ningún argumento.
 * 
 * Entonces podemos crear una colección vacía.
 * 
 * Más adelante, será posible modificarlo agregando y eliminando elementos.
 * 
 * El constructor puede aceptar la matriz como argumento.
 * 
 * Sus elementos se agregarán automáticamente a la colección.
 * 
 * Veamos el siguiente ejemplo:
*/
let emptySet = new Set(); // -> {}
console.log(emptySet.size); // -> 0
let petsSet = new Set(["cat", "dog", "cat"]); // -> {"cat", "dog"}
console.log(petsSet.size); // -> 2

/** Para comprobar el número de elementos de la colección, utilizamos la propiedad
 * size(su equivalente en el array es la propiedad length).
 * 
 * El método más simple del constructor de Set es has.
 * Le permite verificar si un elemento con el valor dado como argumento está en la colección.
 * Veamos el siguiente código:
 */
petsSet = new Set(["cat", "dog"]); // -> {"cat", "dog"}
console.log(petsSet.has("cat")); // -> true
console.log(petsSet.has("shark")); // -> false

/*********** Elementos de manipulación
 * 
 * Usaremos los métodos:
 *      + add
 *      + delete
 *      + clear
 * 
 * para operar en elementos individuales de la colección.
 * 
 * El propósito de estos métodos es fácil de adivinar por sus nombres.
 * Veamos el código:
 */
console.log(petsSet.size); // -> 2
petsSet.add("shark");
petsSet.add("hamster");
console.log(petsSet.size); // -> 4
console.log(petsSet.has("shark")); // -> true
petsSet.delete("dog"); // -> true
petsSet.delete("dog"); // -> false
console.log(petsSet.size); // -> 3
petsSet.clear();
console.log(petsSet.size); // -> 0

/************  Recorriendo los elementos de la colección      ***********
 * 
 * Además del acceso a elementos seleccionados, esposible recorrer toda la colección 
 * elemento por elemento. 
 * 
 * El constructor Set proporciona varios métodos para este propósito.
 * 
 * Empecemos con forEach, que funciona casi de manera idéntica al método constructor
 * de Array correspondiente del mismo nombre.
 * 
 * Pasamos la función que se llamará para cada elemento de la colección al método.
 * 
 * Mira el código en el editor.
 * 
 * En nuestr ejemplo, la función toma un parámetro: value.
 * 
 Este es el valor del elemento visitado.

 En este ejemplo sólo nos limitamos a mostrarlo, aunque puedes poner cualquier lógica
 en este lugar, según lo que necesites.

 Dijimos anteriormente que en una colección establecida, las claves y los valores del
 elemento son los mismos.

 Esto es perfectamente visible en el método forEach.

 Su sintaxis adecuada supone que la función toma los parámetros value y key y no solo value
 */
 petsSet = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
 petsSet.forEach(value => console.log(value)); // -> cat -> dog -> hamster
 /**Según la documentación, podríamos escribir nuestro ejemplo de la siguiente forma:
  */
 petsSet.forEach((value, key) => console.log(`(${value}:${key})`)); 
                                  // -> (cat:cat) -> (dog:dog) -> (hamster:hamster)
/**Aquí puedes ver que key y value son exactamente iguales, y aunque funciona
 * no es correcto escribirlo de esa manera
 * 
 *
 * Otra forma de revisar los elementos de la colección es utilizar el método de valores.
 * 
 * Se utiliza con más frecuencia que el método forEach, pero requiere un nuevo concepto,
 * los iteradores.
 * 
 * Un iterador es un objeto que almacena información sobre los elemntos de la colección 
 * visitados.
 * 
 * Proporciona el método next, que nos permite pasar al siguiente elemento de la colección
 * (cambiamos el estado del iterador).
 * 
 * La llamada a next devuelve un objeto que contiene el campo value, en el que se encuentra
 * el elemento visitado.
 * 
 * Aparte del valor hay otro campo, done, que nos informará si el elemento visitado
 * actualmente es el último de la colección,
 * 
 * Veamos un ejemplo:
 */       
petsSet = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
let petsIterator = petsSet.values();

console.log(petsIterator.next().value); // -> cat
console.log(petsIterator.next().value); // -> dog
console.log(petsIterator.next().value); // -> hamster
/**En este ejemplo, utilizamos el hecho de que sabemos la cantidad de elementos de la
 * colección y cuántas veces llamamos al siguiente método de nuestro iterador petsIterator
 * 
 * Lo mismo también se puede hacer en un buble que hace que su final dependa del 
 * valor done del objeto devuelto.
 * 
 * Vea el siguiente ejemplo:
 */
petsIterator = petsSet.values();

let result = petsIterator.next();
while (!result.done) {//done nos informa si el elemento visitado es el último del set
 console.log(result.value); // -> cat -> dog -> hamster
 result = petsIterator.next();
}
/**EL constructor Set también proporciona el método de claves, pero su funcionamiento
 * es idéntico al de los valores(las claves y los valores en Set son iguales).
 */

/********* El operador spread ********
 * En colecciones(sets) como en matrices(arrays), puede utilizar un operador de extensión(spread)
 * Al igual que en las matrices, se utiliza para dividir la colección en un solo elemento,
 * que se utilizará, por ejemplo, para crear una matriz o pasarla como argumento de función.
 * En el siguiente ejemplo, usaremos el operador al convertir una colección de conjuntos en
 * una matriz.
 * Veamos el código:
 */
petsSet = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
console.log(petsSet instanceof Set); // -> true
let petsArray = [...petsSet]; // -> ["cat", "dog", "hamster"]
console.log(petsArray instanceof Array); // -> true
/**Puedes encontrar más información sobre el constructor Set, sus métodos y como usar
 * este tipo de colección en el sitio web de MDN.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */


/************ Tipos de datos compuestos Map ******
 * 
 * El próximo constructor que discutiremos, Map, también se utiliza para crear una 
 * colección de elementos.
 * 
 * En este caso,cada elemento de esta colección consta de un diferente par de key:value.
 * 
 * Esta construcción es similar a un objeto común, donde los nombres de las propiedades son
 * claves, a las que asignamos valores.
 * 
 * Sin embargo, cuando se trata de almacenamiento de datos, el mapa es mucho más universal
 * que el objeto, porque nos permite utilizar cualquier tipo com key.
 * 
 * Los valores que están emparejados con claves también pueden ser de cualquier tipo.
 * 
 * Las claves en el mapa son únicas, intetar agregar un nuevo elemento con la misma clave que
 * el existente lo sobrescribirá.
 * 
 * Como en Set, el orden de los elementos no importa.
 * 
 * La diferencia es que almacenamos pares key:value en el map, mientras que en el set solo
 * almacenamos valores.
  */
 /******** El Constructor Map   *************
  * 
  * Comencemos a crear maps.
  * 
  * Podemos proporcionar al constructor una matriz que contenga cualquier número de 
  * elementos.
  * 
  * Lo importante es que cada elemento de esta matriz también es una matriz,
  * de dos elementos.
  * 
  * La clave se almacenará en la posición cero del primer valor.
  * 
  * Si no proporcionamos ningún argumento al constructor, se creará un mapa vacío.
  * 
  * Mira el código:
  */
 let emptyMap = new Map();
let petsMap = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(emptyMap.size); // -> 0
console.log(petsMap.size); // -> 3
/**En este ejemplo, hemos creado dos mapas, uno vacío emptyMap y un petsMap con 
 * tres pares: cats:1, dogs:2, y hamsters:5.
 * 
 * Digamos que esta es una lista de nuestras mascotas.
 * 
 * Las claves aquí son las cadenas: "cats", "dogs", y "hamsters".
 * Los valores asociados son 1, 2, y 5 respectivamente.
 * 
 * En el ejemplo, también usamos la propiedad size, que tiene el mismo fin
 * que el constructor Set.
 */

/**** Comprobando la presencia del elemnto  **********
 * Com el constructor Set, aquí tenemos el método has, el cual nos permite verificar
 * si hay un elemento con la clave dada en la colección(solo miramos la clave y no el valor)
 * 
 * Veamos el código
 */
petsMap = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(petsMap.has("dogs")); // -> true
console.log(petsMap.has("sharks")); // -> false
console.log(petsMap.has(1)); // -> false
/**Gracias al método has, descubrimos que en nuestra colección tenemos dogs, pero nos
 * faltan sharks.
 */

/****** Elementos de manipulación  *********
 * 
 * Gestionamos nuestra colección utilizando los métodos set, get, delete y, clear.
 * 
 * Su uso es intuitivo, por lo que sólo hace falta un sencillo ejemplo para entenderlos.
*/
petsMap = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(petsMap.get("hamsters")); // -> 5
petsMap.set("hamsters", 6);
console.log(petsMap.get("hamsters")); // -> 6
petsMap.delete("hamsters");
console.log(petsMap.get("hamsters")); // -> undefined
petsMap.clear();
console.log(petsMap.size); // -> 0

/******  Recorriendo los elementos del Map   ********
 * 
 * Para recorrer los elementos del map, usaremos los mismos métodos que aprendimos
 * con los conjuntos.
 * 
 * *** empecemos con el método forEach 
 */
let anotherPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
anotherPetsMap.forEach((value, key) => console.log(`${key} : ${value}`)); 
                                  // -> snakes : 1 -> cats : 3 -> dogs : 

/** values
 * 
 * El método values, que ya conoces el constructor Set, también está disponible en
 * mapas y aquí también requiere el uso de iteradores.  De cada elemento que visitas
 * se toma su valor (se ignora la clave).
*/
anotherPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petValuesIterator = anotherPetsMap.values();

console.log(petValuesIterator.next().value); // -> 1
console.log(petValuesIterator.next().value); // -> 3
console.log(petValuesIterator.next().value); // -> 2

/** keys
 * 
 * El método keys, que mencionamos al discutir el constructor Set, también devuelve
 * un iterador.
 * 
 * Lo usamos de la misma manera que el iterador devuelto por el método values, solo que
 * esta vez su clave se toma de cada elemento, no su valor.
 * 
 * Tenga en cuenta que la clave devuelta de la llamada al método iterador next se coloca
 * en una propiedad llamada value.
 * 
 * Esto se debe a que los iteradores son objetos de propósito general, value simplemente
 * es algo que ha sido retornado  a este de una determinada colección.
 */
anotherPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petKeysIterator = anotherPetsMap.keys();

console.log(petKeysIterator.next().value); // -> snakes
console.log(petKeysIterator.next().value); // -> cats
console.log(petKeysIterator.next().value); // -> dogs

/**  entries
 * 
 * Además de los métodos de values y keys, tenemos un método más: entries.
 * 
 * Funciona de la misma manera que los dos anteriores, solo que esta vez el iterador
 * devuelve el elemento completo, es decir del par guardado key:value como una matriz de 
 * dos elementos.
 */
// Crear un Map
let myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set('city', 'New York');

// Obtener el iterador de entradas
let entries = myMap.entries();

// Iterar sobre las entradas
for (let entry of entries) {
    console.log(entry);
}
/** Salida:
 * [ 'name', 'Alice' ]
[ 'age', 30 ]
[ 'city', 'New York' ]
 */

/** Como recordatorio, podemos usar el iterador en el bucle, verificando si todavía
 * tenemos algún elemento por recorrer.
 */
petsIterator = anotherPetsMap.entries();
result = petsIterator.next();
while (!result.done) {
 console.log(result.value); // -> ["snakes", 1] -> "cats", 3] -> ["dogs", 2]
 result = petsIterator.next();
}

/****    el bucle for... of 
 * 
 * Con el fin de revisar las colecciones(es decir, matrices, conjuntos y mapas), se
 * creó otro mecanismo simple en JavaScript: el bucle for... of.
 * 
 * Es universal para todas las colecciones y su uso es tan intuitivo que no requiere 
 * explicación.
 * 
 * Analizamos su funcionamiento en base al código presentado aquí y comparamos
 * los resultados para la matriz, luego para el conjunto y el mapa.
*/
petsArray = ["cat", "dog", "hamster"];
for( let pet of petsArray) {
console.log(pet); // -> cat -> dog -> hamster
};

petsSet = new Set(["cat", "dog", "hamster"]);
for( let pet of petsSet) {
console.log(pet); // -> cat -> dog -> hamster
};

petsMap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
for( let pet of petsMap) {
    console.log(pet); // -> ["cats", 1] -> ["dogs", 3] -> ["hamsters", 2]
    console.log(pet[0]); // -> ctas -> dogs -> hamsters
}
/**** El operdor de propagación (spread) ...
 * 
 * El operador de extensión(propagación), ... , al igual que en los sets y arrays, 
 * permite dividir el mapa en elementos individuales.
 * 
 * En este ejemplo, lo usamos para convertir el mapa en una matriz.
 * Mira el código:
*/
petsMap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
console.log(petsMap instanceof Map); // -> true
petsArray = [...petsMap]; // -> [["cats", 1], ["dogs", 3], ["hamsters", 2]]
console.log(petsArray instanceof Array); // -> true

/***************** Tipo de dato compuesto Object ***************************
 * 
 * El constructor Object, así como los propios objetos, ya han aparecido varias
 * veces en el curso.
 * 
 * Sin embargo, veámoslo nuevamente, desde una perspectiva ligeramente diferente,
 * tratándolos como una estructura de datos compuestas.
 * 
 * Las matrices, mapas o conjuntos son estructuras compuestas cuya tarea principal es
 * permitirle almacenar su recopilación de datos.
 * 
 * Cada una de estas estructuras tiene características diferentes y es adecuada para
 * diferentes tareas.  
 * 
 * Los elementos de una Array se pueden repetir.  Como sólo tienen valores, los identficamos
 * por su posición (índice) y por tanto su orden es importante.
 * 
 * Un conjunto (Set) es una colección de datos sin índices, en la que se mantiene un determinado
 * orden, pero no afecta el funcionamiento del conjunto. 
 * Los elementos de un conjunto sólo tienen un valor (aunque formalmente en JavaScript
 * también tienen claves idénticas a los valores).
 * 
 * La última de estas estructuras Map, es similar al Set tiene elementos cuyo orden no
 * es importante.  Los elemtos del mapa siempre constan de un par key:value, cuyos atributos
 * pueden ser de cualquier tipo.
 * Las claves del mapa deben ser únicas y no pueden repetirse.
*/

/****** Creando un objeto 
 * 
 * Es posible que hayas notado una similitud entre el mapa y el objeto.
 * 
 * De hecho, muy a menudo se utilizan objetos en JavaScript para almacenar datos en lugar
 * de mapas (ambos también son colecciones de pares key:value).
 * 
 * Aquí los valores pueden ser de cualquier tipo, aunque se imponen algunas restricciones
 * a las claves.
 * 
 * Recordemos algunos hechos sobre los objetos, mirándolos sólo como estructuras diseñadas
 * para almacenar datos, al igual que los mapas.
 * Por lo tanto, debemos ser capaces de crear dicha estructura, modificar dinámicamente su
 * contenido, es decir, agregar, eliminar y modificar elementos de acuerdo con la 
 * nomenclatura utilizada en los objetos(propiedades) y recorrelos.
 * 
 * Primero, creemos un objeto usando literales (implicitamente estamos haciendo referencia
 * al constructor Object en este punto).
 * 
 * Tratemos un objeto como una colección de elementos con ciertas claves y valores.
 */
let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};

/******* Manipulando elementos
 * 
 * La adición y modificación de elementos se realiza mediante el uso de notación de puntos
 * o notación de corchetes y una nueva clave(es decir, el nombre de la propiedad).
 * 
 * Usamos el comando delete para eliminar un elemento.
 */
console.log(anotherPetsObj.snakes); // -> 1
anotherPetsObj.snakes = 2;
console.log(anotherPetsObj.snakes); // -> 2
delete anotherPetsObj.snakes;
console.log(anotherPetsObj.snakes); // -> undefined
anotherPetsObj.snakes = 0;
console.log(anotherPetsObj.snakes); // 0

/******* Recorriendo los elementos       
 * 
 * Para movernos por los elementos almacenados en el objeto, podemos utilizar, entre
 * otros, el método estático keys, values, y entries del constructor Object.
 * 
 * Esta vez no utilizamos iteradores.  Todos estos métodos devuelven matrices que contienen
 * claves, valores y pares clave-valor respectivamente.
 * 
 * Podemos revisar cada una de las matrices usando el método forEach, por ejemplo:
 */
let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};
Object.keys(anotherPetsObj).forEach(key=>console.log(key)); // -> snakes -> cats -> dogs
Object.values(anotherPetsObj).forEach(key=>console.log(key)); // -> 1 -> 3 -> 2
Object.entries(anotherPetsObj).forEach(key=>console.log(key)); // -> ["snakes", 1] -> ["cats", 3] -> ["dogs", 2]

/** El bucle for ... of, que funciona para matrices, mapas y conjuntos, no funciona para
 * objetos , pero tenemos una constucción for ... in en su lugar.
 */
let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};
for (let key in anotherPetsObj) {
    console.log(key); // -> snakes -> cats -> dogs
    console.log(anotherPetsObj[key]); // -> 1 -> 3 -> 2
}

/*****  El operador spread   
 * 
 * También podemos usar el operador spread para objetos, pero funciona de manera un poco
 * diferente que para matrices o mapas.
 * 
 * Puedes usarlo sólo para pasar las propiedades de un objeto a otro objeto.
 * Vimos esto anteriormente
 */
let petsObj = {"cats": 1, "dogs": 3, "hamsters": 2};
let newPetsObj = {...petsObj, "sharks": 1}; // -> {cats: 1, dogs: 3, hamsters: 2, sharks: 1}

/** ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡
 * El almacenamiento de datos en objetos es tan práctico que existe una técnica especial
 * para procesarlos en forma de texto, permitiendo su transporte en la red.
 * 
 * Este formato se conoce como JSON y lo analizaremos con más detalle.
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */