const properties = [
  {
    imageURL: { src: "assets/images/GODREJ LAKESIDE ORCHARD.jpg", alt: "Modern House" },
    propertyName: "Godrej Lakeside Orchard",
    priceRange: "₹ 1.09 Cr - 3.12 Cr.",
    location: "Sarjapur Road, South Bangalore",
    pricePerSqFt: "₹ 11.63K - ₹ 33.81K /Sq.Ft.",
    sizes: "(Super Area) 323 - 2679 Sq.Ft.",
    possessionDate: "Possession Starts Jan 2030",
    configurations: "2BHK, 3BHK, 3.5BHK, 4BHK, 4.5BHK Apartment & Studio Apartments",
    propertyDescription: ""
  },
  {
    imageURL: { src: "assets/images/BIRLA EVARA.jpg", alt: "Luxury Villa" },
    propertyName: "Birla Evara",
    priceRange: "71.0 L - 3.16 Cr",
    location: "Kodathi Vilage, Bangalore East, Bangalore",
    pricePerSqFt: "₹14.98 K - 17.96 K/sq.ft",
    sizes: "(Super Area) 474.00 - 1759.00 sq.ft",
    possessionDate: "Possession Starts Dec, 2031",
    configurations: "1BHK, 2BHK, 3BHK, 4BHK Apartments & Studio Apartments",
    propertyDescription: ""
  },
  {
    imageURL: { src: "assets/images/NAMBIAR DISTRICT 25.jpg", alt: "Modern Apartment" },
    propertyName: "Nambiar District 25",
    priceRange: "₹ 1.44 Cr - 3.0 Cr.",
    location: "Muthanallur Cross, Sarjapur Road, Bangalore East",
    pricePerSqFt: "₹ 12 k/sq.ft",
    sizes: "(Super Area) 1200.00 - 2500 Sq.Ft.",
    possessionDate: "Possession Starts Jan 2030",
    configurations: "2BHK, 3BHK, 4BHK, Apartments Configuration",
    propertyDescription: ""
  },
  {
    imageURL: { src: "assets/images/PRESTIEGE PINE FOREST.jpg", alt: "Modern House" },
    propertyName: "Prestige Pine Forest",
    priceRange: "₹ 3.76 Cr - 3.89 Cr.",
    location: "ECC Road, Whitefield, Bangalore East, Bangalore",
    pricePerSqFt: "₹10.94K - ₹14.351K /Sq.Ft.",
    sizes: "(Super Area) 2621.00 - 3556.00 Sq.Ft.",
    possessionDate: "Possession Starts Dec 2028",
    configurations: "3BHK, 4BHK, Apartments Configuration",
    propertyDescription: ""
  },
];

const services = [
  {
    imageURL: { src: "assets/images/BUY.jpg", alt: "Buy Service" },
    serviceTitle: "Buy your Dream Home",
    serviceAddress: "Are you in search of a home in Delhi, NCR? dncrproperty.com is your place to start. We’ll find you the best residential flats in Delhi NCR. Find your new home with an enticing video experience. Our residential properties in Delhi NCR include the best possible listings and the features you would not find anywhere else",
  },
  {
    imageURL: { src: "assets/images/SELL.jpg", alt: "Sell Service" },
    serviceTitle: "Sell your Home",
    serviceAddress: "Looking for an ideal buyer to hand over your home? We know that selling your home is an emotional experience as well as an arduous task. We help overcome the challenges of selling a home and find you a buyer to whom you can peacefully entrust your belonging. Moreover, we’ll provide you with the full backup to navigate through the process!",
  },
  {
    imageURL: { src: "assets/images/RENT.jpg", alt: "Rent Service" },
    serviceTitle: "Rent your Home",
    serviceAddress: "Want to rent a home? You can put your trust in dncrproperty.com. We can assist you in finding the best flats and apartments for rent in the Delhi NCR. We provide high-quality and ready-to-move-in residential apartments for rent in the Delhi NCR for you to enjoy a hassle-free stay",
  },
  {
    imageURL: { src: "assets/images/COMMERCIAL.jpg", alt: "Buy Service" },
    serviceTitle: "Commercial Property",
    serviceAddress: "Looking to rent a commercial property? Trust dncrproperty.com to help you find the best office spaces and commercial properties for rent in Delhi NCR. We offer high-quality, ready-to-move-in commercial spaces to ensure a hassle-free leasing experience.",
  },
];


