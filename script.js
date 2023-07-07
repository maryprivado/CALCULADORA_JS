let displayValue = '';

function appendCharacter(character){
    displayValue += character;
    updateDisplay();
}

function clearDisplay(){
    displayValue = '';
    updateDisplay();
}

function calculateResult(){
    try{
        const result =  eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch(error){
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay(){
    document.getElementById('display').value = displayValue;
}