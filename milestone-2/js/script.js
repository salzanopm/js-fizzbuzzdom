// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100.
// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html
// con il numero o la stringa corretta.

// inizio ciclo
for(let i = 1; i <= 100; i++) {
    
    // dichiaro la variabile "multipleFizzBuzz" 
    let multipleFizzBuzz;

      // inizio ciclo condizioni
    // 1a condizione
    if (( i % 3  === 0 )&&( i % 5 === 0 )){ // se divisibile per 3 e 5 e senza resto

        multipleFizzBuzz = 'FizzBuzz'       // attribuisco il valore 'FizzBuzz' alla stringa multipleFizzBuzz

    // 2a condizione
    } else if ( i % 3 === 0 ) {             // oppure se divisibile per 3 e senza resto

        multipleFizzBuzz = 'Fizz'           // attribuisco il valore 'Fizz' alla stringa multipleFizzBuzz 

    // 3a condizione
    } else if( i % 5  === 0 ) {             // oppure se divisibile per 5 e senza resto

        multipleFizzBuzz = 'Buzz'           // attribuisco il valore 'Buzz' alla stringa multipleFizzBuzz

    // ultima condizione           
    } else {                                // oppure

        multipleFizzBuzz = i                // il restante lo associo a multipleFizzBuzz

    }

    //stampo in console valore multipleFizzBuzz
    console.log(multipleFizzBuzz);

    // stampo
    console.log(i);
    // dichiaro che variabile newBox crei div con classe css .box dentro scritto valore multipleFizzBuzz
    const newBox = `
    <div class="box">${multipleFizzBuzz}</div>
    `;
    // dichiaro variabile boxesContainer associato al mio container
    const boxesContainer = document.querySelector('.container');
    // stampo dentro al container 
    boxesContainer.innerHTML += newBox;

}
 
