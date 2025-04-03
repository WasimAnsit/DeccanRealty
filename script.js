// Property data - primary listings
const properties = [
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/jsfjbja7uuxxzylb9ia0",
      alt: "Modern House",
    },
    propertyName: "Godrej Lakeside Orchard",
    priceRange: "₹ 1.09 Cr - 3.12 Cr.",
    location: "Sarjapur Road, South Bangalore",
    pricePerSqFt: "₹ 11.63K - ₹ 33.81K /Sq.Ft.",
    sizes: "(Super Area) 323 - 2679 Sq.Ft.",
    possessionDate: "Possession Starts Jan 2030",
    configurations:
      "2BHK, 3BHK, 3.5BHK, 4BHK, 4.5BHK Apartment & Studio Apartments",
    propertyDescription: "",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/llagqnpijsyqwz6yanhr",
      alt: "Modern House",
    },
    propertyName: "Prestige Pine Forest",
    priceRange: "₹ 3.76 Cr - 3.89 Cr.",
    location: "Whitefield, East Bangalore",
    pricePerSqFt: "₹10.94K - ₹14.351K /Sq.Ft.",
    sizes: "(Super Area) 2621 - 3556 Sq.Ft.",
    possessionDate: "Possession Starts Dec 2028",
    configurations: "3BHK, 4BHK, Apartments Configuration",
    propertyDescription: "",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/h9gshymxylsp8ipkogfk",
      alt: "Luxury Villa",
    },
    propertyName: "Birla Evara",
    priceRange: "₹71.0 L - 3.16 Cr",
    location: "Sarjapur Road, Bangalore",
    pricePerSqFt: "₹14.98 K - 17.96 K/sq.ft",
    sizes: "(Super Area) 474 - 1759 sq.ft",
    possessionDate: "Possession Starts Dec, 2031",
    configurations: "1BHK, 2BHK, 3BHK, 4BHK Apartments & Studio Apartments",
    propertyDescription: "",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/hznztyciv6uvjrdth5l1",
      alt: "Modern Apartment",
    },
    propertyName: "Nambiar District 25",
    priceRange: "₹ 1.44 Cr - 3.0 Cr.",
    location: "Sarjapur Road, Bangalore",
    pricePerSqFt: "₹ 12 k/sq.ft",
    sizes: "(Super Area) 1200 - 2500 Sq.Ft.",
    possessionDate: "Possession Starts Jan 2030",
    configurations: "2BHK, 3BHK, 4BHK, Apartments Configuration",
    propertyDescription: "",
  },
];

// Services data
const services = [
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/j0dnulpp3nqsgjijfkzv",
      alt: "Buy Service",
    },
    serviceTitle: "Buy Your Dream Home",
    serviceAddress:
      "Looking for a home in Bangalore? DeccanRealty.com offers the best residential listings with exclusive features and immersive video experiences. Start your search today!",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/dbniooqkfnemwwgmd8nb",
      alt: "Sell Service",
    },
    serviceTitle: "Sell Your Property with Ease",
    serviceAddress:
      "Looking for the right buyer? DeccanRealty.com simplifies the selling process, ensuring a smooth and stress-free experience. Trust us to find the perfect buyer and support you every step of the way!",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/nutcpd127olazbwpg1uv",
      alt: "Rent Service",
    },
    serviceTitle: "Find Your Perfect Rental Home",
    serviceAddress:
      "Looking to rent a home in Bangalore? DeccanRealty.com offers top-quality, ready-to-move-in apartments for a hassle-free living experience. Let us help you find the perfect place!",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/y54hiuzuuykfqz6rlfzm",
      alt: "Buy Service",
    },
    serviceTitle: "Invest in Prime Commercial Properties",
    serviceAddress:
      "Looking for rental income or short-term investment opportunities? DeccanRealty.com offers premium, ready-to-move-in commercial properties in Bangalore for a seamless investment and leasing experience",
  },
];

