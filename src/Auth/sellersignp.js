window.showSellerSignupForm = function() {
    const container = document.getElementById('auth-modal-container') || document.body;
    window.initializeAuthModal(container);
    window.showModal(createSellerSignupForm());
  };
  
  function createSellerSignupForm() {
    return `
      <h2 class="text-2xl font-bold mb-4 text-center text-[#008a46]">List Your Property</h2>
      <form id="seller-signup-form" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" required
                 class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#008a46] focus:border-[#008a46] sm:text-sm">
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" required
                 class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#008a46] focus:border-[#008a46] sm:text-sm">
        </div>
        <div>
          <label for="mobile" class="block text-sm font-medium text-gray-700">Mobile</label>
          <input type="tel" id="mobile" name="mobile" required
                 class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#008a46] focus:border-[#008a46] sm:text-sm">
        </div>
        <div>
          <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
          <input type="text" id="location" name="location" required
                 class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#008a46] focus:border-[#008a46] sm:text-sm">
        </div>
        <div class="flex items-center">
          <input type="checkbox" id="terms" name="terms" required
                 class="h-4 w-4 text-[#008a46] focus:ring-[#008a46] border-gray-300 rounded">
          <label for="terms" class="ml-2 block text-sm text-gray-900">I accept the terms and conditions</label>
        </div>
        <button type="submit" class="w-full bg-[#008a46] text-white py-2 px-4 rounded-md hover:bg-[#006d38] transition">
          Submit
        </button>
      </form>
    `;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('submit', (e) => {
      if (e.target.id === 'seller-signup-form') {
        e.preventDefault();
        const form = e.target;
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const mobile = form.querySelector('#mobile').value;
        const location = form.querySelector('#location').value;
        if (validateEmail(email) && validateMobile(mobile)) {
          const payload = { name, email, mobile, location, role: 'seller' };
          console.log('Seller Signup Payload:', payload);
          window.showOtpForm(email);
        } else {
          alert('Please enter valid email and mobile number');
        }
      }
    });
  });
  
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function validateMobile(mobile) {
    return /^\d{10}$/.test(mobile);
  }