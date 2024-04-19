document.addEventListener('DOMContentLoaded', function () {
    // Insert the navbar HTML into the DOM at the beginning of the body
    const navbarHTML = `
    <section class="top-navbar">
        <nav class="navbar navbar-expand-lg vanish-navbar">
            <div class="container">
                <a class="navbar-brand" href="home.html">
                    <img src="images/logo.png" alt="Logo"> <span>GardenWorks</span>
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
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Gallery
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="gallery.html">Photos</a></li>
                                <li><a class="dropdown-item" href="#">Videos</a></li>
                            </ul>
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
    openModal();
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

    // Setup other interactive elements such as dropdowns here if necessary
}

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

function navigateToServicePage() {
    window.location.href = 'services.html';
}

function logout() {
    window.location.href = 'index.html';
}


//function to open modal 
function openModal() {
    const cartIcon = document.querySelector('.cart-icon');

    if (!cartIcon) {
        console.log('Cart icon not found');
        return;
    }
    // Open modal event
    cartIcon.addEventListener('click', function () {
        var modal = new bootstrap.Modal(document.getElementById('cartModal'));
        modal.show();
    });

    // Check if modal exists in the DOM and append only if it doesn't
    let modalExists = document.querySelector('#cartModal');
    if (!modalExists) {
        const modalHTML = `
        <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="cartModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title" id="cartModalLabel">Gardening Cart</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="cartForm">
                        <div class="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" class="form-control" id="name" name="name" required>
                        </div>

                        <div class="form-group">
                            <label for="email">Your Email</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                        </div>

                        <div class="form-group">
                            <label for="phone">Your Phone Number</label>
                            <input type="text" class="form-control" id="phone" name="phone" required>
                        </div>

                        <div class="form-group">
                            <label for="address">Delivery Address</label>
                            <textarea class="form-control" id="address" name="address" rows="3" required></textarea>
                        </div>

                        <div class="form-group">
                            <label>Select Purchase Type</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="purchaseType" id="productPurchase"
                                    value="product" required>
                                <label class="form-check-label" for="productPurchase">Buy Product</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="purchaseType" id="servicePurchase"
                                    value="service" required>
                                <label class="form-check-label" for="servicePurchase">Buy Service</label>
                            </div>
                        </div>

                        <div id="productSelection" style="display: none;">
                            <div class="form-group">
                                <label for="product">Select Product</label>
                                <select class="form-control" id="product" name="product">
                                    <option value="rose">Rose ($10)</option>
                                    <option value="tulip">Tulip ($8)</option>
                                    <option value="sunflower">Sunflower ($6)</option>
                                </select>
                            </div>
                        </div>

                        <div id="serviceSelection" style="display: none;">
                            <div class="form-group">
                                <label for="service">Select Gardening Service</label>
                                <select class="form-control" id="service" name="service">
                                    <option value="lawn-mowing">Lawn Mowing ($50)</option>
                                    <option value="weed-control">Weed Control ($30)</option>
                                    <option value="planting">Planting ($20)</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-success" id="addToCartBtn">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>`
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    else {
        // modal
        const productPurchase = document.getElementById('productPurchase');
        const servicePurchase = document.getElementById('servicePurchase');
        const productSelection = document.getElementById('productSelection');
        const serviceSelection = document.getElementById('serviceSelection');

        productPurchase.addEventListener('change', function () {
            if (this.checked) {
                productSelection.style.display = 'block';
                serviceSelection.style.display = 'none';
            }
        });

        servicePurchase.addEventListener('change', function () {
            if (this.checked) {
                productSelection.style.display = 'none';
                serviceSelection.style.display = 'block';
            }
        });

        const addToCartBtn = document.getElementById('addToCartBtn');
        addToCartBtn.addEventListener('click', function (event) {
            const form = document.getElementById('cartForm');
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
            } else {
                event.preventDefault();
                const formData = new FormData(form);
                const purchaseType = formData.get('purchaseType');
                if (purchaseType === 'product') {
                    const product = formData.get('product');
                    alert(`Added ${product} to cart!`);
                } else if (purchaseType === 'service') {
                    const service = formData.get('service');
                    alert(`Added ${service} to cart!`);
                }
                // Redirect to home.html after adding to cart
                window.location.href = 'home.html';
            }
        });
// modal components' functionalities
        const registerBtn = document.querySelector('.modal-button');
        const submitBtn = document.querySelector('.submit-button');
        const closeBtn = document.querySelector('.close-modal');
        const container = document.querySelector('.center-container');
        const overlay = document.querySelector('.overlay');
        const form = document.querySelector('form');
        const name = document.getElementById('name');
        const submittedText = document.querySelector('.submitted-text');
        const span = document.querySelector('span');

        const submitComplete = () => {
            let storeName = '';

            if (name.value === '') {
                storeName = 'Tester';
            } else {
                storeName = name.value;
            }

            form.style.display = 'none';
            submitBtn.style.display = 'none';
            submittedText.style.display = 'block';
            span.innerText = storeName;
        }

        const closeModal = () => {
            overlay.style.display = 'none';
            container.style.display = 'none';
            submittedText.style.display = 'none';
            form.style.display = 'flex';
            submitBtn.style.display = 'block';
            name.value = '';
            storeName = '';
        }

        submitBtn.addEventListener('click', submitComplete)
        closeBtn.addEventListener('click', closeModal)


        // Open modal event
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.style.display = 'block';
            container.style.display = 'flex';
        });
    }
}
