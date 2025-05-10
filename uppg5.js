function uppg5() {
    // skriv en if-sats som jämför två tal
    // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
    // annars skriv ut "Det andra talet är större än det första"
    const a = 5;
    const b = 10;

    if (a > b) {
        console.log("Det första talet är större än det andra");
    } else {
        console.log("Det andra talet är större än det första");
    }
}
uppg5();

module.exports = { uppg5 };
