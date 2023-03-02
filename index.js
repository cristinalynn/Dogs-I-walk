document.addEventListener('DOMContentLoaded', () => {
    
    getButton();
})
function getButton() {
const allDogsButton = document.getElementById("all")
    allDogsButton.addEventListener("click", () => { getDogs()})
}



function getDogs() {
    fetch('http://localhost:3000/dogs') 
    .then(response => response.json())
    .then(data => showDogs(data))
}

function showDogs(dogs) {
    dogs.forEach(dog => { 
        const h2 = document.createElement("h2")
        h2.innerText = dog.name
       const dogContainer = document.getElementById("dogs-container")
        const img = document.createElement("img")
        img.src = dog.image
        img.className = "dog-img"
        dogContainer.append(h2, img)
        
    })
}


 