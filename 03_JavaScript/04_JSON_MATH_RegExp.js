/*****************************************************************************************
 * 
 *                            JSON, Matemáticas y RegExp
 * 
 * Temas:
 *    + Primitivas y autoboxing
 *    + JSON
 *    + Math
 *    + RegExp
 *  
 * Los objetos integrados no son sólo constructores de tipos de datos simples y compuestos.
 * 
 * En forma de estos objetos, algunas funcionalidades adicionales están disponibles en
 * JavaScript.
 * Daremos un vistazo más de cerca a tres de estos objetos:
 *   + JSON,
 *   + Math,
 *   + RegExp.     
 */

/*************    JSON      **************
 * 
 * Es una abreviatura de JavaScript Object Notation, que significa formato de datos basado
 * en texto.
 * 
 * Se utiliza principalmente para enviar datos a través de la red.
 * 
 * Sin embargo, resultó ser tan práctico que hace tiempo que dejó de usarse solo en
 * JavaScript, convirtiéndose en uno de los formatos de intercambio de datos más 
 * populares, si no el más popular.
 * 
 * Su principal competidor sigue siendo XML(Extenible Markup Language, proporciona
 * reglas para definir cualquier formato de dato), pero en el caso de JavaScript, 
 * de JSON es una obviedad.
 * 
 * Fue inventado especificamente para este idioma en particular. JSON es un formato de
 * texto que permite almacenar objetos y matrices.
 * 
 * Para convertir datos (objetos y matrices) al formato JSON y viceversa, de texto a objetos
 * y matrices, una función integrada al objeto JSON se utiliza en JavaScript.
 * 
 * En este cado, es realmente un objeto, no un constructor.
 * 
 * No lo creamos, no lo eliminamos no lo modificamos.
 * 
 * Este objeto listo para usarse existe y s esperando para ser utilizado, 
 * nos proporciona los métodos: stringify y parse.
 * 
 * Veamos el código:
 */
let vehicle2 = {
    id: "AK12113",
    longitude: 59.358615, 
    latitude: 17.947589,
    getId: function() {
        return this.id;
    }
    };
    let vehicle2JSON = JSON.stringify(vehicle2);
    console.log(typeof vehicle2JSON); // -> string
    console.log(vehicle2JSON); // -> {"id":"AK12113","longitude":59.358615,"latitude":17.947589}
/**Analicemos el código, se crea un objeto vehicle(propiedades y métodos), luego se utiliza
 * el método stringify y el resultado de la conversión se guarda en la vaiable vehicle2JSON.
 * 
 * Ahora observa la cadena de destino, puedes verla en la línea 61,no hay rastro del método
 * getID en la cadena destino.
 * 
 * Si lo pensamos detenidamente, esto es perfectamente razonable.
 * ¿Qué habría realmente allí? ¿Quizás nuestro código de método?
 * 
 * JSON es un formato para intercambiar datos, no información sobre el programa.
 * 
 * Puedes ver en este punto que durante la conversión, JSON trata un objeto como una
 * colección de elementos, pares key:value.
 * 
 * Por lo tanto, actúa como una estructura de datos normal.
 */
/** El objeto window
 * 
 * El objeto window en un navegador web es el objeto global que representa la ventana del 
 * navegador. Es extremadamente complejo y contiene muchas propiedades y métodos, 
 * algunos de los cuales son objetos que a su vez contienen referencias de vuelta
 * al objeto window o a otros objetos que eventualmente referencian de vuelta al objeto window.
 * 
 * Intentemos convertir el objeto principal del navegador, la ventana (window), en formato
 * JSON:
 */
JSON.stringify(window); // -> Uncaught TypeError: Converting circular structure to JSON
//La conversión no tendrá éxito debido a la existencia de ciclos en este objeto.

