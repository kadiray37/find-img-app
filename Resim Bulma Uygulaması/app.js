const formWrapper = document.querySelector("#form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector("#button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector("#image-list-wrapper");
runEventListeners();
function runEventListeners() {
    searchButton.addEventListener("click", search);
    clearButton.addEventListener("click", clear);
}
function clear() {
    searchInput.value = '';
    // Array.from(imageListWrapper.children).forEach((child) => {
    //     child.remove();
    // })
    imageListWrapper.innerHTML = '';
}
function search(e) {
    let value = searchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID tT40pB_ALVFJRCZ3uCV_tbQx4Gkf563YuLHw3S0tXvU"
        }
    })
    .then((res) => res.json())
    .then((data) => {
        Array.from(data.results).forEach((image) => {
            addImageToUI(image.urls.small);
        });
    })
    .catch((err) => console.log(err));  
    e.preventDefault();
}
function addImageToUI(url) {
    const div = document.createElement("div");
    div.className = "card";
    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.height = "400";
    img.width = "400";
    div.appendChild(img);
    imageListWrapper.appendChild(div);
}




// acces key   tT40pB_ALVFJRCZ3uCV_tbQx4Gkf563YuLHw3S0tXvU