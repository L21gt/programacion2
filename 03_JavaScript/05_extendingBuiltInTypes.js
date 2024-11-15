/*************************   Ampliación de tipos integrados *******************
 * 
 * Con los objetos integrados, incluso entre los muchos métodos que ofrecen, no siempre
 * encontraremos el adecuado para lo que necesitamos.
 * 
 * Muy a menudo tendremos que crear nuevas funcionalidades para tareas específicas.
 * 
 * Imaginemos que mientras desarrollamos una aplicación, necesitamos crear un elemento
 * de una matriz determinada.
 * 
 * El constructor Array obviamente no tiene tal método, así que intentemos resolver
 * el problema nosotros mismos.
 * 
 * Para empezar, creemos una función simple que devolverá un elemento de la matriz, no
 * uno aleatorio, sino el indicado por el índice.
 * 
 * Si damos un índice fuera del alcance de la matriz, la función devolverá undefined.
 */
let getItem = function(array, index) {
    let retVal = undefined;
    if(index > 0 && index < array.length) {
        retVal = array[index];
    }
    return retVal;
}

let array = [10, 20, 80, 100];
console.log(getItem(array, 2)); // -> 80

/**La función opera como se esperaba, aunque contiene código redundante.
 * 
 * Podemos eliminar la instrucción if reemplazandola con un operador condicional:
 */
getItem = function(array, index) {
    return (index > 0 < index < array.length) ? array[index] : undefined;
}
/**¿No parece nuestro código más simple ahora?
 * ¿Pero es necesario comprobar si el índice está dentro del rango de los elementos de la matriz?
 * En nuestro caso, no necesariamente, porque al hacer referencia a un elemento fuera del
 * array de devolverá undefined de todos modos.
 * 
 * Simplifiquemos aún más la función:
 */
getItem = function(array, index) {
    return array[index];
}

/**Creemos ahora una función que resuelva nuestro problema principal, es decir, devolverá
 * un elemento aleatorio, no uno indicado.
 * 
 * Para ello utilizaremos, entre otros, un fragmento de código para dibujar números enteros,
 * que hemos preparado nosotros mismos mientras discutíamos el objeto Map.
 * 
 * Por supuesto, también podemos omitir lo que ya es innecesario, el parámetro index.
 */
let getRandomItem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
    }
    
    array = [10, 20, 80, 100];
    console.log(getRandomItem(array)); // -> ?
    console.log(getRandomItem(array)); // -> ?

/**
 * Todo funciona como debería.

Sin embargo, hemos creado una función que no está vinculada permanentemente a la matriz.

¿Sería posible crear la misma funcionalidad en forma de método, ampliando la array ¿objeto?

Resulta que podemos.

Basta con hacer una ligera mejora en el Array constructor, o más precisamente, a su prototipo.

Puede parecer peligroso, pero en su ejecución es trivial 
(discutimos esta técnica en el capítulo sobre objetos).

Intentemos cambiar nuestra función al método prototipo Array .

*/
Array.prototype.getRandomItem = function() {
    return this[Math.floor(Math.random() * this.length)];
    }
    console.log(array.getRandomItem()); // -> ?
    console.log(array.getRandomItem()); // -> ?

/** 
Hemos agregado un nuevo método, getRandomItem, al campo prototipo del constructor Array .

No acepta ningún argumento, porque el array sobre el que trabajamos está almacenado en 
el objeto.

Tenemos acceso a este objeto desde dentro del método usando this.

¡Por lo tanto, lo hemos logrado y todo está funcionando correctamente!

El cambio en el constructor Array  que acabamos de crear, por supuesto, solo es aplicable a 
nuestra aplicación y solo hasta que se reinicie.

De la misma forma, podemos modificar otros constructores agregando los métodos necesarios.

Esta técnica, en lo que respecta a los objetos integrados, 
tiene tantos partidarios como detractores.

Su principal desventaja es que JavaScript cambia constantemente y no podemos estar seguros 
de que con el tiempo el método que hemos introducido no aparecerá en el constructor modificado. 
     */

/***     Resumen     
 * 
 * El lenguaje JavaScript proporciona muchos objetos integrados y hemos repasado brevemente 
 * algunos de los más prácticos.

Nos limitamos a constructores que nos permiten manejar diferentes tipos de datos, 
tanto simples como compuestos.

Aprenderá sobre varios otros objetos integrados más adelante en el curso, 
pero principalmente cuando trabaje en proyectos futuros.

Cuando busque información sobre otros objetos o detalles adicionales sobre objetos que 
ya ha estudiado, no dude en utilizar los materiales publicados en 
el sitio web de MDN y fuentes similares. 
 */