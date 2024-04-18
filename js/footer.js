document.addEventListener('DOMContentLoaded', function () {
    const footerHTML = `
    <!-- Footer -->
    <footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary garden-footer">
        <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
            <div class="row-cols-lg-2 row-cols-1 row garden-footer1">
                <div class="col-lg-8">
                    <h2>Join the largest learning platform today!</h2>
                    <p>Start learning with experts around the world.</p>
                    <div class="row row-cols-lg-2 row-cols-1">
                        <div class="col">
                            <button class="garden-button-color">
                                Browse all Product
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="row row-cols-lg-2 row-cols-1">
                        <div class="col">
                            <div class="row garden-footer-icon">
                                <div class="col">
                                    <i class="fas fa-seedling"></i>
                                </div>
                                <div class="col">
                                    <h5>99+</h5>
                                    <p>Products</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row garden-footer-icon">
                                <div class="col">
                                    <i class="fas fa-video"></i>
                                </div>
                                <div class="col">
                                    <h5>99+</h5>
                                    <p>Products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="garden-footer-border">
            <div class="row mt-5">
                <div class="col-lg-3 mb-3">
                    <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none">
                        <div width="40" height="32" class="d-block me-2" viewBox="0 0 118 94" role="img">
                            <img src="images/logo.png" alt="Footer Logo">
                        </div>
                        <span class="fs-5">GardenWorks</span>
                    </a>
                    <ul class="list-unstyled small">
                        <li class="mb-2">
                            We believe that a well-designed and cared-for garden is more than just a collection of
                            plants - it's a living work of art that brings joy, peace, and a touch of nature to your
                            life.
                        </li>
                    </ul>
                </div>
                <!-- Additional Columns as needed -->
            </div>
            <hr class="garden-footer-border">
            <div class="row mt-5 garden-footer3">
                <div class="col">
                    <p>Copyright © 2023 Copyright garden++. All rights reserved</p>
                </div>
                <div class="col">
                    <a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </footer>`;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
