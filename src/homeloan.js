
      document.addEventListener("DOMContentLoaded", function () {
        const contactForm = document.getElementById("contactForm");
        const loader = document.getElementById("loader");
        const successMessage = document.getElementById(
          "valid-response-getintouch"
        );
        const errorMessage = document.getElementById(
          "invalid-response-getintouch"
        );
        const submitBtn = document.getElementById("contactus-btn");
        const successPopup = document.getElementById("successPopup");
        const popupMessage = document.getElementById("popupMessage");
        const closePopup = document.getElementById("closePopup");

        // Form submission handler
        contactForm.addEventListener("submit", async function (e) {
          e.preventDefault();

          // Get form values
          const name = document.getElementById("CUname").value.trim();
          const email = document.getElementById("CUemail1").value.trim();
          const mobile = document.getElementById("CUmobile").value.trim();
          const message = document.getElementById("CUmessage").value.trim();

          // Reset validation messages
          removeValidationGetinTouch();

          // Validate fields
          let isValid = true;
          if (!name) {
            document
              .getElementById("name-req-getintouch")
              .classList.remove("hidden");
            isValid = false;
          }
          if (!email || !isValidEmail("CUemail1")) {
            document
              .getElementById(
                !email ? "email-req-getintouch" : "notValidEmail11"
              )
              .classList.remove("hidden");
            isValid = false;
          }
          if (!mobile || mobile.length !== 10) {
            document
              .getElementById(
                !mobile ? "mobile-req-getintouch" : "invalidMobileContact"
              )
              .classList.remove("hidden");
            isValid = false;
          }
          if (!message) {
            document
              .getElementById("message-req-getintouch")
              .classList.remove("hidden");
            isValid = false;
          }

  const recaptchaResponse = grecaptcha.getResponse();
      const recaptchaReqMessage = document.getElementById("recaptcha-req-getintouch");
     
       if (!recaptchaResponse) {
  recaptchaReqMessage.classList.remove("hidden");
  validationErrors.push("reCAPTCHA not verified");
}



          if (!isValid) return;

          // Prepare payload
          const payload = {
            subject: "Enquire For Home Loan | DeccanRealty",
            message: message,
            email: email,
            name: name,
            phone: mobile,
          };

          // Show loader and disable button
          loader.classList.remove("hidden");
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

            // Get response text
            const responseData = await response.text(); // or .json() if API returns JSON

            // Hide loader and show popup with response message
            loader.classList.add("hidden");
            popupMessage.textContent =
              responseData.message || "Submitted successfully. Thank you!";
            successPopup.classList.remove("hidden");

            // Reset form
            contactForm.reset();
            grecaptcha.reset();
            submitBtn.disabled = false;
          } catch (error) {
            console.error("Error:", error);
            loader.classList.add("hidden");
            errorMessage.classList.remove("hidden");
            submitBtn.disabled = false;

            // Hide error message after 3 seconds
            setTimeout(() => {
              errorMessage.classList.add("hidden");
            }, 3000);
          }
        });

        // Close popup handler
        closePopup.addEventListener("click", function () {
          successPopup.classList.add("hidden");
        });

        // Optional: Close popup when clicking outside
        successPopup.addEventListener("click", function (e) {
          if (e.target === successPopup) {
            successPopup.classList.add("hidden");
          }
        });
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
        const invalidMsg = document.getElementById("notValidEmail11");
        if (email && !emailRegex.test(email)) {
          invalidMsg.classList.remove("hidden");
          return false;
        }
        return true;
      }

      function validateMobile(id) {
        const mobile = document.getElementById(id).value.trim();
        const invalidMsg = document.getElementById("invalidMobileContact");
        if (mobile && mobile.length !== 10) {
          invalidMsg.classList.remove("hidden");
        }
      }

      function removeValidationGetinTouch() {
        document
          .querySelectorAll("#contactForm small")
          .forEach((el) => el.classList.add("hidden"));
      }
  