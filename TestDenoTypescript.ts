// Use deno to run the Typescript!
// Very very easy than node.js
// Install deno from deno.land
//     Just copy the single file deno to your home
//     And add the env var in your shell config(such as .bashrc)
// deno run TestTypescript.ts
// Happy!

// Simple HelloWorld like test for ts

function sayHello(person: string)
{
    return "Hello, " + person;
}

let user = "Michel";
console.log(sayHello(user));
console.log();
