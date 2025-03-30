// Function to create the Header
// Function to create the Header
function createHeader(container) {
  const header = document.createElement("header");
  header.className = "bg-[#E8E8E8] text-black w-full fixed top-0 left-0 z-50 shadow-md";
  header.innerHTML = `
    <div class="container mx-auto px-4 flex justify-between items-center py-2">
      <div class="logo">
        <a href="index.html" aria-label="Home">
          <img src="https://res.cloudinary.com/dzauu64ta/image/upload/v1742815527/finalwhitelogo_bnxcp5.png" 
               alt="Deccan Realty Logo" 
               class="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain rounded-full">
        </a>
      </div>
      <button class="md:hidden text-2xl text-black mobile-menu-btn" aria-label="Toggle Menu">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="nav-menu hidden md:flex items-center space-x-6 font-semibold">
        <li><a href="index.html" aria-label="Home" class="px-3 py-2 rounded-md transition text-black hover:text-[#008a46]">HOME</a></li>
        <li><a href="about.html" aria-label="About" class="px-3 py-2 rounded-md transition text-black hover:text-[#008a46]">ABOUT</a></li>
        <li><a href="contact.html" aria-label="Contact" class="px-3 py-2 rounded-md transition text-black hover:text-[#008a46]">CONTACT</a></li>
        <li><a href="faq.html" aria-label="FAQ" class="px-3 py-2 rounded-md transition text-black hover:text-[#008a46]">FAQ</a></li>
        <li class="border border-[#008a46] px-4 py-2 rounded-md transition hover:bg-[#008a46] group">
          <a href="homeloan.html" aria-label="Home Loan" class="text-black group-hover:text-white transition">HOME LOAN</a>
        </li>
      </ul>
      <ul class="mobile-menu hidden md:hidden flex-col bg-[#060d42] w-3/4 absolute right-0 top-full py-6 px-4 transition-all duration-300 ease-in-out transform translate-x-full z-50">
        <li class="w-full"><a href="index.html" aria-label="Home" class="block py-3 px-4 text-white hover:bg-[#008a46] hover:text-white rounded-md transition">Home</a></li>
        <li class="w-full"><a href="about.html" aria-label="About" class="block py-3 px-4 text-white hover:bg-[#008a46] hover:text-white rounded-md transition">About</a></li>
        <li class="w-full"><a href="contact.html" aria-label="Contact" class="block py-3 px-4 text-white hover:bg-[#008a46] hover:text-white rounded-md transition">Contact</a></li>
        <li class="w-full"><a href="faq.html" aria-label="FAQ" class="block py-3 px-4 text-white hover:bg-[#008a46] hover:text-white rounded-md transition">FAQ</a></li>
        <li class="w-full">
          <a href="homeloan.html" aria-label="Home Loan" class="block py-3 px-4 border border-white text-white hover:bg-[#008a46] hover:border-[#008a46] rounded-md transition text-center">
            Home Loan
          </a>
        </li>
      </ul>
    </div>
  `;

  // Clear and append to container
  container.innerHTML = "";
  container.appendChild(header);

  // Add FontAwesome dynamically if not already present
  if (!document.querySelector('link[href*="fontawesome"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
    document.head.appendChild(link);
  }

  // Highlight active page
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const desktopLinks = header.querySelectorAll(".nav-menu a");
  const mobileLinks = header.querySelectorAll(".mobile-menu a");

  const setActive = (link) => {
    const li = link.closest("li");
    link.classList.add("bg-[#b1923f]", "text-white", "rounded-md");
    if (li.classList.contains("group")) {
      li.classList.add("bg-[#b1923f]", "border-[#b1923f]");
    }
  };

  [...desktopLinks, ...mobileLinks].forEach((link) => {
    if (link.getAttribute("href") === currentPath) setActive(link);

    link.addEventListener("click", () => {
      [...desktopLinks, ...mobileLinks].forEach((l) => {
        l.classList.remove("bg-[#b1923f]", "text-white", "rounded-md");
        l.closest("li")?.classList.remove("bg-[#b1923f]", "border-[#b1923f]");
      });
      setActive(link);
    });
  });

  // Mobile menu toggle
  const mobileMenuBtn = header.querySelector(".mobile-menu-btn");
  const mobileMenu = header.querySelector(".mobile-menu");
  let isOpen = false;

  mobileMenuBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("translate-x-full");
    mobileMenuBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (isOpen && !header.contains(e.target)) {
      mobileMenu.classList.add("hidden", "translate-x-full");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      isOpen = false;
    }
  });
}

