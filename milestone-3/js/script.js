// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100.
// MILESTONE 3
// assegna un colore per ogni attributo di multipleFizzBuzz

// inizio ciclo
for(let i = 0; i <= 100; i++) {
    
    // dichiaro variabile "multipleFizzBuzz" 
    let multipleFizzBuzz;
    
    // stampo
    // dichiaro che variabile newBox crei div con classe css .box dentro scritto valore multipleFizzBuzz
    const newBox = `
    <div class="box">${multipleFizzBuzz}</div>
    `;
    // dichiaro variabile boxesContainer associato al mio container
    const boxesContainer = document.querySelector('.container');
    // stampo dentro al container 
    boxesContainer.innerHTML += newBox;
    // parto con la condizione
    if (( i % 3  === 0 )&&( i % 5 === 0 )){ // se divisibile per 3 e 5 e senza resto
        multipleFizzBuzz = 'FizzBuzz'
        const element = document.querySelector('.box');
        element.classList.add('red'); // attribuisco valore stringa FizzBuzz
    } else if ( i % 3 === 0 ) {             // oppure se divisibile per 3 e senza resto
        multipleFizzBuzz = 'Fizz'        // attribuisco valore stringa Fizz
    } else if( i % 5  === 0 ) {             // oppure se divisibile per 5 e senza resto
        multipleFizzBuzz = 'Buzz'    // attribuisco valore stringa Buzz
    } else {                                // oppure se divisibile per 5 e senza resto
        multipleFizzBuzz = i                // attribuisco valore stringa Buzz
    }



    
}
 
