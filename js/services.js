document.addEventListener('DOMContentLoaded', function() {
    const services = [
        { name: "Lawn Care", description: "Complete lawn maintenance and care." },
        { name: "Garden Design", description: "Design your dream garden with our expert designers." },
        { name: "Plant Health", description: "Ensure your plants are healthy with our expert care." },
        { name: "Soil Treatment", description: "Optimize your soil for better growth and yield." }
    ];

    const servicesContainer = document.getElementById('servicesList');
    services.forEach(service => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4';
        colDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${service.name}</h5>
                    <img src="https://picsum.photos/200/150" class="card-img-top" alt="...">
                    <p class="card-text">${service.description}</p>
                </div>
            </div>
        `;
        servicesContainer.appendChild(colDiv);
    });
});
