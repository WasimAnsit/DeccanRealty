const properties = [
    { imageURL: { src: "assets/images/image 14.jpg", alt: "Modern House" }, propertyName: "Luxury Villa", propertyDescription: "Los Angeles, USA" },
    { imageURL: { src: "assets/images/image 10.jpg", alt: "Luxury Villa" }, propertyName: "Dream Home", propertyDescription: "New York, USA" },
    { imageURL: { src: "assets/images/image 11.jpg", alt: "Modern Apartment" }, propertyName: "Sky High Condo", propertyDescription: "Miami, USA" },
];

const services = [
    { imageURL: { src: "assets/images/e8c6d57fa636e3a7a4cff3032fd43126.jpg", alt: "Buy Service" }, serviceTitle: "Buy Property", serviceAddress: "We help you buy the best!" },
    { imageURL: { src: "assets/images/1bc4d8c6697d82c1186592ed59775bcd.jpg", alt: "Sell Service" }, serviceTitle: "Sell Property", serviceAddress: "Get the best deal for your home!" },
    { imageURL: { src: "assets/images/9878bb6c6da80ecd6d0d45a0d755efca.jpg", alt: "Rent Service" }, serviceTitle: "Rent Property", serviceAddress: "Find your dream rental!" }
];

function createCard(item, type) {
    return `
        <div class="relative w-72 bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-110 hover:z-10">
            <img src="${item.imageURL.src}" alt="${item.imageURL.alt}" class="w-full h-40 object-cover">
            <div class="p-4">
                <h4 class="text-lg font-semibold text-gray-800">${type === "property" ? item.propertyName : item.serviceTitle}</h4>
                <p class="text-gray-500 text-sm">${type === "property" ? item.propertyDescription : item.serviceAddress}</p>
            </div>
            ${type === "property" ? `<div class="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 text-sm rounded-full">Featured</div>` : ""}
        </div>
    `;
}

document.getElementById("propertyGrid").innerHTML = properties.map(p => createCard(p, "property")).join("");
document.getElementById("servicesGrid").innerHTML = services.map(s => createCard(s, "service")).join("");