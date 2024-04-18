
// vview photos 
document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = [
      { type: 'flower', src: 'images/flower1.jpg', alt: 'Flower 1' },
      { type: 'vegetable', src: 'images/vegetable1.jpg', alt: 'Vegetable Plant 1' },
      { type: 'service', src: 'images/services1.jpg', alt: 'Service 1' },
      { type: 'video', src: 'images/video.mp4', alt: 'Video 1' },
      // More items...
      { type: 'flower', src: 'images/flower2.jpg', alt: 'Flower 2' },
      { type: 'video', src: 'images/video2.mp4', alt: 'Video 2' },
      { type: 'service', src: 'images/services3.jpg', alt: 'Service 3' }
  ];

  function createGalleryItems(items) {
      const galleryContainer = document.querySelector('.images');
      items.forEach(item => {
          const div = document.createElement('div');
          div.className = `image filterDiv ${item.type}`;

          if (item.type === 'video') {
              const video = document.createElement('video');
              video.controls = true;
              const source = document.createElement('source');
              source.src = item.src;
              source.type = 'video/mp4';
              video.appendChild(source);
              div.appendChild(video);
          } else {
              const img = document.createElement('img');
              img.src = item.src;
              img.alt = item.alt;
              div.appendChild(img);
          }

          galleryContainer.appendChild(div);
      });
  }

  createGalleryItems(galleryItems);
  filterSelection("all"); // Show all by default
});

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c === "all") c = "";
  for (i = 0; i < x.length; i++) {
    if (x[i].className.indexOf(c) > -1) {
      addClass(x[i], "show");
    } else {
      removeClass(x[i], "show");
    }
  }
}

function addClass(element, name) {
  var arr = element.className.split(" ");
  if (arr.indexOf(name) === -1) {
    element.className += " " + name;
  }
}

function removeClass(element, name) {
  var arr = element.className.split(" ");
  while (arr.indexOf(name) > -1) {
    arr.splice(arr.indexOf(name), 1);
  }
  element.className = arr.join(" ");
}

