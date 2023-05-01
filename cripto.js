// créditos ao colega da Descomplica Léo

function criptografy(userInput, keyInputUser) {
  let encryptedData = ''

  for( let index in userInput) {

    console.log(userInput[index])

    
    const currentCharCode = userInput.charCodeAt(index)

    if(userInput[index] === ' '){
      console.log('é space')
      encryptedData += ' '
    } else {
      const newCharCode = currentCharCode + keyInputUser
      encryptedData += String.fromCharCode(newCharCode)
    }
  }

   return encryptedData
}

