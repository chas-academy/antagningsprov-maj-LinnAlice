function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna
    
    const bigEven = [];
    const smallOdd = [];
    const other = [];


    for (let i = 0; i < numbers.length; i++) {
      // Jämnför stora och jämna tal
        if(numbers[i] > 10 && numbers[i] % 2 == 0) {
          bigEven.push(numbers[i])
        }
        // Jämnför små och ojämna tal
        else if (numbers[i] < 10 && numbers[i] % 2 == 1){
          smallOdd.push(numbers[i])
        }
        // Resterande tal som inte uppfyller ovanstående krav
        else {
          other.push(numbers[i])
        }
    }

    const arrays = {bigEven, smallOdd, other}

    return arrays;
  
  }

  console.log(uppg10());
  
  module.exports = { uppg10 };
  
