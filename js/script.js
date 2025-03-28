document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.background = "#002855";
        } else {
            header.style.background = "linear-gradient(90deg, #004a99, #001f4d)";
        }
    });
	
	
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Molimo ispunite sva polja!");
        return;
    }

    alert("Poruka je uspješno poslana!");
    this.reset();
});


    const services = document.querySelectorAll(".service-card");
    services.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.15)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });

});

document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            document.getElementById("cart-count").textContent = cartCount;
            alert("Proizvod dodan u košaricu!");
        });
    });

    document.getElementById("loginForm")?.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Prijava uspješna!");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total");
    const cartModal = document.querySelector(".cart-modal");
    const openCartButton = document.querySelector(".open-cart");
    const closeCartButton = document.querySelector(".close-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const product = button.closest(".product");
            const productName = product.querySelector(".product-name").textContent;
            const productPrice = parseFloat(product.querySelector(".product-price").textContent.replace("€", ""));
            const productImage = product.querySelector("img").src;

            const existingItem = cart.find(item => item.name === productName);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
            }
            updateCart();
        });
    });

    openCartButton.addEventListener("click", () => {
        cartModal.style.display = "block";
    });

    closeCartButton.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    function updateCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" width="50">
                <p>${item.name}</p>
                <p>${item.quantity} x ${item.price.toFixed(2)}€</p>
                <button class="remove-from-cart" data-name="${item.name}">❌</button>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.quantity * item.price;
        });

        cartTotal.textContent = `Ukupno: ${total.toFixed(2)}€`;
        setupRemoveButtons();
    }

    function setupRemoveButtons() {
        document.querySelectorAll(".remove-from-cart").forEach(button => {
            button.addEventListener("click", () => {
                const name = button.getAttribute("data-name");
                cart = cart.filter(item => item.name !== name);
                updateCart();
            });
        });
    }
});



