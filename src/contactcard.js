document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("address-cards");

  const addressData = [
    {
      title: "Head Office",
      address: [
        "No. 56/6, 6th C Main Road",
        "4th T Block East Jayanagar",
        "Bangalore - 560041",
        "Karnataka, India",
      ],
      icon: "building",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Customer Support",
      address: [
        "No. 56/6, 6th C Main Road",
        "4th T Block East Jayanagar",
        "Bangalore - 560041",
        "Karnataka, India",
      ],
      icon: "headset",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Sales Department",
      address: [
        "No. 56/6, 6th C Main Road",
        "4th T Block East Jayanagar",
        "Bangalore - 560041",
        "Karnataka, India",
      ],
      icon: "handshake",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Tech Center",
      address: [
        "No. 56/6, 6th C Main Road",
        "4th T Block East Jayanagar",
        "Bangalore - 560041",
        "Karnataka, India",
      ],
      icon: "laptop-code",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  function createCard(data) {
    return `
        <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div class="p-6">
                <div class="flex items-center mb-4 gap-3">
                    <div class="${
                      data.color
                    } w-12 h-12 rounded-full flex items-center justify-center">
                        <i class="fas fa-${data.icon} text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-800">${
                      data.title
                    }</h3>
                </div>
                <div class="space-y-2 text-gray-600 pl-1">
                    ${data.address
                      .map(
                        (line) => `<p class="text-sm md:text-base">${line}</p>`
                      )
                      .join("")}
                </div>
            </div>
            <div class="bg-gray-50 px-6 py-4 border-t border-gray-100">
                <button class="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded transition-colors duration-300 text-sm font-medium flex items-center justify-center gap-2">
                    <i class="fas fa-map-marker-alt"></i>
                    View Location
                </button>
            </div>
        </div>
        `;
  }

  container.innerHTML = addressData.map(createCard).join("");
});
