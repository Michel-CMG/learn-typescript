// Test the default parameters of function
// Print will all be "Tom Cat"
function buildCatName(firstName: string, lastName: string = "Cat")
{
    return firstName + " " + lastName;
}
let tomcat = buildCatName("Tom", "Cat");
let tom = buildCatName("Tom");
console.log(tomcat);
console.log(tom);

function buildNameForTom(firstName: string = "Tom", lastName: string)
{
    return firstName + " " + lastName;
}
tomcat = buildNameForTom("Tom", "Cat");
let cat = buildNameForTom(undefined, "Cat");
console.log(tomcat);
console.log(cat);
