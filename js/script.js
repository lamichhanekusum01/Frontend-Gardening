
const registerBtn = document.querySelector('.modal-button');
const submitBtn = document.querySelector('.submit-button');
const closeBtn = document.querySelector('.close-modal');
const container = document.querySelector('.center-container');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('form');
const name = document.getElementById('name');
const submittedText = document.querySelector('.submitted-text');
const span = document.querySelector('span');
// hearticon
const heartIcon = document.getElementById('heartIcon');
heartIcon.addEventListener('click', function () {
    // Toggle the filled class to change the heart icon to filled version
    this.classList.toggle('filled-heart');
});
const submitComplete = () => {
    let storeName = '';

    if(name.value === '') {
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
registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = 'block';
    container.style.display = 'flex';
})


// nav bar 
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


 // Function to handle logout action
 function logout() {
    // Redirect to index.html
    window.location.href = 'index.html';
}





// Code for preventing browser back functionality (same as before)
// window.onload = function() {
//     if (window.history && window.history.pushState) {
//         window.history.pushState('forward', null, './#no-back');
//         window.onpopstate = function() {
//             if (location.hash == '#no-back') {
//                 window.history.forward();
//             }
//         };
//     }
// }



