const CresultFrame = document.getElementById('crypt_result')
const DresultFrame = document.getElementById('decrypt_result')
const CryptKey = document.getElementById('crypt_key')
const DecryptKey = document.getElementById('decrypt_key')
const CryptText = document.getElementById('crypt_text')
const DecryptText = document.getElementById('decrypt_text')
const encrypt = document.querySelector('#encrypt')
const decrypt = document.querySelector('#decrypt')
const encryptFrame = document.querySelector('.encryptFrame')
const decryptFrame = document.querySelector('.decryptFrame')
const cryptForm = document.getElementById('crypt_form');
const decryptForm = document.getElementById('decrypt_form');

decrypt.addEventListener('click', () => {
    encryptFrame.classList.add('hidden');
    decryptFrame.classList.remove('hidden');
});

encrypt.addEventListener('click', () => {
    decryptFrame.classList.add('hidden');
    encryptFrame.classList.remove('hidden');
});



cryptForm.addEventListener('input', (event) => {
    const targetElement = event.target;

    if (targetElement === CryptText || targetElement === CryptKey) {
        CresultFrame.textContent = criptografy(CryptText.value, CryptKey.value);
    }
});


decryptForm.addEventListener('input', (event) => {
    const targetElement = event.target;

    if (targetElement === DecryptText || targetElement === DecryptKey) {
        DresultFrame.textContent = decryptografy(DecryptText.value, DecryptKey.value);
    }
});

