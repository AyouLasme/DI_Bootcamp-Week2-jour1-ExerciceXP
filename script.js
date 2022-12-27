
// exercice1
let PlatPreferee = "Foufou";
let RepasPrefereJournee = "Diner";
console.log("Mon plat préféré est le "+ PlatPreferee);
console.log("Mon Repas préféré de la journée est le "+RepasPrefereJournee);
console.log("j'aime le"+ PlatPreferee +"j'aime le manger au" + RepasPrefereJournee);


// Exercice2 partie1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
myWatchedSeriesLength = myWatchedSeries.length;
myWatchedSeries.join();
console.log("j'ai regardé " +myWatchedSeriesLength+ " series : " +myWatchedSeries )

//Exercice2 partie2
myWatchedSeries.splice(2, 2, "Friends");
myWatchedSeries.push("Alice in the bordland");
myWatchedSeries.unshift("Raw");
myWatchedSeries.splice(1,1);
myWatchedSeries[1].substr(2,1);
console.log("Mon taleau final est " +myWatchedSeries);

// Exercice3
temperature = 30;
TemepratureFareneheit = (temperature/5) * 9 + 39;
console.log("la temperature " +temperature+ "°C en temperature fahrenheit est: " +TemepratureFareneheit+ "°F");

// Exercice4
let c;
let a = 34;
let b = 21;

console.log(a+b); //first expression
    // Prediction:55 car a et b sont des nombres donc du meme type
    // Actual:55

a = 2;
console.log(a+b); //second expression
    // Prediction:23 a et b sont des nombres donc du meme type et a a une nouvelle valeur qui est 2
    // Actual:23

console.log(c);
    //Prediction:undefined car la variable c ne contient aucune valeur
    // Actual:undefined

console.log(3 + 4 + '5');
    // Prediction 75 car 3 et 4 sont des nombre et le resultat est 7 ajouté à une chaine de caractere '5'qui a été converti en nombre le resultat est 75

// Exercice5
typeof(15);
    // Prediction:number
    // Actual:number

typeof(5.5);
    // Prediction:number
    // Actual:number

typeof(NaN);
    // Prediction: Number
    // Actual: Number

typeof("hello")
    // Prediction:String
    // Actual:String

typeof(true);
    // Prediction: Boolean
    // Actual: Boolean

typeof(1 != 2);
    // Prediction: Boolean
    // Actual: Boolean

"hamburger" + "s"
    // Prediction: hamburgers
    // Actual: hamburgers

"hamburgers" - "s"
    // Prediction: NaN
    // Actual: NaN

"1" + "3"
    // Prediction: 4
    // Actual: 4

"1" - "3";
    // Prediction: -2
    // Actual: -2

"johnny" + 5;
    // Prediction: johnny5
    // Actual: johnny5

"johnny" - 5;
    // Prediction: NaN
    // Actual: NaN

99 * "hello";
    // Prediction: NaN
    // Actual: NaN

1 != 1;
    // Prediction: False
    // Actual: False

1 == "1";
    // Prediction: True
    // Actual: true

1 === "1";
    // Prediction: False
    // Actual: False


// Exercice6
5 + "34";
    // Prediction:39
    // Actual:534

5 - "4";
    // Prediction: -1
    // Actual:-1

10 % 5;
// Prediction:0
// Actual:0

5 % 10;
// Prediction:
// Actual:

"Java" + "Script";
// Prediction: JavaScript
// Actual: JavaScript

" " + " ";
// Prediction:"  "
// Actual:'  '

" " + 0;
// Prediction:" 0"
// Actual:' 0

true + true
// Prediction:2
// Actual:2

true + false
// Prediction:1
// Actual:1

false + true
// Prediction:1
// Actual:1

false - true
// Prediction:-1
// Actual:-1

!true
// Prediction:False
// Actual: False

3 - 4
// Prediction: -1
// Actual:-1

"Bob" - "bill"
// Prediction:NaN
// Actual: NaN
