export class Proposta {
    constructor(
        public imovel: string,
        public renda: string,
        public valor: number,
        public entrada: number,
        public parcelas: number,
        public primeira_parcela: number,
        public status: string,
        public valor_financiado: number,
        public nome: string,
        public profissão: string,
        public cpf: string,
        public email: string,
        public nascimento: Date,
        public celular: number,
        public cidade: string,
        public estado: string,
        public cep: number
    ) {
        this.imovel = imovel;
        this.renda = renda;
        this.valor = valor;
        this.entrada = entrada;
        this.parcelas = parcelas;
        this.primeira_parcela = primeira_parcela;
        this.status = status;
        this.valor_financiado = valor_financiado;
        this.nome = nome;
        this.profissão = profissão;
        this.cpf = cpf;
        this.email = email;
        this.nascimento = nascimento;
        this.celular = celular;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep
    }

    public id!: number;
    public data: Date = new Date();
}