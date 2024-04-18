document.addEventListener('DOMContentLoaded', function() {
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
                        <a class="nav-link" href="service.html">Services</a>
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
                <form class="d-flex me-auto" role="search" id="garden-search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="garden-search-btn btn" type="submit">Search</button>
                </form>
                <div>
                    <div class="container text-center">
                        <div class="row row-cols-1 row-cols-lg-3 ms-auto garden-navbar-icon">
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
});


// modal
document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.cart-icon');
    if (!cartIcon) {
        console.log('Cart icon not found');
        return;
    }

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

    // Open modal event
    cartIcon.addEventListener('click', function() {
        $('#cartModal').modal('show');
    });
});
