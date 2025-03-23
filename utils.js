function generateRandomNumber(){
    return Math.floor(Math.random() * 100);
}

function celciusToFahrenheit(celcius){
    return celcius * 9/5 + 32;
}

//commonjs
module.exports = {
    generateRandomNumber,
    celciusToFahrenheit
};