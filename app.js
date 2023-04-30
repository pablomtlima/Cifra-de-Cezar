const input = document.querySelector('input')
const submit = document.querySelector('button')
const resultFrame = document.querySelector('.result')
const keyInput = document.querySelector('#key')

let keyInputUser = 0

function insertResult(event) {
    const userInput = event.target.value
    
    submit.addEventListener('click', event => {
        event.preventDefault();

        criptografy(userInput, keyInputUser)
        
    })
}

input.addEventListener('input', insertResult)

keyInput.addEventListener('input', event => keyInputUser = event.target.value)


