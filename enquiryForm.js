// enquiryForm.js
class EnquiryForm {
  constructor() {
    this.createForm();
    this.initializeEvents();
  }

  createForm() {
    // Create form container
    const formContainer = document.createElement("div");
    formContainer.id = "enquiryOverlay";
    formContainer.className =
      "hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center";

    formContainer.innerHTML = `
            <div id="enquiryModal" class="bg-[#5a4d5a] w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 max-w-lg p-4 sm:p-6 rounded-lg relative transform -translate-y-full opacity-0 transition-all duration-500 ease-in-out">
                <span id="closeEnquiryBtn" class="absolute top-2 right-2 text-white text-2xl cursor-pointer hover:text-gray-300">×</span>
                <h2 class="text-white text-lg sm:text-xl md:text-2xl font-medium text-center mb-5">Fill Your Enquiry Here</h2>
                <form id="enquiryForm" class="flex flex-col gap-3 sm:gap-4">
                    <div class="relative">
                        <input id="enquiryName" type="text" placeholder="Name" required class="p-2 sm:p-3 rounded-md text-gray-800 bg-white w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500" aria-describedby="enquiryName-error">
                        <p id="enquiryName-error" class="text-red-400 text-xs sm:text-sm absolute -bottom-5 left-0 hidden">Name is required</p>
                    </div>
                    <div class="relative">
                        <input id="enquiryEmail" type="email" placeholder="Email" required class="p-2 sm:p-3 rounded-md text-gray-800 bg-white w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500" aria-describedby="enquiryEmail-error">
                        <p id="enquiryEmail-error" class="text-red-400 text-xs sm:text-sm absolute -bottom-5 left-0 hidden">Email is required</p>
                    </div>
                    <div class="relative">
                        <input id="enquiryPhone" type="tel" placeholder="Mobile Number" required class="p-2 sm:p-3 rounded-md text-gray-800 bg-white w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500" aria-describedby="enquiryPhone-error">
                        <p id="enquiryPhone-error" class="text-red-400 text-xs sm:text-sm absolute -bottom-5 left-0 hidden">Mobile Number is required</p>
                    </div>
                    <div class="relative">
                        <textarea id="enquiryMessage" placeholder="Your Message" required class="p-2 sm:p-3 rounded-md text-gray-800 bg-white w-full h-20 sm:h-24 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500" aria-describedby="enquiryMessage-error"></textarea>
                        <p id="enquiryMessage-error" class="text-red-400 text-xs sm:text-sm absolute -bottom-5 left-0 hidden">Message is required</p>
                    </div>
                    <div class="flex flex-col sm:flex-row justify-between items-center gap-3">
                        <p id="enquiryStatus" class="text-white text-xs sm:text-sm"></p>
                        <button type="submit" class="bg-white text-gray-800 px-3 sm:px-4 py-2 rounded-md border border-gray-300 font-medium text-sm sm:text-base hover:bg-gray-100 transition w-full sm:w-auto">Submit</button>
                    </div>
                </form>
            </div>
        `;

    document.body.appendChild(formContainer);
  }

  initializeEvents() {
    const overlay = document.getElementById("enquiryOverlay");
    const modal = document.getElementById("enquiryModal");
    const closeBtn = document.getElementById("closeEnquiryBtn");
    const form = document.getElementById("enquiryForm");
    const body = document.body;

    // Open form function
    this.openForm = () => {
      overlay.classList.remove("hidden");
      body.classList.add("overflow-hidden");
      setTimeout(() => modal.classList.add("translate-y-0", "opacity-100"), 10);
    };

    // Close form
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("translate-y-0", "opacity-100");
      modal.classList.add("-translate-y-full", "opacity-0");
      setTimeout(() => {
        overlay.classList.add("hidden");
        body.classList.remove("overflow-hidden");
      }, 500);
    });

    // Form submission
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const status = document.getElementById("enquiryStatus");

      const name = document.getElementById("enquiryName").value.trim();
      const email = document.getElementById("enquiryEmail").value.trim();
      const phone = document.getElementById("enquiryPhone").value.trim();
      const message = document.getElementById("enquiryMessage").value.trim();

      // Reset errors
      document
        .querySelectorAll('[id$="-error"]')
        .forEach((error) => error.classList.add("hidden"));

      // Validation
      let isValid = true;
      if (!name) {
        document.getElementById("enquiryName-error").classList.remove("hidden");
        isValid = false;
      }
      if (!email) {
        document
          .getElementById("enquiryEmail-error")
          .classList.remove("hidden");
        isValid = false;
      }
      if (!phone) {
        document
          .getElementById("enquiryPhone-error")
          .classList.remove("hidden");
        isValid = false;
      }
      if (!message) {
        document
          .getElementById("enquiryMessage-error")
          .classList.remove("hidden");
        isValid = false;
      }

      if (!isValid) {
        status.textContent = "Please fill all required fields";
        status.classList.add("text-red-400");
        return;
      }

      const payload = {
        subject: "Enquiry property by Deccan Realty",
        message: message,
        email: email,
        name: name,
        phone: phone,
      };

      status.textContent = "Submitting...";
      status.classList.remove("text-red-400", "text-green-400");
      status.classList.add("text-yellow-400");

      try {
        const response = await fetch(
          "https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/properties/GetInTouch",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        if (!response.ok) throw new Error("Network response was not ok");

        status.textContent = "Enquiry submitted successfully!";
        status.classList.remove("text-yellow-400");
        status.classList.add("text-green-400");
        form.reset();
        setTimeout(() => {
          modal.classList.remove("translate-y-0", "opacity-100");
          modal.classList.add("-translate-y-full", "opacity-0");
          setTimeout(() => {
            overlay.classList.add("hidden");
            body.classList.remove("overflow-hidden");
          }, 500);
        }, 2000);
      } catch (error) {
        console.error("Error:", error);
        status.textContent = "Failed to submit enquiry. Please try again.";
        status.classList.remove("text-yellow-400");
        status.classList.add("text-red-400");
      }
    });
  }
}

// Initialize form
const enquiryForm = new EnquiryForm();

// Make openForm globally accessible
window.openEnquiryForm = enquiryForm.openForm;
