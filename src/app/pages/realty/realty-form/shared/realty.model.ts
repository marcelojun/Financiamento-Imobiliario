export class Imovel{
    constructor(
        public imovel :string,
        public renda: string,
        public valor: number,
        public entrada: number,
        public parcelas: number,
       
        
    ){
        this.imovel=imovel;
        this.renda=renda;
        this.valor=valor;
        this.entrada=entrada;
        this.parcelas=parcelas; 
       
    }

}