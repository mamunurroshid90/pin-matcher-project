function getPin(){
    const pin = Math.round(Math.random()* 10000);
    // numbers convert to string
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('gettin 3 pin then again calling ');
        return getPin();
    }

}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    
})

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;

    // Error and success message handle 
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if(pin == typedNumber){
        // if pin success then fail message display none
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        // if pin error then success message display none
        failError.style.display = 'block';
        successMessage.style.display = 'none';

    }
}