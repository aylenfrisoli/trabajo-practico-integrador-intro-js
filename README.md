# Mi Proyecto: Gestor de Biblioteca 📚

Hola! Soy **Aylen Frisoli**, estudiante de **Desarrollo Frontend en ADA ITW**.
Este proyecto es el resultado de mi trabajo práctico integrador, donde el desafío fue conectar todos los conceptos
que venimos aprendiendo en JavaScript para crear algo funcional y real, un sistema de gestión de una biblioteca.

## 🎯 ¿De qué trata este proyecto?
La idea fue construir una herramienta que no solo guarde información, sino que se comporte como un programa de verdad.
Desarrollé una interfaz de consola donde podés gestionar libros y usuarios, realizar préstamos y obtener estadísticas automáticas.

## 🛠️ ¿Cómo lo construí?
Para que el sistema funcione de manera fluida, apliqué varias herramientas clave de programación:

* **Organización de datos**: Usé arrays y objetos para que cada libro y cada usuario tenga su información bien estructurada.
* **Inteligencia para buscar y ordenar**: Implementé algoritmos de Búsqueda Lineal para encontrar libros rápidamente
y Bubble Sort para que la lista se pueda ordenar por año o título.
* **Manejo avanzado de listas**: Aproveché métodos como `.map()`, `.filter()` y `.reduce()` para procesar la información,
generar reportes de géneros y calcular estadísticas sin complicaciones.
* **Lógica de préstamos**: Creé funciones que verifican si un libro está disponible antes de prestarlo y que vinculan
automáticamente los movimientos con el perfil de cada usuario.
* **Interactividad**: Todo se controla desde un menú interactivo que armé con bucles y estructuras de control, 
usando `prompt-sync` para conversar con el usuario.

## 🚀 Lo que podés hacer con el programa
* **Administrar todo**: Podés agregar o borrar libros y usuarios.
El sistema genera los IDs solo, incluso si la lista empieza desde cero.
* **Prestar y Devolver**: Se lleva el control de quién tiene qué libro y cambia el estado de disponibilidad automáticamente.
* **Ver Reportes**: Se muestra cuántos libros hay, cuál es el género más popular o cuál es el libro más antiguo.