const inputFieldKeliling = document.getElementById('inputFieldKeliling')
const inputFieldLuas = document.getElementById('inputFieldLuas')
const countButtonKeliling = document.getElementById('countButtonKeliling')
const countButtonLuas = document.getElementById('countButtonLuas')
const inputValueDisplayKeliling = document.getElementById('inputValueDisplay-keliling')
const inputValueDisplayLuas = document.getElementById('inputValueDisplay-luas')
const resultDisplayKeliling = document.getElementById('result-keliling')
const resultDisplayLuas = document.getElementById('result-luas')

inputFieldKeliling.addEventListener('input', function() {
    var inputValue = inputFieldKeliling.value.trim()
    if(!validateInteger(inputValue)) {
        countButtonKeliling.disabled = true
        document.getElementById('err_msg_kel').style.display="block"
    } else {
        countButtonKeliling.disabled = false
        document.getElementById('err_msg_kel').style.display="none"
    }
})

inputFieldLuas.addEventListener('input', function() {
    var inputValue = inputFieldLuas.value.trim()
    if(inputValue === '' || !validateInteger(inputValue)) {
        countButtonLuas.disabled = true
        document.getElementById('err_msg_luas').style.display="block"
    } else {
        countButtonLuas.disabled = false
        document.getElementById('err_msg_luas').style.display="none"
    }
})


countButton.addEventListener('click', updateButtonState); 

updateButtonState();

function validateInteger(input) {
    const integerRegex = /^-?\d+$/
    return integerRegex.test(input)
}

function displayAnswerKeliling() {
    const inputValue = inputFieldKeliling.value.trim()
    if(inputValue.length > 0) {
        inputValueDisplayKeliling.textContent = `K = 4 x ${inputValue}`

        const result = 4 * parseInt(inputValue);
        resultDisplayKeliling.textContent = `K = ${result}`

        document.getElementById('formula').style.display="block"
    } else {
        document.getElementById('err_msg_kel').style.display="block"
    }
}

function displayAnswerLuas() {
    const inputValue = inputFieldLuas.value.trim()

    if(inputValue.length > 0) {
        document.getElementById('formula-luas').style.display="block"

        inputValueDisplayLuas.textContent = `L = ${inputValue} x ${inputValue}`
    
        const result = parseInt(inputValue) * parseInt(inputValue);
        resultDisplayLuas.textContent = `L = ${result}`
    } else {
        document.getElementById('err_msg_luas').style.display="block"   
    }
}