// Usage: Call this function with a container element
const headerContainer = document.querySelector("#header-container"); // Adjust selector as needed
if (headerContainer) createHeader(headerContainer);
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
    <i class="fas fa-map-marker-alt text-[25px] sm:text-xl md:text-2xl "></i> 
    <a href="https://www.google.com/maps/search/?api=1&query=No+56%2F6,+6th+C+Main+Road,+4th+Block+East,+Jayanagar+Bangalore-560041" 
       target="_blank" 
       aria-label="View location on Google Maps"
       class="not-italic inline-block">
        No 56/6, 6th C Main Road<br> 4th Block, East Jayanagar <br> Bangalore-560041
    </a>
</p>


       <p class="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
    <a href="https://api.whatsapp.com/send?phone=917303062845" target="_blank" 
       aria-label="Chat on WhatsApp" class="flex items-center gap-2">
        <i class="fas fa-phone text-lg sm:text-xl md:text-2xl"></i> 
        +91 73030 62845
    </a>
</p>

       <p class="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
    <a href="https://api.whatsapp.com/send?phone=917718361550" target="_blank" 
       aria-label="Chat on WhatsApp" class="flex items-center gap-2">
        <i class="fa-brands fa-whatsapp text-lg sm:text-xl md:text-2xl"></i> 
        +91 97183 61550
    </a>
</p>
       <p class="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4 text-xs sm:text-sm md:text-base">
    <a href="mailto:info@deccanrealty.com" aria-label="Send an email to info@deccanrealty.com" 
       class="flex items-center gap-2">
        <i class="fas fa-envelope text-lg sm:text-xl md:text-2xl"></i> 
        info@deccanrealty.com
    </a>
</p>
      </div>
      <div class="mb-8 sm:mb-0 px-4 sm:px-6 md:px-8">
        <h3 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-3 sm:space-y-4 font-semibold">
          <li><a href="index.html" aria-label="Home" class="hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Home</a></li>
          <li><a href="about.html" aria-label="About"  class="hover:text-gray-400 transition text-xs sm:text-sm md:text-base">About</a></li>
          <li><a href="contact.html"  aria-label="Contact" class="hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Contact</a></li>
          <li><a href="faq.html" aria-label="FAQ" class="hover:text-gray-400 transition text-xs sm:text-sm md:text-base">FAQ</a></li>
          <li><a href="terms_conditions.html" aria-label="Terms&condition" class="hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Terms & Conditions</a></li>
          <li><a href="privacy_policy.html" aria-label="Privacypolicy" class="hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="flex justify-center px-4 sm:px-6 md:px-8">
        <div class="text-center">
          <div class="mb-8 sm:mb-10">
            <a href="index.html" class="logo-link" aria-label="imglogo">
              <img src="https://res.cloudinary.com/dzauu64ta/image/upload/v1742815527/DECCAN_REALTY_WHITE_LOGO_tqdoxy.png" alt="Deccan Realty Logo" class="w-28 sm:w-32 md:w-40 lg:w-48 mx-auto">
            </a>
            <div class="flex justify-center space-x-3 sm:space-x-4 mt-4">
              <a href="https://www.youtube.com/@deccan-realty" target="_blank" aria-label="Visit our YouTube page"  class="text-white hover:text-gray-300">
                <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white">
                  <i class="text-red-600 fab fa-youtube text-lg sm:text-xl md:text-2xl" aria-hidden="true"></i>
                  <span class="sr-only">YouTube</span>
                </div>
              </a>
              <a href="https://www.facebook.com/deccanrealty.in/" target="_blank"   aria-label="Visit our Facebook page" class="text-white hover:text-gray-300">
                <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white">
                  <i class=" text-blue-600 fab fa-facebook-f text-lg sm:text-xl md:text-2xl" aria-hidden="true"></i>
                  <span class="sr-only">Facebook</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/deccan-realty/" target="_blank" aria-label="Visit our LinkedIn page" class="text-white hover:text-gray-300">
                <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white">
                  <i class=" text-blue-600 fab fa-linkedin-in text-lg sm:text-xl md:text-2xl" aria-hidden="true"></i>
                  <span class="sr-only">LinkedIn</span>
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
  const headerContainer = document.querySelector("#header-container");
  if (headerContainer) {
    createHeader(headerContainer);
  }
  createFooter();
});