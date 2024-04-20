
//for the homepage's mission story
document.addEventListener('DOMContentLoaded', function () {
    // Content variables
    const missionData = {
        title: "Mission & Story",
        heading: "Bringing nature's beauty to your doorstep",
        paragraphs: [
            "At the heart of Gardenworks, we are passionate about bringing nature's beauty to your doorstep. With a deep-rooted love for gardens and a commitment to excellence, we have cultivated a reputation as a leading gardening service dedicated to transforming outdoor spaces into flourishing heavens.",
            "At the heart of Gardenworks, is a mission to create and maintain stunning gardens that enhance the well-being of our clients and contribute to the beauty of our community.",
            "We believe that a well-designed and cared for garden is more than just a collection of plants. It's a living work of art that brings joy, peace, and a touch of nature to your life."
        ],
        footer: "Nepali Girls",
        footerItalic: "Founder of Garden Works"
    };

    // Select the target element
    const missionContent = document.getElementById('missionContent');

    // Create the HTML content
    const htmlContent = `
        <div class="garden-mission-content">
            <h4 class="garden-subtitle-h4">${missionData.title}</h4>
            <h2>${missionData.heading}</h2>
            ${missionData.paragraphs.map(p => `<p>${p}</p>`).join('')}
            <h5>${missionData.footer}</h5>
            <h5 class="garden-italic">${missionData.footerItalic}</h5>
        </div>
    `;

    

    // Inject the content into the DOM
    missionContent.innerHTML = htmlContent;


});