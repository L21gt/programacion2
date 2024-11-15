/*******************   DECLARACIÓN DE CLASE  *******************************
 * 
 * TEMAS:
 *    + Primitivos y autoboxing;
 *    + Booleano;
 *    + Num;
 *    + String;
 *    + Date.
 * 
 * 
*/

/*********  Tipos de datos simples       
 * 
 * Ya hemos hablado del término tipos de datos anteriormente.
 * 
 * En programación de computadoras, todos los datos son de algún tipo.
 * 
 * Este tipo se utiliza para indicarle al intérprete o compilador cómo tratar los datos.
 * 
 * Más comúnmente, los tipos de datos se dividen en dos categrías:
 *          + Simples (o primitivos)
 *          + Compuestos (o complejos).
 * 
 * Los tipos simples contienen un valor único, que se interpretará como algo así como
 * un número o texto.
 * 
 * Los tipos compuestos generalmente se construyeb a partir de tipos simples y, en la mayoría
 * de los casos, son todo tipo de colecciones(ordenadas o no).
 * 
 * Ahora veremos los tipos primitivos básicos de JavaScript y sus correspondientes objetos
 * integrados.
 */


/**     Primitivos y autoboxing      
 * 
 * Ya hemos hablado muchas veces de primitivos, es decir, tipos de datos no objetivos, i. e.
 * no son objetos.
 * 
 * Hay un total de siete, pero de momento sólo tres de ellos son importantes para nosotros:
 *      + Boolean
 *      + number
 *      + string
 * 
 * Como no son objetos, no tienen métodos ni propiedaes.
 * 
 * Los datos de cada uno de estos tipos colocados en las variable son valores puros,
 * almacenados en el formato apropiado en la memoria.
 * 
 * Sin embargo, para cada uno de los tipos e datosm primitivos existe un constructor
 * especial en JavaScript (que puedes tratar como una clase), respectivamente:
 * Boolean, Number, y String.
 * 
 * Estos son objetos integrados estándas. La conexión entre estas primitivas y sus correspon-
 * dientes constructores es relativamente simple, pero unas pocas palabras de explicación no 
 * vendrían mal.
 * 
 * En primer lugar, ¿por qué necesitamos tales constructores? De hecho, los necesitamos sólo
 * por conveniencia.
 * 
 * El uso de objetos y la notación de puntos relacionada es muy intuitivo y hace que la
 * notación de ciertas operaciones sea simple y lógica.
 * 
 * Veamos un ejemplo:
 */

let strObj = new String("¿Los murcielagos comen gatos?");
console.log(typeof(strObj));// --> object
console.log(strObj.length);// --> 17
let words = strObj.split(" ");
console.log(words[0]);// --> ¿Los

/** En este ejemplo, creamos strObj usando el String constructor.
 * 
 * Le pasamos al constructor una pregunta muy importante.
 * 
 * Nuestro objeto tiene muchas propiedades y métodos útiles.
 * 
 * Entre otras cosas, podemos comprobar cuántas letras tiene esta pregunta (nos referimos
 * a la propiedad length para este fin.
 * 
 * Usando el método split, dividimos nuestra pregunta en palabras individuales separadas
 * por espacios.
 * 
 * Almacenamos el resultado (palabras individuales) en el array words, todo esto utilizando 
 * las propiedades y métodos de nuestro objeto.
 * 
 * La escritura es sencilla y legible, fácil de recordar.  Entonces, ¿por qué utilizar
 * primitivos cuando utilizar objetos en su lugar es tan sencillo y agradable?
 * 
 * Desafortunadamente, además de sus innegables ventajas, los objetos tienen un serio
 * inconveniente.
 * 
 * Ocupan incomparablemente más espacio de memoria que los primitivos.
 * 
 * Entonces llegamos a la siguiente pregunta: si los objetos son convenientes, pero las
 * primitivas ahorran memoria, ¿cuáles deberíamos usar?
 * 
 * resulta que la respuesta es: ambos.  Y lo que es aún más extraño: al mismo tiempo
 * 
 * Veamos otro ejemplo:
 */
let str = "¿Los murcielagos comen gatos?";
console.log(typeof(str)); // --> string
console.log(str.length); // --> 17
let words2 = str.split(" ");
console.log(words[0]); // --> ¿Los

/**Esta vez asignamos directamene la cadena "¿Los murcielagos comen gatos?" hacia
 * la variable str.
 * 
 * Esta variable contiene una primitiva en lugar de un objeto, que verificamos con
 * typeof.
 * 
 * Y ahora una pequeña sorpresa:  a pesar de que nuestra variable no contiene un objeto
 * logramos ferirnos a los campos length y split, que conocemos por el objeto String.
 * 
 * ¿Cómo es posible este sucesooooo?
 * 
 * El motor JavaScript es responsable de esto.
 * 
 * Al usar la notación de puntos, indicamos que queremos usar algún método o propiedad de un
 * primitivo (que no tiene ninguna propiedad ni ningun propiedad de sus métodos) y el
 * motor lo convierte en el objeto (temporal) correspondiente.
 * 
 * El objeto temporal se mantiene en la memoria sólo hasta que se completa la operación,
 * despues de lo cual el motor de JavaScript lo libera.
 * 
 * Una operación de este tipo evidentemente repercute en el rendimiento del motor, pero la 
 * memoria que ahorramos de esta manera merece la pena.  Este comportamineto del motor
 * JavaScript se llama autoboxing.
 * 
 * Utilice primitivos.  No cree explícitamente objetos usando constructors Boolean, Number, o
 * String.  Por supuesto, es posible crear dichos objetos, como hemos mostrado en el
 * ejemplo anterior, pero no se recomienda.  Puede confiar en el motor JavaScript para
 * reconocer cuándo desea tratar una primitiva como un objeto y permitirle hacerlo
 * realizando la conversión adecuada sobre la marcha. 
 */


/***** Boolean **********************
 * 
 * Comenzaremos con uno de los objetos incorporados más simples, cuya sencillez nos permitirá
 * organizar algunos hechos relacionados con el tema que estamos discutiendo.
 * 
 * Boolean es un constructor, que es una función que permite crear objetos.
 * 
 * Corresponde al primitivisimo boolean.
 * 
 * Como todos los constructores asociados con primtivos en JavaScript, Boolean se puede 
 * utilizar de varias manera.
 * 
 * En primer lugar, se puede utilizar sin nuestro conocimiento durante el autoboxing,
 * cuando el valor lógico primitivo se convierte sobre la marcha en el objeto correspondiente.
 * 
 * También podemos usar explícitamente el constructor para crear un nuevo objeto usando
 * el nuevo operador.
 * 
 * También podemos usar explícitamente el constructor para crear un nuevo objeto usando el
 * nuevo operador.
 * 
 * En este caso, debemos proporcionar un valor booleano (lógico) como argumento al constructor,
 * que se almacenará en el objeto (si no proporcionamos un argumento, el objeto almacenará
 * false por defecto).
 * 
 * Boolean no tiene propiedades ni métodos estáticos
 * 
 * Tampoco tiene propiedades de prototipo.
 * 
 * Para ser honesto, aquí tampoco encontramos demasiados métodos prototipo.
 * 
 * Sólo hay dos de ellos: toString y valueOf.
 * 
 * El primero devuelve un valor lógico colocado en un objeto en forma de cadena de caracteres,
 * mientras que el segundo devolverá el mismo valor, pero en forma de un booleano primitivo
 * (es decir false o true).
 * 
 * Observa el siguiente ejemplo:
 */
let boolObj1 = new Boolean;
let boolObj2 = new Boolean(true);
let str1 = boolObj1.toString();
let bool2 = boolObj2.valueOf();

console.log(`str1 : ${typeof str1} : ${str1}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool2} : ${ bool2}`); // -> bool2 : boolean : true

/** Usando el constructor Boolean y el operador new, creamos dos objetos:
 * boolObj1 y boolObj2.
 * 
 * Al crear el primero, no proporcionamos el argumento al constructor, por lo que contendrá el
 * valor predeterminado false.
 * 
 * El segundo objeto contiene el valor true pasado explícitamente al constructor.
 * 
 * Usando los métodos toString y valueOf, recuperamos los valores colocados en estos
 * objetos (en forma de cadenas de caracteres y valores lógicos respectivamente).
 * 
 * Por supuesto, podemos hacer una prueba similar usando autoboxing. 
 */
let bool1 = false;
let str22 = bool1.toString();
let bool22 = bool1.valueOf();

