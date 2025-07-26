import readlinesync = require("readline-sync");
import { ProdutoController } from './src/repository/produtoController';
import { Jogo } from './src/model/jogo';

export function main() {

  let opcao: number;
  let controller = new ProdutoController();

  do {
    console.log("---------------------------------------------");
    console.log("                                             ");
    console.log("                 GG Store                    ");
    console.log("                                             ");
    console.log("---------------------------------------------");
    console.log("        1 - Cadastrar jogo                   ");
    console.log("        2 - Listar todos os jogos            ");
    console.log("        3 - Atualizar jogo                   ");
    console.log("        4 - Deletar jogo                     ");
    console.log("        5 - Buscar jogo por id               ");
    console.log("        6 - Comprar jogo                     ");
    console.log("        0 - Sair                             ");
    console.log("                                             ");
    console.log("---------------------------------------------");
    console.log("                                             ");

    console.log("\n\nEntre com a opção desejada: \n\n")
    opcao = readlinesync.questionInt("");

    switch (opcao) {
      case 1:
        console.log("\n\nCadastrar Jogo: \n\n");
        let nome = readlinesync.question("\n\nNome: \n\n");
        let preco = readlinesync.questionFloat("\n\nPreço: R$ \n\n");
        let estoque = readlinesync.questionInt("\n\nEstoque: \n\n");
        let genero = readlinesync.question("\n\nGênero: \n\n");
        let novoJogo = new Jogo(0, nome, preco, estoque, genero);
        controller.cadastrar(novoJogo);
        break;

      case 2:
        console.log("\n\nListar jogos: \n\n");
        controller.listarTodos();
        break;

      case 3:
        console.log("\n\nAtualizar jogo: \n\n");
        let idAtualiza = readlinesync.questionInt("\n\nID do jogo: \n\n");
        let nomeNovo = readlinesync.question("\n\nNovo nome: \n\n");
        let precoNovo = readlinesync.questionFloat("\n\nNovo preço: R$ \n\n");
        let estoqueNovo = readlinesync.questionInt("\n\nNovo estoque: \n\n");
        let generoNovo = readlinesync.question("\n\nNovo gênero: \n\n");
        let jogoAtualizado = new Jogo(idAtualiza, nomeNovo, precoNovo, estoqueNovo, generoNovo);
        controller.atualizar(jogoAtualizado);
        break;

      case 4:
        console.log("\n\nDeletar jogo: \n\n");
        let idDelete = readlinesync.questionInt("\n\nID do jogo: \n\n");
        controller.deletar(idDelete);
        break;

      case 5:
        console.log("\n\nBuscar jogo por ID: \n\n");
        let idBusca = readlinesync.questionInt("\n\nID do jogo: \n\n");
        let produto = controller.buscarPorId(idBusca);
        produto ? produto.visualizar() : console.log("\n\nJogo não encontrado.\n\n");
        break;

      case 6:
        console.log("\n\nComprar jogo: \n\n");
        let idCompra = readlinesync.questionInt("\n\nID do jogo: \n\n");
        let quantidade = readlinesync.questionInt("\n\nQuantidade: \n\n");
        controller.comprar(idCompra, quantidade);
        break;

      case 0:
        console.log("Encerrando o atendimento, agradecemos a preferência!");
        sobre();
        break;

      default:
        console.log("Opção inválida!");
    }
  } while (opcao !== 0);

}

main();

export function sobre(): void {
  console.log("\n---------------------------------------------");

  console.log("\nProjeto desenvolvido por: Paula Policichio");
  console.log("\nEmail: paulapolicichio@gmail.com");
  console.log("\nGitHub: github.com/PaulaGSP");

}