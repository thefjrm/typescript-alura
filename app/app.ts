import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw new Error("Formulário não encontrado");
}

const botaoImportar = document.querySelector("#botao-importa");
if (botaoImportar) {
  botaoImportar.addEventListener("click", () => {
    controller.importarDados();
  });
} else {
  throw new Error("Botão não encontrado");
}
