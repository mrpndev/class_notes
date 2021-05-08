// Array Destructuring & Spread Operator
/*
Ability to unpack values from from arrays, or properties from objects into distinct variables while using the spread operator (...)

Spread operator pulls out all array elements and returns as a standalone list of elements.
*/

let fullName = ["Paul", "Niemczyk"]

let unpackedFullName = [...fullName]

// for (name of fullName) {
//     let nameNew = []
//     nameNew.push(name)
//     return nameNew
// }

// console.log(unpackedFullName)

// let editedFullName = [fullName]
// console.log(editedFullName)

// fullName.unshift("Mr.")

// console.log(fullName, unpackedFullName)

// console.log(Math.min(1, 5, -3))

let prices = [10.99, 5.99, 22.99, 6.88]
// console.log(Math.min(prices)) // errors out because Math.min requires integers to function
// console.log(Math.min(...prices)) // unpacks our array values

// Primitive data types stored inside memory as a variable and a value

let x = 10
let y = "abc"

let a = x
let b = y

// console.log(x, y, a, b)

// JS has 3 data types that are objects which reference to a value:
/*
    - array
    - function
    - object
*/

let arr = [ ]

arr.push(1)

// console.log(arr)

let reference = [1]
let refCopy = reference
// console.log(refCopy)

let persons = [{name: "Zach", age: 28}, {name: "Donovan", age: 30}]

let copiedPersons = [...persons]

persons.push({name: "Anna", age: 29})

copiedPersons[0].name = "Zachary"
persons[0].name = "Michael"

// console.log(persons)
// console.log("----------")
// console.log(copiedPersons)

/*
The return of the commands above returns Michael in person and copiedPersons array. This happens becase we copied the address to the place in memory with the CopiedPersons variable we created. We then changed teh value of our name key in teh memory itself. Any changed we make to either of the arrays will be reflected in its counterpart.
*/

let mappedPersons = persons.map(person => ({
    name: person.name,
    age: person.age
}))

mappedPersons[0].name = "Zachary"

// console.log(persons)
// console.log("----------")
// console.log(mappedPersons)

/*
Only copy what you plan on changing, and where you don't want those changes reflected in the original set of data.
*/

// Array Destructuring Continued

// let fullName = ["Paul", "Niemczyk"]

// let firstName = fullName[0]

// console.log(firstName)

// let [firstName, lastName] = fullName

// console.log(firstName)
// console.log(lastName)

/*
JS pulls values from fullName and assigns them based off their position to the variables we declared using destructuring.
*/

// Rest Syntax
/*
Utilizes the spread operator (...) to condense values into a single element rather than unpacking them.
    -   Any values left over from the original object will be packaged inside of it.
    -   Values can be skipped before packing them, by utilizing commas (,,,...myObject).
    -   Rest operator must be the last item of your destructured array syntax.

*/

let restArray = ["Paul", "Niemczyk", "Omit 1", {month: 6, day: 15, year: 1990}, "Omit 2", {sport: "volleyball"}, "Omit 3"]

let [firstName, lastName, , , ,...myObject] = restArray

console.log(firstName)
console.log(lastName)
console.log(myObject)
