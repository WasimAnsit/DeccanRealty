const properties = [
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/v1742815515/GODREJ_LAKESIDE_ORCHARD_vfejmm.jpg",
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
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/v1742815510/BIRLA_EVARA_mkqgmm.jpg",
      alt: "Luxury Villa",
    },
    propertyName: "Birla Evara",
    priceRange: "₹71.0 L - 3.16 Cr",
    location: "Kodathi Vilage, East Bangalore",
    pricePerSqFt: "₹14.98 K - 17.96 K/sq.ft",
    sizes: "(Super Area) 474.00 - 1759.00 sq.ft",
    possessionDate: "Possession Starts Dec, 2031",
    configurations: "1BHK, 2BHK, 3BHK, 4BHK Apartments & Studio Apartments",
    propertyDescription: "",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/v1742815520/NAMBIAR_DISTRICT_25_esdnh7.jpg",
      alt: "Modern Apartment",
    },
    propertyName: "Nambiar District 25",
    priceRange: "₹ 1.44 Cr - 3.0 Cr.",
    location: "MSarjapur Road, Bangalore East",
    pricePerSqFt: "₹ 12 k/sq.ft",
    sizes: "(Super Area) 1200.00 - 2500 Sq.Ft.",
    possessionDate: "Possession Starts Jan 2030",
    configurations: "2BHK, 3BHK, 4BHK, Apartments Configuration",
    propertyDescription: "",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/v1742815521/PRESTIEGE_PINE_FOREST_et69ai.jpg",
      alt: "Modern House",
    },
    propertyName: "Prestige Pine Forest",
    priceRange: "₹ 3.76 Cr - 3.89 Cr.",
    location: "ECC Road, Whitefield,East Bangalore",
    pricePerSqFt: "₹10.94K - ₹14.351K /Sq.Ft.",
    sizes: "(Super Area) 2621.00 - 3556.00 Sq.Ft.",
    possessionDate: "Possession Starts Dec 2028",
    configurations: "3BHK, 4BHK, Apartments Configuration",
    propertyDescription: "",
  },
];

const services = [
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/v1742815510/BUY_zlwlgm.jpg",
      alt: "Buy Service",
    },
    serviceTitle: "Buy Your Dream Home",
    serviceAddress:
      "Looking for a home in Bangalore? DeccanRealty.com offers the best residential listings with exclusive features and immersive video experiences. Start your search today!",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/v1742815523/SELL_gvuvjh.jpg",
      alt: "Sell Service",
    },
    serviceTitle: "Sell Your Property with Ease",
    serviceAddress:
      "Looking for the right buyer? DeccanRealty.com simplifies the selling process, ensuring a smooth and stress-free experience. Trust us to find the perfect buyer and support you every step of the way!",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/v1742815524/RENT_ntuh4o.jpg",
      alt: "Rent Service",
    },
    serviceTitle: "Find Your Perfect Rental Home",
    serviceAddress:
      "Looking to rent a home in Bangalore? DeccanRealty.com offers top-quality, ready-to-move-in apartments for a hassle-free living experience. Let us help you find the perfect place!",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/v1742815510/COMMERCIAL_wfr8xx.jpg",
      alt: "Buy Service",
    },
    serviceTitle: "Invest in Prime Commercial Properties",
    serviceAddress:
      "Looking for rental income or short-term investment opportunities? DeccanRealty.com offers premium, ready-to-move-in commercial properties in Bangalore for a seamless investment and leasing experience.",
  },
];


