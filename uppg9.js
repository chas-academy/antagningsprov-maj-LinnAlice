function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    function sort(siffror) {

        for (let i = 0; i < siffror.length; i++) {
            // Kolla ifall talet är jämt, annars udda
            if (siffror[i] % 2 == 0) {
                console.log(siffror[i]);
                console.log("jämt");
            } else {
                console.log(siffror[i]);
                console.log("udda");
            }
        }
    };

    const siffror = [5,20,13,72,3,1,92,66,73];
    sort(siffror);
  
}

module.exports = { uppg9 };
