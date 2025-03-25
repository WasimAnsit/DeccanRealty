class EnquiryForm {
  constructor() {
    this.createForm();
    this.initializeEvents();
  }

  createForm() {
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
            <input id="enquiryName" type="text" placeholder="Name" class="p-2 sm:p-3 rounded-md text-gray-800 bg-white w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500" aria-describedby="enquiryName-error">
            <p id="enquiryName-error" class="text-red-400 text-xs sm:text-sm absolute -bottom-5 left-0 hidden">Name is required</p>
          </div>
          <div class="relative">
            <input id="enquiryPhone" type="tel" placeholder="Mobile Number" maxlength="12" class="p-2 sm:p-3 rounded-md text-gray-800 bg-white w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500" aria-describedby="enquiryPhone-error">
            <p id="enquiryPhone-error" class="text-red-400 text-xs sm:text-sm absolute -bottom-5 left-0 hidden">Valid mobile number (max 12 digits) is required</p>
          </div>
          <div class="relative">
            <input id="enquiryEmail" type="email" placeholder="Email" class="p-2 sm:p-3 rounded-md text-gray-800 bg-white w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500" aria-describedby="enquiryEmail-error">
            <p id="enquiryEmail-error" class="text-red-400 text-xs sm:text-sm absolute -bottom-5 left-0 hidden">Valid email is required</p>
          </div>
          <div class="relative">
            <textarea id="enquiryMessage" placeholder="Your Message" class="p-2 sm:p-3 rounded-md text-gray-800 bg-white w-full h-20 sm:h-24 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500" aria-describedby="enquiryMessage-error"></textarea>
            <p id="enquiryMessage-error" class="text-red-400 text-xs sm:text-sm absolute -bottom-5 left-0 hidden">Message is required</p>
          </div>
          <div class="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p id="enquiryStatus" class="text-white text-xs sm:text-sm"></p>
            <button type="submit" id="submitBtn" class="bg-white text-gray-800 px-3 sm:px-4 py-2 rounded-md border border-gray-300 font-medium text-sm sm:text-base hover:bg-gray-100 transition w-full sm:w-auto">Submit</button>
          </div>
        </form>
      </div>
      <div id="loaderOverlay" class="hidden fixed inset-0 bg-black/70 z-60 flex items-center justify-center">
        <div class="loader border-t-4 border-white rounded-full w-12 h-12 animate-spin"></div>
      </div>
      <div id="successPopup" class="hidden fixed inset-0 bg-black/50 z-60 flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg text-center">
          <h3 class="text-lg font-medium text-green-600">Success!</h3>
          <p class="mt-2 text-gray-700">Enquiry submitted successfully</p>
          <button id="closeSuccessBtn" class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">OK</button>
        </div>
      </div>
    `;

    document.body.appendChild(formContainer);
  }

  showError(inputId, message) {
    const input = document.getElementById(inputId);
    input.placeholder = message;
    input.classList.add("border-red-500");
    input.style.setProperty("color", "#f87171", "important");
    input.classList.add("placeholder-red-400");
  }

  resetErrors() {
    const inputs = [
      "enquiryName",
      "enquiryEmail",
      "enquiryPhone",
      "enquiryMessage",
    ];
    inputs.forEach((id) => {
      const input = document.getElementById(id);
      input.placeholder =
        id === "enquiryMessage" ? "Your Message" : id.replace("enquiry", "");
      input.classList.remove("border-red-500");
      input.style.color = "inherit"; // Reset to default text color
      input.classList.remove("placeholder-red-400");
      document.getElementById(`${id}-error`).classList.add("hidden");
    });
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  initializeEvents() {
    const overlay = document.getElementById("enquiryOverlay");
    const modal = document.getElementById("enquiryModal");
    const closeBtn = document.getElementById("closeEnquiryBtn");
    const form = document.getElementById("enquiryForm");
    const loaderOverlay = document.getElementById("loaderOverlay");
    const successPopup = document.getElementById("successPopup");
    const closeSuccessBtn = document.getElementById("closeSuccessBtn");
    const body = document.body;
    const phoneInput = document.getElementById("enquiryPhone");

    // Restrict phone input to numbers only
    phoneInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
      if (e.target.value.length > 12) {
        e.target.value = e.target.value.slice(0, 12);
      }
    });

    this.openForm = () => {
      overlay.classList.remove("hidden");
      this.resetErrors(); // Reset errors when opening form
      form.reset(); // Reset form values when opening
      body.classList.add("overflow-hidden");
      setTimeout(() => modal.classList.add("translate-y-0", "opacity-100"), 10);
    };

    closeBtn.addEventListener("click", () =>
      this.closeForm(modal, overlay, body)
    );

    closeSuccessBtn.addEventListener("click", () => {
      successPopup.classList.add("hidden");
      this.closeForm(modal, overlay, body);
    });

    // Change text color when user starts typing
    ["enquiryName", "enquiryEmail", "enquiryPhone", "enquiryMessage"].forEach(
      (id) => {
        const input = document.getElementById(id);
        input.addEventListener("input", () => {
          if (input.value.trim()) {
            input.style.color = "#1f2937"; // Tailwind gray-800
            input.classList.remove("border-red-500");
            document.getElementById(`${id}-error`).classList.add("hidden");
          }
        });
      }
    );

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const status = document.getElementById("enquiryStatus");
      const submitBtn = document.getElementById("submitBtn");

      const name = document.getElementById("enquiryName").value.trim();
      const email = document.getElementById("enquiryEmail").value.trim();
      const phone = document.getElementById("enquiryPhone").value.trim();
      const message = document.getElementById("enquiryMessage").value.trim();

      this.resetErrors();

      let isValid = true;
      if (!name) {
        this.showError("enquiryName", "Name is required");
        isValid = false;
      }
      if (email && !this.validateEmail(email)) {
        // Only validate email if provided
        this.showError("enquiryEmail", "Please enter a valid email");
        isValid = false;
      }
      if (!phone) {
        this.showError("enquiryPhone", "Mobile Number is required");
        isValid = false;
      } else if (phone.length > 12) {
        this.showError("enquiryPhone", "Max 12 digits allowed");
        isValid = false;
      }
      // Removed message required validation

      if (!isValid) {
        status.textContent = " Please fill required fields correctly";
        status.classList.add("text-red-400");
        return;
      }

      submitBtn.disabled = true;
      loaderOverlay.classList.remove("hidden");

      const payload = {
        subject: "Enquiry property by Deccan Realty",
        message: message || "No message provided", // Provide default if empty
        email: email || "No email provided", // Provide default if empty
        name: name,
        phone: phone,
      };

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

        loaderOverlay.classList.add("hidden");
        submitBtn.disabled = false;

        if (!response.ok) throw new Error("Network response was not ok");

        form.reset();
        successPopup.classList.remove("hidden");
        status.textContent = "";
      } catch (error) {
        loaderOverlay.classList.add("hidden");
        submitBtn.disabled = false;
        status.textContent = "Failed to submit enquiry. Please try again.";
        status.classList.add("text-red-400");
        console.error("Error:", error);
      }
    });
  }

  closeForm(modal, overlay, body) {
    modal.classList.remove("translate-y-0", "opacity-100");
    modal.classList.add("-translate-y-full", "opacity-0");
    setTimeout(() => {
      overlay.classList.add("hidden");
      body.classList.remove("overflow-hidden");
    }, 500);
  }
}

const enquiryForm = new EnquiryForm();
window.openEnquiryForm = enquiryForm.openForm;
