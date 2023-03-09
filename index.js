const dogs = []
document.addEventListener('DOMContentLoaded', () => {    fetch('http://localhost:3000/dogs') 
    .then(response => response.json())
    //.then(data => showDogs(data))
    .then(data => getDogs(data))
    //console.log(dogs)
    //const searchForm = document.querySelector("form");
   
    const dogBreedVal = document.getElementById("search-form");
    dogBreedVal.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(dogs) 
        console.log(dogBreedVal)
        console.log(e.target.dogBreed.value)
        const findDogs = dogs.filter(dog => dog.dogBreed === e.target.dogBreed.value)
        const h2 = document.createElement("h2");
        h2.innerText = dogs.name;
        //console.log(h2)
        const dogContainer = document.getElementById("searchByDogBreed_container")
        const img = document.createElement("img")
        img.src = dogs.image
        img.className = "dog-img"
        //console.log(img)
        dogContainer.append(h2, img)
    })
        
    //console.log(findDogs)})
    //init();
    const allDogsButton = document.getElementById("all")
    allDogsButton.addEventListener("click", () => { showDogs()})
    //getButton();
})


function getDogs(data) {
    data.forEach((dog) => dogs.push(dog))
    console.log(dogs)
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

// const init = () => {
//     const inputForm = document.querySelector("form");

//     inputForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         console.log(dogs)})
       
        // handleSearchByDogbreed(e.target.searchByDogbreed.value)
        // e.preventDefault();
        // findDogs = dogs.filter(data => data.dogBreed === showDogs)
        
        // const input = document.querySelector("input#searchByDogbreed")
        // const h2 = document.createElement("h2")
        // h2.innerTex = dogs.dogBreed
        // const dogContainer = document.getElementById("dogs-container")
        // const img = document.createElement("img")
        // img.src = dogs.image
        
    // })
// }

//function handleSearchByDogbreed(searchByDogbreed) {
    //console.log(searchByDogbreed)
    
    // const p = document.createElement("p")
    // p.textContent = searchByDogbreed
    // document.querySelector("#searchByDogBreed_container").appendChild(p)



