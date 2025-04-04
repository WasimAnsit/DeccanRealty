// Function to create the Header
// Function to create the Header
function createHeader(container) {
  const header = document.createElement("header");
  header.className = "bg-[#E8E8E8] text-black w-full relative";
  header.style.width = "100%";
  header.innerHTML = `
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="logo">
        <a href="index.html" aria-label="index.html">  
          <img src="https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/mvkyoqagcwzy4cyb83gj"  alt="Deccan Realty Logo" 
               class="w-32 h-32 rounded-full md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain">
        </a>
      </div>
      <button class="md:hidden text-2xl text-black mobile-menu-btn z-50">☰</button>
      <ul class="nav-menu hidden md:flex items-center space-x-4 font-bold">
        <li><a href="index.html" aria-label="Home" class="font-medium text-lg px-3 py-1 rounded-md transition text-black hover:text-black lg:font-bold">HOME</a></li>
        <li><a href="about.html" aria-label="About" class="font-medium text-lg px-3 py-1 rounded-md transition text-black hover:text-[#008a46] lg:font-bold">ABOUT</a></li>
        <li><a href="contact.html" aria-label="Contact" class="font-medium text-lg px-3 py-1 rounded-md transition text-black hover:text-[#008a46] lg:font-bold">CONTACT</a></li>
        <li><a href="faq.html" aria-label="FAQ" class="font-medium text-lg px-3 py-1 rounded-md transition text-black hover:text-[#008a46] lg:font-bold">FAQ</a></li>
        <li class="group border border-[green] px-4 py-2 rounded-md transition hover:bg-[#008a46]">
          <a href="homeloan.html" 
             aria-label="HomeLoan" 
             class="font-medium text-lg text-black group-hover:text-[#ff7b2a] lg:font-bold">
              HOME LOAN
          </a>
        </li>
      </ul>
    </div>
    
    <!-- Side drawer overlay -->
    <div class="overlay fixed inset-0  bg-opacity-50 z-40 hidden"></div>
    
    <!-- Side drawer menu -->
    <div class="side-drawer fixed top-0 right-0 h-full w-64 bg-[#237f51] z-50 transform translate-x-full transition-transform duration-300 ease-in-out shadow-lg">
      <div class="flex justify-end p-4">
        <button class="drawer-close text-white text-2xl">✕</button>
      </div>
      <ul class="flex flex-col space-y-4 p-4">
        <li class="w-full"><a href="index.html" aria-label="Home" class="block text-lg font-medium py-3 px-3 rounded-md text-white hover:text-green-500 hover:bg-black lg:font-bold">Home</a></li>
        <li class="w-full"><a href="about.html" aria-label="About" class="block text-lg font-medium py-3 px-3 rounded-md text-white hover:text-green-500 hover:bg-black">About</a></li>
        <li class="w-full"><a href="contact.html" aria-label="Contact" class="block text-lg font-medium py-3 px-3 rounded-md text-white hover:text-green-500 hover:bg-black">Contact</a></li>
        <li class="w-full"><a href="faq.html" aria-label="FAQ" class="block text-lg font-medium py-3 px-3 rounded-md text-white hover:text-green-500 hover:bg-black">FAQ</a></li>
        <li class="w-full mt-4">
          <a href="homeloan.html" 
             aria-label="HomeLoan" class="block text-lg font-medium py-2 px-3 border border-white rounded-md text-white hover:text-green-500 hover:bg-black transition">
            Home Loan
          </a>
        </li>
      </ul>
    </div>
  `;

  // Append to the provided container instead of body
  container.innerHTML = ""; // Clear existing content
  container.appendChild(header);

  // Highlight active page
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const desktopLinks = header.querySelectorAll(".nav-menu a");
  const mobileLinks = header.querySelectorAll(".side-drawer a");

  function setActive(link) {
    const li = link.closest("li");

    if (li && li.classList.contains("group")) {
      // For HOME LOAN
      li.classList.add("bg-[#b1923f]", "rounded-md");
      link.classList.add("text-white", "px-3", "py-1");
    } else {
      link.classList.add(
        "bg-[#b1923f]",
        "text-white",
        "rounded-md",
        "px-4",
        "py-2"
      );
    }
  }

  [...desktopLinks, ...mobileLinks].forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      setActive(link);
    }

    // OPTIONAL: Also highlight on click (for Single Page feel)
    link.addEventListener("click", () => {
      [...desktopLinks, ...mobileLinks].forEach((l) => {
        l.classList.remove(
          "bg-[#b1923f]",
          "text-white",
          "rounded-md",
          "px-2",
          "py-1"
        );
        l.closest("li")?.classList.remove("bg-[#b1923f]", "rounded-md");
      });
      setActive(link);

      // Close drawer when clicking a link
      toggleDrawer(false);
    });
  });

  // Side drawer toggle functionality
  const mobileMenuBtn = header.querySelector(".mobile-menu-btn");
  const sideDrawer = header.querySelector(".side-drawer");
  const overlay = header.querySelector(".overlay");
  const closeBtn = header.querySelector(".drawer-close");

  function toggleDrawer(show) {
    if (show) {
      sideDrawer.classList.remove("translate-x-full");
      overlay.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Prevent scrolling when drawer is open
      mobileMenuBtn.textContent = "✕";
    } else {
      sideDrawer.classList.add("translate-x-full");
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
      mobileMenuBtn.textContent = "☰";
    }
  }

  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = !sideDrawer.classList.contains("translate-x-full");
    toggleDrawer(!isOpen);
  });

  closeBtn.addEventListener("click", () => {
    toggleDrawer(false);
  });

  overlay.addEventListener("click", () => {
    toggleDrawer(false);
  });

  // Close drawer on window resize if screen becomes larger
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      // md breakpoint in Tailwind
      toggleDrawer(false);
    }
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
          <li><a href="index.html" aria-label="Home" class="text-white hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Home</a></li>
          <li><a href="about.html" aria-label="About"  class="text-white hover:text-gray-400 transition text-xs sm:text-sm md:text-base">About</a></li>
          <li><a href="contact.html"  aria-label="Contact" class="text-white hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Contact</a></li>
          <li><a href="faq.html" aria-label="FAQ" class="text-white hover:text-gray-400 transition text-xs sm:text-sm md:text-base">FAQ</a></li>
          <li><a href="terms&condition.html" target="_blank" aria-label="Terms&condition" class=" text-white hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Terms & Conditions</a></li>
          <li><a href="privacypolicy.html" target="_blank" aria-label="Privacypolicy" class="text-white hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Privacy Policy</a></li>
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