function createCard(item, type) {
  return `
    <div class="relative w-96 bg-white rounded-xl overflow-hidden shadow-[0_10px_15px_rgba(0,0,0,0.1),10px_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_25px_rgba(0,0,0,0.15),15px_0_25px_rgba(0,0,0,0.15)] transform transition-all duration-300 hover:scale-105 flex-shrink-0 card-container" data-type="${type}">
      <div class="relative">
        <img src="${item.imageURL.src}" alt="${
    item.imageURL.alt
  }" class="w-full 2xl:h-48 xl:h-34 object-cover transition-transform duration-300">
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
              <h2 class="property-name text-xl font-bold text-gray-900 leading-tight mb-1">${item.propertyName}</h2>
              <p><i class="fas fa-map-marker-alt text-black mr-2 font-bold"></i>${item.location}</p>
              <span class="property-price 2xl:text-[16px] xl:text-[14px] font-semibold text-black block">${item.priceRange}<span class="lg:text-[12px] xl:text-[10px]"> (${item.pricePerSqFt})</span></span>
            </div>
            <div class="property-details text-sm text-gray-600 space-y-2 max-h-40 overflow-y-auto">
              <p><i class="fas fa-home text-green-500 mr-2"></i>${item.configurations}</p>
              <p><i class="fas fa-ruler-combined text-green-500 mr-2"></i>${item.sizes}</p>
              <p><i class="fas fa-calendar-alt text-green-500 mr-2"></i>${item.possessionDate}</p>
            </div>
          `
              : `
            <h2 class="text-[22px] font-bold text-gray-900 mb-4 text-center">${item.serviceTitle}</h2>
            <p class="text-gray-600 text-sm leading-relaxed max-h-40 overflow-y-auto">${item.serviceAddress}</p>
          `
          }
        </div>
        <div class="card-buttons flex justify-between items-center pt-4 border-t border-gray-200">
          <button class="enquiry-btn bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300" data-type="${type}" data-id="${
    type === "property" ? item.propertyName : item.serviceTitle
  }">
            Enquiry Now
          </button>
          <a href="https://api.whatsapp.com/send?phone=917303062845" target="_blank" class="whatsapp-btn text-green-600 hover:text-green-700 flex items-center" aria-label="Chat on WhatsApp">
            <i class="fab fa-whatsapp" aria-hidden="true"></i>
            <span class="sr-only">Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  `;
}


// Function to populate and duplicate cards for infinite scroll
function populateSlider(gridId, items, type) {
  const grid = document.getElementById(gridId);
  const doubledItems = [...items, ...items];
  grid.innerHTML = doubledItems.map((item) => createCard(item, type)).join("");
  grid.style.animationDuration = `${items.length * 5}s`;

  // Add event listeners for enquiry buttons
  grid.querySelectorAll(".enquiry-btn").forEach((button) => {
    const buttonType = button.getAttribute("data-type");
    const identifier = button.getAttribute("data-id");
    button.addEventListener("click", () => {
      const context =
        buttonType === "property"
          ? { propertyName: identifier }
          : { serviceTitle: identifier };
      enquiryForm.openForm(context);
    });
  });
}

// Populate both sections
populateSlider("propertyGrid", properties, "property");
populateSlider("servicesGrid", services, "service");


document.addEventListener("DOMContentLoaded", () => {
  // Attach event listeners to all toggle buttons
  document.querySelectorAll(".toggle-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      // Prevent the default behavior and stop propagation
      event.preventDefault();
      event.stopPropagation();

      // Get the target ID for this specific button
      const targetId = button.getAttribute("data-target");
      const desc = document.getElementById(targetId);

      if (!desc) {
        console.error(`Element with ID ${targetId} not found`);
        return;
      }

      // Toggle only this specific description container
      if (desc.classList.contains("expanded")) {
        desc.classList.remove("expanded");
        button.textContent = "See More";
      } else {
        desc.classList.add("expanded");
        button.textContent = "See Less";
      }
    });

    // Initially check if "See More" should be hidden because content fits
    const targetId = button.getAttribute("data-target");
    const desc = document.getElementById(targetId);

    if (desc) {
      // Use setTimeout to ensure content is fully rendered before checking height
      setTimeout(() => {
        const maxHeight = parseInt(window.getComputedStyle(desc).maxHeight);
        if (desc.scrollHeight <= maxHeight) {
          button.classList.add("hidden");
        }
      }, 10);
    }
  });

  // Make sure grid container has correct alignment
  const gridContainer = document.querySelector(".grid");
  if (gridContainer) {
    gridContainer.classList.add("items-start");
  }
});


// testimonial js
const reviews = [
  {
    name: "Kirti Sharma",
    review:
      "We like the final result of this project; it is extraordinary and also provides the best service to the client.",
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/v1742886978/3_us1xt7.jpg",
    textContent: {
      heading: "What Our Customers Say",
      paragraph:
        "Discover the voices of our happy homeowners – real experiences, real satisfaction!",
    },
  },
  {
    name: "John Doe",
    review:
      "The team delivered beyond our expectations. Highly recommended for anyone looking for quality work.",
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/v1742886978/4_wtkxdr.jpg",
    textContent: {
      heading: "What Our Customers Say",
      paragraph:
        "Discover the voices of our happy homeowners – real experiences, real satisfaction!",
    },
  },
  {
    name: "Neha Patel",
    review:
      "Excellent service and attention to detail. We are very satisfied with the outcome.",
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/v1742886978/3_us1xt7.jpg",
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




    