/** ¿Por Qué Ocurre el Error?
Cuando intentas ejecutar JSON.stringify(window), el método JSON.stringify recorre todas 
las propiedades del objeto window para convertirlas a una cadena JSON. 
Sin embargo, debido a los ciclos de referencia presentes en el objeto window, 
el método entra en un bucle infinito y lanza un error para evitar un bloqueo del navegador.*/

/**El formato JSON permite escribir no sólo objetos, sino también matrices.
 * 
 * Esto es necesario porque el campo de un objeto puede ser una matriz.
 * 
 * Probemos otro caso, creando y convirtiendo una matriz de objetos a JSON.
 * 
 * Esta vez crearemos varios objetos, usando el constructor Vehicle.  Cada vehículo
 * tendrá un identificador diferente, pero la misma ubicación.
 * 
 * Digamos que todos están parqueados en el mismo parqueo.
 */
let Vehicle = function(id, latitude, longitude){ 
    this.id = id;
    this.latitude = latitude;     
    this.longitude = longitude;
}; 

let ids = ["AK12113", "AL1024", "BA1001"];
let vehicles = [];
ids.forEach(id => vehicles.push(new Vehicle(id, 59.358615, 17.947589)));
let vehcilesJSON = JSON.stringify(vehicles); 
   // -> [{"id":"AK12113","latitude":59.358615,"longitude":17.947589},
   //{"id":"AL1024","latitude":59.358615,"longitude":17.947589},
   //{"id":"BA1001","latitude":59.358615,"longitude":17.947589}]

/** escribamoslo de manera más sencilla, sin fata arrows function.
 * let Vehicle = function(id, latitude, longitude){ 
    this.id = id;
    this.latitude = latitude;     
    this.longitude = longitude;
}; 

let ids = ["AK12113", "AL1024", "BA1001"];
let vehicles = [];

// Función común para iterar sobre el array ids y crear instancias de Vehicle
function addVehicle(id) {
    vehicles.push(new Vehicle(id, 59.358615, 17.947589));
}

ids.forEach(addVehicle);

let vehiclesJSON = JSON.stringify(vehicles); //
 */
/**Observa como se recorre la matriz ids, con el método forEach, y creamos un nuevo
 * objeto para cada identificador.
 * 
 * Cada objeto se inserta utilizando el método push en la matriz de vehículos.  Luego
 * pasamos exitosamente esta matriz al método JSON.strings.
 */

/** Conversión de formato JSON
 * 
 * Usaremos el método JSON.parse paracrear el objeto omatriz a partir del formato de 
 * texto JSON.
 * 
 * Intentemos probarlo en una de las cadenas simples generadas en los ejemplos anteriore.
 * 
 * Una de las reglas básicas del formato JSON es que las claves del objeto son cadenas
 * entre comillas dobles.
 * 
 * La segunda limitación importante es el hecho de que en formato JSON podemos guardar
 * un objeto o una matriz a la vez(pero que consta de muchos objetos).
 */
let vehicleJSON = '{"id":"AK12113","position":{"longitude":59.358615,"latitude":17.947589}}';
let vehicle = JSON.parse(vehicleJSON);
console.log(typeof vehicle); // -> object
console.log(vehicle.position.longitude); // -> 59.358615
/**El objeto reconstruido se almacena en la variable vehicle.
 * 
 * Como puede ver, contiene un objeto a cuyos campos podemos referirnos fácilmente.
 */
/**Una cadena JSON un poco máscompleja, que contenga una serie de objetos debería ser
 * igual de fácil de convertir.
 */
vehcilesJSON = '[{"id":"AK12113","latitude":59.358615,"longitude":17.947589},{"id":"AL1024","latitude":59.358615,"longitude":17.947589},{"id":"BA1001","latitude":59.358615,"longitude":17.947589}]';
vehcilesJSON = vehcilesJSON.replaceAll("id", "plate");
vehicles = JSON.parse(vehcilesJSON);
console.log(vehicles instanceof Array); // -> true
console.log(vehicles.length); // -> 3
console.log(vehicles[0].plate); // -> AK12113

