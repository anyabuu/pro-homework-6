makeMassive ();

function makeMassive() {

    let userInput;
    let arrAnswer = [];
    let result;
    

    do {
        userInput = prompt('Enter your data');

        if (userInput === ''|| userInput === null) {
            arrAnswer.pop();
            console.log(arrAnswer);
        } else if (userInput === 'stop') {
            break;
        } else {
            arrAnswer.push(userInput);
            console.log(arrAnswer);
        }

    } while (true)
}