

async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML='';

    try {
        var consultarCep = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        var consultaCepConvertido = await consultarCep.json();

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var estado = document.getElementById('estado');


        cidade.value = consultaCepConvertido.localidade;
        logradouro.value = consultaCepConvertido.logradouro;
        bairro.value = consultaCepConvertido.bairro;
        estado.value = consultaCepConvertido.uf;

        console.log(consultaCepConvertido);
        return consultaCepConvertido;

    } catch (erro) {
        mensagemErro.innerHTML = '<p> CEP  invalido! Consulta novamente</p>';
        console.log(erro);
    }

}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value));