/**Antes de reconstruir las matrices y objetos almacenados en forma de cadena JSON, lo 
 * modificaremos, solo por diversión.
 * 
 * Sabiendo que es una cadena, usamos el método replaceAll para reemplazar todas las apariciones
 * de 'id' con 'plate',
 * 
 * El resultado de la llamada al método JSON.parse se guarda en la variable vehicles.
 * 
 * Luego comprobamos que es una matriz con tres elementos.
 * 
 * El elemento cero es el objeto en el que encontramos el campo plate (originalmente id).
 * 
 * Como puedes ver, la conversión hacia y desde JSON es una tarea muy sencilla.
 * 
 * Al convertir objetos, sólo hay que tener cuidado con los ciclos.
 * Sin embargo, en la práctica diaria no es realista crear un objeto tan incorrecto desde
 * el punto de vista JSON.
 * 
 * Al converitr de objetos y matrices a texto, asegúrese de que el texto sea compatible con el
 * formato JSON.
 * 
 * En primer lugar, debe describir un único objeto o una única matriz en el nivel más alto.
 * 
 * Nivel alto:
 *      JSON (JavaScript Object Notation)
        JSON es un formato de texto ligero para el intercambio de datos. 
        Es fácil de leer y escribir para los humanos y fácil de analizar y generar para 
        las máquinas. En JSON, los datos se representan en dos estructuras principales:

    Objeto: Una colección de pares clave-valor encerrados entre llaves {}.
    Matriz (Array): Una lista ordenada de valores encerrados entre corchetes [].
 *   
    Nivel Más Alto
    El "nivel más alto" se refiere a la estructura principal que contiene todos los datos en 
    el JSON. En JSON, el nivel más alto debe ser un único objeto o una única matriz.
    No puede haber múltiples objetos o matrices en el nivel más alto sin estar contenidos 
    dentro de un objeto o una matriz.


    Objeto en el Nivel Más Alto
{
    "name": "Alice",
    "age": 30,
    "address": {
        "city": "New York",
        "zip": "10001"
    }
}

En este ejemplo, el nivel más alto es un único objeto que contiene varios pares clave-valor.

Matriz en el Nivel Más Alto
[
    {
        "name": "Alice",
        "age": 30
    },
    {
        "name": "Bob",
        "age": 25
    }
]
En este ejemplo, el nivel más alto es una única matriz que contiene varios objetos.

Ejemplos Incorrectos
Múltiples Objetos en el Nivel Más Alto
{
    "name": "Alice"
}
{
    "name": "Bob"
}
    Este ejemplo es incorrecto porque hay múltiples objetos en el nivel más alto sin estar 
    contenidos dentro de un objeto o una matriz.

    Múltiples Matrices en el Nivel Más Alto
    ["Alice", "Bob"]
    ["Charlie", "David"]
    Este ejemplo es incorrecto porque hay múltiples matrices en el nivel más alto 
    sin estar contenidas dentro de un objeto o una matriz.

 * En segundo lugar, cada nombre de propiedad de un objeto (cada key) debe estar entre comillas
   dobles.
 */

/*******************************   Math      ***********************************************
 * 
 * El objeto Math, como JSON, no es un constructor, sino un objeto ordinario.
 * 
 * No lo creamos, simplemente nos referimos él por su nombre y elgimos un método
 * o propiedad específica para usarlo.
 * 
 * Contiene métodos matemáticos y constantes.
 * 
 * Te recomendamos que eches un vistazo a la página de MDN para ver qué funciones
 * matmáticas ofrece.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 * 
 * Math permite el uso de varias constantes matemáticas, las más importantes de las cuales
 * son los números pi, y la base del logaritmo natural (e).
 */
console.log(Math.PI); // -> 3.141592653589793
console.log(Math.E); // -> 2.718281828459045

