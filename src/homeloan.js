// homeloan.js

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("contactus-btn");
  const successMessage = document.getElementById("valid-response-getintouch");
  const errorMessage = document.getElementById("invalid-response-getintouch");
  const successPopup = document.getElementById("successPopup");
  const popupMessage = document.getElementById("popupMessage");
  const closePopup = document.getElementById("closePopup");
  const fullBodyLoader = document.getElementById("fullBodyLoader");
  const mobileInput = document.getElementById("CUmobile");

  // Restrict mobile input to numbers only
  mobileInput.addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9]/g, "");
    if (this.value.length > 10) {
      this.value = this.value.slice(0, 10);
    }
  });

  mobileInput.addEventListener("keydown", function (e) {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
    ];
    if (
      allowedKeys.includes(e.key) ||
      (e.key >= "0" && e.key <= "9") ||
      (e.key >= "Numpad0" && e.key <= "Numpad9")
    ) {
      return;
    }
    e.preventDefault();
  });

  // Form validation function
  function validateForm() {
    let isValid = true;
    const name = document.getElementById("CUname").value.trim();
    const email = document.getElementById("CUemail1").value.trim();
    const mobile = mobileInput.value.trim();
    const message = document.getElementById("CUmessage").value.trim();
    const recaptchaResponse = grecaptcha.getResponse();

    // Reset all validation messages
    removeValidationGetinTouch();

    // Name validation
    if (!name) {
      document.getElementById("name-req-getintouch").classList.remove("hidden");
      isValid = false;
    }

    // Email validation
    if (!email) {
      document
        .getElementById("email-req-getintouch")
        .classList.remove("hidden");
      isValid = false;
    } else if (!isValidEmail("CUemail1")) {
      document.getElementById("notValidEmail11").classList.remove("hidden");
      isValid = false;
    }

    // Mobile validation
    if (!mobile) {
      document
        .getElementById("mobile-req-getintouch")
        .classList.remove("hidden");
      isValid = false;
    } else if (mobile.length !== 10) {
      document
        .getElementById("invalidMobileContact")
        .classList.remove("hidden");
      isValid = false;
    }

    // Message validation
    if (!message) {
      document
        .getElementById("message-req-getintouch")
        .classList.remove("hidden");
      isValid = false;
    }

    // reCAPTCHA validation
    if (!recaptchaResponse) {
      document
        .getElementById("recaptcha-req-getintouch")
        .classList.remove("hidden");
      isValid = false;
    }

    return isValid;
  }

  // Form submission handler
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Validate form and show warnings if invalid
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    // Prepare payload
    const payload = {
      subject: "Enquire For Home Loan | DeccanRealty",
      message: document.getElementById("CUmessage").value.trim(),
      email: document.getElementById("CUemail1").value.trim(),
      name: document.getElementById("CUname").value.trim(),
      phone: mobileInput.value.trim(),
      domain: "deccanrealty.com",
    };

    // Show full-body loader and disable button
    fullBodyLoader.classList.remove("hidden");
    submitBtn.disabled = true;
    successMessage.classList.add("hidden");
    errorMessage.classList.add("hidden");

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

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();

      // Hide loader and show popup
      fullBodyLoader.classList.add("hidden");
      popupMessage.textContent =
        responseData.message || "Submitted successfully. Thank you!";
      successPopup.classList.remove("hidden");

      // Reset form
      contactForm.reset();
      grecaptcha.reset();
      submitBtn.disabled = false;
    } catch (error) {
      console.error("Error:", error);
      fullBodyLoader.classList.add("hidden");
      errorMessage.classList.remove("hidden");
      submitBtn.disabled = false;

      // Hide error message after 3 seconds
      setTimeout(() => {
        errorMessage.classList.add("hidden");
      }, 3000);
    }
  });

  // Close popup handlers
  closePopup.addEventListener("click", function () {
    successPopup.classList.add("hidden");
  });

  successPopup.addEventListener("click", function (e) {
    if (e.target === successPopup) {
      successPopup.classList.add("hidden");
    }
  });

  // Validation functions
  function addRequired(id) {
    const element = document.getElementById(id);
    const reqMessage = document.getElementById(
      `${
        id === "CUemail1"
          ? "email"
          : id === "CUmobile"
          ? "mobile"
          : id === "CUmessage"
          ? "message"
          : "name"
      }-req-getintouch`
    );
    if (!element.value.trim()) {
      reqMessage.classList.remove("hidden");
    }
  }

  function isValidEmail(id) {
    const email = document.getElementById(id).value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function removeValidationGetinTouch() {
    document
      .querySelectorAll("#contactForm small")
      .forEach((el) => el.classList.add("hidden"));
  }
});
