const mailList = ["mario@gmail.com", "luigi@gmail.com", "peach@gmail.com", "daisy@gmail.com", "toad@gmail.com"];
const mailAsk = prompt("Inserisci la tua mail");


let mailFound = false;

for (let i = 0; i < mailList.length; i++) {
    const mailListItem = mailList[i];
    if (mailListItem == mailAsk) {
        mailFound = true;
    }
}

if (mailFound) {
    console.log("Accesso consentito");
} else {
    console.log("Accesso negato");
}