function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomInt(1, 10);
console.log(randomNumber);
