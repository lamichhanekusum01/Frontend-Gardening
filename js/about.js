document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = [
        { name: "Bandana Pachabhaiya Magar", image: "images/bandana.jpg", position: "Team Member", def: "Passionate about cultivating green spaces and spreading the joy of gardening."},
        { name: "Kusum Lamichaney", image: "images/kusum.jpg", position: "Team Member", def: "Loves spending time with plants."},
        { name: "Rabina Panta", image: "images/me.jpg", position: "Team Member", def: "Passionate about helping others find their perfect green friend."},
        { name: "Tsering Khando Lama", image: "images/khando.jpg", position: "Team Member", def: "Loves Garden and Grdening." }
    ];

    const container = document.getElementById('teamContainer');

    teamMembers.forEach(member => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-6';
        colDiv.innerHTML = `
            <div class="member d-flex align-items-start">
                <div class="pic"><img src="${member.image}" class="img-fluid" alt=""></div>
                <div class="member-info">
                    <h4>${member.name}</h4>
                    <span>${member.position}</span>
                    <p>${member.def}</p>
                </div>
            </div>
        `;
        container.appendChild(colDiv);
    });
});
