class produto{

    constructor(nome,preco,quantidade){
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    
    }
    
    apresentar(){
        console.log(`Ola meu nome é ${this.nome} e tenho ${this.idade} anos!`);
    }
    }
    let meuNome = new pessoa("Emily","17") ;
    meuNome.apresentar()