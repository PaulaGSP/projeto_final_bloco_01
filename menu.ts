import readlinesync = require("readline-sync");


export function main() {


  let opcao: number;


  while (true) {


    console.log("---------------------------------------------");
    console.log("                                             ");
    console.log("                 GG Store                    ");
    console.log("                                             ");
    console.log("---------------------------------------------");
    console.log("        1 - Cadastrar jogo                   ");
    console.log("        2 - Listar todos os jogos            ");
    console.log("        3 - Atualizar jogo                   ");
    console.log("        4 - Deletar jogo                     ");
    console.log("        0 - Sair                             ");
    console.log("                                             ");
    console.log("---------------------------------------------");
    console.log("                                             ",);

    console.log("\n\nEntre com a opção desejada: \n\n");
    opcao = readlinesync.questionInt("");

    if (opcao == 0) {
      console.log("GG Store agradece a visita!");
      sobre();
      process.exit(0);
    }

  }
  switch (opcao) {
    case 1:
      console.log("\n\nCadastrar jogo\n\n");

      break;

    case 2:
      console.log("\n\nListar todos os jogos\n\n");

      break;

    case 3:
      console.log("\n\nAtualizar jogo\n\n");

      break;

    case 5:
      console.log("\n\nDeletar jogo\n\n");

      break;

    default:
      console.log("\n\nOpcao invalida!\n\n");

      break;

  }
}

main();

export function sobre(): void {
  console.log("\n---------------------------------------------");

  console.log("\nProjeto desenvolvido por: Paula Policichio");
  console.log("\nEmail: paulapolicichio@gmail.com");
  console.log("\nGitHub: github.com/PaulaGSP");
}