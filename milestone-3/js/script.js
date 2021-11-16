// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100.
// MILESTONE 3
// assegna un colore per ogni attributo di multipleFizzBuzz

// inizio ciclo
for(let i = 0; i <= 100; i++) {

    // dichiaro variabile "multipleFizzBuzz"
    let multipleFizzBuzz;

    // dichiaro variabile "color"
    let color;

    // inizio ciclo condizioni
    // 1a condizione
    if (( i % 3  === 0 )&&( i % 5 === 0 )){ // se divisibile per 3 e 5 e senza resto

        multipleFizzBuzz = 'FizzBuzz'       // attribuisco il valore 'FizzBuzz' alla stringa multipleFizzBuzz
        color='red'                         // attribuisco il valore 'red' alla stringa color

    // 2a condizione
    } else if ( i % 3 === 0 ) {             // oppure se divisibile per 3 e senza resto

        multipleFizzBuzz = 'Fizz'           // attribuisco il valore 'Fizz' alla stringa multipleFizzBuzz               
        color='green'                       // attribuisco il valore 'green' alla stringa color 

    // 3a condizione
    } else if( i % 5  === 0 ) {             // oppure se divisibile per 5 e senza resto

        multipleFizzBuzz = 'Buzz'           // attribuisco il valore 'Buzz' alla stringa multipleFizzBuzz
        color='yellow'                      // attribuisco il valore 'yellow' alla stringa color

    // ultima condizione           
    } else {                                // oppure

        multipleFizzBuzz = i                // il restante lo associo a multipleFizzBuzz

    }

    // dichiaro che variabile newBox crei div con classe css .box dentro scritto valore multipleFizzBuzz
    const newBox = `
    <div class="box ${color}">${multipleFizzBuzz}</div>
    
    `;
    // dichiaro variabile boxesContainer associato al mio container
    const boxesContainer = document.querySelector('.container');
    // stampo dentro al container 
    boxesContainer.innerHTML += newBox;


    
}
 
