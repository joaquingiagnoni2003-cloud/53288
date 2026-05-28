import fs from 'fs';
import antlr4 from 'antlr4';
import CalculatorLexer from './generated/CalculatorLexer.js';
import CalculatorParser from './generated/CalculatorParser.js';
import CustomCalculatorVisitor from './CustomCalculatorVisitor.js';

// Leer el archivo de entrada
const input = fs.readFileSync('correcto1.txt', 'utf8');

// Configurar el flujo de ANTLR4
const chars = new antlr4.InputStream(input);
const lexer = new CalculatorLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new CalculatorParser(tokens);

// ---------------------------------------------------------
// TAREA 1: Análisis léxico y sintáctico (Manejo de Errores)
// ---------------------------------------------------------
parser.removeErrorListeners();
parser.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg, e) => {
        console.error(`\n[ERROR SINTÁCTICO] Línea ${line}:${column} - Causa del problema: ${msg}`);
    }
});

const tree = parser.programa(); // Generar el árbol desde el axioma

if (parser._syntaxErrors > 0) {
    console.error("\nEl análisis contiene errores de sintaxis. Corregí el archivo input.txt.");
} else {
    console.log("\n--- [OK] ANÁLISIS SINTÁCTICO Y LÉXICO CORRECTO ---");

    // ---------------------------------------------------------
    // TAREA 2: Tabla de lexemas-tokens
    // ---------------------------------------------------------
    console.log("\n--- TAREA 2: TABLA DE LEXEMAS Y TOKENS ---");
    tokens.fill();
    tokens.tokens.forEach(t => {
        if (t.type !== antlr4.Token.EOF) {
            const tokenName = parser.symbolicNames[t.type];
            console.log(`Lexema: '${t.text.padEnd(12)}' -> Token: ${tokenName}`);
        }
    });

    // ---------------------------------------------------------
    // TAREA 3: Árbol de análisis sintáctico concreto
    // ---------------------------------------------------------
    console.log("\n--- TAREA 3: ÁRBOL DE ANÁLISIS SINTÁCTICO ---");
    const cadena_tree = tree.toStringTree(parser.ruleNames);
    console.log(cadena_tree);

    // ---------------------------------------------------------
    // TAREA 4: Interpretación y Traducción
    // ---------------------------------------------------------
    const visitor = new CustomCalculatorVisitor();
    visitor.visit(tree); // Ejecuta el recorrido semántico
}