/**La gran mayoría de los métodos proporcionados por Math son muy simples de usar
 * y deberían resultarle familiares gracias a las lecciones matemáticas.
 * 
 * Los enumeraremos aquí, con breves descripciones y ejemplos de uso.
 * 
 * **** Redondeo (Rounding)
 * 
 * Algunos de los métodos más utilizados son ceil, floor y round.
 * 
 * El método ceil redondea el número dado hasta el primer número entero mayor
 * que el dado en el argumento.
 * 
 * EL método floor redondea hacia abajo al primer número entero menor dado.
 * 
 * El método round redondea la cifra según las reglas de la artimética (hacia arriba si la
 * fracción decimal es igual o mayor que 0.5, abajo si no).
 */
console.log(Math.ceil(10.2)); // -> 11
console.log(Math.floor(10.2)); // -> 10
console.log(Math.round(10.2)); // -> 10

console.log(Math.ceil(10.499999)); // -> 11 
console.log(Math.floor(10.499999)); // -> 10
console.log(Math.round(10.499999)); // -> 10

console.log(Math.ceil(10.5)); // -> 11
console.log(Math.floor(10.5)); // -> 10
console.log(Math.round(10.5)); // -> 11

console.log(Math.ceil(10.8)); // -> 11
console.log(Math.floor(10.8)); // -> 10
console.log(Math.round(10.8)); // -> 11

/******    Generando Números        
 * 
 * En la práctica , el método más utilizado es ramdom.
 * 
 * Se utilizad para generar números pseudoaleatorios,
 * 
 * Despues de llamarlo, genera un valor real a partir de 0(inclusive) al máximo 1
 * (a excepción de 1).
 * */
console.log(Math.random());// --> ?
/**No solemos necesitar un valor aleatorio en el rango 0 a 1.
 * 
 * Normalmente, necesitaremos números enteros en un rango determinado.
 * 
 * Para obtenerlos, tenemos que escribir una parte de nuestro propio código.
 * 
 * La siguiente función randomInteger le permite generar números enteros
 * a partir de min a max  (excluyendo el valor max).
 * 
 * Proporciona una distribución uniforme de valores aleatorios (teóricamente, la 
 * probabilidad de extraer cada número entero de un rango determinado debería ser 
 * la misma).
 */
let randomInteger = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min) + _min);
}
console.log(randomInteger(10,20)); // -> ?
/**Generación del Número Aleatorio:
 *return Math.floor(Math.random() * (_max - _min) + _min);
Math.random() genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo).
Math.random() * (_max - _min) escala este número aleatorio al rango [0, _max - _min).
Math.random() * (_max - _min) + _min desplaza este número al rango [_min, _max).
Math.floor(...) redondea hacia abajo para obtener un número entero en el rango [_min, _max).

El código define una función randomInteger que genera un número entero aleatorio entre dos
valores dados min (inclusive) y max (exclusivo). Utiliza Math.ceil y Math.floor para 
asegurar que los límites sean enteros y Math.random para generar el número aleatorio dentro 
del rango especificado.


 * Si nuestra función nos permite extraer números del mismo rango de min y max,
 * pero esta vez permitiéndonos generar  un máximo también, necesitamos modificarla
 * ligeramente.
 */
randomInteger = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
}
console.log(randomInteger(10,20)); // -> ?
/**
 * Generación del Número Aleatorio:

return Math.floor(Math.random() * (_max - _min + 1) + _min);
Math.random() genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo).
Math.random() * (_max - _min + 1) escala este número aleatorio al rango [0, _max - _min + 1).
Math.random() * (_max - _min + 1) + _min desplaza este número al rango [_min, _max + 1).
Math.floor(...) redondea hacia abajo para obtener un número entero en el rango [_min, _max].

El código define una función randomInteger que genera un número entero aleatorio entre dos 
valores dados min (inclusive) y max (inclusive). Utiliza Math.ceil y Math.floor para 
asegurar que los límites sean enteros y Math.random para generar el número aleatorio dentro 
del rango especificado. La parte matemática se encarga de escalar y desplazar el número
aleatorio generado por Math.random para que caiga dentro del rango deseado, y Math.floor 
se utiliza para redondear hacia abajo y obtener un número entero.
 */



