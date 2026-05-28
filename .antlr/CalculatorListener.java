// Generated from c:/Users/Usuario/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CalculatorParser}.
 */
public interface CalculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(CalculatorParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(CalculatorParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(CalculatorParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(CalculatorParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void enterAsignacion(CalculatorParser.AsignacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void exitAsignacion(CalculatorParser.AsignacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#imprimir}.
	 * @param ctx the parse tree
	 */
	void enterImprimir(CalculatorParser.ImprimirContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#imprimir}.
	 * @param ctx the parse tree
	 */
	void exitImprimir(CalculatorParser.ImprimirContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpresion(CalculatorParser.ExpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpresion(CalculatorParser.ExpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#termino}.
	 * @param ctx the parse tree
	 */
	void enterTermino(CalculatorParser.TerminoContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#termino}.
	 * @param ctx the parse tree
	 */
	void exitTermino(CalculatorParser.TerminoContext ctx);
}