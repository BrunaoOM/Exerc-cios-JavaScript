/* 
        Modelo

function run(input){
    Dê ao batman um poder;
    Adicione uma nova característica a ele;
    E depois retorne a seguinte frase:
    "O {name} tem o poder de {power} e {caracteristica_nova_adicionada}"
    
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
    power: '',
    feature: ''
}

function run00(person){
    person.power = 'Super Força'
    person.feature = 'Coragem'
    return `O ${person.name} tem o poder de ${person.power} e ${person.feature}`;
}

console.log(run00(person));

/* Segunda Solução */


function run01(input,input2){
    person.power = input
    person.feature = input2
    console.log(`O ${person.name} tem o poder de ${person.power} e ${person.feature}`);
}

run01('Teletransporte','Perseverança');