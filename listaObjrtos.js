const cliente = {
    nome: "Aleir",
    cpf: "15454554",
    idade: 39,
    telefones : ['11544554', '54455445'],
    endereco:[{
        rua:' João Bernardino da Rosa',
        numero: 901,
        bairro: 'Pedra Branca',
        cep:' 8723478342874'
    }],

};

cliente.endereco.push({
    rua: "Dante Honorio",
    numero: 62,
    bairro: "Xaxim",
    cep: "15645456",
    apartamento: true

});

const apernasApartamentos = cliente.endereco.filter((endereco) => endereco.apartamento === true); 
// vantagem de usar Array que pode usar os metodos da mesma, o filter cliea uma nova Lista apenas com o parametro. 


console.log(apernasApartamentos);
