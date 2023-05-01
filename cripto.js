function criptografy(userInput, keyInputUser) {
  let encryptedData = ''

  for( let index in userInput) {
    const currentCharCode = userInput.charCodeAt(index)
    const newCharCode = currentCharCode + keyInputUser
    encryptedData += String.fromCharCode(newCharCode)
    console.log(encryptedData)
  }

   return encryptedData
}

