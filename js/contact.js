// Get the FAQ list
const faqList = document.getElementById('faq-list');

// Add click event listener to each FAQ item
faqList.addEventListener('click', (event) => {
    // Check if the clicked item is a question
    if (event.target.classList.contains('question')) {
        // Toggle the visibility of the answer
        const answer = event.target.nextElementSibling;
        answer.classList.toggle('show-answer');
    }
});
