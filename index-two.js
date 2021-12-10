dataArray();

function dataArray() {
    let i;
    let t;
    let randomArray = [];

    for (i = 0, t = 100; i < t; i++) {

        randomArray.push(Math.round(Math.random() * t));
        console.log(randomArray);
    }

    let multRandomArray = randomArray.map(t => t * 3);
    return console.log(multRandomArray);

}