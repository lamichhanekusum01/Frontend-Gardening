document.addEventListener('DOMContentLoaded', function() {
    const services = [
        { name: "Lawn Care", description: "Complete lawn maintenance and care.",image: "images/lawn.jpg" },
        { name: "Garden Design", description: "Design your dream garden with our expert designers.",image: "images/design.jpg" },
        { name: "Plant Health", description: "Ensure your plants are healthy with our expert care.",image: "images/plant.jpg" },
        { name: "Soil Treatment", description: "Optimize your soil for better growth and yield.",image: "images/soil.jpg" }
    ];

    const servicesContainer = document.getElementById('servicesList');
    services.forEach(service => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4';
        colDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${service.name}</h5>
                    <img src="${service.image}" class="card-img-top" alt="...">
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
        { seed: 'bdoo', text: 'Optimizing your soil for better growth and yield is the primary goal of this service, which can help you get the most out of your garden ' },
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

            const p = document.createElement('p');
            p.textContent = slide.text;

            figure.appendChild(img);
            article.appendChild(p);
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
        { image: 'test1.jpg', name: 'Monisha', title: 'Student', text: 'Working with GardenWorks has been nothing short of transformative for our business. Their strategic insights and innovative approach to garden development helped us redefine our identity in a crowded market.' },
        { image: 'test6.jpg', name: 'Sushma', title: 'Student', text: 'Working with GardenWorks has been nothing short of transformative for our business. Their strategic insights and innovative approach to garden development helped us redefine our identity in a crowded market.' },
        { image: 'test2.jpg', name: 'Bikash', title: 'Student', text: 'Working with GardenWorks has been nothing short of transformative for our business. Their strategic insights and innovative approach to garden development helped us redefine our identity in a crowded market.' },
        { image: 'test3.jpg', name: 'Bibek', title: 'Student', text: 'Working with GardenWorks has been nothing short of transformative for our business. Their strategic insights and innovative approach to garden development helped us redefine our identity in a crowded market.' }
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
            autoplay: true, // Enables automatic sliding
            autoplayTimeout: 1000, // Slides change every 1000 milliseconds (1 second)
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
