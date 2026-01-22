const prompt = require("prompt-sync")();

// Requerimientos
// 1. Estructura de Datos
// a) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro
// debe tener las siguientes propiedades:
// ✔ id (número)
// ✔ título (string),
// ✔ autor (string),
// ✔ año (número),
// ✔ género (string),
// ✔ disponible (booleano).

let libros = [
    { id: 1, titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", anio: 1967, genero: "Realismo Mágico", disponible: true },
    { id: 2, titulo: "1984", autor: "George Orwell", anio: 1949, genero: "Distopía", disponible: false },
    { id: 3, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605, genero: "Novela", disponible: false },
    { id: 4, titulo: "El Gran Gatsby", autor: "F. Scott Fitzgerald", anio: 1925, genero: "Novela", disponible: true },
    { id: 5, titulo: "Matar a un Ruiseñor", autor: "Harper Lee", anio: 1925, genero: "Novela", disponible: false },
    { id: 6, titulo: "Club de Brujas", autor: "J.K. Rowling", anio: 1997, genero: "Fantasía", disponible: true },
    { id: 7, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", anio: 1943, genero: "Fábula", disponible: false },
    { id: 8, titulo: "Crimen y Castigo", autor: "Fyodor Dostoyevski", anio: 2025, genero: "Novela", disponible: true },
    { id: 9, titulo: "Orgullo y Prejuicio", autor: "Jane Austen", anio: 1813, genero: "Novela", disponible: true },
    { id: 10, titulo: "El Hobbit", autor: "  J.R.R. Tolkien", anio: 1937, genero: "Fantasía", disponible: true }
];

// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario
// debe tener:
// ✔ id (número)
// ✔ nombre (string)
// ✔ email (string)
// ✔ librosPrestados (array de ids de libros).

let usuarios = [
    { id: 1, nombre: "Ana Pérez", email: "ANA.PEREZ@example.com", librosPrestados: [3] },
    { id: 2, nombre: "Carlos Gómez", email: "carlos.gomez@example.com", librosPrestados: [2, 7] },
    { id: 3, nombre: "María López", email: "maria.lopez@example.com", librosPrestados: [] },
    { id: 4, nombre: "Pedro Ramírez", email: "PEDRO.RAMIREZ@example.com", librosPrestados: [5] },
    { id: 5, nombre: "Laura Martínez", email: "LAURA.MARTINEZ@example.com", librosPrestados: [] }
];

// 2. Funciones de Gestión de Libros
// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un
// nuevo libro al array libros.

function agregarLibro(titulo, autor, anio, genero) {

    // en esta variable obtenemos los datos del ultimo libro para obtener su id
    ultimoLibro = libros[libros.length - 1];

    // esta variable sirve para que, si existen libros se asigne id existente + 1, si no existe asignarle 1
    let nuevoId = ultimoLibro ? ultimoLibro.id + 1 : 1;

    // utilizando el metodo push agregamos un elemento al array
    libros.push({
        // objeto {propiedad: valor}
        id: nuevoId, // generamos un id autoincremental basandonos en el ultimo id de libro
        titulo: titulo, 
        autor: autor,
        anio: anio,
        genero: genero,
        disponible: true 
    });

    return libros;
}

// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título,
// autor o género utilizando el algoritmo de búsqueda lineal.

function buscarLibro(criterio, valor) {
    // declaramos una variable con array vacio
    let librosEncontrados = [];
    
    // recorremos uno por uno los libros
    for (let index = 0; index < libros.length; index++) {
        // cuando quiero utilizar una propiedad de un objeto no puedo utilizarlo
        // como libros[index].criterio porque criterio es una variable, utilizo [criterio]
        if (libros[index][criterio] === valor) {
            // si coincide con los parámetros (criterio, valor) se agrega al array declarado
            librosEncontrados.push(libros[index]);
        }
    }
    
    // se retorna la variable con el array de libros encontrados
    return librosEncontrados;
}

// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año
// utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los
// libros ordenados en la consola.

function ordenarLibros(criterio) {
    // declaramos la variable que almacene la cantidad total de libros
    let cantidadDeLibros = libros.length;

    // en el método bubble sort son necesitarios 2 for para comparar
    // recorre todos los libros menos el ultimo
    for (let indice = 0; indice < cantidadDeLibros - 1; indice++) {
        
        // compara libros vecinos en pares de izquierda a derecha
        for (let posicion = 0; posicion < cantidadDeLibros - indice - 1; posicion++) {
            
            // si el de la izquierda (actual) es mayor que el de la derecha (siguiente)
            if (libros[posicion][criterio] > libros[posicion + 1][criterio]) {
                
                // se crea una variable temporal con el libro actual
                let temporal = libros[posicion];
                
                // se intercambian de lugar, el siguiente pasa a ser actual
                libros[posicion] = libros[posicion + 1];
                
                // el actual pasa a ser el siguiente (proxima posición)
                libros[posicion + 1] = temporal;
            }
        }
    }

    return libros;
}

// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por
// parámetro.

function borrarLibro(idParaEliminar){

    // declaramos una variable y utilizamos findIndex para comprobar si el id a eliminar coincide con un id existente
    // findIndex devuelve -1 si no lo encuentra
    let indice = libros.findIndex(function(libro) {
        return libro.id === idParaEliminar;
    });

    // si es distinto a -1 es porque existe
    if (indice !== -1) {
        // utilizamos el metodo splice que usa dos paramentros el primero es el indice
        // el segundo le indica cuantos elementos eliminar, en este caso solo 1
        libros.splice(indice, 1);
        
        return "El libro con id " + idParaEliminar + " fue eliminado";
    }

    // si es igual -1 es porque no existe
    return "No encontramos un libro con id " + idParaEliminar;
}

// 3. Gestión de Usuarios
// a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo
// usuario al array usuarios.

function registrarUsuario(nombre, email) {

    // en esta variable obtenemos los datos del ultimo usuario para obtener su id
    ultimoUsuario = usuarios[usuarios.length - 1];

    // si existe el último usuario sumamos 1 al id, si no empezamos en 1
    let nuevoId = ultimoUsuario ? ultimoUsuario.id + 1 : 1;

    // usamos push para agregar un objeto al array usuarios
    usuarios.push({
        id: nuevoId, // generamos un id autoincremental basandonos en el ultimo id de usuario
        nombre: nombre,
        email: email,
        librosPrestados: []
    });

    // se retorna mensaje al usuario
    return "El usuario se agregó correctamente.";
}

// b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array
// completo de usuarios

function mostrarTodosLosUsuarios(){
    // listamos usuarios
    return usuarios;
}

// c) Crear una función buscarUsuario(email) que devuelva la información de un usuario
// dado su email.

function buscarUsuario(email) {
    
    // recorremos los usuarios
    for (let index = 0; index < usuarios.length; index++) {
    
        // comprobamos si el email ingresado coincide con un email existente
        if (usuarios[index].email.toLowerCase() === email.toLowerCase()) {
            // si lo encuentra retorna los datos del usuario
            return usuarios[index];
        }
    }

    // si no coincide
    return 'Usuario no encontrado';
 }


// d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario
// seleccionado.

function borrarUsuario(nombre, email) {

    // buscamos en el array de usuarios
    let indice = usuarios.findIndex(function(usuario) {
    
        // comprobamos si el nombre y el usuario ingresados coinciden con el nombre y el usuario existente
        return usuario.nombre === nombre && usuario.email === email;
    });

    // si encontro la coincidencia
    if (indice !== -1) {
        
        // le indicamos el indice y la cantidad de elementos a eliminar
        usuarios.splice(indice, 1); 

        return "El usuario " + nombre + " fue eliminado.";
    }

    // si no encontro coincidencia
    return "No se encontró el usuario.";
}


//4. Sistema de Préstamos
// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no
// disponible y lo agregue a la lista de libros prestados del usuario.

function prestarLibro(idLibro, idUsuario) {

    //primero comprobamos si el id del libro existe, y si ese libro esta disponible (no prestado)
    let libro = libros.find(libro => libro.id === idLibro && libro.disponible === true);

    //si no lo encuentra
    if(!libro){
        return "El libro no se encontró o no está disponible";
    }

    //despues comprobamos si el id del usuario ingrsado existe en un id de usuario existente
    let usuario = usuarios.find(usuario => usuario.id === idUsuario);

    //si no lo encuentra
    if(!usuario){
        return "No se encontró este usuario";
    }
    // si lo encuentra modificamos el estado del libro (no disponible)
    libro.disponible = false;

    // agregamos el id del libro a los libros prestados del usuario
    usuario.librosPrestados.push(idLibro);

    return "El libro '" + libro.titulo + "' ha sido prestado a " + usuario.nombre;

}

// b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como
// disponible y lo elimine de la lista de libros prestados del usuario.

function devolverLibro(idLibro, idUsuario){

    // busco el libro, que exista y que este prestado (no disponible)
    let libro = libros.find(libro => libro.id === idLibro && libro.disponible === false);

    // si no lo encuentra
    if(!libro){

        return "El libro no tiene relación con el usuario o no está disponible.";
    }

    // busco el usuario ingresado coincida con usuario existente
    let usuario = usuarios.find(usuario => usuario.id === idUsuario);

    // si no lo encuentra
    if(!usuario){

        return "No se encontró este usuario.";
    }

    // comprobamos si el id de usuario tiene ese id de libro prestado
    if(!usuario.librosPrestados.includes(libro.id)){

        return "El usuario no tiene prestado este libro.";
    }

    // quitamos el libro del array librosprestados del usuario
    usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== libro.id);

    // cambiamos el estado del libro a disponible (true)
    libro.disponible = true;

    return "El libro '" + libro.titulo + "' fue devuelto por " + usuario.nombre;
}

//5. Reportes
// a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays
// (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
// ✔ Cantidad total de libros.
// ✔ Cantidad de libros prestados.
// ✔ Cantidad de libros por género.
// ✔ Libro más antiguo y más nuevo

function generarReporteLibros(libros) {
    // declaramos la variable y le damos valor con la cantidad total del libros
    let totalDeLibros = libros.length;

    let librosPrestados = 0;

    // recorremos el total de elementos, filtramos y mostramos los que no estan disponibles (los que estan prestados)
    librosPrestados = libros.filter((libro) => !libro.disponible).length;

    // recorrer cada objeto libro, analizar su genero y añadir a un contador
    let librosPorGenero = libros.reduce((acumulador, libro) => {
        if (acumulador[libro.genero]) {
            //si el genero cocinde, le sumo 1
            acumulador[libro.genero] = acumulador[libro.genero] + 1;
        } else {
            //si no coincide, lo creo y le asigno 1 al primero
            acumulador[libro.genero] = 1;
        }
        return acumulador;
        // necesito tener {} para definir y que tome el objeto como acumulador
    }, {});

    // declaramos las variables
    let libroMasAntiguo;
    let libroMasNuevo;

    // reutilizo una funcion previa para facilitar la busqueda ordenando por año
    let librosOrdenadosPorFecha = ordenarLibros("anio");

    // al estar ordenado el mas antiguo siempre sera el indice 0
    libroMasAntiguo = librosOrdenadosPorFecha[0];
    // el mas nuevo lo encontramos en el ultimo indice del total
    libroMasNuevo = librosOrdenadosPorFecha[librosOrdenadosPorFecha.length - 1];

    return {
        // retornamos un objeto con todos los datos
        totalDeLibros: totalDeLibros,
        librosPrestados: librosPrestados,
        librosPorGenero: librosPorGenero,
        libroMasAntiguo: libroMasAntiguo,
        libroMasNuevo: libroMasNuevo
    }
}

// 6. Identificación Avanzada de libros
// a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre
// todos los libros cuyo título contiene más de una palabra (no títulos que contengan
// números ni otros caracteres).
// b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la
// consola.

function librosConPalabrasEnTitulo(libros) {

    // filtrar libros sin numeros ni caracteres especiales
    let librosFiltrados = libros.filter(libro => {

        // uso una expresion regular para que filtre cualquier cosa que NO sea letra o espacio
        let regexSoloLetras = /[^a-zA-Z\s]/;

        // el metodo test sirve para saber si el texto coincide con la condicion (metodo propio de regex)
        if (!regexSoloLetras.test(libro.titulo)) {

        // con trim elimino espacios al inicio y al final, con split convertimos el string en un arrays de palabras
            let palabras = libro.titulo.trim().split(" ");

            // comprobamos si tiene mas de una palabra    
            return palabras.length > 1;
        }
        
        // si no tiene mas de una palabra   
        return false;
    });

    // creamos un array solo de titulos de lbros
    let listaDeTitulos = librosFiltrados.map(libro => libro.titulo);
  
    return listaDeTitulos;
}

// 7. Cálculos Estadísticos
//a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular
//y mostrar:
//✔ Promedio de años de publicación de los libros.
//✔ Año de publicación más frecuente.
//✔ Diferencia en años entre el libro más antiguo y el más nuevo.

function calcularEstadisticas(libros){

    // primero creo un array de los años de los libros
    let listaDeAnios = libros.map(libro => libro.anio);
    
    // sumar el total de años y obtener un unico valor
    let sumaTotal = listaDeAnios.reduce(function(acumulador,año){
        return acumulador + año
    },0);

    // hacemos la division para sacar el promedio y redondeo para dar un numero entero
    let promedio = Math.round(sumaTotal / listaDeAnios.length);

    // crear un objeto contador
    let librosPorAnio = libros.reduce((acumulador, libro) => {
        if (acumulador[libro.anio]) {

            // si el año cocinde, le sumo 1
            acumulador[libro.anio] = acumulador[libro.anio] + 1;
        } else {

            // si no coincide, lo creo y le asigno 1 por primera vez
            acumulador[libro.anio] = 1;
        }
        return acumulador;
    }, {});

    // comparar las cantidades para ver cuál año fue mas frecuente
    // utilizo object.keys para obtener los valores de las propiedades y con reduce obtengo un valor
    let anioMasFrecuente = Object.keys(librosPorAnio).reduce((valorAcumulado, valorActual) => {
        
        return (librosPorAnio[valorActual] > librosPorAnio[valorAcumulado]) ? valorActual : valorAcumulado;
    });

    // reutilizo la funcion para obtener los datos ordenados
    let reporte = generarReporteLibros(libros);

    // declaro las variables
    let antiguo = reporte.libroMasAntiguo.anio; 
    let nuevo = reporte.libroMasNuevo.anio;
    
    // calculo la diferencia
    let diferencia = nuevo - antiguo;

    return {
        // retornamos un objeto con todos los datos //agrego number para que se muestre como tal y no como string
        promedioDeAnios: promedio,
        anioMasFrecuente: Number(anioMasFrecuente),
        diferenciaEntreAntiguoYNuevo: diferencia
    }
}

// 8. Manejo de Cadenas
// a) Crear una función normalizarDatos() que utilice métodos de strings para:
// ✔ Convertir todos los títulos a mayúsculas.
// ✔ Eliminar espacios en blanco al inicio y final de los nombres de autores.
// ✔ Formatear los emails de los usuarios a minúsculas.

function normalizarDatos(libros, usuarios) {

    // recorrer los titulos de cada lbro y aplicar mayusculas
    libros.forEach((libro) => {
        libro.titulo = libro.titulo.toUpperCase();

    //trim elimina espacios iniciales y finales
    libro.autor = libro.autor.trim();
    });

    //recorro cada email de usuario y lo retorno en minusculas
    usuarios.forEach((usuario) => {
        usuario.email = usuario.email.toLowerCase();
    });

    return {
        libros,
        usuarios,
    };
}

// 9. Interfaz de Usuario por Consola
// a) Implementar una función menuPrincipal() que muestre un menú de opciones al
// usuario y permita interactuar con el sistema utilizando prompt().
// b) El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar
// estructuras de control (if, switch, ciclos) para manejar la lógica.

function menuPrincipal(){
let opcion;

do {
    opcion = prompt(`
    --- SISTEMA DE GESTIÓN DE LIBROS ---
    1. Agregar Libro
    2. Borrar Libro
    3. Registrar Usuario
    4. Buscar Usuario
    5. Borrar Usuario
    6. Prestar Libro
    7. Devolver Libro
    8. Ver Reporte General
    9. Ver Estadísticas
    10. Normalizar Datos
    0. Salir
    -------------------------------------
    Seleccione una opción:`);

    switch (opcion) {
        case "1": //1. Agregar Libro

            // pedir datos al usuario
            let titulo = prompt("Ingresa el título del libro: ");
            let autor = prompt("Ingresa el autor del libro: ");
            let anio = Number(prompt("Ingresa el año de anio del libro: "));
            let genero = prompt("Ingresa el género del libro: ");
            
            // el id lo genera la funcion
            // aplicar la funcion
            agregarLibro(titulo, autor, anio, genero);

            // devolver el mensaje al usuario
            console.log("Libro agregado satisfactoriamente.");

            prompt("\nPresione Enter para continuar...");

            break;

        case "2": //2. Borrar Libro
            
            // id libro a borrar
            let idParaEliminar = Number(prompt("Ingresa el id del libro a borrar: "));
            
            // aplicar la funcion
            borrarLibro(idParaEliminar);
            
            // devolver el mensaje al usuario
            console.log("Libro borrado satisfactoriamente.");

            prompt("\nPresione Enter para continuar...");

            break;

        case "3": //3. Registrar Usuario
            
            // pedir nombre y email
            let nombre = prompt("Ingresa el nombre completo del nuevo usuario: ");
            let email = prompt("Ingresa el email del nuevo usuario: ");
            
            // aplicar la funcion
            registrarUsuario(nombre, email);

            prompt("\nPresione Enter para continuar...");

            break;

        case "4": //4. Buscar Usuario

            // pedir el email a buscar
            let emailBuscado = prompt("Ingresa el email del usuario: ");

            // aplicar la funcion
            buscarUsuario(emailBuscado);

            // devolver el mensaje al usuario
            console.table(buscarUsuario(emailBuscado));

            prompt("\nPresione Enter para continuar...");

            break;

        case "5": //5. Borrar Usuario

            // pedir el nombre y email para eliminar
            let nombreAEliminar = prompt("Ingresa el nombre completo del nuevo usuario: ");
            let emailAEliminar = prompt("Ingresa el email del nuevo usuario: ");

            // aplicar la funcion
            borrarUsuario(nombreAEliminar, emailAEliminar);

            // devolver el mensaje al usuario
            console.log("Usuario borrado satisfactoriamente.");

            prompt("\nPresione Enter para continuar...");

            break;

        case "6": //6. Prestar Libro

            // pedir id de libro y de usuario a prestar
            let idLibroAPrestar = Number(prompt("Ingresa el id del libro que se presta: "));
            let idUsuarioAPrestar = Number(prompt("Ingresa el id del usuario: "));

            // aplicar la funcion
            prestarLibro(idLibroAPrestar, idUsuarioAPrestar);

            // devolver el mensaje al usuario
            console.log("EL préstamo se registró satisfactoriamente.");

            prompt("\nPresione Enter para continuar...");

            break;

        case "7": //7. Devolver Libro

            // pedir id de libro y de usuario a devolver
            let idLibroADevolver = Number(prompt("Ingresa el id del libro que se devuelve: "));
            let idUsuarioADevolver = Number(prompt("Ingresa el id del usuario: "));
            
            // aplicar la funcion
            devolverLibro(idLibroADevolver, idUsuarioADevolver);
            
            // devolver el mensaje al usuario
            console.log("La devolución se registró satisfactoriamente.");

            prompt("\nPresione Enter para continuar...");

            break;

        case "8": //8. Ver Reporte General
            
            // devolver el mensaje al usuario
            console.log("El reporte general es: ");

            // aplicar la funcion directamente
            console.table(generarReporteLibros(libros));

            prompt("\nPresione Enter para continuar...");

            break;

        case "9": //9. Ver Estadísticas

            // devolver el mensaje al usuario
            console.log("El reporte estadístico es: ");

            // aplicar la funcion directamente
            console.table(calcularEstadisticas(libros));

            prompt("\nPresione Enter para continuar...");

            break;

        case "10": //10. Normalizar Datos

            // aplicar la funcion
            normalizarDatos(libros, usuarios);

            // devolver el mensaje al usuario
            console.log("Los datos fueron normalizados.");

            prompt("\nPresione Enter para continuar...");

            break;

        case "0": //salir

            // devolver el mensaje al usuario
            console.log("Saliendo del sistema...");

            prompt("\nPresione Enter para continuar...");

            break;

        default: //Numero no válido

            // mensaje al usuario
            console.log("Opción no válida. Intente nuevamente.");

            break;
    }

} while (opcion !== "0"); //mientras la opcion sea distinta de 0, sigue el menu principal
}

menuPrincipal();