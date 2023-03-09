const dogs = []
document.addEventListener('DOMContentLoaded', () => {    fetch('http://localhost:3000/dogs') 
    .then(response => response.json())
    .then(data => getDogs(data))
    
   
    const dogBreedVal = document.getElementById("search-form");
    dogBreedVal.addEventListener("submit", (e) => {
        e.preventDefault();
        const findDogs = dogs.filter(dog => dog.dogBreed === e.target.dogBreed.value)
        findDogs.forEach((dog) => {
            const h2 = document.createElement("h2");
            h2.innerText = dog.name;
            const dogContainer = document.getElementById("searchByDogBreed_container")
            const img = document.createElement("img")
            img.src = dog.image
            img.className = "dog-img"
            dogContainer.append(h2, img)
        })
    })    
   
    const allDogsButton = document.getElementById("all")
    allDogsButton.addEventListener("click", () => { showDogs()})
    
})


function getDogs(data) {
    data.forEach((dog) => dogs.push(dog))
    
}

function showDogs() {
    dogs.forEach(dog => { 
        dogs.push(dog)
        const h2 = document.createElement("h2")
        h2.innerText = dog.name
       const dogContainer = document.getElementById("dogs-container")
        const img = document.createElement("img")
        img.src = dog.image
        img.className = "dog-img"
        dogContainer.append(h2, img)
        
    }
    );

 
}






