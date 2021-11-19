import { Proposta } from "../../realty/realty-form/shared/proposta.model";

export class Cliente{
    constructor(
        public nome:string,
        public profissão: string,
        public cpf: string,
        public email: string,
        public nascimento: Date,
        public celular: number,
        public cidade:string,
        public estado: string,
        public cep: number        
    ){
        this.nome=nome;
        this.profissão=profissão;
        this.cpf=cpf;
        this.email=email;
        this.nascimento=nascimento; 
        this.celular=celular;
        this.cidade=cidade;
        this.estado=estado;
        this.cep=cep;
    }

    public id!:number
    public propostas!: Proposta[]
}