// Resale properties data
const resaleProperties = [
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/utrwefotkfdx0hiipw8d",
    altText: "White Building",
    name: "Sobha Royal Pavilion",
    description:
      "Sobha Royal Pavilion – Rajasthan-themed luxury apartments in <span class='font-bold'> Hadosiddapura, Sarjapur Road, Bangalore. Offering 2, 3 & 4 BHK homes </span> ranging from <span class='font-bold'>1300 to 2232.2 sq. ft.,</span> starting from  <span class='font-bold'>Price on Request.</span> A masterpiece of Rajput grandeur, SOBHA Royal Pavilion blends Rajasthani architectural brilliance with modern cosmopolitan elegance. Designed to reflect royal palatial living, this exquisite community offers world-class amenities, timeless luxury, and unmatched comfort, creating a lifestyle of sophistication and opulence.",
  },
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/sqiktbmv5o03fvnqbck7",
    altText: "Modern Red Building",
    name: "Godrej Splendour",
    description:
      "Godrej Splendour, located in the heart of<span class='font-bold'> Whitefield, Bangalore,</span> offers a splendid lifestyle with unmatched comfort and convenience.<span class='font-bold'> Price on Request </span>onwards, this <span class='font-bold'> 2 BHK </span> residence is designed to provide a perfect blend of luxury and connectivity. The project is set for possession in September 2027 and is strategically situated just a short drive from renowned IT hubs, top schools, and prestigious colleges. With Godrej Splendour, experience modern living in one of Bangalore's most sought-after localities.",
  },
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/jsnhv0q4rlcaxuxdqz1f",
    altText: "Colorful Residential Building",
    name: "Godrej Park Retreat",
    description:
      "Godrej Park Retreat, located on <span class='font-bold'>Sarjapur Road, Bangalore,</span> offers a lifestyle that goes beyond expectations. This <span class='font-bold'>1 BHK</span>  residence comes with a <span class='font-bold'> Price on Request </span> clubhouse and over 50 lifestyle amenities, ensuring a luxurious living experience. With possession in June 2028, the project provides seamless connectivity and easy accessibility, keeping you well-connected to key destinations. Price available on request.",
  },
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/v4jrbibwzb30e34ue7l5",
    altText: "Modern Apartment Building",
    name: "Godrej 24",
    description:
      "Godrej 24 Bangalore, located on <span class='font-bold'>Sarjapur Road, Bangalore,</span>  is designed for a 24-hour lifestyle, offering round-the-clock conveniences. With seamless connectivity to Whitefield, Electronic City, and major IT hubs, this prime location is a hotspot for professionals and investors. The area enjoys strong residential demand, enhanced by the upcoming Metro extension, new flyovers, Outer Ring Road, and Peripheral Ring Road, making it a highly sought-after investment destination. <span class='font-bold'>Price on request</span>  for interested buyers and investors.",
  },
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/cvybg1l5a0oyctseohsr",
    altText: "White Building",
    name: "Prestige City Avalon Park",
    description:
      "Prestige City Avalon Park offers <span class='font-bold'> 1, 2, 3, and 4 BHK apartments </span> with <span class='font-bold'> Price on Request.</span> Developed by the renowned Prestige Group, known for its innovation and excellence, the project ensures premium living with thoughtfully designed homes. With a diverse real estate portfolio, Prestige Group has completed 300+ projects across residential, commercial, and hospitality sectors, making it a trusted name in the industry.",
  },
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/zxsxo88cb6vkr6zs9evj",
    altText: "Modern Red Building",
    name: "Confident Orion",
    description:
      "A ready-to-move <span class='font-bold'>3BHK duplex</span> in Confident Orion, <span class='font-bold'>Sarjapur Road, South Bangalore,</span> with  <span class='font-bold'>Price on Request</span> offers <span class='font-bold'>1800 sq. ft.</span> of premium living space. Featuring 3 bedrooms, <span class='font-bold'>3 bathrooms, 3+ balconies, a servant room, and an attached backyard garden, this fully furnished home includes a modular kitchen, wardrobes, marble flooring, geysers, and Jacuzzi.</span>",
  },
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/i1gba3ykzhaswgeqpt3v",
    altText: "Colorful Residential Building",
    name: "Ahad Serenity",
    description:
      "Ahad Serenity, <span class='font-bold'>Sarjapur Road – Price on Request for 1, 2, 3 BHK Ready-to-Move Apartments.</span> Spanning 8 acres with 85% open space, this <span class='font-bold'> gated community</span> offers modern homes with <span class='font-bold'>vitrified & wooden flooring, premium fittings, and modular kitchens.</span>  Spanning 8 acres with 85% open space, this gated community offers modern homes with vitrified & wooden flooring, premium fittings, and modular kitchens.",
  },
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/khdiqzb5rcskjqtbm7l9",
    altText: "Modern Apartment Building",
    name: "Suavity Otium",
    description:
      "Luxury Gated Community in <span class='font-bold'>Akshay Nagar, Bangalore.</span> Exclusive <span class='font-bold'>2, 3 & 4 BHK villas and apartments</span> with modern architecture, lush greenery, and premium amenities. Secure gated access ensures privacy and comfort. Bangalore | <span class='font-bold'>Price on Request.</span> Experience elegance, security, and seamless connectivity in a serene setting.",
  },
];

