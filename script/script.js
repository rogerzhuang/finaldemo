const images = document.querySelectorAll("img");
const album = document.querySelector(".album");
const cart = document.querySelector(".cart")

let albums = [
    {name: "Album 1", price: 12.99, addedToCart: false},
    {name: "Album 2", price: 14.99, addedToCart: false}, 
    {name: "Album 3", price: 9.99, addedToCart: false}, 
    {name: "Album 4", price: 19.99, addedToCart: false}];

for (let image of images) {
    image.addEventListener("mousemove", () => {
        image.classList.add("opaque");
    })
    image.addEventListener("mouseleave", () => {
        image.classList.remove("opaque");
    })
}

album.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        let item = albums.find(item => item.name === e.target.alt);
        if (item.addedToCart === true) {
            alert("The album has already been added to the shopping cart");
            return;
        }
        let div = document.createElement("div");
        let title = document.createElement("span");
        title.textContent = e.target.alt;
        let price = document.createElement("span");
        price.textContent = item.price;
        div.appendChild(title);
        div.appendChild(price);
        div.classList.add("cartList");
        cart.appendChild(div);
        item.addedToCart = true;
    }
})


