import CalculatorVisitor from './generated/CalculatorVisitor.js';

export default class CustomCalculatorVisitor extends CalculatorVisitor {
    constructor() {
        super();
        this.memory = {}; // Tabla de símbolos para guardar las variables
    }

    // programa : instruccion+ EOF ;
    visitPrograma(ctx) {
        for (let i = 0; i < ctx.instruccion().length; i++) {
            this.visit(ctx.instruccion(i));
        }
        return null;
    }

    // instruccion : asignacion | imprimir ;
    visitInstruccion(ctx) {
        return this.visit(ctx.getChild(0));
    }

    // asignacion : ID ASSIGNAR expresion PUNTOCOMA ;
    visitAsignacion(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expresion());
        this.memory[id] = value; // Guarda el valor en memoria
        return value;
    }

    // imprimir : PRINT LPAREN expresion RPAREN PUNTOCOMA ;
    visitImprimir(ctx) {
        const value = this.visit(ctx.expresion());
        console.log(`Resultado: ${value}`); // Imprime el cálculo final (Tarea 4)
        return value;
    }

    // expresion : expresion (POR | DIV) expresion
    //           | expresion (MAS | MENOS) expresion
    //           | termino ;
    visitExpresion(ctx) {
        // Si tiene 3 hijos, es una operación binaria (izq operador der)
        if (ctx.getChildCount() === 3) {
            const left = this.visit(ctx.expresion(0));
            const right = this.visit(ctx.expresion(1));
            const op = ctx.getChild(1).getText(); // Captura el operador de forma segura

            switch (op) {
                case '*': return left * right;
                case '/': return left / right;
                case '+': return left + right;
                case '-': return left - right;
                default: return 0;
            }
        }
        
        // Si tiene 1 hijo, delega al término
        return this.visit(ctx.termino());
    }

    // termino : NUMERO | ID | LPAREN expresion RPAREN ;
    visitTermino(ctx) {
        // Caso 1: Es un número entero directo
        if (ctx.NUMERO()) {
            return Number(ctx.NUMERO().getText());
        }
        
        // Caso 2: Es una variable guardada previamente
        if (ctx.ID()) {
            const id = ctx.ID().getText();
            if (this.memory[id] !== undefined) {
                return this.memory[id];
            }
            console.error(`Error semántico: La variable '${id}' no está definida.`);
            return 0;
        }
        
        // Caso 3: Es una expresión entre paréntesis ( LPAREN expresion RPAREN )
        if (ctx.expresion()) {
            return this.visit(ctx.expresion());
        }

        return 0;
    }
}