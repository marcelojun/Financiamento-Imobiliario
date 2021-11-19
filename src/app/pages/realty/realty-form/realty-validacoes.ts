import { AbstractControl } from "@angular/forms";

export class RealtyValidacoes {

    static QuantidadeParcelas(controle: AbstractControl) {
        if (controle.value == null || controle.value == undefined)
            return null;
        const parcelas = controle.value;

        if (parcelas <= 360)
            return null;

        return { muitasParcelas: true };
    }
}
