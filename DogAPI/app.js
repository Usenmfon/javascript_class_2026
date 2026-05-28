const section = document.getElementsByTagName('section')[0]
const div = document.getElementsByTagName('div')[0]

listOfDogBreeds = ['affenpinscher', 'boxer', 'chihuahua', 'dachshund', 'german']

listOfDogBreeds.forEach(breed => {
    let btn = document.createElement('button')
    btn.textContent = breed

    btn.addEventListener('click', function(){
        fetchImage(btn.textContent)
    })

    section.appendChild(btn)
})



function fetchImage(breed){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(data => displayImage(data.message))
    .catch(err => {
        if(err.message == 'Failed to fetch')
        {
            alert("Please check your network and try again!")
        }
    })
}

let img = document.createElement('img')

function displayImage(imageURL)
{
    img.src = imageURL
    div.appendChild(img)
}

fetchImage('boxer')