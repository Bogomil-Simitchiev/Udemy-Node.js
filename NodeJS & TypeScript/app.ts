const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const btnElement = document.getElementById('btn');


type numOfString = number | string;

function add(num1: numOfString, num2: numOfString) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        return num1 + num2;
    }
    else if (typeof num1 == 'string' && typeof num2 == 'string') {
        return num1 + '-' + num2;
    }
    return +num1 + +num2;
}

let arrayOfNumbers: Array<number> = [];
let arrayOfStrings: Array<string> = [];


btnElement?.addEventListener('click', () => {
    const resultNumber = add(+num1Element.value, +num2Element.value);
    const resultString = add(num1Element.value, num2Element.value);

    arrayOfStrings.push(resultString as string);
    arrayOfNumbers.push(resultNumber as number);

    console.log(arrayOfStrings);
    console.log(arrayOfNumbers);


})