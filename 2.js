let fs = require('fs');

function validatePassword(line) {
    // first and second numbers are separated by dash
    // colon is dividing the policy and passward
    let parts = line.split(/[-: ]+/g);
    //condition is that the first number is using min of the first alphabet, 
    //the second number is using max of the first alphabet
    let first = Number(parts[0]);
    let second = Number(parts[1]);
    let requiredWord = parts[2];
    let password = parts[3];
    let firstMatch = requiredWord === password.charAt(first - 1);
    let secondMatch = requiredWord === password.charAt(second - 1);
    return (firstMatch && !secondMatch) || (!firstMatch && secondMatch)
}


function countValidPassword(input) {


    return input.split('\n').filter(a => validatePassword(a)).length


    //results should be a count of vaild passwords(true) 

}

let data = fs.readFileSync('input2.txt', 'utf8').trimEnd();

console.log(countValidPassword(data));

//test
let input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`
//test
console.log(countValidPassword(input), 1)