// Card creation functions
function createPropertyCard(item) {
  return `
    <div class="w-full bg-white sm:rounded-xl rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col justify-between min-h-[550px]">
        <!-- Image Section -->
        <div class="relative">
            <img src="${item.imageURL.src}" alt="${item.imageURL.alt}" 
                 class="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110">
            <span class="absolute top-2 right-2 bg-[#b1923f] text-white px-3 py-1 text-xs sm:text-sm rounded-full font-medium">Trending</span>
        </div>
        
        <!-- Content Section -->
        <div class="p-4 sm:p-5 bg-gradient-to-b from-gray-50 to-white flex flex-col flex-grow">
            <div class="space-y-3 flex-grow">
                <div>
                    <h2 class="text-lg sm:text-xl font-bold lg:text-black lg:font-semibold line-clamp-1">${item.propertyName}</h2>
                    <p class="text-sm lg:text-black lg:font-semibold flex items-center">
                        <i class="fas fa-map-marker-alt mr-2"></i>${item.location}
                    </p>
                    <span class="text-base sm:text-lg lg:text-[16px] font-semibold lg:text-black block">
                        ${item.priceRange}
                        <span class="text-xs lg:text-black">(${item.pricePerSqFt})</span>
                    </span>
                </div>
                
                <div class="text-xs sm:text-sm space-y-2">
                    <p class="flex items-center lg:text-black">
                        <i class="fas fa-home text-green-500 mr-2"></i>
                        <span class="line-clamp-2">${item.configurations}</span>
                    </p>
                    <p class="flex items-center lg:text-black">
                        <i class="fas fa-ruler-combined text-green-500 mr-2"></i>
                        ${item.sizes}
                    </p>
                    <p class="flex items-center lg:text-black">
                        <i class="fas fa-calendar-alt text-green-500 mr-2"></i>
                        ${item.possessionDate}
                    </p>
                </div>
            </div>

            <!-- Buttons Section -->
            <div  
             class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button  onclick="openEnquiryForm({ propertyName: '${item.propertyName}' })"
                class="bg-orange-500 cursor-pointer  hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                    Request Info
                </button>
                <a href="https://api.whatsapp.com/send?phone=917303062845" target="_blank" aria-label="Chat with us on WhatsApp"  class="whatsapp-btn text-green-600 text-2xl">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    </div>
  `;
}

