var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var btnElement = document.getElementById('btn');
function add(num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        return num1 + num2;
    }
    else if (typeof num1 == 'string' && typeof num2 == 'string') {
        return num1 + '-' + num2;
    }
    return +num1 + +num2;
}
var arrayOfNumbers = [];
var arrayOfStrings = [];
btnElement === null || btnElement === void 0 ? void 0 : btnElement.addEventListener('click', function () {
    var resultNumber = add(+num1Element.value, +num2Element.value);
    var resultString = add(num1Element.value, num2Element.value);
    arrayOfStrings.push(resultString);
    arrayOfNumbers.push(resultNumber);
    console.log(arrayOfStrings);
    console.log(arrayOfNumbers);
});