/***********   Otros métodos útiles   
 * 
 * El método abs devuelve un valor absoluto del número dado.
*/
console.log(Math.abs(-3.25)); // -> 3.25
console.log(Math.abs(10)); // -> 10
/**los métodos min y max, se utilizan para buscar el valor más pequeño o más grande entre los
 * valores dados.
 * 
 * Tenga en cuenta que en el ejemplo del método max utilizamos el operador spread para 
 * transformar la matriz en elementos individuales que serán tratados como argumentos.
 */
console.log(Math.min(100, 20, 300, 10, 400));

let numbers = [100, 20, 300, 10, 400];
console.log(Math.max(...numbers));
/**También tenemos a nuestra disposición, entre otros los métodos pow y sqrt (es decir,
 * potencia y raíz cuadrada) y log, log2, y log10 (es decir, logaritmo natural, logaritmo en
 * base 2 y logaritmo decimal).
*/
console.log(Math.pow(2, 3)); // -> 8 => 23

console.log(Math.pow(4, 2)); // -> 16 => 42
console.log(Math.pow(4, -1)); // -> 0.25 => 4-1 = 1/4^1 
console.log(Math.pow(4, -2)); // -> 0.0625 => 4-2 = 1/4^2 
console.log(Math.pow(4, 0.5)); // -> 2 => 40.5 = 4^(1/2) = √(2&4)
console.log(Math.pow(-1,0.5)); // -> NaN => -10.5 = √(2&-1)

console.log(Math.sqrt(4)); // -> 2

x = Math.pow(Math.E, 2); // -> 7.3890560989306495
console.log(Math.log(x)); // -> 2
console.log(Math.log2(16)); // -> 4
console.log(Math.log10(1000)); // -> 3

/**Las funciones trigonométricas también se representan en grandes números(p.ej. Sin, cos,
atan, cosh).

JavaScript no opera en grados, sino en radianes.
*/
console.log(Math.cos(Math.PI/3));
console.log(Math.tan(Math.PI/4));
console.log(Math.asin(1));
/**Los métodos presentados cubren una pequeña parte de lo que esta disponible en el
 * objeto Math.  El objetivo es sólo familiarizarlo brevemente con los más 
 * populares.
 * 
 * Recuerde lo que mencionamos al hablar del constructor de números:  el lenguaje
 * JavaScript no se inventó para cálculos matemáticos complejos.
 * 
 * Así que no espere utilizarlo para realizar análisis científicos serios.
 */


/************** ExpReg  ******************
 * 
 * El constructr RegExp se utiliza para crear objetos que representan expresiones regulares.
 * El constructor en sí no es particularmente complicado.
 * 
 * Desafortunadamente, no se puede decir lo mismo de las expresiones regulares.
 * 
 * En esta etapa, veremos sólo algunos métodos básicos de este constructor y los
 * métodos del constructor String, que también funciona con expresiones regulares.
 * 
 * En lo que respecta a las expresiones regulares, sólo presentaremos los conocimientos
 * mínimos que necesitas, ya que discutirlas en detalle puede ocupar un curso completo.
 * 
 * En pocas palabras, una expresión regular es un patrón de busqueda expresado en letras
 * y metacaracteres.
 * 
 * Esta expresión le permite probar la cadena dada verificando si coincide con el patrón
 * (la mayoría de las veces se trata de verificar si el patrón está incluido en la
 * cadena probada).
 * 
 * Las expresiones regulares se utilizan en prácticamente todos los lenguajes de programación
 * donde son compatibles de forma nativa o mediante bibliotecas externas.
 * 
 * Entre otras cosas, se utilizan habitualmente para validar datos de texto que las 
 * aplicaciones obtienen de fuentes no fiables(por ejemplo, la dirección de correo electrónico
 * proporcionada por el usuario).
 * 
 * En el caso más sencillo, una expresión regular puede constar de los propios literales
 * (por ejemplo "cut").
 * 
 * Se pueden utilizar para comprobar si existe dicha subcadena en una cadena determinada.
 * El uso de dicha expresión regular para la cadena "hair cut" sería exitoso
 * ("cut" esta incluido en "hair cut").
 * 
 * Sin embargo, tal expresión sería de poca utilidad. La modificación más simple que puedes
 * hacer a una expresión regular es reemplazar el literal con un punto.
 * 
 * El punto es un metacarácter que puede reemplazarse por cualquier letra en una cadena
 * probada.
 * 
 * Por ejemplo, la expresión regular "c.t" coincide tanto con "hair cut" como con 
 * "caterpillar*/

