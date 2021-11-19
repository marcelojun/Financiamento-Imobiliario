import { Cliente } from './client.model';

describe('Cliente', () => {
    const nome = "Nome"
    const profissao = "Profissao"
    const cpf = "CPF"
    const email = "Email"
    const nascimento = new Date()
    const celular = 1
    const cidade = "Cidade"
    const estado = "Estado"
    const cep = 2
  
    it('Teste enviaDados/recuperaDados', () => {
      //Arrange
      let dados: Cliente = new Cliente(nome, profissao, cpf,email, nascimento, celular, cidade,estado,cep);
       //Act
      //Assert
      expect(dados.nome).toEqual(nome);
      expect(dados.profissão).toEqual(profissao);
      expect(dados.cpf).toEqual(cpf);
      expect(dados.email).toEqual(email);
      expect(dados.nascimento).toEqual(nascimento);
      expect(dados.celular).toEqual(celular);
      expect(dados.cidade).toEqual(cidade);
      expect(dados.estado).toEqual(estado);
      expect(dados.cep).toEqual(cep);
    });
  });