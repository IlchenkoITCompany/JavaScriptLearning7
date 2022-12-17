/* Objects */
const phone = {
    brand: 'Apple',
    model: 'iPhone 14',
    memory: 64,
    cameras: {
        frontCamera: '6 Mp',
        backCamera: '48 Mp',
    },
    color: 'purple',
}

console.log(phone.cameras.backCamera);



/* Cycles */

/* I need to see only odd numbers in console */
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

/* I need to make a six-level triangle */
let length = 6;
let result = '';

for (let i = 1; i <= length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);

/* work with break, continue with tag in cycles */
first: for (let i = 0; i <= 2; i++) {
    console.log(`first level: ${i}`);
    second: for (let j = 1; j <= 3; j++) {
        console.log(`second level: ${j}`);
        third: for (let k = 1; k <= 5; k++) {
            console.log(`third level: ${k}`)
            if (k === 2) {
                continue first;
            }
        }
    }
}


/* cycle with post-condition (do/while) */
let resultOfDoWhile = '';
let iOfDoWhile = 0;
do {
    resultOfDoWhile += '*';
    iOfDoWhile++;
} while (iOfDoWhile <= 4);
console.log(resultOfDoWhile);


/* cycle while */ 
let iOfWhile = 0;
while (iOfWhile <= 10) {
    console.log(iOfWhile);
    iOfWhile++;
}




/* functions */

/* simple function */
function returnNeighboringNumbers(number) {
    let prev = number - 1;
    let next = number + 1;
    let result = [prev, number, next];
    return result;
}

console.log(returnNeighboringNumbers(10))



/* function to see number progress */
function getMathResult(numberToProgression, progression) {
    let result = ''
    if (typeof progression === "number" && progression > 0) {
        for (let i = 1; i <= progression; i++) {
            if (i === progression) {
                result += `${numberToProgression * i}`
            } else {
                result += `${numberToProgression * i}---`
            }
        }
    } else {
        return numberToProgression;
    }
    return result;
}

console.log(getMathResult(10, 3));

