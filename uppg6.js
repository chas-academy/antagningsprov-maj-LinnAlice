function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen

    const names = ["Linn", "Alfred", "Calle", "Niklas", "Henrik"];

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
uppg6();

module.exports = { uppg6 };
