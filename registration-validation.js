document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordStrengthDiv = document.getElementById('passwordStrength');
    const togglePasswordBtn = document.getElementById('togglePassword');

    // Password Strength Checker
    function checkPasswordStrength(password) {
        const strengthChecks = [
            { regex: /.{8,}/, label: 'Minimum 8 characters' },
            { regex: /[A-Z]/, label: 'At least one uppercase letter' },
            { regex: /[a-z]/, label: 'At least one lowercase letter' },
            { regex: /[0-9]/, label: 'At least one number' },
            { regex: /[^A-Za-z0-9]/, label: 'At least one special character' }
        ];

        let result = '';
        let passed = 0;

        strengthChecks.forEach(check => {
            if (check.regex.test(password)) {
                result += `