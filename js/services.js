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


// featured servieces
document.addEventListener('DOMContentLoaded', function() {
    const slidesData = [
        { seed: 'bdoo', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quod.' },
        { seed: 'kek', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sed repellendus voluptates hic ha, asdf.' },
        { seed: 'top', text: 'Lorem ipsum dolor sit amet consectet elit. Aut quod.' },
        { seed: 'apa', text: 'Lorem ipsum dolor sit elit. Provident e molestiae corrupti corporis odit cupiditate.' },
        { seed: 'picsum', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur cupiditate.' },
        { seed: 'anjing', text: 'Lorem ipsum dolor quis doloribus quisquam. Nihil illo numquam, sed iat deleniti ab libero?' },
        { seed: 'ocean', text: 'Lorem ipsum dolor quis doloribus quisquam. Nihil illo numquam, sed iat deleniti ab libero?' },
        { seed: 'woe', text: 'Lorem ipsum dolor quis doloribus quisquam. Nihil illo numquam, sed iat deleniti ab libero?' }
    ];

    function createSlider(slides) {
        const sliderContainer = document.createElement('section');
        sliderContainer.className = 'slider';

        slides.forEach(slide => {
            const slideDiv = document.createElement('div');
            slideDiv.className = 'slide';

            const figure = document.createElement('figure');
            figure.className = 'slide__image-container';

            const img = document.createElement('img');
            img.src = `https://picsum.photos/seed/${slide.seed}/300`;
            img.width = 300;
            img.height = 300;
            img.alt = '';

            const article = document.createElement('article');
            article.className = 'slide__text';

            const h2 = document.createElement('h2');
            h2.textContent = slide.text;

            figure.appendChild(img);
            article.appendChild(h2);
            slideDiv.appendChild(figure);
            slideDiv.appendChild(article);

            sliderContainer.appendChild(slideDiv);
        });

        return sliderContainer;
    }

    const mainContainer = document.querySelector('main');
    if (mainContainer) {
        const slider = createSlider(slidesData);
        mainContainer.appendChild(slider);
    }
});


// testimonials 
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = [
        { image: 'test1.jpg', name: 'Lexi Robe', title: 'Student', text: 'Working with GardenWorks has been nothing short of transformative for our business. Their strategic insights and innovative approach to garden development helped us redefine our identity in a crowded market.' },
        { image: 'test2.jpg', name: 'Lexi Robe', title: 'Student', text: 'Working with GardenWorks has been nothing short of transformative for our business. Their strategic insights and innovative approach to garden development helped us redefine our identity in a crowded market.' },
        // More testimonials...
        { image: 'test7.jpg', name: 'Lexi Robe', title: 'Student', text: 'Working with GardenWorks has been nothing short of transformative for our business. Their strategic insights and innovative approach to garden development helped us redefine our identity in a crowded market.' }
    ];

    function createTestimonials(testimonials) {
        const carousel = document.getElementById('testimonialCarousel');
        testimonials.forEach(t => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';

            const boxDiv = document.createElement('div');
            boxDiv.className = 'garden-testimonial-box';

            const imgComma = document.createElement('img');
            imgComma.src = 'images/greencomma.png';
            imgComma.alt = 'comma';

            const p = document.createElement('p');
            p.textContent = t.text;

            const rowDiv = document.createElement('div');
            rowDiv.className = 'row';

            const colImgDiv = document.createElement('div');
            colImgDiv.className = 'col-3';

            const img = document.createElement('img');
            img.src = `images/${t.image}`;
            img.alt = 'Testimonial';

            const colTextDiv = document.createElement('div');
            colTextDiv.className = 'col-6';

            const h5 = document.createElement('h5');
            h5.textContent = t.name;

            const h6 = document.createElement('h6');
            h6.textContent = t.title;

            colImgDiv.appendChild(img);
            colTextDiv.appendChild(h5);
            colTextDiv.appendChild(h6);

            rowDiv.appendChild(colImgDiv);
            rowDiv.appendChild(colTextDiv);

            boxDiv.appendChild(imgComma);
            boxDiv.appendChild(p);
            boxDiv.appendChild(rowDiv);

            itemDiv.appendChild(boxDiv);
            carousel.appendChild(itemDiv);
        });
    }

    createTestimonials(testimonials);

    // Initialize the Owl Carousel
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });
});
