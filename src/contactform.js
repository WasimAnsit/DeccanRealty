// contact-form.js
const hmctoken ='e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac'
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("contactus-btn");
  const buttonLoader = document.getElementById("loader"); // Button loader (optional, can be removed if not needed)
  const buttonText = document.getElementById("button-text");
  const successPopup = document.getElementById("successPopup");
  const errorMessage = document.getElementById("errorMessage");
  const closePopup = document.getElementById("closePopup");
  const popupMessage = document.getElementById("popupMessage");
  const mobileInput = document.getElementById("CUmobile");
  const fullBodyLoader = document.getElementById("fullBodyLoader");

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
    const mobile = mobileInput.value.trim();
    const email = document.getElementById("CUemail1").value.trim();

    document
      .querySelectorAll("#contactForm small")
      .forEach((el) => el.classList.add("hidden"));

    if (!name || name.length < 2) {
      document.getElementById("name-req-getintouch").classList.remove("hidden");
      isValid = false;
    }

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      document.getElementById("notValidEmail11").classList.remove("hidden");
      isValid = false;
    }

    if (!grecaptcha.getResponse()) {
      document
        .getElementById("recaptcha-req-getintouch")
        .classList.remove("hidden");
      isValid = false;
    }

    return isValid;
  }

  // Show full body loader
  function showLoader() {
    fullBodyLoader.classList.remove("hidden");
    buttonText.classList.add("hidden");
    buttonLoader.classList.remove("hidden"); // Optional: keep button loader if desired
    submitBtn.disabled = true;
  }

  // Hide full body loader
  function hideLoader() {
    fullBodyLoader.classList.add("hidden");
    buttonText.classList.remove("hidden");
    buttonLoader.classList.add("hidden"); // Optional: hide button loader
    submitBtn.disabled = false;
  }

  // Show success popup
  function showSuccess(message) {
    popupMessage.textContent = message;
    successPopup.classList.remove("hidden");
  }

  // Show error message
  function showError() {
    errorMessage.classList.remove("hidden");
    setTimeout(() => {
      errorMessage.classList.add("hidden");
    }, 3000);
  }

  // Form submission
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    showLoader();

    const payload = {
      subject: "Website Enquiry | DeccanRealty",
      message: document.getElementById("CUmessage").value.trim(),
      email: document.getElementById("CUemail1").value.trim(),
      name: document.getElementById("CUname").value.trim(),
      phone: mobileInput.value.trim(),
      domain: "deccanrealty.com",
    };

    try {
      const response = await fetch(
        "https://mtestatesapi-f0bthnfwbtbxcecu.southindia-01.azurewebsites.net/properties/GetInTouch",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
              'Authorization': 'Bearer ' + hmctoken,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json(); // Changed to json() since response is JSON
      showSuccess(responseData.message); // Only show the message part
      form.reset();
      grecaptcha.reset();
    } catch (error) {
      console.error("Error:", error);
      showError();
    } finally {
      hideLoader();
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
});
