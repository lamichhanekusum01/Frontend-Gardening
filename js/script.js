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
