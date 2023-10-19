const cliente = {
    nome: "Aleir",
    cpf: "15454554",
    idade: 39,
    telefones : ['11544554', '54455445'],
    saldo: 200,
    comprar: function (valor){
        if (valor > this.saldo){
            console.log( "Seu saldo e insuficiente para compra");
        }
        else{
            
            this.saldo-= valor;
            console.log( " Compra efetuada com sucesso, seu novo saldo e :  "+ this.saldo);
        }
    }
};

cliente.comprar(201);

