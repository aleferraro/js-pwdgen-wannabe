/*
Chiedi all'utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito

Infine scrivi sulla pagina nomecognomecolorepreferito19
*/

var nome = prompt("Ciao, qual'è il tuo nome?");

var cognome = prompt("Qual'è il tuo cognome?");

var colorePreferito = prompt("Qual'è il tuo colore preferito?");

document.getElementById("password").innerHTML = '<strong>La tua nuova password è: </strong>' + nome + cognome + colorePreferito + '19';
