 // Sample product data (replace with your actual product data)
 var products = [
    { name: "Product 1", image: "TBD Eyewear.jpg", description: "Description for Product 1", price: "$100" },
    { name: "Product 2", image: "This Ivy House.jpg", description: "Description for Product 2", price: "$120" },
    { name: "Branded sunglasses", image: "products-img\WhatsApp Image 2024-04-02 at 11.53.34 AM.jpeg", description: "Description for Product 2", price: "$120" }
   
     // Add more products as needed
];

// Product modal trigger
var modalTriggers = document.querySelectorAll('.product-modal-trigger');

modalTriggers.forEach((trigger, index) => {
    trigger.addEventListener('click', function() {
        var product = products[index];
        var modal = document.querySelector('.modal');
        var modalTitle = document.getElementById('modal-title');
        var modalImage = document.getElementById('modal-image');
        var modalDescription = document.getElementById('modal-description');
        var modalPrice = document.getElementById('modal-price');

        // Populate modal with product details
        modalTitle.textContent = product.name;
        modalImage.src = product.image;
        modalDescription.textContent = product.description;
        modalPrice.textContent = product.price;

        modal.style.display = 'flex';
    });
});

// Product modal close button
var modalCloseButtons = document.querySelectorAll('.product-modal-close');

modalCloseButtons.forEach(button => {
    button.addEventListener('click', function() {
        var modal = document.querySelector('.modal');
        modal.style.display = 'none';
    });
});
