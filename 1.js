let fs = require('fs');




function twoElements(a) {
    //find two elements which are 2020 when summed up
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            for (let k = j + 1; k < a.length; k++) {
                let first = a[i];
                let second = a[j];
                let third = a[k];

                if (sumTo2020(first, second, third)) {

                    //multiply the two elements
                    return first * second * third
                }
            }

        }
    }
}


//goal: find sum of two param
function sumTo2020(a, b, c) {
    return a + b + c === 2020;
}


let data = fs.readFileSync('input1.txt', 'utf8');

let lines = data.split("\n")
let numbers = lines.map(line => Number(line));


console.log(twoElements(numbers));



//test
console.log(twoElements([
    1721,
    979,
    366,
    299,
    675,
    1456
]));
