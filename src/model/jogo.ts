import { Produto } from "./produto";

export class Jogo extends Produto {
  constructor(id: number, nome: string, preco: number, quantidade: number) {
    super(id, nome, preco, genero, quantidade);
  }
}