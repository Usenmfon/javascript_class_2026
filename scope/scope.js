let gender = 'male' // Global Scope

function personData()
{
    let name = "Tommy" // Local Scope
}

// console.log(name);

if(true)
{
    name = "ksks"
    const age = 234 // Local Scope
    var dob = '1990' // Block Scope
    // console.log(age)
}

let personName = "Hanson"; //Global scope

function greetings()
{
    let intro = "Hello"; //local scope But global to details function
    function details()
    {
        console.log(intro);
        console.log(personName);
    }
    details()
}

greetings();
