import { ComponentFixture } from '@angular/core/testing';
import { AbstractControl, FormControl } from '@angular/forms';
import { RealtyValidacoes } from './realty-validacoes';


describe('realty-validacoes',()=>{
    let component: RealtyValidacoes;
    let fixture: ComponentFixture<RealtyValidacoes>;
    beforeEach(() => {
        declarations: [RealtyValidacoes];
        imports: [AbstractControl]
    });
    it('Should to return null', () => {
        const mockControlForm = new FormControl();
        const qtdpar = RealtyValidacoes.QuantidadeParcelas(mockControlForm);
        expect(qtdpar).toBeNull()
    })
    it('Should to menor que 360 parcelas', () => {
        const mockControlForm = new FormControl("200");
        const qtdpar = RealtyValidacoes.QuantidadeParcelas(mockControlForm);
        expect(qtdpar).toBeNull()
    })
    it('Should to return maior que 360', () => {
        const mockControlForm = new FormControl("400");
        const qtdpar = RealtyValidacoes.QuantidadeParcelas(mockControlForm);
        expect(qtdpar?.muitasParcelas).toEqual(true)
    })


})