function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    function sort(arr) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                console.log(arr[i], "jämt");
            } else {
                console.log(arr[i], "udda");
            }
        }
    };

    const siffror = [5,20,13,72,3,1,92,66,73];
    sort(siffror);
  
}
uppg9();

module.exports = { uppg9 };

