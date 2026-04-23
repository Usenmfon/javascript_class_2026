
function outer()
{
    let name = "Tommy";

    function inner()
    {
        console.log(name);
    }

    return inner;
}

let personName = outer()
// personName()
// personName()
// personName()


function countFunction()
{
    let count = 0;

    function increase()
    {
        count++;
        console.log(count)
    }

    return increase;
}

counter = countFunction()

for(let i = 1; i <= 5; i++)
{
    counter()
}