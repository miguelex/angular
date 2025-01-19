function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply (firstNUmber: number, secondNumber?: number, base: number = 2): number {
    return firstNUmber * base;
}

const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1, 2);
const result3: number = multiply(5);

console.log({result, result2, result3});


export {};