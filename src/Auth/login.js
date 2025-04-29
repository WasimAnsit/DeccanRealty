function initializeAuthModal(container) {
  if (document.getElementById('auth-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'auth-modal';
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden';
  modal.innerHTML = `
    <div class="bg-white p-6 rounded-lg w-full max-w-md mx-4 relative">
      <button id="close-modal" class="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div id="form-container"></div>
    </div>
  `;
  container.appendChild(modal);

  const closeModalBtn = modal.querySelector('#close-modal');
  const formContainer = modal.querySelector('#form-container');

  window.showModal = function(content) {
    formContainer.innerHTML = content;
    modal.classList.remove('hidden');
  };

  window.hideModal = function() {
    modal.classList.add('hidden');
    formContainer.innerHTML = '';
  };

  closeModalBtn.addEventListener('click', window.hideModal);
}

function createLoginForm() {
  return `
    <h2 class="text-2xl font-bold mb-4 text-center text-[#008a46]">Login</h2>
    <form id="login-form" class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Enter your registered email</label>
        <input type="email" id="email" name="email" required
               class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#008a46] focus:border-[#008a46] sm:text-sm">
      </div>
      <button type="submit" class="w-full bg-[#008a46] text-white py-2 px-4 rounded-md hover:bg-[#006d38] transition">
        Submit
      </button>
    </form>
    <p class="mt-4 text-center text-sm">
      New to here? 
      <button onclick="showSignupForm()" class="text-[#FF0000] hover:underline">Click here to signup</button>
    </p>
  `;
}

function createOtpForm(email) {
  return `
    <h2 class="text-2xl font-bold mb-4 text-center text-[#008a46]">Enter OTP</h2>
    <p class="text-sm text-gray-600 mb-4 text-center">A 6-digit OTP has been sent to ${email}</p>
    <div id="otp-warning" class="hidden text-red-500 text-sm text-center mb-2">Only numeric input is allowed</div>
    <form id="otp-form" class="space-y-4">
      <div class="flex justify-between gap-2">
        ${[...Array(6)].map((_, i) => `
          <input type="text" maxlength="1" required
                 class="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-[#008a46] focus:border-[#008a46]"
                 oninput="handleInput(this, ${i})"
                 onkeydown="handleKeydown(event, this, ${i})">
        `).join('')}
      </div>
      <button type="submit" class="w-full bg-[#008a46] text-white py-2 px-4 rounded-md hover:bg-[#006d38] transition">
        Verify OTP
      </button>
    </form>
  `;
}

function handleInput(current, index) {
  const warning = document.getElementById('otp-warning');
  
  if (current.value && !/^\d$/.test(current.value)) {
      current.value = '';
      warning.classList.remove('hidden');
      setTimeout(() => warning.classList.add('hidden'), 2000);
      return;
  }
  
  if (current.value.length === 1 && index < 5) {
      current.nextElementSibling.focus();
  }
}

function handleKeydown(event, current, index) {
  if (event.key === 'Backspace' && !current.value && index > 0) {
      current.previousElementSibling.focus();
  }
}

window.showLoginForm = function() {
  const container = document.getElementById('auth-modal-container') || document.body;
  initializeAuthModal(container);
  window.showModal(createLoginForm());
};

window.showOtpForm = function(email) {
  window.showModal(createOtpForm(email));
};

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('auth-modal-container') || document.body;
  initializeAuthModal(container);

  document.addEventListener('submit', (e) => {
      if (e.target.id === 'login-form') {
          e.preventDefault();
          const email = e.target.querySelector('#email').value;
          if (validateEmail(email)) {
              window.showOtpForm(email);
          } else {
              alert('Please enter a valid email address');
          }
      } else if (e.target.id === 'otp-form') {
          e.preventDefault();
          const inputs = e.target.querySelectorAll('input');
          const otp = Array.from(inputs).map(input => input.value).join('');
          if (/^\d{6}$/.test(otp)) {
              alert('OTP verified successfully!');
              window.hideModal();
          } else {
              alert('Please enter a valid 6-digit OTP');
          }
      }
  });
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}