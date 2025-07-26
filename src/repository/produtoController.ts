import { ProdutoRepository } from "./produtoRepository";
import { Produto } from "../model/produto";
import { Jogo } from "../model/jogo";

export class ProdutoController implements ProdutoRepository {
  private produtos: Produto[] = [];
  private id: number = 1;

  public listarTodos(): void {
    for (let produto of this.produtos) {
      produto.visualizar();
    }
  }

  public cadastrar(produto: Produto): void {
    produto._id = this.id++;
    this.produtos.push(produto);
    console.log("\n\nJogo cadastrado com sucesso!\n\n");
  }

  public atualizar(produto: Produto): void {
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i]._id === produto._id) {
        this.produtos[i] = produto;
        console.log("\n\nJogo atualizado com sucesso!\n\n");
        return;
      }
    }
    console.log("\n\nJogo não encontrado.\n\n");
  }

  public deletar(id: number): void {
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i]._id === id) {
        this.produtos.splice(i, 1);
        console.log("\n\nJogo removido com sucesso!\n\n");
        return;
      }
    }
    console.log("\n\nJogoo não encontrado.\n\n");
  }

  public buscarPorId(id: number): Produto | undefined {
    for (let produto of this.produtos) {
      if (produto._id === id) {
        return produto;
      }
    }
    return undefined;
  }

  public comprar(id: number, quantidade: number): void {
    let produto = this.buscarPorId(id);
    if (produto) {
      if (produto._estoque >= quantidade) {
        produto._estoque -= quantidade;
        let total = produto._preco * quantidade;
        console.log("\n\nCompra realizada com sucesso!\n\n");
        console.log("\n\nTotal da compra: R$ \n\n" + total.toFixed(2));
      } else {
        console.log("\n\nEstoque insuficiente.\n\n");
      }
    } else {
      console.log("\n\nJogo não encontrado.\n\n");
    }
  }
}