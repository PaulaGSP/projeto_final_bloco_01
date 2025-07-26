import { Produto } from "../model/produto";

export interface ProdutoRepository {
  listarTodos(): void;
  cadastrar(produto: Produto): void;
  atualizar(produto: Produto): void;
  deletar(id: number): void;
  buscarPorId(id: number): Produto | undefined;
  comprar(id: number, quantidade: number): void;
}