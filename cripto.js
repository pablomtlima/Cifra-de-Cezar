const alphabet = 'abcdefghijklmnopqrstuvwxyz';

console.log(alphabet.length)

function criptografy(userInput, keyInputUser) {
  let cripto = '';

  for (let i = 0; i < userInput.length; i++) {
    const char = userInput[i].toLowerCase();
    const index = alphabet.indexOf(char);

    if (index === -1) {
      cripto += char;
    } else {
      const newIndex = (index + Number(keyInputUser)) % alphabet.length;
      cripto += alphabet[newIndex];
    }
  }

  resultFrame.textContent = cripto;
}

// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// let cripto = []

// // console.log(cripto.join('')) //converte o array em string

// const criptografy = (userInput, keyInputUser) => {
//     cripto = []

//     Array.from(userInput).map(caractere => {
        
//         if(caractere === ' '){
//             cripto.push(' ')
//         }

//         for (let i = 0; i <= alphabet.length; i++) {

//             if (caractere.toLowerCase() === alphabet[i]) {
//                 cripto.push(alphabet[i + Number(keyInputUser)])
//             }
//         }
//     })

//     resultFrame.innerHTML = ''
//     resultFrame.insertAdjacentText('afterbegin', cripto.join(''))
//     console.log(cripto)
// }
