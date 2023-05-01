const input = document.querySelector('input')
const submit = document.querySelector('#submit')
const resultFrame = document.querySelector('.result')
const keyInput = document.querySelector('#key')
const encrypt = document.querySelector('.encrypt')
const decrypt = document.querySelector('.decrypt')


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


