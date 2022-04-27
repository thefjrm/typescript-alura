export class Negociacao {
  // Devemos passar os tipos também no construtor das classes.
  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
  ) {}
  // Podemos passsar as propriedades da classe diretamente como parâmetros do construtor, sem precisar declará-las antes.

  get data(): Date {
    const data = new Date(this._data.getTime()); // Criando uma nova data para não alterar a data original, pois mesmo setando a propriedade como não modificável, por uma brecha do método setTime() do objeto Date, a data pode ser modificada.
    return this._data;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }

  // Ao invés de passar os getters para receber as propriedades privadas de uma classe, podemos declarar as propriedades como públicas e passar o atributo readonly evitando o uso dos getters. Devemos deixar só o de volume, que no caso ficaria:
  // public readonly data: Date,
  // public readonly quantidade: number,
  // public readonly valor: number,

  get volume(): number {
    return this._quantidade * this._valor;
  }
}
