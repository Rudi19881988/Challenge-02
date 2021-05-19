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

let name = prompt("Bitte Namen eingeben:");
let age = parseInt(prompt("Bitte alter eingeben"));

switch (true) {
    case (age >=0 && age <=5): console.log(name + " darf Milch trinken");
        break;
    case (age >=6 && age <=12): console.log(name + " darf saft trinken");
        break;
    case (age >=13 && age <=17): console.log(name + " darf Cola trinken");
        break;    
    case (age >=17 && age <=120): console.log(name + " darf Wein trinken");
        break;
    default:
        console.log("Etwas stimmt nicht, Eingabe war nich richtig!");
        break;
}