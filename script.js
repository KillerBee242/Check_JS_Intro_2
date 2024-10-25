// String Manipulation Functions

// Reverse string
function reverseString(str) {
    return str.split('').reverse().join('');
}
let phrase = reverseString('! ruojnoB');
console.log (phrase);


// Count Characters
function countCharacters(str) {
    return str.length;
}
let mots= countCharacters("GoMyCode");
console.log (mots);


// Capitalize Words
function UpCase(str){
    let words = str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return words.join(' ');
}
console.log(UpCase('je vais a gomycode'));



// Array Functions

// MiniMax
function miniMax(nums){
    return[Math.min(...nums), Math.max(...nums)];
}
let numbers = [7, 2, 9, 5, 8];
console.log(miniMax(numbers));

// Sum of Array
function sumArray(arr){
    var s = 0;
    for(var i = 0; i < arr.length; i++){
        s += arr[i];
    }
    return s;
}
let sum = [1, 2, 3, 4, 5];
console.log(sumArray(sum));

// Filter Array
function filtArray(numbers) {
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    const oddNumbers = numbers.filter(number => number % 2 !== 0);    
    return { evenNumbers, oddNumbers };
}
let filt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const { evenNumbers, oddNumbers } = filtArray(filt);
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);


// Mathematical Functions

// Factorial
function factorial(n) {
    // Factorial base cases: 0! = 1 and 1! = 1
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

// Prime Number Check
function isPrime(num){
    if (num < 2){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

function findPrimes(n){
    const primes = [];
    for (let i = 2; i <= n; i++){
        if (isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}

console.log(findPrimes(20));

// Fibonacci Sequence
function fibonacci(n){
    if (n < 3) return 1;

    let prev = 1;
    let curr = 1;

    for (let i = 2; i < n; i++){
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

function fibSequence(n){
    const fibo = [1,1];
    for (let i = 2; i < n; i++){
        const next = fibo[i - 1] + fibo[i - 2];
        fibo.push(next);
    }
    return fibo;
}

console.log(fibSequence(9));