console.log(`str1 : ${typeof str22} : ${str22}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool22} : ${ bool22}`); // -> bool2 : boolean : false

/**Puede que el ejemplo no sea el más inteligente, pero es difícil diseñar algo
 * muy sensato con sólo dos métodos simples.
 * 
 * Así que dejémonos llevar por ña fantasía y supongamos que elegir un valor se una variable
 * que co tiene un boolean primitivo usando el método valueOf tiene sentido.
 * 
 * Por el momento, sólo estamos intentando demostrar el mecanismo en sí.
 * 
 * Mira el código en el editor.
 * 
 * En la variable bool1 hemos colocado un tipo de dato primitivo: el valor lógico false.
 * 
 * Al intentar utilizar los métodos toString y valueOf, forzamos al motor JavaScript
 * a convertir temporalmente esta primitiva en un objeto de clase Boolean.
 * 
 * Recuerda:
 * El motor es un program o un entorno que interpreta o ejecuta el código
 * JavaScript.   Estos motores son responsables de convertir el código JavaScript en 
 * instrucciones que la máquina puede entender y ejecutar. Los motores de JavaScript 
 * son una parte crucial de los navegadores web, pero también se utilizan en otros entornos,
 * como servidores y aplicaciones de escritorio.
 * 
 * Hay otra forma de utilizar el booleano. Podemos llamar alconstructor sin el nuevo operador.
 * 
 * ¿Qué lograremos de esa manera? La función constructora no creará un nuevo objeto, solo
 * convertirá el argumento enviado en un valor lógico primitivo que devolverá.
 * 
 * Mira el código:
 */
let bool11 = Boolean(false);
let bool21 = Boolean(1);
let bool31 = Boolean("");

console.log(`bool1 : ${typeof bool11} : ${bool11}`); // -> bool1 : boolean : false
console.log(`bool2 : ${typeof bool21} : ${bool21}`); // -> bool2 : boolean : true
console.log(`bool3 : ${typeof bool31} : ${bool31}`); // -> bool3 : boolean : false


 /** 
 * En el ejemplo, hemos convertido sucesivamente los argumentos false, 1 y " " a valores
 * lógicos.  Si bien el primer caso es bastante obvio, los otros dos pueden requerir una o 
 * dos palabras de aclaración.
 * 
 * En JavaScript, los siguientes valores se tratan como false:
 *  false (lo que probablementeno es una sorpresa), 
 *  null, undefined, NaN (no es un número), 
 *  " " (cadena vacía),
 *  0 (el número cero),
 *  -0 (el número cero negativo),
 *  0n (BigInt cero),
 *  -0n (Cero BigInt negativo).
 * 
 * Todos los demás valores serán tratados como tue, de ahí los valores obtenidos en el ejemplo.
 * 
 * Como puede ver, Boolean es un caso extremadamente simple y, francamente aparte de usarse
 * para la conversión, sirve poco.
 * 
 * Por supuesto no estamos hablando de la utilidad de los tipos lógicos como tales, sino del
 * uso explícito de los tipos lógicos.  El constructor Boolean y sus dos métodos
 * 
 */

 /** ************* NUMBER ***********************************
  * 
  * El constructor Number esta aociado con los números primitivos y representan los números
  * de punto flotante (los que utilizan el punto decimal), en doble precisión en formato de 
  * 64 bit.
  * 
  * Antes de iniciar la discusión de este constructor, recordems algunos hechos sobre el
  * número primitivo.
  * 
  *       UNAS PALABRAS SOBRE LOS NÚMEROS DE JAVASCRIPT
  * 
  * El formato de punto flotante permite almacenar números enteros y números reales
  * (en muchos lenguajes de programación, se distingue entre este tipo de números, mientras
  * que en JavaScript son simplemente números).
  * 
  * Este formato a menudo resulta en valores almacaenados siendo aproximados.
  * 
  * La gama de valores es limitada (es decir, no se pueden almacenas números fuera del
  * rango de límite).
  * 
  * Para los esnteros, por defecto, el valor más pequeño es  -(2^53 - 1) y el más grande
  * (2^53 -1).
  * 
  * De hecho, es posible anotar úmeros fuera de este rango, pero los cálculos realizados sobre
  * ellos son tan umpreciso que es poco probable que se realicen.
  * 
  * Si por alguna razón necesitáramos almacenar valores más grandes (por ejemplo, implementar
  * un algoritmo criptográfico que opere con números primos grandes), tenemos que teclear BigInt.
  * 
  * Sin embargo, en aplicaciones de la vida real, se usa tan raramente que lo omitiremos aquí.
  * 
  * A la hora de dar los valores numéricos, normalmente operamos con el sistema decimal, al
  * que estamos acostubrados en la vida cotidiana.
  * 
  * Sin embargo, al anteponer el valor numérico con 0x, 0o o 0b, podemos decirle al motor
  * de JavaScript que trate el número como hexadecimal, octal o binario.
  * 
  * También es posible escribir un número en forma exponencial, así por ejemplo, en lugar
  * de 9000 podemos escribir 9e3, y en lugar de 0.00123 podemos escribir 123e-5.
  * 
  * Probablemente ya esté familiarizado con estos términos, como representación decimal,
  * hexadecimal o exponencial.
  * 
  * Veamos un ejemplo
  */
 let a = 10; // decimal - default
 let b = 0x10;   // hexadecimal
 let c = 0o10; // octal
 let d = 0b10; // binary
 
 console.log(a); // -> 10
 console.log(b); // -> 16
 console.log(c); // -> 8
 console.log(d); // -> 2
 
 let x = 0.3;
 let y = 0.6;
 console.log(x + y); // -> 0.8999999999999999
 console.log((x + y).toFixed(1));    // -> 0.9
 
 console.log(x / 0);      // -> Infinity
 console.log(x / "abc");  // -> NaN

 /**La primera parte del código son unas pocas líneas que muestran cómo escribimos números en
  * formatos distintos al decimal.
  * 
  * Tenga en cuenta que al recuperar un valor, siempre lo obtiene en formato decimal.  Un
  * fragmento de código un poco más interesante se refiere a aproximaciones en valores reales
  * almacenados.
  * 
  * Las variables x e y, aunque nos parecen sencillas (representaciones decimales), se almacenan
  * en la memoria como números binarios de punto flotante.
  * 
  * Este formato, si bien es conveniente para una computadora, hace que algunos valores sean
  * imposibles de almacenar sin pequeñas aproximaciones.  El efecto de esto es visible
  * después de sumar ambas variable.  en tal situación, uno de los métodos del objeto Number,
  * toFixed puede ayudarnos.
  * 
  * Nos permite redondear el resultado a un número determinado de decimales.  Al final del
  * ejemplo, hay dos valores asociados con el tipo de número: Infinity y NaN(no es un número).
  * El primero puede generarse como resultado de operaciones artimétics que harán que se supere
  * el rango de números.
  * 
  * El sefundo valor nos informa que aunque el resultado es una determinada operación debe ser
  * un valor numérico, no es posible determinar el valor de salida correcto debido a datos de
  * entrada incorrectos.
  * 
  *    EL CONSTRUCTOR Number
  * 
  * Después de este pequeño paréntesis, volvamos al tema principal, el objeto estándar incorporado
  * Number.
  * 
  * Es un constructor que se puede utililizar implicitamente durante el autoboxing, en un
  * intento de tratar el número primitivo como un objeto.
  * 
  * También podemos usarlo para crear explícitamente un objeto usando el operador new,
  * aunque como en el caso de Boolean (y otros constructores correspondientes a primitivos) esto 
  * no se recomienda.
  * 
  * Si una llamada al constructor no está precedida por el nuevo operador, solo se usará
  * para convertir el argumento dado en un número (el valor devuelto será primitivo).
  * 
  * Para obtener una lista completa de métodos y propiedades del constructor Number, incluidas
  * descripciones y ejemplos, consulte el MDN (Mozilla Developer Network).
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
  * 
  * Al igual que en booleano, también tenemos los métodos toString y valueOf.
  * 
  * Sus operaciones son similares y sólo hay una pequeñ deiferencia: el método toString puede
  * aceptar un argumento, un número que especifica en qué formato se devolverá el valor
  * almacenado en el objeto.  Por ejemplo, el argumento 16 hará que la cadena devuelta sea una
  * representación hexadecimal (el argumento 8 es una representación octal, etc.). Si no
  * proporcionamos ningún argumento, se devuelve la representación decimal predeterminada.
  * 
  * Veamos alguno ejemplos sencillos
  */
