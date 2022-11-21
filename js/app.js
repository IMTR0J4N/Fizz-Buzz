const genRandomArr = () => {
    return Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));    
}

const arr = genRandomArr();

for (const item of arr) {
    if (item % 3 === 0) {
        console.log(`${item} : Fizz !`);
    } else if (item % 5 === 0) {
        console.log(`${item} : Buzz !`);
    } else if (item % 15 === 0) {
        console.log(`${item} : Fizz Buzz !`);
    } else {
        console.log(`${item} : pas de Fizz ni de Buzz...`)
    }
}