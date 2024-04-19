document.addEventListener('DOMContentLoaded', function () {
     // cart dummies
     let dummyProducts = [
        { id: 1, name: "Rose", price: 10 },
        { id: 2, name: "Tulip", price: 8 },
        { id: 3, name: "Sunflower", price: 6 }
    ];
    // Insert the navbar HTML into the DOM at the beginning of the body
    const navbarHTML = `
    <section class="top-navbar">
        <nav class="navbar navbar-expand-lg vanish-navbar">
            <div class="container">
                <a class="navbar-brand" href="home.html">
                    <img src="images/logo.png" alt="Logo"> <span id="logo-title">GardenWorks</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="home.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="services.html">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="gallery.html">Gallery</a>
                        </li>
                    </ul>
                    <div class="search-container" style="position: relative;">
                        <input id="searchInput" class="form-control me-2" type="search" placeholder="Search services..."
                            aria-label="Search" oninput="searchServices()">
                        <div id="searchSuggestions" class="suggestions-dropdown"
                            style="display: none; position: absolute; width: 100%; background-color: white; z-index: 1000;">
                            <!-- Suggestions will appear here -->
                        </div>
                    </div>
                    <div>
                        <div class="container text-center">
                            <div class="row ms-auto garden-navbar-icon">
                                <div class="col">
                                    <div class="cart-icon" data-toggle="modal" data-target="#cartModal">
                                        <i class="bi bi-cart"></i>
                                    </div>
                                    <ul class="dropdown-menu cart-dropdown-menu" aria-labelledby="cartDropdown" style="width:20%;">
                                        <!-- Cart items will be injected here -->
                                        
                                    </ul>
                                </div>
                                <div class="col">
                                    <div>
                                        <i id="heartIcon" class="bi bi-suit-heart"></i>
                                    </div>
                                </div>
                                <div class="col text-center">
                                    <div class="dropdown">
                                        <div class="garden-user-box rounded-circle dropdown-toggle" id="userDropdown"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            B
                                        </div>
                                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                            <li><a class="dropdown-item" href="#" onclick="logout()">Logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col">
                                <button id="darkModeToggle" class="btn btn-light" onclick="toggleDarkMode()">
                                    <i class="bi bi-moon-stars-fill"></i> <!-- Bootstrap icons for moon -->
                                </button>
                                </div
                            </div>
                            </div>
                        </div>
                        
                    </div>
                                    
                   
                </div>
            </div>
        </nav>
    </section>`;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    initializeNavbar();
    setupSearchFunctionality();
    // openModal();
    if (localStorage.getItem('darkMode') === 'true') {
        toggleDarkMode();
    }

    // Get the current page's filename from the pathname
    const currentLocation = window.location.pathname.split('/').pop();

    const navLinks = document.querySelectorAll('.top-navbar .nav-link'); // Select all nav links

    navLinks.forEach(link => {
        // Remove active class from all links first to clean up previous states
        link.classList.remove('active');

        // Get the href attribute of the link and compare it with the current page's filename
        const linkPath = link.getAttribute('href');
        const linkFilename = linkPath.split('/').pop(); // Get the filename part of the href

        // Check if the href filename matches the current location's filename
        if (linkFilename === currentLocation) {
            link.classList.add('active'); // Add 'active' class to the matching link
        }
    });

   
   
    updateCartDropdown(dummyProducts);
    const cartIcon = document.querySelector('.cart-icon');

    if (!cartIcon) {
        console.log('Cart icon not found');
        return;
    }
    // Open cart list
    cartIcon.addEventListener('click', function () {
       toggleCartDropdown();
    });

});

function initializeNavbar() {
    const heartIcon = document.getElementById('heartIcon');
    if (heartIcon) {
        heartIcon.addEventListener('click', function () {
            // Toggle between 'bi-suit-heart' and 'bi-suit-heart-fill'
            if (this.classList.contains('bi-suit-heart-fill')) {
                this.classList.replace('bi-suit-heart-fill', 'bi-suit-heart');
            } else {
                this.classList.replace('bi-suit-heart', 'bi-suit-heart-fill');
            }
        });
    }


}

// when user types into search bar
function setupSearchFunctionality() {
    const input = document.getElementById('searchInput');
    const searchForm = document.getElementById('garden-search');

    if (input && searchForm) {
        input.oninput = searchServices;
        searchForm.onsubmit = function (event) {
            event.preventDefault();
            navigateToServicePage();
        };
    } else {
        console.error('Search elements are not found');
    }
}

//  serch services list
function searchServices() {
    const input = document.getElementById('searchInput');
    const div = document.getElementById('searchSuggestions');
    const filter = input.value.toUpperCase();
    div.innerHTML = ''; // Clear previous suggestions
    div.style.display = input.value ? 'block' : 'none'; // Show/hide the dropdown

    const services = ['Lawn Care', 'Garden Design', 'Plant Health', 'Soil Treatment'];
    services.forEach(function (service) {
        if (service.toUpperCase().indexOf(filter) > -1) {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.textContent = service;
            suggestionDiv.onclick = function () {
                input.value = this.textContent;
                div.style.display = 'none'; // Hide the dropdown once a suggestion is clicked
                navigateToServicePage(); // Navigate when a suggestion is clicked
            };
            div.appendChild(suggestionDiv);
        }
    });
}
//  open the service page when user clicks any service
function navigateToServicePage() {
    window.location.href = 'services.html';
}

// logout user
function logout() {
    window.location.href = 'index.html';
}


// function to toggle dark mode
function toggleDarkMode() {
    const darkModeStyleLink = document.getElementById('darkModeStyle');
    if (!darkModeStyleLink) {
        // If the dark mode stylesheet doesn't exist, create it and append to head
        const link = document.createElement('link');
        link.id = 'darkModeStyle';
        link.rel = 'stylesheet';
        link.href = 'css/dark.css'; // Path to your dark mode CSS file
        document.head.appendChild(link);
    } else {
        // If it exists, toggle its disabled property
        darkModeStyleLink.disabled = !darkModeStyleLink.disabled;
    }

    // Optionally save the dark mode state in localStorage to persist state across sessions
    localStorage.setItem('darkMode', !darkModeStyleLink || !darkModeStyleLink.disabled);
}


//function to make cart work
function updateCartDropdown(dummyProducts) {
    this.dummyProducts = dummyProducts;
    const cartDropdown = document.querySelector('.cart-icon + .dropdown-menu');
    cartDropdown.innerHTML = ''; // Clear existing items

    // Add each product to the dropdown
    dummyProducts.forEach(product => {
        const itemElement = document.createElement('li');
        itemElement.innerHTML = `
            <a class="dropdown-item d-flex justify-content-between align-items-center">
                ${product.name} - $${product.price}
                <button class="btn btn-sm btn-danger" onclick="removeFromCart(${product.id})">X</button>
            </a>
        `;
        cartDropdown.appendChild(itemElement);
    });

    // Add a checkout button
    const checkoutButton = document.createElement('li');
    checkoutButton.innerHTML = `
        <button class="btn btn-success w-100 " onclick="checkoutCart()">Checkout</button>
    `;
    cartDropdown.appendChild(checkoutButton);
}

function removeFromCart(productId) {
    // Remove the product from the dummyProducts array
    const productIndex = dummyProducts.findIndex(product => product.id === productId);
    if (productIndex > -1) {
        dummyProducts.splice(productIndex, 1);
        updateCartDropdown(); // Update the cart dropdown
    }
}

function toggleCartDropdown() {
    const cartDropdown = document.querySelector('.cart-icon + .dropdown-menu');
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
}