let nrStr1 = (11).toString();
let nrStr2 = (11).toString(16);
console.log(`nrStr1 : ${typeof nrStr1} : ${nrStr1}`); // -> nrStr1 : string : 11
console.log(`nrStr2 : ${typeof nrStr2} : ${nrStr2}`); // -> nrStr1 : string : b

/** En la primera línea del código, tratamos el número 11 como un objeto, intentando llamar al
 * método toString.
 * 
 * Ponemos el número entre paréntesis: de lo contrario, JavaScript trataría el punto de la
 * notación de puntos como el comienzo de la parte fraccionaria.
 * 
 * Este es un ejemplo de autoboxing.
 * 
 * El motor JavaScript convierte un número sobre la marcha en su correspondiente tipo de objeto
 * Number, y luego llama al método toString.
 * 
 * Como no hemos proporcionado un argumento para el método llamado, se devuelve la cadena con
 * la representación predeterminada de nuestro número(decimal).
 * 
 * La segunda línea hace lo mismo, sólo que esta vez toString recibe el argumento 16, lo
 * que significa que debería devolver la representación hexadecimal de nuestro número 11,
 * esto es, b.
 * 
 * En el siguiente ejmeplo, declaramos explícitamente varios objetos usando el constructor
 * Number.
 * Reduerde:  este ejemplo es estrictamente didáctico (no debemos utilizar Number de
 * esta manera).
 */
let numberObj1 = new Number;            // -> 0
let numberObj2 = new Number(100);       // -> 100
let numberObj3 = new Number("200");     // -> 200
let numberObj4 = new Number("abcd");    // -> NaN
let numberObj5 = new Number(9e10000);   // -> Infinity

console.log(`numberObj1 : ${typeof numberObj1} : ${ numberObj1.valueOf()}`); // -> numberObj1 : object : 0

/** Preste atención a qué valores se almacenan en diferentes objetos según el argumento
 * dado al constructor.  En el ejemplo, se muestra sólo el valor del objeto numberObj1.
 * 
 * Intenta hacer lo mismo con los otros cuatro objetos.
 * 
 * EL siguiente ejempo demuestra el uso del constructor Number sin el operaor new, es decir
 * usarlo sola para convertir el argumento en un número primitivo.
 */
let nr = Number("100");
console.log(`nr : ${typeof nr} : ${ nr}`); // -> nr : number : 100
/**Intente repetir la conversión de la misma forma para los argumentos del ejemplo anterior,
 * es decir "200", "abc" y 9e10000.
 * 
 * 
 * *****  Convertir números a diferentes formatos de cadenas
 * 
 * El conjunto de métodos prototipo de Number no se limita a valueOf y toString.
 * 
 * Todavía tenemos, entre otros, los siguientes:
 *      + toExponential(fractionDigits)
 *      + toFixed(digits)
 *      + toLocaleString([locales], [options])
 * 
 * El primero de estos métodos devuelve la cadena que representan un número en 
 * forma exponencial, con un dígito antes de la coma, redondeado a la fractionDigits después
 * de la coma.  El argumento puede ser omitido.
 */
let a1 = 12345;
console.log(a1.toExponential());   // -> 1.2345e+4
console.log(a1.toExponential(1));  // -> 1.2e+4
/** el método toFixed devuelve una cadena que representa un número redondeado a digits decimales
 * 
 * El redondeo se realiza de acuerdo con la convención generalmente aceptada, es decir, de 5
 * hacia arriba o por debajo de 5 hacia abajo.
 * 
 * Recuerde, sin embargo, que los números se almacenan en un formato impredecible, lo que
 * a veces puede llevar a resultados sorprendente.
 */
let nr1 = 10.55;
console.log(nr1.toFixed(1)); // -> 10.6
console.log(nr1.toFixed(0)); // -> 11
console.log(nr1.toFixed(3)); // -> 10.550

let nr2 = 2.55;
console.log(nr2.toFixed(1)); // -> 2.5
console.log(nr2.toFixed(20)); // -> 2.54999999999999982236
console.log(((nr2 * 10).toFixed(0) / 10)); // -> 2.6

/** En el primer caso, el redondeo del número almacenado en a variable nr1 se lleva a
 *cabo como esperamos.  El resultado del segundo redondeo se debe a la representación
 imprecisa del número en la memoria.

 Un método interesante es toLocaleString.
 Similar a toString, devuelve una cadena que representa un número almacenado en un objeto Number,
 pero esta vez la cadena se formateará de acuerdo con la convención del idioma seleccionado.

 ¿Cuál es el punto de utilizar este método? Dependiendo de la región en la que nos encontremos y 
 el idioma que utilicemos, los números se presentan de diferentes formas.

 No se trata sólo de dígitos diferentes.

 Un ejemplo típico es la separación de dígitos fraccionarios: en algunas regiones se
 utiliza un punto, en otras una coma.

 En el código JavaScript usamos un punto para este propósito pero, por ejemplo, al convertir
 un número en una cadena que queremos mostrar en nuestro sitio, es posible que queramos 
 presentarlo de acuerdo con las reglas locales.

 Si no proporcionamos el argumento local, en la conversión se utilizará el idioma establecido
 en la configuración de su sistema operativo.

 Además del argumento local, puede proporcionar opciones adicionales para modificar el
 formato.
 */
 let nr3 = 123456.789;

 console.log(nr3.toLocaleString("en-GB")); // "123,456.789"
 console.log(nr3.toLocaleString("fr-FR")); // "123 456,789"
 console.log(nr3.toLocaleString("de-DE")); // "123.456,789"
 console.log(nr3.toLocaleString("ar-EG")); // "١٢٣٬٤٥٦٫٧٨٩"
 console.log(nr3.toLocaleString("es-ES", {
     style: "currency",
     currency: "EUR"
 })); // "123.456,79 €"
 
 console.log(nr3.toLocaleString()); // Depende de la configuración regional predeterminada 
                                    // del entorno

/** En el ejemplo anterior, seprueba el funcionamiento del método toLocaleString con el
 * valor 123456.789 y presentado en los siguientes formatos:  "en-GB" (inglés británico), 
 * "fr-FR" (estándar francés), "de-DE" (estándar alemán), "ar-EG" (árabe egipcio) y 
 * "es- ES" (castellano). En la última línea llamamos al método sin argumentos,
 * por lo que el formato del número mostrado dependerá de la configuración local de su 
 * sistema operativo. 
 * 
 * *** Propiedades estáticas y métodos del constructor Number
 * 
 * El constructor Number no solo está equipado con métodos prototipo, sino que también nos
 * proporciona varias propiedades y métodos estáticos.
 * 
 * Entre las propiedades más importantes encontramos MAX_VALUE, MIN_VALUE, MAX_SAFE_INTEGER y
 * MIN_SAFE_INTEGER.
 */
console.log(Number.MAX_VALUE); // -> 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // -> 5e-324
console.log(Number.MAX_SAFE_INTEGER); // -> 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -> -9007199254740991

/** La propiedad MAX_VALUE es el valor máximo que se puede almacenar utilizando el tipo de
 * número.
 * 
 * Sin embargo, deberías tratar este valor más como una curiosidad, ya que todos los valores
 * por encima MAX_SAFE_INTEGER se guardan con errores de aproximación crecientes.
 * 
 * El alcance seguro está limitado desde abajo por MIN_SAFE_INTEGER.
 * 
 * El valor MIN_VALUE es el valor fraccionario positivo más pequeño que se puede guardar con el
 * tipo de número. 
 * 
 * Los m´rtodos estátios nos permiten comprobar, entre otras cosas, si un valor es un número
 * entero, si es un número finito, si está dentro del rango seguro de números enteros, etc.
*/

let numbers = [2e100, 200000, 1.5, Infinity];
for(let i=0; index<numbers.length; index++) {
    console.log(`is ${numbers[i]} Integer: ${Number.isInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} safe Integer: ${Number.isSafeInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} finite number: ${Number.isFinite(numbers[i])}`);
}

