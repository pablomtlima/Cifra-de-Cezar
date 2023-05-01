const input = document.querySelector('input')
const submit = document.querySelector('#submit')
const resultFrame = document.querySelector('.result')
const keyInput = document.querySelector('#key')
const encrypt = document.querySelector('#encrypt')
const decrypt = document.querySelector('#decrypt')
const encryptFrame = document.querySelector('.encryptFrame')
const decryptFrame = document.querySelector('.decryptFrame')

console.log(encrypt.getAttributeNames())
console.log(decrypt.getAttributeNames())

encrypt.addEventListener('click', ()=>{
    decryptFrame.classList.add('hidden')
    encryptFrame.classList.remove('hidden')
})

decrypt.addEventListener('click', ()=>{

    encryptFrame.classList.add('hidden')
    decryptFrame.classList.remove('hidden')
})

let keyInputUser = 0

function insertResult(event) {
    const userInput = event.target.value
    
    submit.addEventListener('click', event => {
        event.preventDefault();

        const resultEncryptedData = criptografy(userInput, keyInputUser)

        resultFrame.textContent = resultEncryptedData
    })
}

input.addEventListener('input', insertResult)

keyInput.addEventListener('input', event => keyInputUser = Number(event.target.value))