/*****    El método exec       
 * 
 * Un método alternativo para test es exec.
 * 
 * Este método también verifica la coincidencia de la cadena (proporcionada como argumento)
 * con una expresión regular, pero devuelve información más extensa-
 * 
 * Si no hay coincidencia, devuelve un valor null, pero si la coincidencia es exitosa,
 * obtenemos una matriz con algunos datos.
 * 
 * Para nosotros, los dos primeros elementos de la matriz serán los más importantes:  el f
 * fragmento de la cadena del argumento que coincidió con el patrón y el índice del primer
 * carácter de este fragmento.
 */
let re = /c.t/;
console.log(re.exec("haircut")); // -> ["cut", index: 4, input: "haircut", groups: undefined]
console.log(re.exec("ct")); // -> null

/******       Métodos constructores de String usando RegExp   
 * 
 * Mencionamos anteiormente que algunos de los métodos constructores String también admiten
 * expresiones regulares.
 * 
 * Estos incluyen search, match, y replace.
 * 
 * A los dos primeros métodos, search y match, pasamos un argumento: una expresión regular(un 
 * objeto creado con regExp,no un patrón de strings).
 * 
 * Si esto tiene éxito, el método search devuelve la posición coincidente en la cadena,
 * mientras que desde el método match obtenemos información en la misma forma que del
 * método exec(una matriz de información).
 * 
 * El método replace nos permite cambiar la subcadena indicada en nuestras cadenas a un
 * nuevo valor.
 * 
 * En lugar de una subcadena podemos proporcionar una expresión regular (recuerde que las
 * operaciones sobre la cadena no modifican el original, sino que devuelven una copia). */
// String -> match, search, replace, ...
re = /c.t/;
let str = "dog and cat";
console.log(str.match(re)); // -> ["cat", index: 8, input: "dog and cat", groups: undefined]
console.log(str.search(re)); // -> 8
console.log(str.replace(re, 'unicorn')); // -> dog and unicorn
console.log(str); // -> dog and cat

/******        Reglas básicas para expresiones regulares           
 * 
 * En general, estos son métodos importantes relacionados con las expresiones regulares.
 * 
 * Sin embargo, para poder utilizarlos de forma lógica, necesitamos aprender un conjunto
 * básico de metacaracteres y reglas utilizadas en expresiones regulares.
 * 
 * El metacarácter básico es un punto.
 * 
 * En su lugar se puede colocar una marca arbitraria.  Pero, ¿Qué debemos hacer si
 * realmente queremos hacer coincidir el texto que contiene el punto?
 * 
 * En este caso, utilizamos el caracter de escape, que es \ (barra invertida).
 * 
 * Preceder al metacarácter con un carácter de escape significa que le quitamos sus propiedades
 * mágicas y debe tratarse como un literal(es decir, un carácter ordinario).
 */
re = /c\.t/;
console.log(re.exec("cut")); // -> null
console.log(re.exec("c.t")); // -> ["c.t", index: 0, input: "c.t", groups: undefined]
/** Otro metacaracteres son *(asterisco), + (más) y ?(signo de interrogación).
 * 
 * Indican cuántas veces seguidas puede aparecer el carácter anterior (literal o metacarácter).
 * 
 * El carácter + significa que puede aparecer una o más veces, el carácter * es cero o más
 * veces y el carácter ? cero o exactamente una vez.
 */
