function generatePin(){
    const pinBox = document.getElementById('pinBox');
    pin = Math.round(Math.random()*10000);
    if((pin+'').length == 4){
        pinBox.value = pin;
    }
    else{
        generatePin();
    }
    document.getElementById('matched').style.display = 'none';
    document.getElementById('unmatched').style.display = 'none';
};

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calc = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calc.value = '';
        }
    }
    else{
        const previousNum = calc.value;
        const presentNum = number;
        calc.value = previousNum + presentNum;
    }
});
document.getElementById('submit-pin').addEventListener('click',function(){
    const generatedPin = document.getElementById('pinBox').value;
    const inputPin = document.getElementById('typed-numbers').value;
    document.getElementById('matched').style.display = 'none';
    document.getElementById('unmatched').style.display = 'none';
    if(generatedPin == inputPin){
        document.getElementById('matched').style.display = 'block';
    }
    else{
        document.getElementById('unmatched').style.display = 'block';
    }

});