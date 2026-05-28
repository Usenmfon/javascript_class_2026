
// https://jsonplaceholder.typicode.com - base URL
// photos - endpoint

fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
            return response.json()
      })
      .then(data => {
            console.log(data)
            return displayCard(data.filter((item, index) => index < 10))
      })

function displayCard(photos)
{
   for(let i = 0; i < photos.length; i++)
   {
    let card = document.createElement('div')
    card.classList.add('card')

    let id = document.createElement('p')
    let title = document.createElement('p')
    let image = document.createElement('img')

    id.textContent = `ID: ${photos[i].id}`
    title.textContent = `Title: ${photos[i].title}`
    // image.src = photos[i].url
    image.src = 'https://storage.googleapis.com/cdn4.thedogapi.com/optimized/8i1u7eq1KM.jpg'


    card.appendChild(id)
    card.appendChild(title)
    card.appendChild(image)
    document.body.appendChild(card)
   }
}



// let fruits = ['apple', 'orange', 'banana', 'grape', 'mango']

// let result = fruits.filter((item, index) => index < 3)

// console.log(result)