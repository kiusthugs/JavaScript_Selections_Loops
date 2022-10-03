console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if(i % 2 > 0) {
        console.log(i)
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
    console.log(i)
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FIZZBUZZ')
    } else if (i % 5 == 0) {
        console.log('BUZZ')
    } else if (i % 3 == 0) {
        console.log('FIZZ')
    }
}


// Exercise 3 While
let j = 1
while(j <= 100) {
    if(j % 2 > 0) {
        console.log(j)
    }
    j++
}

let k = 1
while(k <= 100) {
    console.log(k)
    if (k % 3 == 0 && k % 5 == 0) {
        console.log('FIZZBUZZ')
    } else if (k % 5 == 0) {
        console.log('BUZZ')
    } else if (k % 3 == 0) {
        console.log('FIZZ')
    }
    k++
}

let l = 1

do {
    if (l % 2 > 0) {
        console.log(l)
    }
    l++
} while(l <= 100)

let m = 1

do {
    console.log(m)
    if (m % 3 == 0 && m % 5 == 0) {
        console.log('FIZZBUZZ')
    } else if (m % 5 == 0) {
        console.log('BUZZ')
    } else if (m % 3 == 0) {
        console.log('FIZZ')
    }
    m++ 
} while(m <= 100)

// Exercise 4
let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

console.log('Value: ' + value)
console.log('N: ' + n)

for (let i = 0; i <= value; i++) {
    console.log(i)
    if(i > n) {
        console.log('Did not find value')
        break
    } else if (i === value) {
        console.log("Found value at: " + i + "!" )
        break
    }
}

//Exercise 5
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let o = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(fizzDivisor + ' ' + buzzDivisor + ' ' + o + ' ' + start)

for (let i = start; i <= o; i++) {
    console.log(i)
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log('FIZZBUZZ')
    } else if (i % fizzDivisor == 0) {
        console.log('FIZZ')
    } else if (i % buzzDivisor == 0) {
        console.log('BUZZ')
    }
}