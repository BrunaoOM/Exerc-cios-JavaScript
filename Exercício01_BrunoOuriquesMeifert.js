/* 
        Modelo

function run(input){
    Verificar se a palavra é "Carro";
    Se for, retorna true;
    Se não, retorna false;

    Escrever pelo menos 3 soluções diferentes;

};

run('carro');

*/


/* Primeira Solução */
function run00(input){
    if(input !== 'carro'){
        return false
    }else{
        return true
    }
}

console.log(run00('car'));

/* Segunda Solução */

function run01(input){
    if(input === 'Fusca'){
        return true
    }else{
        return false
    }
};

console.log(run01('carro'));

/* Terceira Solução */

const ArrowFunction = (input) => {
    return input === "carro" ? true : false;
}

console.log(ArrowFunction('carro'));