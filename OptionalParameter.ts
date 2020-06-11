// Test the optional parameter of function
function buildName(firstName: string, lastName?: string)
{
    if (lastName)
    {
        return firstName + ' ' + lastName;
    } else
    {
        return firstName;
    }
}
let tomcat = buildName("Tom', 'Cat");
let tom = buildName("Tom");

console.log(tomcat);
console.log(tom);
