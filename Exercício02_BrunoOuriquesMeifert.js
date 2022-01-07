/* 
        Modelo

function run(input){
    Dê ao batman um poder;
    E depois retorne o objeto inteiro;
    
    Escrever pelo menos 2 soluções diferentes;

};

let person = {
    name: 'Batman',
    power: ''
}

run(um_objeto);

*/


/* Primeira Solução */
 
let person = {
    name: 'Batman',
    power: ''
}

function run00(person){
    person.power = 'Super Força'
    return person;
}

console.log(run00(person));

/* Segunda Solução */


function run01(input){
    person.power = input
    console.log(person)
}

run01('Teletransporte');