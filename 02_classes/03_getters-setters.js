/********************************   GETTERS  AND SETTERS ********************************** 
 *  TEMAS:
 *       -- Getters
 *       -- Setters
 * 
 * Anteriormente hablamos sobre los getters y setters.
 * 
 * Recordemos para qué los usamos: un tipo especial de método que utilizamos para 
 * get(captar) y set(definir)   propiedades de objetos.
 * 
 * ¿Qué tenían de especial?
 * 
 * La definición misma dónde usamos las palabras clave get y set, pero sobre todo, la forma
 * en que las usamos.
 * 
 * No los llamamos como métodos regulares, sino que usamos sus nombre como propiedades
 * (por ejemplo, para escribir algo en el setter, le ponemos un valor)
 * 
 * Las clases también permiten definir getters(captadores) y setters(definidores).
 * 
 * Los declaramos utilizando las palabras claves get y set.  En un objeto que es una instancia
 * de una clase determinada, nos referimos a ellos por su nombre, tal como lo hacemos
 * con las propiedades regulares.
 * 
 * Los métodos de este tipo en clases tienen exactamente las mismas restricciones que
 * las discutidas en los objetos, de modo que, entre otras cosas, setter toma exactamente un
 * argumento y getter no toma ninguno.
 * 
 * Intentemos modificar nuestro ejemplo con la clase Vehicle cambiando los métodos
 * setPosition y getPosition a las posiciones setter y getter respectivamente.
 * 
 * Analice cuidadosamente el código, comparándolo con la versión anterior, en la que no
 * utilizamos getters ni setters, sino métodos regulares.
 * 
 * No te limites al cuerpo de la clase.
 * 
 * Observe también la creación y el uso del objeto vehicle. Deberías encontrar cuatro
 * diferencias principales.
*/

class Vehicle { 
    constructor({id, latitude, longitude}){ 
        this.id = id; 
        this.position = {latitude, longitude}; 
        this.status = "unavailable"; 
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