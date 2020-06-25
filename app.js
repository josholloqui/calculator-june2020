// get dom elements
// get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const boogerButton = document.getElementById('add-button');
// get the add-result span
const boogerSpan = document.getElementById('add-result');

// initialize state 

// set the event handler to the button
boogerButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    // add the two values together
    const sum = Number(value1) + Number(value2);

    // update the textContent of the span
    boogerSpan.textContent = sum;
});

const subInput1 = document.getElementById('sub-input1');

const subInput2 = document.getElementById('sub-input2');

const subButton = document.getElementById('sub-button');

const subEquals = document.getElementById('sub-equals');

subButton.addEventListener('click', () => {
    const value1 = subInput1.value;
    const value2 = subInput2.value;
    const difference = Number(value1) - Number(value2);
    subEquals.textContent = `= ${difference}`;
});

//mult = multiplication

const multInput1 = document.getElementById('mult-input1');

const multInput2 = document.getElementById('mult-input2');

const multButton = document.getElementById('mult-button');

const multEquals = document.getElementById('mult-equals');

multButton.addEventListener('click', () => {
    const value1 = multInput1.value;
    const value2 = multInput2.value;
    const xEquals = Number(value1) * Number(value2);
    multEquals.textContent = `= ${xEquals}`;
});

const divideInput1 = document.getElementById('divide-input1');

const divideInput2 = document.getElementById('divide-input2');

const divideButton = document.getElementById('divide-button');

const divideEquals = document.getElementById('divide-equals');

divideButton.addEventListener('click', () => {
    const value1 = divideInput1.value;
    const value2 = divideInput2.value;
    const divisionEquals = Number(value1) / Number(value2);
    divideEquals.textContent = `= ${divisionEquals}`;
});