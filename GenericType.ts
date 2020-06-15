function createArray<T>(length: number, value: T): Array<T>
{
    let result: T[] = [];
    for (let i = 0; i < length; i++)
        { result[i] = value; }
    return result;
}

let strs = createArray<string>(3, "x"); // ['x', 'x', 'x']
let numbers = createArray<number>(2,2093);

console.log(strs[0]);
console.log(strs[1]);
console.log(strs[2]);

console.log(numbers[0]);
console.log(numbers[1]);