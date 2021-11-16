// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi in console “Fizz” al posto del numero e per i multipli di 5 stampi in console Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console FizzBuzz.

// dichiaro variabile "i" parte da zero finisce a 100 e incrementa di 1
for(let i = 0; i <= 100; i++) {
    // stampo
    console.log(i);

    // dichiaro variabile "multipleFizzBuzz" 
    let multipleFizzBuzz;

    // parto con la condizione
    if (( i % 3  === 0 )&&( i % 5 === 0 )){ // se divisibile per 3 e 5 e senza resto
        multipleFizzBuzz = 'FizzBuzz'       // attribuisco valore stringa FizzBuzz
    } else if ( i % 3 === 0 ) {             // oppure se divisibile per 3 e senza resto
        multipleFizzBuzz = 'Fizz'           // attribuisco valore stringa Fizz
    } else if( i % 5  === 0 ) {             // oppure se divisibile per 5 e senza resto
        multipleFizzBuzz = 'Buzz'           // attribuisco valore stringa Buzz
    }
    //stampo in console valore multipleFizzBuzz
    console.log(multipleFizzBuzz);
}
 
