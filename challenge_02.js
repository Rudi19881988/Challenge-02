/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/* Getränke-Challenge */

let vorname = prompt("Bitte Vorname eingeben:");

while (isNaN(vorname) == false)
 {
    vorname = prompt("Bitte Vorname eingeben");
}

let age = parseInt(prompt("Bitte alter eingeben:"));

while (isNaN(age) || age >= 120)
 {
    age = prompt("Bitte geben Sie das richtige Alter ein")
}

switch (true) 
{
    case (age >=0 && age <=5): console.log(vorname + " darf Milch trinken.");break;
    case (age >=6 && age <=12): console.log(vorname +" darf Saft trinken.");break;
    case (age >=13 && age <=17): console.log(vorname + " darf Cola trinken.");break;
    case (age > 17): console.log(vorname + " darf Wein trinken.");break;
    default: console.log("wOOt?!?");
    break;
};