const products = [
    {
        name: "Product 1",
        image: "https://via.placeholder.com/300x200",
        title: "Amazing Product 1",
        description: "This is a detailed description of Product 1. It's an amazing item that you'll love!",
        buttonText: "Buy Now"
    },
    {
        name: "Product 2",
        image: "https://via.placeholder.com/300x200",
        title: "Fantastic Product 2",
        description: "Product 2 is fantastic! It has many great features that make it stand out from the rest.",
        buttonText: "Learn More"
    },
    // Add more products as needed
];

function createProductCard(product) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text flex-grow-1">${product.description}</p>
                    <a href="#" class="btn btn-primary mt-auto">${product.buttonText}</a>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('productContainer');
    products.forEach(product => {
        productContainer.innerHTML += createProductCard(product);
    });
});
