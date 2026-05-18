# Analizador Léxico y Sintáctico con ANTLR4 + JavaScript

Este proyecto implementa un analizador léxico y sintáctico utilizando ANTLR4 y JavaScript (Node.js).

Para poder probar el analizador se debe ejecutar en la terminal: node inde.js

Los ejemplos a probar están marcados como:

input1correcto.txt
input2correcto.txt
input3incorrecto.txt
input4incorrecto.txt

Los cuales para probarlos deben pegarse reemplazando la línea 8 del index.js o sea [[const input = fs.readFileSync('input_correcto1.txt', 'utf8');]] , por defecto está puesto el input1correcto.txt

El orden de ejecucion para ver el arbol sintáctico es el siguiente:

java -jar antlr-4.13.2-complete.jar MiLenguaje.g4

javac -cp ".;antlr-4.13.2-complete.jar" MiLenguaje*.java

 java -cp ".;antlr-4.13.2-complete.jar" org.antlr.v4.gui.TestRig MiLenguaje prog -gui input1correcto.txt

 Tener cuidado en esta última linea, porque hay que referenciar que texto estamos visualizando, si es el 1,2,3 o 4, hay que modificarla.

