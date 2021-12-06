import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, FormControl } from '@angular/forms';
import { Validacoes } from './validacoes';


describe("Validacoes", () => {
    let component: Validacoes;
    let fixture: ComponentFixture<Validacoes>;

    beforeEach(() => {
        declarations: [Validacoes];
        imports: [AbstractControl]
    });

    it('Should to return null', () => {
        const mockControlForm = new FormControl();
        const maior18 = Validacoes.MaiorQue18Anos(mockControlForm);
        expect(maior18).toBeNull()
    })
    it('Should to return maior que 18', () => {
        const mockControlForm = new FormControl("2000-01-01");
        const maior18 = Validacoes.MaiorQue18Anos(mockControlForm);
        expect(maior18).toBeNull()
    })
    it('Should to return meno que 18', () => {
        const mockControlForm = new FormControl("2014-01-01");
        const maior18 = Validacoes.MaiorQue18Anos(mockControlForm);
        expect(maior18?.menorDeIdade).toEqual(true)
    })

})