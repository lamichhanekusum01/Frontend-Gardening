document.addEventListener('DOMContentLoaded', function() {
    // Get the search input and search form elements
    var input = document.getElementById('searchInput');
    var searchForm = document.getElementById('garden-search');

    // Function to handle displaying search suggestions
    function searchServices() {
        var filter = input.value.toUpperCase();
        var div = document.getElementById('searchSuggestions');
        div.innerHTML = ''; // Clear previous suggestions
        div.style.display = input.value ? 'block' : 'none'; // Show/hide the dropdown

        // Example static array of services, replace with your actual data source
        var services = ['Lawn Care', 'Garden Design', 'Plant Health', 'Soil Treatment'];

        services.forEach(function(service) {
            if (service.toUpperCase().indexOf(filter) > -1) {
                var suggestionDiv = document.createElement('div');
                suggestionDiv.textContent = service;
                suggestionDiv.onclick = function() {
                    input.value = this.textContent;
                    div.style.display = 'none'; // Hide the dropdown once a suggestion is clicked
                    navigateToServicePage(); // Navigate when a suggestion is clicked
                };
                div.appendChild(suggestionDiv);
            }
        });
    }

    // Attach the searchServices function to the input event of the search box
    input.oninput = searchServices;

    // Function to handle navigation to the service.html page
    function navigateToServicePage() {
        window.location.href = 'service.html'; // Modify as needed if you have parameters to pass
    }

    // Add event listener to handle form submission
    searchForm.onsubmit = function(event) {
        event.preventDefault(); // Prevent the form from submitting traditionally
        navigateToServicePage(); // Navigate when the search form is submitted
    };
});
