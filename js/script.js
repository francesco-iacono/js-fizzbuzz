// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
var numero = 0;
for (var i = 0; i < 100; i++) {
  numero = i + 1;
  console.log(numero);
  if ((numero % 3 == 0) && (numero % 5 == 0 )) {
      numero = numero + ' FizzBuzz';
      document.getElementById('numeri-line').innerHTML += numero + "<br>";
      console.log(numero);
  } else if (numero % 5 == 0 ) { //i multipli di 5 stampi Buzz
      numero = numero + ' Buzz';
      document.getElementById('numeri-line').innerHTML += numero + "<br>";
      console.log(numero);
  } else if (numero % 3 == 0) { //i multipli di 3 stampi “Fizz”
      numero = numero + ' Fizz';
      document.getElementById('numeri-line').innerHTML += numero + "<br>";
      console.log(numero);
  } else {
      document.getElementById('numeri-line').innerHTML += numero + "<br>";
  }
}
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
