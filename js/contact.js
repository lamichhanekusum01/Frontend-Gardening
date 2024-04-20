// Get the FAQ list
// const faqList = document.getElementById('faq-list');

// // Add click event listener to each FAQ item
// faqList.addEventListener('click', (event) => {
//     // Check if the clicked item is a question
//     if (event.target.classList.contains('question')) {
//         // Toggle the visibility of the answer
//         const answer = event.target.nextElementSibling;
//         answer.classList.toggle('show-answer');
//     }
// });
debugger;
// Get the form element
var form = document.getElementById("contactForm");

// Add an event listener for form submission
form.addEventListener("submit", function(event) {
    debugger;
    // Prevent the default form submission
    event.preventDefault();

    // Display the alert message
    // var alertMessage = document.getElementById("alertMessage");
    // alertMessage.innerHTML = '<div class="alert alert-success" role="alert">Message sent successfully. GardenWork team will contact you soon.</div>';
    alert('Message sent successfully. GardenWork team will contact you soon.')
    // Clear the form fields after submission (optional)
    form.reset();
});


