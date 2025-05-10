// PRIMITIVE DATA TYPE

// String, Number, Boolean, Undefined, Null, Symbol, BigInt


// NON PRIMITIVE (REFERENCE) DATA TYPE

// array, Objects, Functions


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Two type of Memories --->   Stack --> for Primitive Data Types                        Heap --> For  Npn Primitive DataTypes



let someName = "Creature"
let anotherName = someName
anotherName = "Animal"

console.log(someName);
console.log(anotherName);                    // someName Value will not change as Only copy of someName get assigned to the anotherName



let userOne = {
    userName : "Alan",
    coseName : "WalkerWorld",
    city : "Austria"
}

let userTwo = userOne            // The actual Reference get assigned to the Variable
userTwo.city = "India"       


console.log(userOne.city);
console.log(userTwo.city)


