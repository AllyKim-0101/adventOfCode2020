let fs = require('fs');




function twoElements(a) {
    //find two elements which are 2020 when summed up
    for (let i = 0; i < a.length; i++) {
        for (let j = 1; j < a.length; j++) {
            let first = a[i];
            let second = a[j];
            if (sumTo2020(first, second)) {

                //multiply the two elements
                return first * second
            }
        }
    }
}


//goal: find sum of two param
function sumTo2020(a, b) {
    return a + b === 2020
}


let data = fs.readFileSync('input1.txt', 'utf8');

let lines = data.split("\n")
let numbers = lines.map(line => Number(line));


console.log(twoElements(numbers));



//test
console.log(sumTo2020(1721, 299));
console.log(sumTo2020(1721, 199));
console.log(twoElements([
    1721,
    979,
    366,
    299,
    675,
    1456
]));
