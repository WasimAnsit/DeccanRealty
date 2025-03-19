const properties = [
    {
      imageURL: { src: "assets/images/GODREJ LAKESIDE ORCHARD.jpg", alt: "Modern House" },
      propertyName: "Godrej Lakeside Orchard",
      propertyDescription: "India",
    },
    {
      imageURL: { src: "assets/images/BIRLA EVARA.jpg", alt: "Luxury Villa" },
      propertyName: "Birla Evara",
      propertyDescription: "India",
    },
    {
      imageURL: { src: "assets/images/NAMBIAR DISTRICT 25.jpg", alt: "Modern Apartment" },
      propertyName: "Nambiar District 25",
      propertyDescription: "India",
    },
    {
      imageURL: { src: "assets/images/PRESTIEGE PINE FOREST.jpg", alt: "Modern House" },
      propertyName: "Prestige Pine Forest",
      propertyDescription: "India",
    },
  ];
  
  const services = [
    {
      imageURL: {
        src: "assets/images/BUY.jpg",
        alt: "Buy Service",
      },
      serviceTitle: "Buy Property",
      serviceAddress: "We help you buy the best!",
    },
    {
      imageURL: {
        src: "assets/images/SELL.jpg",
        alt: "Sell Service",
      },
      serviceTitle: "Sell Property",
      serviceAddress: "Get the best deal for your home!",
    },
  
    {
      imageURL: {
        src: "assets/images/RENT.jpg",
        alt: "Rent Service",
      },
      serviceTitle: "Rent Property",
      serviceAddress: "Find your dream rental!",
    },
    {
      imageURL: {
        src: "assets/images/COMMERCIAL.jpg",
        alt: "Buy Service",
      },
      serviceTitle: "Commercial Property",
      serviceAddress: "We help you buy the best Commerical!",
    },
  ];
  
  function createCard(item, type) {
    return `
          <div class="relative w-72 bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-110 hover:z-10">
              <img src="${item.imageURL.src}" alt="${
      item.imageURL.alt
    }" class="w-full h-40 object-cover">
              <div class="p-4">
                  <h4 class="text-lg font-semibold text-gray-800">${
                    type === "property" ? item.propertyName : item.serviceTitle
                  }</h4>
                  <p class="text-gray-500 text-sm">${
                    type === "property"
                      ? item.propertyDescription
                      : item.serviceAddress
                  }</p>
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
  