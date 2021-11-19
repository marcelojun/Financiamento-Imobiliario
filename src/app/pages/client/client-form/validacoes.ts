import { AbstractControl } from "@angular/forms";

export class Validacoes {

  static MaiorQue18Anos(controle: AbstractControl) {
    if(controle.value==null||controle.value==undefined)
    return null;
    const nascimento:string = controle.value;
    const [ano, mes, dia] = nascimento.split('-');
    const hoje = new Date();
    const dataNascimento = new Date(parseInt(ano,10), parseInt(mes,10),parseInt(dia,10) , 0, 0, 0);
    const tempoParaTeste = 1000 * 60 * 60 * 24 * 365 * 18; //18 anos em mili segundos...

    if (hoje.getTime() - dataNascimento.getTime() >= tempoParaTeste)
      return null;

    return { menorDeIdade: true };
  }
}
