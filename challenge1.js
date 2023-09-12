/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName(){
    console.log(`Moodhy`)
};
printName();


/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(age){
    console.log(`You were born in ${2023-age}
    `);
}

printAge (31);



/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */



function printHello(name, language){
    if (language == "English"){
        console.log(`Hello ${name}`)
    };

    if (language == "Spanish"){
        console.log(`Hola ${name}`)
    };

    if (language == "French"){
        console.log(`Bonjour ${name}`)
    };

    if (language == "Turkish"){
        console.log(`Merhaba ${name}`)
    };
}

printHello ("Moodhy", "French")


/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(x, y){
    if(x>y){
        console.log(x);
    } else {
        console.log(y);
    }
}

printMax(5, 2);
