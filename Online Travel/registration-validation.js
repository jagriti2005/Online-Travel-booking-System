// Form Validation for User Registration
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();
        
        // Reset previous validation states
        resetValidation();
        
        // Perform validations
        let isValid = true;
        
        // Full Name Validation
        const fullName = document.getElementById('fullName');
        if (!fullName.value.trim()) {
            setInvalid(fullName, 'Please enter your full name');
            isValid = false;
        }
        
        // Email Validation
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            setInvalid(email, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Password Validation
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        
        if (password.value.length < 8) {
            setInvalid(password, 'Password must be at least 8 characters long');
            isValid = false;
        }
        
        if (password.value !== confirmPassword.value) {
            setInvalid(confirmPassword, 'Passwords do not match');
            isValid = false;
        }
        
        // Phone Number Validation
        const phoneNumber = document.getElementById('phoneNumber');
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        if (!phoneRegex.test(phoneNumber.value)) {
            setInvalid(phoneNumber, 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Terms Checkbox Validation
        const termsCheck = document.getElementById('termsCheck');
        if (!termsCheck.checked) {
            setInvalid(termsCheck, 'You must agree to the terms');
            isValid = false;
        }
        
        // If all validations pass, submit the form
        if (isValid) {
            // Here you would typically send data to server
            alert('Registration Successful!');
            registrationForm.reset();
        }
    });

    // Helper function to set invalid state
    function setInvalid(element, message) {
        element.classList.add('is-invalid');
        element.closest('.mb-3').querySelector('.invalid-feedback').textContent = message;
    }

    // Helper function to reset validation states
    function resetValidation() {
        const inputs = registrationForm.querySelectorAll('.form-control, .form-check-input');
        inputs.forEach(input => {
            input.classList.remove('is-invalid');
        });
    }
});