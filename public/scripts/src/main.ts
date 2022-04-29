import axios from "axios";

//get the elements from the dom 
const inputFeed = (<HTMLInputElement>document.getElementById("input-feed"));
const searchButton = document.getElementById("search-button");
searchButton?.addEventListener("click", async () => {
    const searchTerm = inputFeed?.value;
    if (searchTerm) {
        window.location.href = `resource/v1/search?q=${searchTerm}`;
    }
    else {
        alert("Please enter a search term");
    }
})


//get the elements from the dom
const navigationButton = (<HTMLInputElement>document.getElementById("navigation-button"));
const navigation = (<HTMLInputElement>document.getElementById("navigation"));
navigationButton.addEventListener("click", () => {
    navigation.classList.toggle("navigation-active");
})

