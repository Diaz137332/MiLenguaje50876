// Generated from c:/Users/Ulises/MiLenguaje50876/MiLenguaje.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MiLenguajeParser}.
 */
public interface MiLenguajeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(MiLenguajeParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(MiLenguajeParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracion(MiLenguajeParser.DeclaracionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracion(MiLenguajeParser.DeclaracionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#impresion}.
	 * @param ctx the parse tree
	 */
	void enterImpresion(MiLenguajeParser.ImpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#impresion}.
	 * @param ctx the parse tree
	 */
	void exitImpresion(MiLenguajeParser.ImpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValor(MiLenguajeParser.ValorContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValor(MiLenguajeParser.ValorContext ctx);
}