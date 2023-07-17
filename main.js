const form = document.getElementById('contact-form');
const nomeContato = document.getElementById('name');
const numeroContato = document.getElementById('phone');
let linhas = '';
const nomes = [];
const numeros = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    addContato();
    atualizaTabela()
})

function addContato(){

    if(numeros.includes(numeroContato.value)){
        alert('Este número ja foi adicionado!');
    }else{
        nomes.push(nomeContato.value);
        numeros.push(numeroContato.value);
        let linha = '<tr>';
        linha += `<td> ${nomeContato.value}</td>`;
        linha += `<td> ${numeroContato.value}</td>`; 
        linha += '</tr>';
    
        linhas += linha;
    }



    nomeContato.value = '';
    numeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

