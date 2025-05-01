let apiUrl = "https://mtestatesapi-f0bthnfwbtbxcecu.southindia-01.azurewebsites.net/";

// Global loader functions
window.showLoader = function() {
  const loader = document.querySelector('#loader');
  if (loader) loader.classList.remove('hidden');
};

window.hideLoader = function() {
  const loader = document.querySelector('#loader');
  if (loader) loader.classList.add('hidden');
};

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
      <div id="loader" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-[#008a46] border-t-transparent"></div>
      </div>
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
    <div id="error-message" class="hidden text-red-500 text-sm text-center mb-2"></div>
    <form id="login-form" class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Enter your registered email</label>
        <input type="email" id="email" name="email" required
               class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#008a46] focus:border-[#008a46] sm:text-sm">
      </div>
      <button type="submit" class="w-full bg-[#008a46] text-white py-2 px-4 rounded-md hover:bg-[#006d38] transition">
        Continue
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
    <div id="error-message" class="hidden text-red-500 text-sm text-center mb-2"></div>
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

function urlRedirection(token) {
  if (token) {
    window.location.href = `https://mtmtestatesapp-cjcxafhrgnenbydc.centralindia-01.azurewebsites.net/Redirecting/?tok=${token}`;
  } else {
    console.error('No token provided for redirection');
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Failed to redirect: No token received';
    errorMessage.classList.remove('hidden');
    setTimeout(() => errorMessage.classList.add('hidden'), 3000);
  }
}

async function handleCheckEmail(email) {
  try {
    window.showLoader();
    
    // Construct query parameters
    const queryParams = new URLSearchParams({
      email: email,
      web: "DeccanRealty.in"
    });
    // Send GET request with query parameters
    const response = await fetch(`${apiUrl}/account/check-email?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    if (result.success && result.message === "Data Found") {
      return true;
    } else {
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = result.message || 'Email not registered';
      errorMessage.classList.remove('hidden');
      setTimeout(() => errorMessage.classList.add('hidden'), 3000);
      return false;
    }
  } catch (error) {
    console.error('Check email API error:', error);
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'An error occurred while checking email. Please try again.';
    errorMessage.classList.remove('hidden');
    setTimeout(() => errorMessage.classList.add('hidden'), 3000);
    return false;
  } finally {
    window.hideLoader();
  }
}


async function handleLogin(email) {
  try {
    // First check if email exists
    const emailExists = await handleCheckEmail(email);
    if (!emailExists) return;

    window.showLoader();
    const response = await fetch(`${apiUrl}/account/otp-verification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const result = await response.json();
   
    if (result.success) {
      window.showOtpForm(email);
    } else {
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = result.message || 'Failed to send OTP';
      errorMessage.classList.remove('hidden');
      setTimeout(() => errorMessage.classList.add('hidden'), 3000);
    }
  } catch (error) {
    console.error('Login API error:', error);
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'An error occurred. Please try again.';
    errorMessage.classList.remove('hidden');
    setTimeout(() => errorMessage.classList.add('hidden'), 3000);
  } finally {
    window.hideLoader();
  }
}

async function handleOtpVerification(email, otp) {
  try {
    window.showLoader();
    const response = await fetch(`${apiUrl}/account/otp-verification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });
    const result = await response.json();
    
    if (result.success && result.data) {
      window.hideModal();
      urlRedirection(result.data);
    } else {
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = result.message || 'Invalid OTP';
      errorMessage.classList.remove('hidden');
      setTimeout(() => errorMessage.classList.add('hidden'), 3000);
    }
  } catch (error) {
    console.error('OTP verification API error:', error);
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'An error occurred. Please try again.';
    errorMessage.classList.remove('hidden');
    setTimeout(() => errorMessage.classList.add('hidden'), 3000);
  } finally {
    window.hideLoader();
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

// Use a single event listener to prevent multiple bindings
let submitHandler = null;

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('auth-modal-container') || document.body;
  initializeAuthModal(container);

  // Remove any existing submit handler
  if (submitHandler) {
    document.removeEventListener('submit', submitHandler);
  }

  submitHandler = async (e) => {
    e.preventDefault();
    
    if (e.target.id === 'login-form') {
      const email = e.target.querySelector('#email').value;
      if (validateEmail(email)) {
        await handleLogin(email);
      } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Please enter a valid email address';
        errorMessage.classList.remove('hidden');
        setTimeout(() => errorMessage.classList.add('hidden'), 3000);
      }
    } else if (e.target.id === 'otp-form') {
      const inputs = e.target.querySelectorAll('input');
      const otp = Array.from(inputs).map(input => input.value).join('');
      const emailElement = e.target.parentElement.querySelector('p');
      const email = emailElement ? emailElement.textContent.match(/to (.+)$/)?.[1] : '';
      
      if (/^\d{6}$/.test(otp) && email) {
        await handleOtpVerification(email, otp);
      } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Please enter a valid 6-digit OTP';
        errorMessage.classList.remove('hidden');
        setTimeout(() => errorMessage.classList.add('hidden'), 3000);
      }
    }
  };

  document.addEventListener('submit', submitHandler);
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}