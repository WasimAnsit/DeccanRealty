// Function to create the Header
function createHeader() {
   const header = document.createElement("header");
  header.className = "bg-[#060d42] text-white p-4 sticky top-0 z-50 w-full";
  header.style.position = "sticky";
  header.style.top = "0";
  header.style.zIndex = "50";
  header.style.width = "100%";
  header.innerHTML = `
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="logo">
        <a href="index.html">
          <img src="./assets/logos/WhiteLogoDeccan.png" alt="Deccan Realty Logo" class="w-24 h-24 rounded-full md:w-28 md:h-28 mix-blend-screen">
        </a>
      </div>
      <button class="md:hidden text-2xl text-white mobile-menu-btn">☰</button>
      <ul class="nav-menu hidden md:flex items-center space-x-4">
        <li><a href="index.html" class="font-medium text-lg px-3 py-1 rounded-md transition hover:text-gray-300">Home</a></li>
        <li><a href="about.html" class="font-medium text-lg px-3 py-1 rounded-md transition hover:text-gray-300">About</a></li>
        <li><a href="contact.html" class="font-medium text-lg px-3 py-1 rounded-md transition hover:text-gray-300">Contact</a></li>
        <li><a href="faq.html" class="font-medium text-lg px-3 py-1 rounded-md transition hover:text-gray-300">FAQ</a></li>
        <li><a href="homeloan.html" class="font-medium text-lg border border-white px-3 py-1 rounded-md transition hover:bg-white hover:text-[#060d42]">Home Loan</a></li>
      </ul>
      <ul class="mobile-menu hidden md:hidden flex-col items-center bg-[#060d42] w-full absolute left-0 top-full py-4 transition-all duration-300">
        <li class="w-full"><a href="index.html" class="block text-lg font-medium py-3 w-full text-center hover:text-gray-300">Home</a></li>
        <li class="w-full"><a href="about.html" class="block text-lg font-medium py-3 w-full text-center hover:text-gray-300">About</a></li>
        <li class="w-full"><a href="contact.html" class="block text-lg font-medium py-3 w-full text-center hover:text-gray-300">Contact</a></li>
        <li class="w-full"><a href="faq.html" class="block text-lg font-medium py-3 w-full text-center hover:text-gray-300">FAQ</a></li>
        <li class="w-full"><a href="homeloan.html" class="block text-lg font-medium border border-white px-3 py-1 rounded-md hover:bg-white hover:text-[#060d42] transition w-full text-center">Home Loan</a></li>
      </ul>
    </div>
  `;

  // Insert header at the top of the body
  document.body.insertBefore(header, document.body.firstChild);

  // Highlight active page
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const desktopLinks = header.querySelectorAll(".nav-menu a");
  const mobileLinks = header.querySelectorAll(".mobile-menu a");

  [desktopLinks, mobileLinks].forEach((linkSet) => {
    linkSet.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === currentPath) {
        link.classList.remove(
          "hover:text-gray-300",
          "hover:bg-white",
          "hover:text-[#060d42]"
        );
        link.classList.add("bg-orange-500", "text-white");
      }
    });
  });

  // Mobile menu toggle
  const mobileMenuBtn = header.querySelector(".mobile-menu-btn");
  const mobileMenu = header.querySelector(".mobile-menu");
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenuBtn.textContent = mobileMenu.classList.contains("hidden")
      ? "☰"
      : "✕";
  });
}

// Function to create the Footer
function createFooter() {
  const footerContainer = document.querySelector("#footer-container");
  if (!footerContainer) return;

  const footer = document.createElement("footer");
  footer.className =
    "bg-black text-white py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-12";
  footer.innerHTML = `
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center font-semibold md:text-left">
      <div class="mb-8 sm:mb-10 px-4 sm:px-6 md:px-8">
        <h3 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Office</h3>
        <p class="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4 text-xs sm:text-sm md:text-base">
          <i class="fas fa-map-marker-alt text-lg sm:text-xl md:text-2xl"></i> 
          No 56/6, 6th C Main Road <br> 4th Block East, Jayanagar<br> Bengaluru-560041
        </p>
        <p class="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
          <i class="fas fa-phone text-lg sm:text-xl md:text-2xl"></i> 
          <a href="https://api.whatsapp.com/send?phone=917303062845">+91 73030 62845</a>
        </p>
        <p class="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
          <i class="fa-brands fa-whatsapp text-lg sm:text-xl md:text-2xl"></i> 
          <a href="https://api.whatsapp.com/send?phone=917718361550">+91 97183 61550</a>
        </p>
        <p class="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4 text-xs sm:text-sm md:text-base">
          <i class="fas fa-envelope text-lg sm:text-xl md:text-2xl"></i> 
          info@deccanrealty.com
        </p>
      </div>
      <div class="mb-8 sm:mb-0 px-4 sm:px-6 md:px-8">
        <h3 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Quick links</h3>
        <ul class="space-y-3 sm:space-y-4 font-semibold">
          <li><a href="index.html" class="hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Home</a></li>
          <li><a href="about.html" class="hover:text-gray-400 transition text-xs sm:text-sm md:text-base">About</a></li>
          <li><a href="contact.html" class="hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Contact Us</a></li>
          <li><a href="faq.html" class="hover:text-gray-400 transition text-xs sm:text-sm md:text-base">FAQ</a></li>
          <li><a href="terms_conditions.html" class="hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Terms & Conditions</a></li>
          <li><a href="privacy_policy.html" class="hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="flex justify-center px-4 sm:px-6 md:px-8">
        <div class="text-center">
          <div class="mb-8 sm:mb-10">
            <a href="#" class="logo-link">
              <img src="assets/logos/DECCAN REALTY WHITE LOGO.png" alt="Deccan Realty Logo" class="w-28 sm:w-32 md:w-40 lg:w-48 mx-auto">
            </a>
            <div class="flex justify-center space-x-3 sm:space-x-4 mt-4">
              <a href="#" class="text-white hover:text-gray-300">
                <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-800">
                  <i class="fab fa-youtube text-lg sm:text-xl md:text-2xl"></i>
                </div>
              </a>
              <a href="#" class="text-white hover:text-gray-300">
                <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-800">
                  <i class="fab fa-facebook-f text-lg sm:text-xl md:text-2xl"></i>
                </div>
              </a>
              <a href="#" class="text-white hover:text-gray-300">
                <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-800">
                  <i class="fab fa-linkedin-in text-lg sm:text-xl md:text-2xl"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black text-center font-semibold text-white text-xs sm:text-sm md:text-base lg:text-lg">
      Copyright ©2024-2025 DeccanRealty.com All rights reserved.
    </div>
  `;

  footerContainer.innerHTML = "";
  footerContainer.appendChild(footer);
}

// Load components when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  createHeader();
  createFooter();
});
