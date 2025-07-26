export abstract class Produto {
  public _id: number;
  public _nome: string;
  public _preco: number;
  public _estoque: number;

  public constructor(id: number, nome: string, preco: number, estoque: number) {
    this._id = id;
    this._nome = nome;
    this._preco = preco;
    this._estoque = estoque;
  }

  public abstract visualizar(): void;
}