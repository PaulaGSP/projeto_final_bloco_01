export abstract class Produto {
  private _id: number;
  private _nome: string;
  private _preco: number;
  private _genero: string;
  private _quantidade: number;

  constructor(id: number, nome: string, preco: number, genero: string, quantidade: number) {
    this._id = id;
    this._nome = nome;
    this._preco = preco;
    this._genero = genero;
    this._quantidade = quantidade;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get preco(): number {
    return this._preco;
  }

  set preco(value: number) {
    this._preco = value;
  }

  get genero(): string {
    return this._genero;
  }

  set genero(value: string) {
    this._genero = value;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  set quantidade(value: number) {
    this._quantidade = value;
  }

  public visualizar(): void {
    console.log("--- Dados do jogo  ---");
    console.log("    ID: " + this._id);
    console.log("    Nome: " + this._nome);
    console.log("    Genero: " + this._genero);
    console.log("    Preço(R$):  " + this._preco.toFixed(2));
    console.log("    Quantidade: " + this._quantidade);
  }

  public vender(quantia: number): boolean {
    if (quantia <= this._quantidade) {
      this._quantidade -= quantia;
      return true;
    } else {
      console.log("Quantidade insuficiente em estoque.");
      return false;
    }
  }
}


