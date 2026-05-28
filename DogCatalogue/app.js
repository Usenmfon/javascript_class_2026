const body = document.body;

fetch('https://dog.ceo/api/breed/hound/images')
.then(res => res.json())
.then(data => displayImages(data.message))
// .then(data => displayImages(data.message.filter((item,index) => index % 2 == 0)))


function displayImages(dogs)
{
    dogs.forEach(dogUrl => {
        let div = document.createElement('div')
        let img = document.createElement('img')

        img.src = dogUrl
        
        div.appendChild(img)
        body.appendChild(div)
    })

    let div = document.getElementsByTagName('div')[3]
    console.log(div)
}
