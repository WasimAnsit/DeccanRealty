function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}
const properties = [
    {
        imageURL: {
            src: "assets/images/image 14.jpg",
            alt: "Modern House"
        },
        propertyName: "Demo Property",
        propertyDescription: "Sample Address"
    },
    {
        imageURL: {
            src: "assets/images/image 10.jpg",
            alt: "Luxury Villa"
        },
        propertyName: "Demo Property",
        propertyDescription: "Sample Address"
    },
    {
        imageURL: {
            src: "assets/images/image 11.jpg",
            alt: "Modern Apartment"
        },
        propertyName: "Demo Property",
        propertyDescription: "Sample Address"
    },
    
];


const propertyGrid = document.getElementById("propertyGrid");

properties.forEach(property => {
    // Create elements
    const propertyCard = document.createElement("div");
    propertyCard.classList.add("property-card");

    const image = document.createElement("img");
    image.classList.add("property-image");
    image.src = property.imageURL.src;
    image.alt = property.imageURL.alt;

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("property-info");

    const name = document.createElement("h4");
    name.classList.add("property-name");
    name.textContent = property.propertyName;

    const location = document.createElement("p");
    location.classList.add("property-location");
    location.textContent = property.propertyDescription;

    const arrowDiv = document.createElement("div");
    arrowDiv.classList.add("property-arrow");

    const arrowIcon = document.createElement("i");
    arrowIcon.classList.add("fas", "fa-arrow-right");

    // Append elements
    infoDiv.appendChild(name);
    infoDiv.appendChild(location);
    arrowDiv.appendChild(arrowIcon);

    propertyCard.appendChild(image);
    propertyCard.appendChild(infoDiv);
    propertyCard.appendChild(arrowDiv);

    propertyGrid.appendChild(propertyCard);
});




const services = [
    {
        imageURL: {
            src: "assets/images/e8c6d57fa636e3a7a4cff3032fd43126.jpg",
            alt: "Buy Service"
        },
        serviceTitle: "Buy",
        serviceAddress: "Sample Address"
    },
    {
        imageURL: {
            src: "assets/images/1bc4d8c6697d82c1186592ed59775bcd.jpg",
            alt: "Sell Service"
        },
        serviceTitle: "Sell",
        serviceAddress: "Sample Address"
    },
    {
        imageURL: {
            src: "assets/images/9878bb6c6da80ecd6d0d45a0d755efca.jpg",
            alt: "Rent Service"
        },
        serviceTitle: "Rent",
        serviceAddress: "Sample Address"
    }

];

const servicesGrid = document.getElementById("servicesGrid");

services.forEach(service => {
    // Create elements
    const serviceCard = document.createElement("div");
    serviceCard.classList.add("service-card");

    const image = document.createElement("img");
    image.classList.add("service-image");
    image.src = service.imageURL.src;
    image.alt = service.imageURL.alt;

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("service-info");

    const title = document.createElement("h4");
    title.classList.add("service-title");
    title.textContent = service.serviceTitle;

    const address = document.createElement("p");
    address.classList.add("service-address");
    address.textContent = service.serviceAddress;

    const knowMore = document.createElement("a");
    knowMore.classList.add("know-more");
    knowMore.href = "#";
    knowMore.textContent = "Know More";

    // Append elements
    infoDiv.appendChild(title);
    infoDiv.appendChild(address);
    infoDiv.appendChild(knowMore);

    serviceCard.appendChild(image);
    serviceCard.appendChild(infoDiv);

    servicesGrid.appendChild(serviceCard);
});