function createServiceCard(item) {
  return `
    <div class="w-full bg-white sm:rounded-xl rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col justify-between min-h-[550px]">
        <!-- Image Section -->
        <div class="relative">
            <img src="${item.imageURL.src}" alt="${item.imageURL.alt}" 
                 class="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110">
            <span class="absolute top-2 right-2 bg-[#b1923f] text-white px-3 py-1 text-xs sm:text-sm rounded-full font-medium">Featured</span>
        </div>
        
        <!-- Content Section -->
        <div class="p-4 sm:p-5 bg-gradient-to-b from-gray-50 to-white flex flex-col flex-grow">
            <div class="space-y-3 flex-grow">
                <div class="text-center">
                    <h2 class="text-lg sm:text-xl font-bold lg:text-black lg:font-bold line-clamp-1">${item.serviceTitle}</h2>
                </div>
                
                <div class="text-sm space-y-2">
                    <!-- No max-height limitation for service descriptions -->
                    <p class="text-black text-center">${item.serviceAddress}</p>
                </div>
            </div>

            <!-- Buttons Section -->
            <div class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button onclick="openEnquiryForm({ serviceTitle: '${item.serviceTitle}' })"
                 class="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                    Explore More
                </button>
                <a href="https://api.whatsapp.com/send?phone=917303062845" target="_blank" aria-label="Chat with us on WhatsApp" class="whatsapp-btn text-green-600 text-2xl">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    </div>
  `;
}

function createResalePropertyCard(property, index) {
  return `
    <div class="w-full bg-white sm:rounded-xl rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col justify-between resale-card">
        <!-- Image Section -->
        <div class="relative">
            <img src="${property.image}" alt="${property.altText}" 
                 class="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110">
            <span class="absolute top-2 right-2 bg-[#b1923f] text-white px-3 py-1 text-xs sm:text-sm rounded-full font-medium">Resale</span>
        </div>
        
        <!-- Content Section -->
        <div class="p-4 sm:p-5 bg-gradient-to-b from-gray-50 to-white flex flex-col flex-grow">
            <div class="space-y-3 flex-grow">
                <div class="text-center">
                    <h2 class="text-lg sm:text-xl font-bold lg:text-black lg:font-semibold line-clamp-1">${
                      property.name
                    }</h2>
                </div>
                
                <div class="text-sm space-y-2 resale-content-wrapper">
                    <div class="description-container text-black text-center" id="desc-${
                      index + 1
                    }">
                        <p class="desc-content">${property.description}</p>
                    </div>
                    <div class="text-center mt-2">
                        <span class="toggle-btn text-blue-600 cursor-pointer text-sm inline-block" data-target="desc-${
                          index + 1
                        }">See More...</span>
                    </div>
                </div>
            </div>

            <!-- Buttons Section -->
            <div 
            class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button onclick="openEnquiryForm({ propertyName: '${
                  property.name
                }' })"
                 class="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                    Unlock Pricing
                </button>
                <a href="https://api.whatsapp.com/send?phone=917303062845" target="_blank" aria-label="Chat with us on WhatsApp" class="whatsapp-btn text-green-600 text-2xl">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    </div>
  `;
}


// Helper functions
function setupToggleButtons() {
  document.querySelectorAll(".description-container").forEach((container) => {
    container.style.maxHeight = "80px"; // Initial collapsed state
    container.style.overflow = "hidden";
    container.style.transition = "max-height 0.3s ease";
  });
  // Set up toggle button functionality with independent card heights
  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const descContainer = document.getElementById(targetId);

      if (
        descContainer.style.maxHeight === "80px" ||
        descContainer.style.maxHeight === ""
      ) {
        descContainer.style.maxHeight = descContainer.scrollHeight + "px"; // Expand to content height
        this.textContent = "See Less...";
      } else {
        descContainer.style.maxHeight = "80px"; // Collapse back
        this.textContent = "See More...";
      }
    });
  });
}

// Placeholder function for the enquiry form
// function openEnquiryForm() {
//   alert("Enquiry form will open here for the selected property");
// }

