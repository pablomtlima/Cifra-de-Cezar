// Função para criptografar uma mensagem
function criptografy(message, key) {
    let encryptedMessage = '';
    let shifts = transformMessage(key);

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);

        // Verifica se o caractere está no intervalo permitido de 32 a 254
        if (charCode >= 32 && charCode <= 255) {
            let shift = shifts[i % shifts.length];
            encryptedMessage += String.fromCharCode((charCode - 32 + shift) % 223 + 32);
        }
        // Caso contrário, mantém o caractere original
        else {
            encryptedMessage += message[i];
        }
    }

    return encryptedMessage;
}

// Função para descriptografar uma mensagem
function decryptografy(encryptedMessage, key) {
    let decryptedMessage = '';
    let shifts = transformMessage(key)

    for (let i = 0; i < encryptedMessage.length; i++) {
        let charCode = encryptedMessage.charCodeAt(i);

        // Verifica se o caractere está no intervalo permitido de 1 a 254
        if (charCode >= 32 && charCode <= 255) {
            let shift = shifts[i % shifts.length];
            decryptedMessage += String.fromCharCode((charCode - 32 - shift + 223) % 223 + 32);
        }
        // Caso contrário, mantém o caractere original
        else {
            decryptedMessage += encryptedMessage[i];
        }
    }

    return decryptedMessage;
}
// Função para transformar a chave em shifts
function transformMessage(message) {
    let transformedMessage = [];

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);
        transformedMessage.push(charCode);
    }

    return transformedMessage;
}