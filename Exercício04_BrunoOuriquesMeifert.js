/* 
        Modelo

function run(input){
    Transforme o JSON em um obejto navegável;
    Acesse e altere a key 'name' do obejto JSON para 'Superman';
    E depois retorne o novo JSON em formato de String;
    
    Escrever pelo menos 2 soluções diferentes;

};

let json = '{'name':'Batman'}'; É uma String.

run(json);

*/


/* Primeira Solução */
 
let json = '{"name":"Batman"}';

function run00(input){
    json = JSON.parse(input);
    json.name = `Superman`;
    json = JSON.stringify(json);
    console.log(json);
}

run00(json);

/* Segunda Solução */

function run01(json) {
    let json1 = JSON.parse(json);
    json1["name"] = `Superman1`;
    return JSON.stringify(json1);
}

console.log(run01(json));