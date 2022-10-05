/* Istruzioni */

// Chiedi all’utente il suo nome
const askName = prompt('Qual è il tuo nome?')

// poi chiedi il suo cognome
const askLastName = prompt('Qual è il tuo cognome?')

// poi chiedi il suo colore preferito

const favoriteColor = prompt('Qual è il tuo colore preferito')

//anno corrente
const currentYear = 22

// Infine scrivi sulla pagina nomecognomecolorepreferito22
document.getElementById('password').innerHTML = `La tua password sicurissima è: ${askName + askLastName + favoriteColor + currentYear}`