/**En el ejemplo, hemos creado un array numbers en el que hemps colocado los valores
 * 2e100, 200000, 1.5, Infinity.
 * 
 * En el bucle for, recorremos la matriz, probando cada uno de los valores usando los métodos
 * estáticos isInteger, isSafeInteger y isFinit.  El resultado debería verse así:
 * 
 * is 2e+100 Integer: true
is 2e+100 safe Integer: false
is 2e+100 finite number: true

is 200000 Integer: true
is 200000 safe Integer: true
is 200000 finite number: true

is 1.5 Integer: false
is 1.5 safe Integer: false
is 1.5 finite number: true

is Infinity Integer: false
is Infinity safe Integer: false
is Infinity finite number: false


Estudiemos dos métodos estáticos más, parseInt y parseFloat, puede resultar útil convertir
valores numéricos a valores escritos como cadenas(strings).

¿Por qué usarlos si el constructor Number usado sin el operador new hace lo mismo?
Debido a que pueden perdonar algunos errores en el formato de cadena.

Funcionarán correctamente si al menos el fragmento inicial de la cadena de entrada
se puede interpretar como un número (el resto de la cadena se ignorará).

El constructor Number considerará el mismo caso como un error y devolverá el valor NaN.
 */ 
console.log(Number.parseFloat("123.12.12")); // -> 123.12
console.log(Number("123.12.12")); // -> NaN
console.log(Number.parseInt("1204px")); // -> 1204
console.log(Number("1204px")); // -> NaN

/**El lenguaje JavaScript no se inventó para cálculos matemáticos complejos.
 * 
 * Por supuesto, es posible realizar cualquier operación aritmética en él, 
 * y el objeto Math proporcionará muchas funciones matemáticas un poco más avanzadas.
 * 
 * Sin embargo, no es necesario complicarse la vida: en este ámbito, JavaScript da paso a
 * lenguajes como Python, que fueron creados para resolver problemas científicos.
 * 
 * Sin embargo, esto no debería preocuparnos demasiado.
 * 
 * Las tareas que se resuelven en el mundo real de JavaScript rara vez requieren el uso
 * de instrumentos matemáticos serios.
 * 
 * Nunca sentirás las limitaciones del lenguaje en este asunto, y el constructor Number lo
 * usarás con mayor frecuencia para convertir datos.
 */



/*********    STRING    
 * 
 * Finalmente hemos llegado a algo realmente práctico.
 * 
 * El constructor String, tal como estamos hablando, corresponde al primitivo string y
 * permite una cómoda manipulación de cadenas de caracteres.
 * 
 * Este objeto nos brinda un rico conjunto de métodos prototipo, de los cuales solo
 * discutiremos una parte determinada.
 * 
 * Una lista completa de métodos y propiedades del constructor String, junto con descripciones
 * y ejemplos, se pueden encontrar en la página MDN.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * 
 * ** Lo que ya sabemos sobre las strings
 * 
 * Ya hemos hablado acerca de las strings, pero refrescaremos la memoria.
 * 
 * En JavaScipt, las cadenas contienen caracteres entre comillas dobles, comillas simples o
 * comillas invertidas.
 * 
 * estos métodos pueden verse como alternativas entre sí.  El último permite el uso de 
 * marcadores de posición dentro de la cadena.
 * 
 * Las cadenas que contienen un marcador de posición se denominarán literales de plantilla.
 * El marcador de posición le permite insertar dinámicamente los valores de las variables en lugar
 * seleccionado de la cadena en tiempo de ejecución.
*/
let delay = 10;
let name1 = "Bob";
let order = 'pizza';
let info = `Hi ${name1}, you have to wait about ${delay} minutes for your ${order}`;

console.log(info); // -> Hi Bob, you have to wait about 10 minutes for your pizza

console.log(typeof name1); // -> string
console.log(typeof order); // -> string
console.log(typeof info); // -> string

/**El ejemplo muestra el uso de comillas dobles, comillas simples y comillas invertidas al
 * crear cadenas, y con literales de plantilla siendo utilizadas al declarar la 
 * variable info.
 * 
 * Una forma conveniente de declar una variable para este proposito se muestra acontinuación:
 */
let anotherInfo = "Hi " + name1 + ", you have to wait about " + delay + " minutes for your " + order;

/** Si una cadena de caracteres debe contener uno de los caracteres que se utilizan para
 * especificar la cadena (", ', `), un carárter de escape, es decir \ (barra invertida), se
 * puede utilizar.
 * 
 * Esto hará que el carácter que le sigue se trate como parte de la cadena, en lugar de 
 * como un carácter de control(normalmente interpretado como el final de la cadena, por
 * ejemplo).
 * 
 * También puedes utilizar un carácter alternativo.  Por ejemplo, si desea que aparezca una
 * comilla doble dentro de una cadena, puede utilizar una comilla simple para especificar la
 * cadena.
 */
let warn1 = "Confirm ticket reservation for \"Alien 10\" movie.";
let warn2 = 'Confirm ticket reservation for "Alien 10" movie.';
let warn3 = "Confirm ticket reservation for 'Alien 10' movie.";
let warn4 = `warning: "Confirm ticket reservation for 'Alien 10' movie."`;
/**
 ****El constructor String
 * 
 * Volvamos al constructor String.
 * 
 * Similar a Boolean y Number, se utiliza, entre otras cosas, durante el autoboxing (es dedir,
 * cuando se intenta tratar la cadena primitiva como un objeto).
 * 
 * También podemos usarlo explícitamente para crear un nuevo objeto (nuevamente, esto no se
 * recomienda, ¿resuerdas por qué?) y para convertir otros tipos primitivos a string.
 * 
 * Comenzaremos analizando el constructor con la única propiedad de prototipo que tiene.
 * 
 * Esta es la propiedad length y, como puedes adivinar, nos informa sobre la cantidad de
 * caracteres de la cadena almacenados en el objeto.
 */
 let name = "Bob";
 console.log(name.length); // -> 3
 console.log("Alice".length ); // -> 5
 console.log("".length ); // -> 0
 /**El concepto de esta propiedad es tan simple que apenas necesita mayor explicación.
  * 
  * Sin embargo, hay dos cosas a tener en cuenta.  En primer lugar, en muchcos lenguajes
  * de programación, la longitud de una cadena se obtiene mediante una función, no una
  * propiedad, por lo que las personas que ya han aprendido un poco de programación a menudo 
  * se equivocan aquí.
  * El segundo problema no se refiere estrictamente a la propiedad length, sino sobre cierto
  * error lógico.
  * 
  * Por ejemplo a menudo se prueba si la longitud de una cadena es diferente de cero para
  * mostrarla.
  * 
  * Sin embargo es recomendable comprobar primero si la variable que estamos probando contiene
  * un string o cualquier otro valor antes de intentar hacer referencia al campo length.
  * 
  * Esto es lo que hacemos en el siguiente ejemplo utilizando el operador lógico AND(&&).
  */
 let strings = [undefined, "", "ab", "cd ef", 4, null];

for(let i=0; i< strings.length; i++) {
    strings[i] && strings[i].length && console.log(strings[i]);
}
/**Hemos colocado seis elementos en la matriz de cadenas, de los cuales sólo tres son
 * cadenas,y de esos tres, sólo dos son más largos que 0. Tan solo 'ab' y 'cd ef' se mostrará.
 * 
 * El comando console.log(strings[i]) se ejecutará bajo dos condiciones:
 *    + El elemento específico en la matriz no es igual a nulo o indefinido(comando strings[i])
 *    + El elemento tiene una propiedad de longuitud, que es diferente de cero(comando 
 *      string[i].length).
 * 
 * Por cierto, en el ejemplo también usamos la propiedad de longitud de matriz de cadenas.
 * 
 * Entonces vemos cierta repetición en los esquemas de nombres en JavaScript, lo que debería
 * facilitarnos recordarlos.
 * 
 * 
 ****     String como una matriz de caracteres  
 *       
 * Mientras estemos en las matrices, la cadena se puede tratar como una matriz de caracteres.
 * 
 * Dado que es un matriz, en teoría deberíamos poder hacer referencia a caracteres
 * individuales mediante un índice (posición) y corchetes.
 * 
 * Y de hecho podemos.
 * 
 * El mismo efecto se puede lograr con el método prototipo chartAt.
 * Observa el sguiente código
 */
 let title = "Alien 10";
 console.log(title[0]); // -> A
 console.log(title.charAt(0)); // -> A
 /**Usando corchetes, hemos indicado la primera letra (índice 0) de la cadena almacenada
  * en la variable de título.
  * 
  * Repetimos lo mismo usando el método charAt
  * 
  * *****  Conversión de casos
  * 
  * Dos métodos de uso frecuente son toLowerCase y toUpperCase.
  * 
  * Es fácil adivinar para qué los utilizamos.
  * 
  * En este ejemplo lo usaremos para observar un determinado fenómeno.
  * 
  * Observa el ejemplo:
  */

 // Guardamos una cadena en la variable title
