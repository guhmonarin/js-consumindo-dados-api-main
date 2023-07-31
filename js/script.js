

async function buscaEndereco(cep){
    try {
        let consultarCep = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        let consultaCepConvertido = await consultarCep.json();

        if (consultaCepConvertido.erro) {
            throw Error('CEP não existe');
        }

        console.log(consultaCepConvertido);

    } catch (erro) {
        console.log(erro);
    }

}

let ceps = ['17700000', '01001000', '01001001']

let conjuntoCeps = ceps.map( valores => buscaEndereco(valores));

Promise.all(conjuntoCeps).then(respostas => console.log(respostas));