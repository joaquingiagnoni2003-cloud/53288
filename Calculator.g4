grammar Calculator;

// --- REGLAS SINTÁCTICAS (Parser) ---
programa : instruccion+ EOF ;

instruccion : asignacion
            | imprimir ;

asignacion : ID ASIGNAR expresion PUNTOCOMA ;

imprimir : PRINT LPAREN expresion RPAREN PUNTOCOMA ;

// Manejo estricto de precedencia: multiplicacion/division primero, suma/resta despues
expresion : expresion (POR | DIV) expresion
          | expresion (MAS | MENOS) expresion
          | termino ;

termino : NUMERO
        | ID
        | LPAREN expresion RPAREN ;

// --- REGLAS LÉXICAS (Lexer / Tokens) ---
PRINT     : 'print' ;
ASIGNAR   : '=' ;
PUNTOCOMA : ';' ;
LPAREN    : '(' ;
RPAREN    : ')' ;
MAS       : '+' ;
MENOS     : '-' ;
POR       : '*' ;
DIV       : '/' ;

ID        : [a-zA-Z]+ ;
NUMERO    : [0-9]+ ;

// Ignorar espacios y saltos de línea
WS        : [ \t\r\n]+ -> skip ;
