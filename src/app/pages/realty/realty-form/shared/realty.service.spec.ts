import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ApprovedModel } from 'src/app/pages/approved/approved.form/shared/approvedModel';

import { RealtyService } from './realty.service';

describe('RealtyService', () => {
  let srv: RealtyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    srv = TestBed.inject(RealtyService);
  });

  it('Teste enviaDados/recuperaDados', () => {
    //Arrange
    let dados: ApprovedModel = new ApprovedModel(2000, 80000);
    
    //Act
    srv.enviaDados(dados);
    let retorno = srv.recuperaDados();

    //Assert
    expect(retorno.valorParcela).toEqual(2000);
    expect(retorno.valorTotal).toEqual(80000);
  });
});