let re1 = /o*ps/;//cero o más veces
console.log(re1.exec("ps")); // -> ["ps", index: 0, input: "ps", groups: undefined]
console.log(re1.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re1.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]

let re2 = /o+ps/;//una o más veces
console.log(re2.exec("ps")); // -> null
console.log(re2.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re2.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]

let re3 = /o?ps/;  /// 0 o 1 ves
console.log(re3.exec("ps")); // -> ["ps", index: 0, input: "ps", groups: undefined]
console.log(re3.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re3.exec("He said: ooops!"));
             // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]

/**El metacarácter | (barra vertical) se trata como una alternativa.
 * 
 * Separa dos cadenas de caracteres, una de las cuales debe aparecer en la cadena 
 * probada.
 * 
 * Si la alternativa solo aplica al grupo de caracteres de patrón seleccionado,
 * lo marcaremos usando paréntesis.
 */
re1 = /ca|ut/;
console.log(re1.exec("cattle")); // -> ["ca", index: 0, input: "cattle", groups: undefined]
console.log(re1.exec("haircut")); // -> ["ut", index: 5, input: "haircut", groups: undefined]
console.log(re1.exec("city")); // -> null

re1 = /c(a|u)t/;
console.log(re1.exec("cattle")); // -> ["cat", "a", index: 0, input: "cattle", groups: undefined]
console.log(re1.exec("haircut")); // -> ["cut", "u", index: 4, input: "haircut", groups: undefined]
console.log(re1.exec("city")); // -> null
/**El uso de llaves permite introducir el número exacto de repeticiones del anterior
 * (lieteral o metacarácter).
 * 
 * En el siguiente ejemplo, usaremos en metacarácter más para indicar un espacio en blanco
 * (que puede ser reemplazado por un espacio, tabulación, nueva línea,etc.).
 * 
 * Este metacarácter es \s.
 * 
 * La barra invertida al principio es una parte integral de este metacarácter.
 */
