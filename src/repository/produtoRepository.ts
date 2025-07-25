import { Produto } from "../model/produto";

export interface ProdutoRepository {
  procurar(id: number): Produto | undefined;
  listarTodos(): void;
  cadastrar(produto: Produto): void;
  atualizar(produto: Produto): void;
  deletar(id: number): void;
  vender(id: number, quantidade: number): void;
}