let title1 = "Hello, World!";

// Llamamos al método toUpperCase en la cadena
let upperTitle = title1.toUpperCase();

// Imprimimos la cadena convertida en mayúsculas
console.log(upperTitle); // "HELLO, WORLD!"

// Imprimimos el contenido original de la variable title
console.log(title1); // "Hello, World!"

// Creamos un objeto de cadena usando el constructor String
let greeting = new String("GOOD MORNING!");

// Llamamos al método toLowerCase en el objeto de cadena
let lowerGreeting = greeting.toLowerCase();

// Imprimimos la cadena convertida en minúsculas
console.log(lowerGreeting); // "good morning!"

// Imprimimos el contenido original del objeto greeting, el cual no cambia.
console.log(greeting); // "GOOD MORNING!"

/**NOTA:************************************************************************************
 *   Los métodos prototipo de la String El constructor no modifica la cadena original 
 *   pero devuelve una copia modificada de la misma. Lo mismo ocurre con muchos de los
 *   métodos del constructor Array.
 *   Si no está 100% seguro de si un método modifica el contenido de un objeto o devuelve una
 *   copia modificada, consulte la documentación. 
 ********************************************************************************************/

/**      Dividiendo la string           
 * 
 * Un método que puede resultar útil es split, mediante el cual la cadena se puede dividir
 * en fragmentos (subcadenas), que se devolverán como una matriz.
 * 
 * Como argumento, damos lacadena que se va a tratar como separador.
 * 
 * Este método no afecta la cadena original.
 * 
 * Eche un vistazo al ejemplo en el editor.
 * 
 * En el ejemplo, dividimos la dirección IP, almacenada en forma de cadena, en cuatro partes.
 * 
 * Al llamar al método split, pasamos una cadena que contiene el punto como argumento,
 * indicando así como se separan estas partes entre sí.
 * 
 * Las piezas se almacenaran en ipParts.
 */
 let ipAddressStr = "127.0.0.1"
let ipParts = ipAddressStr.split("."); // -> ["127", "0", "0", "1"]
console.log(ipParts[0]); // -> 127


/*****     Reemplazo de subcadenas  
 * Veamos el siguiente método útil, replaceAll, que le permite reemplazar una cadena de
 * caracteres seleccionada por otra que le hayamos proporcionado.
 * 
 * Nuevamente, no modificamos la cadena original, sino que la tratamos como una fuente.
 * 
 * Usando el método de división y el nueo método replaceAll, demostraremos el encadenamiento
 * de métodos.
  */
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue," +
            "suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque\
            aliquet tellus. Phasellus pharetra nulla ac diam.";
let words1 = text.toLowerCase().replaceAll('.','').replaceAll(',','').split(' ');
console.log(words1.length); // -> 30
/**En el ejemplo, ponemos algunas frase de LoremIpsum en la variable de texto.
 * 
 * Llamando a toLowerCase, cambiamos todas las letras mayúsculas a minúsculas.  Sin embargo, el
 * resultado nose almacena en ninguna variable ni se muestra en pantalla.
 * 
 * Despues de llamar a toLowerCase, aparece un punto inmediatamente y el siguiente método
 * se llama replaceAll.
 * 
 * Esto significa que el resultado obtenido de toLowerCase será procesado por replaceAll y así
 * sucesivamente.
 * 
 * Por lo tanto, podríamos presentar esta línea de código de la siguiente forma
 */
let aS = text.toLowerCase();
let bS = aS.replaceAll('.','');
let cS = bS.replaceAll(',','');
let wordS = cS.split(' ');
/**Probablemente estarás de acuerdo en que dicha notación es innecesariamente extensa y poco
 * elegante.  Debes tener en cuenta que el texto variable y los resultados intermedios devueltos
 * por toLowerCase o replaceAll son strings.
 * 
 * Tratarlos como objetos (es decir, la capacidad de llamarlos métodos constructors String)
 * es posible gracias al autoboxing.
 * 
 * El encadenamiento de métodos (o cascada) consiste en llamar a un método tras otro en una
 * línea de código.  Los métodos se llaman en orden de izquierda a derecha.  Cada método
 * posterior se ejecuta sobre el resultado del método anterior. Los métodos no tienen que ser
 * de un solo tipo de objeto.
 * 
 * Sin embargo, volvamos a los métodos replaceAll y split.
 * 
 * La primera llamada de replaceAll busca una cadena que consta de un solo punto y la 
 * convierte en una cadena vacía, es decir, simplemente eliminamos todos los puntos de la
 * cadena de entrada.
 * 
 * La segunda llamada de replaceAll elimina las comas de la misma manera.
 * 
 * El resultado es tratado por el método split.  Le pasamos una cadena que consta de un
 * espacio como argumento.
 * 
 * Este argumento se interpreta como un separador.  La cadena resultante de la última
 * replaceAll se dividirá en secciones separadas por espacios.
 * 
 * El método split devolverá una matriz que incluirá estas palabras individuales.  Al final,
 * verificamos la longitud de la matriz recibida.
 * 
 * Resulta que es 30 - este es el número de palabras que contiene el fragmento "Lorem ipsum".
 * 
 * Un método similar, replace, difiere de replaceAll en el sentido que no cambia todo,
 * sino sólo la primera coincidencia.
 * 
 * *****    Buscando subcadenas
 * 
 * Algunos de los métodos más útiles del constructor String son includes, indexOf y lastIndexOf.
 * 
 * Le permiten comprobar si hay una detertminada subcadena dentro de la cadena.
 * 
 * El método de includes solo devuelve información sobre si se ha encontrado dicha subcadena
 * (dada como argumento de la llamda al método).
 * 
 * El método indexOf, devolverá la posición de la primera aparición de la subcadena seleccionada
 * (puede ocurrir muchas veces).
 * 
 * Como puedes adivinar, lastIndexOf devolverá la posición de la última subcadena coincidente.
 * 
 * Recuerda que tratamos una cadena como una matriz, por lo que el primer carácter tiene
 * la posición 0 (La indexación de matrices comienza con 0).
 * 
 * Los métodos indexOf y lastIndexOf devolverán un valor de -1 si no encuentran la subcadena
 * especificada.
 * 
 * Eche un vistazo al ejemplo en el editos.
 * 
 * Este ejemplo no debería requerir ninguna explicación adicional.
 */
let textS = "One, two, three, one, two, three.";
console.log(textS.includes("two")); // -> true
console.log(textS.includes("four")); // -> false
console.log(textS.indexOf("two")); // -> 5
console.log(textS.indexOf("four")); // -> -1
console.log(textS.lastIndexOf("two")); // -> 22

/** ****** Copiar subcadena
 * 
 * Utilizando los métodos substr, substring y slice, podemos copiar la parte seleccionada de la
 * cadena.
 * 
 * El funcionamiento de estos métodos es muy similar y se diferencian principlamente en la forma
 * en que interpretan los argumentos que se les proporcionan.
 */

/**En el caso del método substr, el primer argumento es la posición del comienzo de la
 * subcadena que se va a copiar.
 * 
 * El segundo argumento muestra la longitud del fragmento a copiar.
 * 
 * Omitir el segundo argumento significa que se copiará el fragmento desde la posición
 * dada hasta la final de la cadena.
 * 
 * El primer, argumento o posición, también puede ser un número negativo. Y se interpreta
 * como la posición contada desde el final de la cadena.
 */
let textSb = "One, two, three, one, two, three.";

console.log(textSb.substr(0,8)); // -> One, two
console.log(textSb.substr(10)); // -> three, one, two, three.
console.log(textSb.substr(-6)); // -> three.
console.log(textSb.substr(-6, 2)); // -> th

/**El método substring también toma la posición inicial de la cadena como primer
 * argumento.
 * 
 * Si omitimos el segundo argumento, el método funcionará de la misma manera que la
 * subcadena, pero si lo usamos, se interpretará no como la longitud, sino como la
 * posición del último carácter de la subcadena copiada en la cadena original. 
 */
console.log(text.substring(5, 8)); // -> two , 0 1 2 3 4 5 6 7 8, el index último no es tomado
console.log(text.substring(5)); // -> two, three, one, two, three.
console.log(text.substring(-11, 8)); // -> One, two , substring toma -11 (los negativos) como 0.

