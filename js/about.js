// this js generates the team members and their names with iamges
document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = [
        { name: "Bandana Pachabhaiya Magar", image: "images/test7.jpg" },
        { name: "Kusum Lamichaney", image: "images/test7.jpg" },
        { name: "Rabina Panta", image: "images/test7.jpg" },
        { name: "Tsering Khando Lama", image: "images/tsering.jpg" }
    ];

    const container = document.getElementById('teamContainer');

    teamMembers.forEach(member => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col';
        colDiv.innerHTML = `
            <div class="garden-team-box">
                <img src="${member.image}" alt="${member.name}">
                <p>${member.name}</p>
            </div>
        `;
        container.appendChild(colDiv);
    });
});

