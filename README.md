Challenge Amigo Secreto Adriano Marticorena
1. Qué hace la app
2. Cómo usarla
3. Cómo funciona internamente

                                Amigo Secreto

Este es un proyecto simple hecho con "JavaScript, HTML y CSS", donde se puede:

- Agregar amigos a una lista
- Ver en pantalla los nombres agregados
- Sortear un “amigo secreto” de manera aleatoria


                               ¿Cómo usarlo?

1. Abrí el archivo `index.html` en tu navegador.
2. Escribí un nombre en el campo de texto y hacé clic en *Agregar*.
3. Repetí para todos los amigos que quieras incluir.
4. Cuando quieras hacer el sorteo, hacé clic en *Sortear Amigo*.
5. El nombre sorteado aparecerá debajo.



                             Archivos principales

* `index.html` → Contiene la estructura de la página (el esqueleto: título, botones, lista, resultado).
* `app.js` → Contiene toda la lógica en JavaScript (cómo se agregan amigos, cómo se muestran, cómo se sortean).
* `style.css` → Le da estilo visual a la app.



                              ¿Cómo funciona? 

1. Lista inicial

-El programa empieza con una lista de nombres predefinida:

     ```js
     let amigos = ["Lautaro", "Margarita", "Rubi", "Karina", "Nicolas"];
     ```
Es como una caja donde se guardan etiquetas con nombres.

2. Agregar amigos

-Cuando escribís un nombre en el input y apretás el botón, se ejecuta esta función:

     ```js
     amigos.push(nombre);
     ```
Esto agrega el nuevo nombre al final de la lista.

3. Mostrar la lista

   -Cada vez que agregás un nombre, la app *borra lo que estaba en pantalla* y vuelve a escribir toda la lista.
    Lo hace creando elementos `<li>` en el HTML para cada amigo.

4. Sorteo

   -Cuando apretás Sortear, la app genera un número aleatorio con:

     ```js
     Math.floor(Math.random() * amigos.length);
     ```
   Ese número corresponde a una posición en la lista.
   El programa muestra el nombre elegido en la pantalla.


                          Ejemplo en la práctica

1. Escribo: "Ana" → se agrega a la lista.
2. Escribo: "Carlos" → también se suma.
3. Al sortear, el programa puede elegir al azar a "Lautaro", "Ana" o cualquier otro que esté en la lista.



                     Conceptos de programación aplicados

Aunque es un proyecto simple, tocamos varias ideas fundamentales:

- "Variables y Arrays:" para guardar y manipular datos.
- "Funciones:" cada acción (agregar, mostrar, sortear) está organizada en una función.
- "DOM (Document Object Model):" para “hablar” con la página web y mostrar los resultados.
- "Eventos:" como `onclick` o `DOMContentLoaded`, que disparan funciones en momentos específicos.
- "Aleatoriedad:" con `Math.random()` y `Math.floor()` para seleccionar un índice válido.



                         Objetivo del proyecto

Este proyecto es un "primer acercamiento al mundo de la programación".
Está pensado para entender:

- cómo manipular datos en memoria,
- cómo interactuar con la interfaz de usuario,vy cómo conectar lógica con lo que ve el usuario en pantalla.



                        Autor: Adriano Marticorena

Este proyecto fue creado como parte de un "challenge de programación inicial" del curso "Practicando Lógica de Programación: Challenge Amigo secreto" de ALURA LATAM, con la ayuda de "IA como soporte teórico y práctico".