/** El tercero de estos métodos, slice, opera sobre posiciones, al igual que substring.
 * 
 * EL primer argumento es la posición del comienzo de la subcadena y el segundo es la 
 * posición del final.
 * 
 * Omitir el segundo argumneto significa que la subcadena se copia al final de la cadena
 * original.  Tanto el primer como el segundo argumento pueden ser negativos.
 * 
 * Estos valores, como en substr, se interpretan como posiciones contadas desde el final
 * de la cadena original
 */
console.log(text.slice(0,3)); // -> One
console.log(text.slice(5)); // -> two, three, one, two, three.
console.log(text.slice(-11)); // -> two, three, los negativos se cuentan desde el final.
console.log(text.slice(-11, -8)); // -> two, -11 contado desde el final, -8 contado desde el
                                  // final, la posición -8 es tomada en cuenta.



/***************  Padding    
 * 
 * Entre los métodos del constructor String, hay muchos que no son especialmente sofisticados,
 * pero pueden hacerte la vida más fácil.
 * 
 * Estos incluyen los métodos padEnd y padStart
 * 
 * Permiten expandir la cadena a un tamaño dado, completándolo desde el final o desde el
 * principio repitiendo la string dada como argumento.
 * 
 * El primer argumento es la longitud máxima de la cadena de salida, el segundo argumento es 
 * el relleno.
 * 
 * Si omitimos el segundo argumento, los espacios se utilizarán para completarse por defecto.
 * 
 * Veamos un ejemplo:
*/
let numbersPad = [100, 5, 66];
for(let i=0; i<numbersPad.length; i++) {
console.log(String(numbersPad[i]).padStart(10, '0'));// 10 longitud máxima. segundo el relleno
console.log(String(numbersPad[i]).padStart(10, 'abc'));
console.log(String(numbersPad[i]).padStart(10));
}
/** Se mostrará en consola
 * 0000000100
 * abcabca100
 * 100
 * 0000000005
 * abcabcabc5
 * 5
 * 0000000066
 * abcabcab66
 * 66
 */

/**De manera similar, usaríamos el método padEnd */

//let numbersPad = [100, 5, 66];
for(let i = 0; i < numbers.length; i++) {                //Primer iteración
    console.log(String(numbersPad[i]).padEnd(10, '0'));  //1000000000
    console.log(String(numbersPad[i]).padEnd(10, 'abc'));//100abcabca
    console.log(String(numbersPad[i]).padEnd(10));       //100       //hasta aquí

}

/****************** Trimming                       
 * 
 * Métodos igualmente simples e igualmente útiles son trim, trimLeft(alias trimStart) y
 * trimRight (alias trimEnd).
 * 
 * Eliminan caracteres de espacio en blanco(por ejemplo, tabulaciones, espacios, caracteres
 * de nueva línea).
 * 
 * Son particularmente útiles en los casos en los que utilizamos datos enviados por el 
 * usuarion en formularios en nuestra aplicación web.
 * 
 * Un ejemplo debería ser suficiente para entender su funcionamiento.
*/
let city = " Bergen  ";
let street = "\t Dokkeboder\n";

console.log(city.trimLeft().length); // -> 8 -> "Bergen  "
console.log(city.trimRight().length); // -> 7 -> " Bergen"
console.log(city.trim().length); // -> 6 -> "Berge"
console.log(street.trim().length); // -> 10 -> "Dokkeboder"

/********** Comparando cadenas
 * 
 * Finalmente, nos quedamos con la comparación de cadenas.
 * 
 * La comparación se puede realizar con los operadores de comparación que conoce, como
 * <, ==, etc.  El resultado de la comparación será true o false.
 * 
 La comparación, por supuesto, se realiza alfabéticamente, es decir, según el orden
 de las letras del alfabeto.  Si las primeras letras de las cadenas que se comparan son 
 iguales, se compararan las siguientes
 */
 console.log("a" < "b"); // -> true
 console.log("abc" < "acd"); // -> true
 console.log("b" < "acd"); // -> false
/**los dígitos se tratan según su orden natural.  Recuerde, sin embargo, que en este caso
 * no comparamos números sino cadenas formadas por caracteres, que son dígitos.
 */
console.log("4" < "5"); // -> true
console.log("2" < "12"); // -> false
console.log("34" < "332"); // -> true

/**Qué sucede cuando se utilizan letras mayúsculas? También se comparan según su posición
 * en el alfabeto, tratándose todas las mayúsculas antes que las minúsculas
 */
console.log("brettesnes" < "Sundsfjord"); // -> false
console.log("Brettesnes" < "Sundsfjord"); // -> true

/**Hasta ahora todo ha funcionado de forma sencilla, clara y agradable.  Sin embargo,
 * generemos un pequeño problema
 */
console.log("Ørnes" < "Sundsfjord"); // -> false

/**Algo debe haber salido mal.
 * Puede que no conozcamos el alfabeto noruego utilizado en el ejemplo, pero intuitivamente
 * esperamos que la letra Ø este antes de S.
 * 
 * Y así es.
 * 
 * Entonces, ¿De dónde viene este resultado?
 * 
 * JavaScript no se adapta bien a los caracteres especiales de los alfabetos locales cuando
 * se comparan cadenas de forma sencilla.
 * 
 * Los trata a todos como si estuvieran agregados al final del alfabeto.  Lo que nos ayuda
 * es le método localCompare.
 * 
 * En la versión básica, puede necesitar dos argumentos.
 * 
 * El primer argumento es una cadena para comparar, mientras que el segundo, opcional,
 * especifica el idioma (o el alfabeto de facto que se utilizará durante la comparación).
 * 
 * Si omitimos el segundo argumento, se utilizará nuestra ubicación predeterminada escrita
 * en la configuración del sistema operativo (y la mayoría de las veces usamos este
 * método de esta manera).
 */
console.log("Ørnes".localeCompare("Sundsfjord", "nn")); // -> -1
console.log("Ørnes".localeCompare("Brettesnes", "nn")); // -> 1
/** En el ejemplo, el segundo argumento es ' nn', 
 * que significa noruego (' en' Inglés, ' de' Alemán, ' sv' sueco, ' pl' Polaco, etc.). 
 *  
 * Primero comparamos " Ørnes" con " Sundsfjord". El resultado -1 significa que la primera 
 * cadena va antes de la segunda (alfabéticamente).
 *
 * La comparación de " Ørnes" con " Brettesnes"da un resultado de 1, 
 * lo que significa que esta vez la primera cadena viene después de la segunda. 
 * 
 * El resultado sería 0 si comparamos dos cadenas idénticas.

 * Si has mirado la página MDN del String en la descripción del constructor, 
 * seguramente habrás visto que solo analizamos un número limitado de métodos.

 * Sin embargo, este es un conjunto suficiente para manejar eficientemente las cuerdas 
 * en la práctica diaria.

 * Volveremos al constructor String cuando analicemos las expresiones regulares ( RegExp). 
 */


/************   El tipo Date       
 * 
 * El constructor Date, a pesar de su nombre, también sirve para almacenar el tiempo, no
 * sólo las fechas.
 * 
 * A diferencia de Boolean, Number y String discutidos anteriormente, no representa ningún
 * tipo primitivo.
 * 
 * Sin embargo, puede considerarse uno de los tipos simples.
 * 
 * ¿Por qué? Porque el valor colocado en él es un número simple.
 * 
 * este número es una marca de tiempo, que es el número de milisegundos que han pasado
 * desde un punto fijo en el tiempo.
 * 
 * En JavaScript, el 1 de enero de 1970 00:00:00:00 UTC se utiliza como punto cero ,
 * como en muchos sistemas informáticos. 
 * 
 * Tenga en cuenta que esto es UTC (hora universal coordinada), 
 * en referencia a la zona horaria GMT+0. 
 * 
 * Esto es importante porque podemos estar en diferentes zonas horarias y la misma marca de
 * tiempo representará una hora local diferente.
 * 
 * Usar zonas horarias y la hora local puede resultar un poco incómodo al principio, así que
 * intentemos analizar este tema más de cerca.
*/

