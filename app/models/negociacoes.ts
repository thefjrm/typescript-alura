import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  // Quando definimos uma array, devemos definir também o tipo da array. Entre tags colocamos o que a array vai receber. Neste caso a lista somente receberá elementos do tipo da classe Negociacao.
  private negociacoes: Array<Negociacao> = []; // Negociacao[] funciona do mesmo jeito sendo um atalho.

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }
  // Neste caso de somente leitura fazemos readonly Negociacao[].
  lista(): ReadonlyArray<Negociacao> {
    // Com o tipo ReadonlyArray, não podemos alterar o array. Somente leitura.
    return this.negociacoes;
  }
}