// Main initialization
document.addEventListener("DOMContentLoaded", () => {
  // Identify containers by their IDs
  const newPropertiesContainer = document.getElementById("property-container");
  const resalePropertiesContainer = document.getElementById(
    "resale-property-container"
  );
const serviceContainer = document.getElementById("service-container");

  // Render primary property listings
 if (newPropertiesContainer) {
   newPropertiesContainer.innerHTML = properties
     .map(createPropertyCard)
     .join("");
 }

 // Render service cards
  if (serviceContainer) {
    serviceContainer.innerHTML = services.map(createServiceCard).join("");
  }

  // Render resale property listings
 if (resalePropertiesContainer) {
   resalePropertiesContainer.innerHTML = resaleProperties
     .map((property, index) => createResalePropertyCard(property, index))
     .join("");

   // Setup toggle functionality for descriptions
  setupToggleButtons();
 }

});

// Testimonial javascript code
const reviews = [
  {
    name: "Ms. Sony (Owner/Seller)",
    review:
      "Deccan Realty Team sold my flat seamlessly. Since I reside outside Bangalore, they managed the entire process with the new buyer professionally, without requiring my physical presence. Truly excellent service!",
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/eiynhkneocoygez6zhyo",
    textContent: {
      heading: "What Our Customers Say",
      paragraph:
        "Discover the voices of our happy homeowners – real experiences, real satisfaction!",
    },
  },
  {
    name: "Mr. Avinash (Buyer)",
    review:
      "Deccan Realty team facilitated the purchase of my flat in Whitefield, Bangalore, at a commendable price as per the market rate. Their expertise and professionalism made the entire process seamless.",
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/d5zo5bconzxz1puzijfu",
    textContent: {
      heading: "What Our Customers Say",
      paragraph:
        "Discover the voices of our happy homeowners – real experiences, real satisfaction!",
    },
  },
  {
    name: "Ms. Fauzia (Tenant)",
    review:
      "I am truly impressed by the Deccan Realty team's efficiency in securing a rental flat for me at ₹50K per month in South Bangalore. This accommodation perfectly meets my needs and is truly awesome for me!",
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/eiynhkneocoygez6zhyo",
    textContent: {
      heading: "What Our Customers Say",
      paragraph:
        "Discover the voices of our happy homeowners – real experiences, real satisfaction!",
    },
  },
  {
    name: "Mr. Pankaj (Buyer)",
    review:
      "I praise the Deccan Realty team for their professional assistance in facilitating my house purchase in a new and renowned project on Sarjapur Road, Bangalore. They secured a genuinely favorable rate, inclusive of multiple offers from the builder. I truly appreciate their efforts in making my home-buying journey remarkably easy. Thank you!",
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/d5zo5bconzxz1puzijfu",
    textContent: {
      heading: "What Our Customers Say",
      paragraph:
        "Discover the voices of our happy homeowners – real experiences, real satisfaction!",
    },
  },
];

let currentReviewIndex = 0;

const customerImage = document.getElementById("customerImage");
const customerName = document.getElementById("customerName");
const customerReview = document.getElementById("customerReview");
const reviewContent = document.getElementById("reviewContent");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const updateReview = (index) => {
  reviewContent.style.opacity = 0;

  setTimeout(() => {
    customerImage.src = reviews[index].image;
    customerName.textContent = reviews[index].name;
    customerReview.textContent = reviews[index].review;

    reviewContent.style.opacity = 1;
  }, 300);
};

const setInitialReview = (index) => {
  customerImage.src = reviews[index].image;
  customerName.textContent = reviews[index].name;
  customerReview.textContent = reviews[index].review;
  reviewContent.style.opacity = 1;
};

prevBtn.addEventListener("click", () => {
  currentReviewIndex =
    (currentReviewIndex - 1 + reviews.length) % reviews.length;
  updateReview(currentReviewIndex);
});

nextBtn.addEventListener("click", () => {
  currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
  updateReview(currentReviewIndex);
});

// Initial load
setInitialReview(currentReviewIndex);