/**Zonas horarias y otros trucos
 * 
 * Ya hemos dicho que el constructor Date no representa ningun primitivo, por lo que no 
 * usaremos autoboxing en este caso.
 * 
 * Debemos crear explicitamente el objeto Date usando el operador new.
 * 
 * Al constructor se el pueden dar argumentos en diferentes formatos.  El método más sencillo
 * es pasar la marca de tiempo, que es el número de milisegundos desde el punto cero.
 * 
 * Este método no es demasiado práctico, ya que es difícil imaginar que convertiremos el
 * tiempo en milisegundo cada vez.
 * 
 * Sin embargo, es ideal para explicar el concepto básico de Date.
 * 
 * En aras de simplicidad, imaginemos que estamos en la zona horaria UTC +0 (o GMT +0), por
 * ejemplo, Islandia.  Estamos cómodamente sentados en una cafetería de ReiKiavik, pedimos
 * tarta y café fuerte y nos ponemos manos a la obra y utilizamos el constructor Date.
 */
let date1 = new Date(0);
let date2 = new Date(1000*60*60*10);

console.log(date1.toUTCString()); // -> Thu, 01 Jan 1970 00:00:00 GMT
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT
/**Hemos proporcionado el objeto date1 con una marca de tiempo 0, que será el punto cero.
 * 
 * Hemos insertado un valor 3600000000 en date2, que es elnúmero de milisegundo correspondientes
 * a 10 horas.
 * 
 * Usando el método del prototipo toUTCString, recuperamos la fecha y la hora como una cadena
 * de caracteres.
 * 
 * Este método devuelve la hora UTC+0, como puede ver en la salida de la consola.
 */

/**Hagamos otro experimento: observe el código en el editor */
console.log(date2.getTimezoneOffset()); // -> 0
console.log(date2.toLocaleString()); // -> 01/01/1970, 10:00:00

console.log(date2.toISOString()); // -> 1970-01-01T10:00:00.000Z
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT
/**En el primer paso utilizamos el método getTimezoneOffset, que devuelve la diferencia
 * horaria (en minutos) entre la zona UTC+0 y la zona en la que nos enconstramos
 * actualmente (esta información se toma de la configuración de nuestro sistema operativo).
 * 
 * Esta diferencia se calcula para una fecha concreta (en este caso el 1 de enero de 1970)
 * por varias razones, por ejemplo porque en algunos lugares del mundo se utiliza diferente hora
 * en invierno y en verano.
 * 
 * Reykjavík está en la zona UTC+0, por lo que la diferencia es 0.  Entonces llamamos
 * al método toLocaleString.
 * 
 * Como puedes adivina, devuelve una cadena con la hora que está almacenada en dat2:
 *      + La hora está formateada según el idioma establecido como local en nuestro
 *        sistema operativo(en el ejemplo es en inglés.  el formato alemán, por ejemplo,
 *        quedaría asi: 01.01.1970, 10:10:00)
 *      + Esta es la hora local (ajustada a nuestra zona horaria).
 * 
 * En los siguientes pasos, tomamos el mismo tiempo de date2 en formato ISO y universal,
 * utilizando los métodos toISOString y toUTCString respectivamente.
 * 
 * Ambos métodos siempre devuelven la hora de la zona UTC+0.
 * 
 * Como estamos en la zona UTC+0, la hora devuelta por los tres métodos es idéntica.
 */

/**Teletransportemonos ahora a Berlín
 * 
 * Mientras estabamos en una zona horaria diferente, hagamos el mismo experimeto nuevamente.
 * 
 * Mira el siguiente código
 */
console.log(date2.getTimezoneOffset()); // -> -60
console.log(date2.toLocaleString()); // -> 01/01/1970, 11:00:00

console.log(date2.toISOString()); // -> 1970-01-01T10:00:00.000Z
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

/**En primer lugar, gracias al método getTimezoneOffset, encontramos que para la fecha
 * del 1 de enero de 1970, la diferencia entre la zona UTC+0 y la zona horaria donde
 * se encuentra Berlín es -60 minutos.
 * 
 * Por supuesto, esto también se puede ver en la cadena devuelta por thisLocaleString, en 
 * lugar de las 10 en punto, tenemos las 11 en punto.
 * 
 * Los métodos toISOString y toUTCString, como siempre, devuelven la hora UTC+0, que son
 * las 10 en punto.
 * 
 * Entonces, ¿cuál es el efecto de este experimento en su zona horaria?
 */

/**Operando con milisegundos al crearun Date, el objeto normalmente no es práctico, por
 * lo que más a menudo la fecha se proporciona como una cadena o se divide en valores
 * únicos como año, mes, etc.
 * 
 * La hora así proporcionada al constructor se trata como local de forma predetermiada,
 * a menos que indiquemos explícitamente lo contrario.
 * 
 * Veamos un ejemplo en el editos donde creamos el objeto Date pasando la hora en el formato de
 * cadena ISO 8601.
 */
date3 = new Date("2020-02-02T20:20:00.000");
date4 = new Date("2020-02-02T20:20:00.000Z");

console.log(date3.toLocaleString()); // -> 02/02/2020, 20:20:00
console.log(date3.toISOString()); // -> 2020-02-02T19:20:00.000Z
console.log(date3.toUTCString()); // -> Sun, 02 Feb 2020 19:20:00 GMT

console.log(date4.toLocaleString()); // -> 02/02/2020, 21:20:00
console.log(date4.toISOString()); // -> 2020-02-02T20:20:00.000Z
console.log(date4.toUTCString()); // -> Sun, 02 Feb 2020 20:20:00 GMT

console.log(date3.getTime()); // -> 1580671200000
console.log(date4.getTime()); // -> 1580674800000
console.log(date4.getTime() - date3.getTime()); // -> 3600000

/**¿Ves la diferencia en las cadenas proporcionadas como argumentos para los
 * constructores al crear los objetos date3 y date4?
 * 
 * La letra Z, añadida al final, según el formatoISO, indica que es UTC+0
 * 
 * Si no es así, es la hora local. Y como todavía no hemos terminado nuestro próximo
 * café en Berlín, todavía estamos en la zona horaria UTC+1 (o más precisamente, estamos
 * en la zona horaria que era UTC+1 el 2 de febrero de 2020).
 * 
 * Usando el método getTime, podemos tomar el tiempo de los objetos date3 y date4
 * expresados en milisegundos desde el punto cero, es decir, la marca de tiempo.
 * 
 * Podemos ver una diferencia de 3600000 milisegundos, que es una hora.
 * 
 * No te preocupes si jugar con las zonas horarias te parece un poco abrumador.
 * 
 * Sólo necesita un poco de práctica.  Como consuelo, debes saber que es raro que
 * JavaScript mezcle la hora universal (UTC+0) y la hora local en la práctica.
 * 
 * Normalmente en el programa operamos con uno u otro.
 */

/*********** Current time  (hora actual)         
 * 
 * Como hemos visto, el constructor Date se utiliza para crear objetos para almacenar
 * el tiempo.
 * 
 * En teoría, también se puede llamar sin el nuevo operador, que luego devolverá
 * la hora en forma de cadena (la hora dada en el argumento).
 * 
 * Sin embargo, normalmente se desaconseja dicho uso del constructor debido a serias
 * diferencias en su funcionamiento en diferentes navegadores.
 * 
 * Así que siempre usa Date para crear un objeto (con el operador new).  Echemos un
 * vistazo a qué argumentos puede aceptar nuestro constructor.
  */
let nowObj = new Date();
console.log(nowObj.toLocaleString());
/**En primer lugar, cuando llamamos al consructor Date, podemos omitir los argumentos
 * por completo.
 * 
 * En ese caso, Date considera que nos referimos a la hora actual.
 * 
 * También podemos obtener la hora actua utilizando 
 * el único método estático práctico dek constructor Date, es decir now.
 * 
 * Devuelve la marca de tiempo del momento en que se llama al método, que es simplemente
 * la hora actual en forma de número de milisegundos desde el punto cero. 
 */
let now = Date.now(); // timestamp
let nowObj2 = new Date(now);

console.log(`now : ${typeof now} : ${now}`);
console.log(`now : ${typeof nowObj2} : ${nowObj2}`);

/**Podemos pasar un número al constructor, que será interpretado como una marca de 
 * tiempo (lo hicimos en ejemplos anteriores).
 * 
 * En este ejemplo, obtenemos la marca de tiempo actual usando Date.now y lo utilizamos
 * para llamar al contructor.
 * 
 * Si el número proporcionado como argumento es negativo, se interpretará como el número de
 * milisegundos que tenemos que retroceder antes del punto cero(es decir, antes de 1970)
 */

