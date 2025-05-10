function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

const personer = [
    {name: "Linn", age: 26},
    {name: "Alfred", age: 34},
    {name: "Niklas", age: 30},
    {name: "Calle", age: 42},
    {name: "Henrik", age: 27},
]

function ageCheck (array) {
    for (let i = 0; i < array.length; i++) {
        // Kolla specifikt på age genom att skriva array[i].age
        if (array[i].age > 30) console.log(array[i].name);
    }
}

// Kör funktionen
ageCheck(personer);

}

uppg8();
module.exports = { uppg8 };
