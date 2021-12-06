import { Cliente } from './client.model';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ClientService } from './client.service';

describe('ClientService', () => {
    let srv: ClientService;
  
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule]
      });
      srv = TestBed.inject(ClientService);
    });
  
    it('Teste  SalvarDado/ RecuperarDado', () => {
        //Arrange
        let model: Cliente = new Cliente(
        "nome",
        "profissao",
        "cpf",
        "email",
        new Date(2000,1,1),
        99,
        "cidade",
        "estado",
        99);
    
        //Act
        srv.SalvarDado(model);
        let retorno = srv.RecuperarDado();
    
        //Assert
        expect(retorno.nome).toEqual("nome");
        expect(retorno.profissao).toEqual("profissao");
        expect(retorno.cpf).toEqual("cpf");
        expect(retorno.email).toEqual("email");
        expect(retorno.nascimento).toEqual( new Date(2000,1,1));
        expect(retorno.celular).toEqual(99);
        expect(retorno.cidade).toEqual("cidade");
        expect(retorno.estado).toEqual("estado");
        expect(retorno.cep).toEqual(99);

      });
      it('should be created', () => {
        const service:ClientService = TestBed.inject(ClientService);
        expect(service).toBeTruthy();
       });
    })