function createCard(item, type) {
  return `
      <div class="relative w-96 bg-white rounded-xl overflow-hidden shadow-[0_10px_15px_rgba(0,0,0,0.1),10px_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_25px_rgba(0,0,0,0.15),15px_0_25px_rgba(0,0,0,0.15)] transform transition-all duration-300 ${
        type === "property"
          ? "hover:scale-105"
          : "hover:scale-105"
      } flex-shrink-0 card-container" data-type="${type}">
            <div class="relative">
                <img src="${item.imageURL.src}" alt="${
    item.imageURL.alt
  }" class="w-full h-48 object-cover transition-transform duration-300">
                ${
                  type === "property"
                    ? `<span class="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 text-sm rounded-full font-medium">Trending</span>`
                    : ""
                }
            </div>
            <div class="p-5 flex flex-col h-full bg-gradient-to-b from-gray-50 to-white">
                <div class="card-content flex-grow overflow-hidden">
                    ${
                      type === "property"
                        ? `
                        <div class="property-header mb-4">
                            <h3 class="property-name text-xl font-bold text-gray-900 leading-tight">${item.propertyName}</h3>
                            <span class="property-price text-lg font-semibold text-green-600 block mt-2">${item.priceRange}</span>
                        </div>
                        <div class="property-details text-sm text-gray-600 space-y-2 max-h-40 overflow-y-auto">
                            <p><i class="fas fa-map-marker-alt text-green-500 mr-2"></i>${item.location}</p>
                            <p><i class="fas fa-ruler-combined text-green-500 mr-2"></i>${item.sizes}</p>
                            <p><i class="fas fa-wallet text-green-500 mr-2"></i>${item.pricePerSqFt}</p>
                            <p><i class="fas fa-calendar-alt text-green-500 mr-2"></i>${item.possessionDate}</p>
                            <p class="truncate"><i class="fas fa-home text-green-500 mr-2"></i>${item.configurations}</p>
                        </div>
                    `
                        : `
                        <h4 class="text-2xl font-bold text-gray-900 mb-4 text-center">${item.serviceTitle}</h4>
                        <p class="text-gray-600 text-sm leading-relaxed max-h-40 overflow-y-auto">${item.serviceAddress}</p>
                    `
                    }
                </div>
                <div class="card-buttons flex justify-between items-center pt-4 border-t border-gray-200">
                    <button onclick="window.location.href='contact.html'" 
                        class="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                        Enquiry Now
                    </button>
                    <a href="https://api.whatsapp.com/send?phone=917303062845" target="_blank" class="whatsapp-btn">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Rest of the JavaScript (properties, services, populateSlider) remains unchanged
// Rest of the JavaScript (properties, services, populateSlider) remains unchanged

// Rest of the JavaScript (properties, services, populateSlider) remains unchanged
// Rest of the JavaScript remains the same
// populateSlider("propertyGrid", properties, "property");
// populateSlider("servicesGrid", services, "service");

// Function to populate and duplicate cards for infinite scroll
function populateSlider(gridId, items, type) {
  const grid = document.getElementById(gridId);
  const doubledItems = [...items, ...items]; // Duplicate items for seamless loop
  grid.innerHTML = doubledItems.map(item => createCard(item, type)).join("");

  // Adjust animation duration based on number of items
  const animationDuration = items.length * 5; // 5 seconds per item, adjust as needed
  grid.style.animationDuration = `${animationDuration}s`;
}

// Populate both sections
populateSlider("propertyGrid", properties, "property");
populateSlider("servicesGrid", services, "service");