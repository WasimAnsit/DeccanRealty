const properties = [
  {
    imageURL: { 
        src: "assets/images/GODREJ LAKESIDE ORCHARD.jpg", 
        alt: "Modern House" 
    },
    propertyName: "Godrej Lakeside Orchard",
    priceRange: "₹ 1.09 Cr - ₹ 3.12 Cr.",
    location: "Sarjapur Road, South Bangalore",
    pricePerSqFt: "₹ 11.63K - ₹ 33.81K /Sq.Ft.",
    sizes: "(Super Area)323 - 2679 Sq.Ft.",
    possessionDate: "Possession Starts Jan 2030",
    configurations: "2BHK, 3BHK, 3.5BHK, 4BHK, 4.5BHK Apartment & Studio Apartments",
    propertyDescription: ""
},
    {
      imageURL: { src: "assets/images/BIRLA EVARA.jpg", alt: "Luxury Villa" },
      propertyName: "Birla Evara",
      
      priceRange: "71.0 L - 3.16 Cr",
      location: "Kodathi Vilage,Bangalore East , Banglore",
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
      location: "Muthanallur Cross, Sarjapur Road,Bangalore East",
      pricePerSqFt: "₹ 12 k/sq.ft",
      sizes: "(Super Area) 1200.00 -2500 Sq.Ft.",
      possessionDate: "Possession Starts Jan 2030",
      configurations: "2BHK, 3BHK, 4BHK, Apartments Configration",
      propertyDescription: ""
    },
    {
      imageURL: { src: "assets/images/PRESTIEGE PINE FOREST.jpg", alt: "Modern House" },
      propertyName: "Prestige Pine Forest",
      priceRange: "₹ 3.76 Cr - 3.89 Cr.",
      location: "ECC Road, Whitefiled, Banglore East, Banglore ",
      pricePerSqFt: "₹10.94K - ₹14.351K /Sq.Ft.",
      sizes: "Super Area) 2621.00 - 3556.00 Sq.Ft.",
      possessionDate: "Possession Starts Dec 2028",
      configurations: "3BHK, 4BHK, Apartments Configration",
      propertyDescription: ""
    },
  ];
  
  const services = [
    {
      imageURL: {
        src: "assets/images/BUY.jpg",
        alt: "Buy Service",
      },
      serviceTitle: "Buy your Dream Home",
      serviceAddress: "Are you in search of a home in Delhi, NCR? dncrproperty.com is your place to start. Weâ€™ll find you the best residential flats in Delhi NCR. Find your new home with an enticing video experience. Our residential properties in Delhi NCR include the best possible listings and the features you would not find anywhere else",
    },
    {
      imageURL: {
        src: "assets/images/SELL.jpg",
        alt: "Sell Service",
      },
      serviceTitle: "Sell your Home",
      serviceAddress: "Looking for an ideal buyer to hand over your home? We know that selling your home is an emotional experience as well as an arduous task. We help overcome the challenges of selling a home and find you a buyer to whom you can peacefully entrust your belonging. Moreover, weâ€™ll provide you with the full backup to navigate through the process!",
    },
  
    {
      imageURL: {
        src: "assets/images/RENT.jpg",
        alt: "Rent Service",
      },
      serviceTitle: "Rent your Home",
      serviceAddress: "Want to rent a home? You can put your trust in dncrproperty.com. We can assist you in finding the best flats and apartments for rent in the Delhi NCR. We provide high-quality and ready-to-move-in residential apartments for rent in the Delhi NCR for you to enjoy a hassle-free stay",
    },
    {
      imageURL: {
        src: "assets/images/COMMERCIAL.jpg",
        alt: "Buy Service",
      },
      serviceTitle: "Commercial Property",
      serviceAddress: "Looking to rent a commercial property? Trust dncrproperty.com to help you find the best office spaces and commercial properties for rent in Delhi NCR. We offer high-quality, ready-to-move-in commercial spaces to ensure a hassle-free leasing experience.",
    },
  ];
  
  function createCard(item, type) {
    return `
        <div class="relative w-72 bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-110 hover:z-10">
            <img src="${item.imageURL.src}" alt="${item.imageURL.alt}" class="w-full h-40 object-cover">
            <div class="p-4">
                <h4 class="text-lg font-semibold text-gray-800">
                    ${type === "property" ? item.propertyName : item.serviceTitle}
                </h4>
                <p class="text-gray-500 text-sm">
                    ${type === "property" ? item.propertyDescription : item.serviceAddress}
                </p>
                ${
                  type === "property"
                    ? `
                    <p class="text-gray-600 text-sm font-semibold mt-2">${item.priceRange || ""}</p>
                    <p class="text-gray-500 text-sm">${item.location || ""}</p>
                    <p class="text-gray-500 text-sm">${item.pricePerSqFt || ""}</p>
                    <p class="text-gray-500 text-sm">Size: ${item.sizes || ""}</p>
                    <p class="text-gray-500 text-sm">${item.possessionDate || ""}</p>
                    <p class="text-gray-500 text-sm">${item.configurations || ""}</p>
                    `
                    : ""
                }
                <div class="flex justify-between items-center mt-4">
                    <!-- Enquiry Now Button -->
                     <button onclick="window.location.href='contact.html'" 
                        class="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600">
                        Enquiry Now
                    </button>
                    <!-- WhatsApp Button -->
                    <a href="https://api.whatsapp.com/send?phone=917303062845" target="_blank" class="text-green-500 text-2xl">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
            ${
              type === "property"
                ? `<div class="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 text-sm rounded-full">Trending</div>`
                : ""
            }
        </div>
    `;
}



  
  document.getElementById("propertyGrid").innerHTML = properties
    .map((p) => createCard(p, "property"))
    .join("");
  document.getElementById("servicesGrid").innerHTML = services
    .map((s) => createCard(s, "service"))
    .join("");
  