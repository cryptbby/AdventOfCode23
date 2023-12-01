const fs = require('fs');

let data = fs.readFileSync('input.data', 'utf8');
let strings = data.split('\n');

const trebuchet = () => {
    let result = 0;

    for (let i = 0; i < strings.length; i++) {
        let nums = strings[i].match(/\d+/g).join('');
        let number = Number(nums.charAt(0) + nums.charAt(nums.length - 1));
        result += number;
    }

    console.log(result);
}

trebuchet();