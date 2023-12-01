const fs = require('fs');

let data = fs.readFileSync('input.data', 'utf8');
let strings = data.split('\n');
let result = 0;

const day1 = () => {
    let numbers = strings.map(string => {
        let nums = string.match(/\d+/g).join('');
        return Number(nums.charAt(0) + nums.charAt(nums.length - 1));
    });
    
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    console.log(result);
}


day1();