re = /\so{2,3}ps/; // repeats 'o' two or three times 
console.log(re.exec("He said: ops!")); // -> null
console.log(re.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
console.log(re.exec("He said: ooooooooops!")); // -> null
/**Si en una posición específica del patrón desea hacer coincidir exactamente un
 * literal de un determinado conjunto lmitado, inserte un conjunto de estos literales
 * entre corchetes en esta posición.
 * 
 * Así, en la posición donde se ubica el corchete debe coincidir exactamente una letra de
 * entre las mencionadas entre paréntesis.
 * 
 * Al comienzo del conjunto, puede insertar el metacarácter ^ (intercalación).
 * 
 * Esto significará que cualquier personaje que no esté incluido en el conjunto podrá
 * aparecer en esa posición.
 */
re1 = /c[aiu]t/;
console.log(re1.exec("cattle")); // -> ["cat", index: 0, input: "cattle", groups: undefined]
console.log(re1.exec("haircut")); // -> ["cut", index: 4, input: "haircut", groups: undefined]
console.log(re1.exec("city")); // -> ["cit", index: 0, input: "city", groups: undefined]

re2 = /c[^au]t/;
console.log(re2.exec("cattle")); // -> null
console.log(re2.exec("haircut")); // -> null
console.log(re2.exec("city")); // -> ["cit", index: 0, input: "city", groups: undefined]
/**Cuando aparece el metacarácter \d significa que cualquier número puede coincidir en esta
 * posición.
 */
re = /id\d+/;
console.log(re.exec("My ids.")); // -> null
console.log(re.exec("id60001")); // -> ["id60001", index: 0, input: "id60001", groups: undefined]
/**Los últimos metacarácteres importantes son ^(caret) y $(dollar).
 * Indican el principio y el final de una cadena.
 * 
 * Tenga en cuenta que el signo de intercalación ^ utilizado dentro de los corchetes, que
 * denotan un conjunto de literales, tiene un significdo completamente diferente.
  */
re1 = /^(abc\s){3}$/;
console.log(re1.exec("abc abc abc ")); // -> ["abc abc abc ", "abc ", index: 0, input: "abc abc abc ", groups: undefined]
console.log(re1.exec("abc abc abc abc ")); // -> null
console.log(re1.exec("abc abcabc")); // -> null

/**
 * Las expresiones regulares (regex o regexp) son secuencias de caracteres que forman un 
 * patrón de búsqueda. Se utilizan para realizar operaciones de búsqueda y manipulación de 
 * texto, como encontrar, reemplazar o validar cadenas de caracteres. 
 * 
 * Las expresiones regulares son muy poderosas y se utilizan en muchos 
 * lenguajes de programación, así como en herramientas de procesamiento de texto.

¿Para Qué Sirven las Expresiones Regulares?

Las expresiones regulares se utilizan para:

Buscar Texto: Encontrar patrones específicos dentro de una cadena de texto.

Ejemplo: Buscar todas las direcciones de correo electrónico en un documento.
Validar Texto: Verificar si una cadena de texto cumple con un formato específico.

Ejemplo: Validar si una cadena es un número de teléfono válido.
Reemplazar Texto: Sustituir partes de una cadena de texto que coinciden con un patrón.

Ejemplo: Reemplazar todas las ocurrencias de una palabra en un documento.
Dividir Texto: Dividir una cadena de texto en partes basadas en un patrón.

Ejemplo: Dividir una cadena en palabras utilizando espacios como delimitadores.
¿Qué es un Metacaracter?
Un metacaracter es un carácter con un significado especial en el contexto de una expresión regular. Los metacaracteres permiten definir patrones complejos y realizar búsquedas avanzadas. A continuación se presentan algunos de los metacaracteres más comunes y su significado:

.: Coincide con cualquier carácter excepto una nueva línea.
^: Coincide con el inicio de una cadena.
$: Coincide con el final de una cadena.
*: Coincide con cero o más repeticiones del carácter o grupo anterior.
+: Coincide con una o más repeticiones del carácter o grupo anterior.
?: Coincide con cero o una repetición del carácter o grupo anterior.
{n}: Coincide con exactamente n repeticiones del carácter o grupo anterior.
{n,}: Coincide con n o más repeticiones del carácter o grupo anterior.
{n,m}: Coincide con entre n y m repeticiones del carácter o grupo anterior.
[]: Define un conjunto de caracteres. Coincide con cualquiera de los caracteres dentro de los corchetes.
|: Actúa como un operador OR. Coincide con el patrón a la izquierda o a la derecha del operador.
(): Agrupa caracteres o patrones. También se utiliza para capturar subcadenas.
Ejemplos de Expresiones Regulares
Buscar una dirección de correo electrónico:

[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}
Coincide con direcciones de correo electrónico válidas.
Validar un número de teléfono:

\(\d{3}\) \d{3}-\d{4}
Coincide con números de teléfono en el formato (123) 456-7890.
Reemplazar todas las ocurrencias de una palabra:

let text = "Hello world! Hello everyone!";
let newText = text.replace(/Hello/g, "Hi");
console.log(newText); // "Hi world! Hi everyone!"
Dividir una cadena en palabras:

let text = "This is a test.";
let words = text.split(/\s+/);
console.log(words); // ["This", "is", "a", "test."]

Resumen
Las expresiones regulares son herramientas poderosas para buscar, validar, reemplazar y
 manipular texto.

  Los metacaracteres son caracteres especiales dentro de las expresiones regulares que 
  permiten definir patrones complejos.

   Con el uso adecuado de las expresiones regulares, se pueden realizar operaciones
  avanzadas de procesamiento de texto de manera eficiente.
 */