/**     Especificaciones de tiempo con componentes individuales  *****
 * 
 * El constructor también puede aceptar el tiempo especificado en forma de varios
 * números, que representan sucesivamente el año, el mes, el día, la hora, los minutos,
 * los segundos y los milisegundos.
 * 
 * Debemos proporcionar al menos el año y el mes, mientras que toos los demás componentes
 * faltantes se establecerán en los valores más bajos posibles de forma predeterminada
 * (por ejemplo, del día 1).
 * 
 * Veamos nuestro ejemplo:
 */
let date11 = new Date(2020, 6);
let date12 = new Date(2020, 6, 8);
let date13 = new Date(2020, 6, 8, 10);
let date14 = new Date(2020, 6, 8, 10, 20, 45);

console.log(date11.toLocaleString()); // -> 01/07/2020, 00:00:00
console.log(date12.toLocaleString()); // -> 08/07/2020, 00:00:00
console.log(date13.toLocaleString()); // -> 08/07/2020, 10:00:00
console.log(date14.toLocaleString()); // -> 08/07/2020, 10:20:45
/**Esta es una forma cómoda e inequívoca de especificar la fecha, ya que sólo es
 * necesario recordar algunos detalles:
 *      
 *      + aunque el año se puede dar en forma abreviada(dos últimos dígitos), esta
 *        notación es ambigua y no se recomienda: utilice la notaci´pn del año
 *        completo (cuatro dígitos);
 *      + los meses se cuentan desde 0 (ej. el valor de 2 corresponde a marzo);
 *      + la hora especificada de esta manera siempre se interpreta como local
 *        (para la zona horaria en la que nos encontramos).
 */

/** *****Especificaciones de tiempo con date string (cadena de fecha) ******
 * 
 * La forma más intuitiva de pasar el tiempo al constructor es la que utilizamos a diario:
 * la fecha se escribe en forma de una secuencia de caracteres.
 * 
 * Desafortunadamente, esta es también la forma más problemática.
 * 
 * ¿Por qué? Porque hay muchos formatos en los que se puede presentar la fecha y la
 * hora, y JavaScript intenta interpretarlos todos a toda costa.
 * 
 * Además, JavaScript completa parte de la información que falta en este formulario.
 * 
 * Parece bastante agradable y útil, pero puede llevar a una situación en la que con
 * una fecha mal formateada (por ejemplo, olvidamos dar el mes) no habrá un error
 * y JavaDcript intentará interpretarlo a su manera.
 * 
 * Mira el siguiente ejemplo:
*/
let date21 = new Date("2020-07-08");
let date22 = new Date("2020-07-08T10:20:00");
let date23 = new Date("2020-07-08T10:20:00Z");
/**En el ejemplo utilizamos el formato ISO 8601 y, en nuestra opinión, ésta es la única
 * forma inequívoca de indicar la hora en forma de cadena.
 * 
 * El formato AAAA-MM-DDTHH:mm:ss:ss es sencillo y legible (año, mes, día, hora, minutos,
 * segundos, milisegundos).  La hora proporcionada en este formato es siempre la hora local,
 * a emno que aparezca la letra Z al final de la cadena.  Entonces es UTC+0.
 */

/**Los siguientes son las llamadas del constructor Date, que toma cadena en diferentes
 * formatos como argumentos (tenga en cuenta que en algunos casos se proporciona 
 * información incompleta).
 * 
 * Observe el ejemplo:
 */
let date31 = new Date("Mon Mar 02 2020 10:00:00");
let date32 = new Date("Mon March 2 2020 10:00");
let date33 = new Date("Mar 02 2020 10:00:00");
let date34 = new Date("2 March 2020, 10:");

let date35 = new Date("3.2.2020");
let date36 = Date("03/02-2020, 10:00");
let date37 = new Date("2020, 10:00");
let date38 = new Date("2020 march-02, 10:00");

let date39 = new Date("3.2.2020 GMT+0400");
let date310 = new Date("Mon Mar 02 2020 10:00:00 UTC-4");
/**La hora en los ejemplos es seimpre local, a emnos que se indique claramente que se
 * refiere a una zona horaria diferente usando cadenas GMT o UTC, como en date39 y dat310)
 * 
 * Analice  el ejemplo anterior y verifique las fechas que recibe usando los métodos
 * toLocalString y toISOString.
 * 
 * La flexibilidad en la acción suele ser algo bueno, pero no necesariamente para la
 * programación, donde la claridad es importante.
 * 
 * Un enfoque tan flexible para los formatos de fecha escritos en forma de cadenas no es,
 * en nuestra opinión, la mejor idea.
 * 
 * Intente ceñirse a un formato, como ISO. Si es necesario, cambie el formato para
 * presentar la fecha, por ejemplo, a local. 
 */

/****** Uso práctico de una marca de tiempo *****
 * 
 * El uso frecuente del método Date es presentado en un ejemplo, getTime, devuelve
 * una cantidad de milisegundos esnte el punto cero y el tiempo almacenado en el objeto.
 * 
 * El mismo valor se puede encontrar usando el método valueOf que aprendiste cuando vimos
 * los constructores anteriores.
 * 
 * En el ejemplo, usaremos el método getTime para comprobar cuántos milisegundos tiene
 * un día:
 */
let date51 = new Date(2020, 6, 8, 10, 20, 0);
let date52 = new Date(2020, 6, 9, 10, 20, 0);

console.log(date52.getTime() - date51.getTime()); // -> 86400000 -> 1000 x 60 x 60 x 24
/** Una forma más práctica de utilizar el método getTime puede ser medir el tiempo que
 * lleva ejecutar un determinado fragmento de código.
 * 
 * Construyamos un cronómetro simple, midiendo los tiempos de inicio y fin y comprobando
 * la diferencia entre ellos.
 */
let startTime = Date.now();
for(i=0; i<10000000; i++){}
let endTime = Date.now();
console.log(endTime - startTime); 
/**Esta vez ni siquiera creamos objetos Date.
 * 
 * En cambio, para recuperar la marca de tiempo actual, utilizamos el 
 * método estático now.
 * 
 * En el ejemplo, medimos cuántos milisegundos se necesitarán para realizar 10 millones de
 * iteraciones vacías en el bucle for
 */

/*****  Operando en componentes individuales de fecha y hora 
 * 
 * El constructor Date tiene un gran conjunto de métodos prototipo para operar
 * en componentes indivicuales de tiempo almacenados en un objeto en particular.
 * 
 * Por ejemplo, usaremos uno de los siguientes métodos para obtener y cambiar el año:
 *      + getFullYear - obtener un número que identifica el año (hora local)
 *      + getUTCFullYear - obtener un número que identifica el año (hora UTC +0)
 *      + setFullYear - establecer el valor del nuevo año (hora local)
 *      + setUTCFullYear - establecer el valor del nuevo año (hora UTC+0)
 * 
 * Cada uno de los componentes de fecha contendrá estos cuatro métodos (dos get y dos set,
 * para hora local y UTC).
 * 
 * A continuación, solo mostraremos los métodos para los componentes de la hora local.
 * 
 * Puedes adivinar fácilmente los variantes restantes por analogía con el getFullYear
 * mostrado anteriormente:
 * 
 *      + año: getFullYear,
 *      + mes: getMonth (recuerda que los meses se cuentan desde 0 en JavaScript)
 *      + día del mes: getDate,
 *      + dia de la semana: getDay (los días de la semana se cuentan desde 0, el primer
 *                          día es domingo)
 *      + hora: getHours
 *      + minutos: getMinutes
 *      + artículos de segunda clase: getSeconds.
 *      + milisegundos: getMilliseconds.
 * 
 * El ejemplo  demuestra el uso de varios métodos seleccionados que operan
 * en componentes particulares del tiempo.
 * Son tan simples e intuitivos que apenas es necesario comentarlos con más detalle
 */
let date = new Date("2020-07-08T10:20:00");
console.log(date.getMonth()); // -> 6 
console.log(date.getDay()); // -> 3
console.log(date.getDate()); // 8
console.log(date.getHours()); // -> 10
date.setHours(12);
console.log(date.getHours()); // -> 12

/**Aparte de los métodos toISOString, toUTCString, toLocaleString que se presentaron,
 * hay otros dos métodos útiles para convertir el tiempo almacenado en un objeto en una cadena,
 * toLocaleDateString y toLocaleTimeString.
 * 
 * Nos permiten recuperar una cadena que representa solo la fecha local o solo la hora
 * local.
 * 
 * Más información sobre el constructor Date y sus métodos se pueden encontrar en el
 * sitio web MDN
 * 
 *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */