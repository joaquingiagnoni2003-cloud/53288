# Trabajo Práctico: Analizador de Expresiones Matemáticas con ANTLR4

Este es mi analizador. Desarrollé un analizador que es capaz de leer un archivo de texto con operaciones matemáticas y variables, revisar que todo esté bien escrito, armar su estructura interna y resolver las cuentas mostrando el resultado final por pantalla.

Use ANTLR4 para definir las reglas del lenguaje yJavaScript para darle la lógica a la calculadora.



# ¿Qué contiene este proyecto?

* `Calculator.g4`: Acá programé las reglas gramaticales (qué es un número, qué es una variable, cómo se hace una suma, una multiplicación).
* `index.js`: Es el archivo principal que arranca todo. Lee los ejemplos de prueba, llama al analizador y muestra los resultados en la consola.
* `CustomCalculatorVisitor.js`: Acá está la lógica matemática. Es el archivo que procesa las cuentas paso a paso y guarda las variables en la memoria de la compu mientras corre el programa.
* `generated/`: Es la carpeta donde se guardan los archivos automáticos que genera ANTLR4 a partir de mi gramática.
* Archivos de prueba: Creé 4 ejemplos para probar el programa.
