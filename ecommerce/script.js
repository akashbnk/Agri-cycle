document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.trim();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (query.length > 0) {
        // Replace this with your API call or database fetch logic
        const dummyResults = [
            { name: "Product 1", price: "$10", link: "#", },
            { name: "Product 2", price: "$15", link: "#", },
            { name: "Product 3", price: "$20", link: "#", },
        ];

        const filteredResults = dummyResults.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
        filteredResults.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mb-2');
            resultItem.innerHTML = `
                <a href="${item.link}" class="text-decoration-none">${item.name} - ${item.price}</a>
                <button class="btn btn-primary btn-sm">Add to Cart</button>
            `;
            searchResults.appendChild(resultItem);
        });
    }
});
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;
const slideInterval = 5000; // 5 seconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        indicators[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            indicators[i].classList.add('active');
        }
    });
    currentIndex = index;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Set auto-slide interval
let autoSlide = setInterval(nextSlide, slideInterval);

// Indicator click functionality
indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        showSlide(i);
        resetAutoSlide();
    });
});

// Reset auto-slide timer when manually navigating
function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, slideInterval);
}

