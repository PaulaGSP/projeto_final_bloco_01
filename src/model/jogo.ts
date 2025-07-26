import { Produto } from "./produto";

export class Jogo extends Produto {
  public _genero: string;

  public constructor(id: number, nome: string, preco: number, estoque: number, genero: string) {
    super(id, nome, preco, estoque);
    this._genero = genero;
  }

  public override visualizar(): void {
    console.log("\nID: " + this._id);
    console.log("Nome: " + this._nome);
    console.log("Preço: R$ " + this._preco.toFixed(2));
    console.log("Estoque: " + this._estoque);
    console.log("Gênero: " + this._genero);
  }
}
