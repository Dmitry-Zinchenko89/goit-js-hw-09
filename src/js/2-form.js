let formData = {
    email: "",
    messagee: ""
};

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = 'feedback-form-state';

window.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        try {
            formData = JSON.parse(savedData);
            form.elements.email.value = formData.email || '';
            form.elements.message.value = formData.message || '';
        } catch (error) {
            console.error('Error parsing saved form data:', error);
            
        }
    }
});
form.addEventListener('input', (e) => {
  if (e.target.name === 'email' || e.target.name === 'message') {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (formData.email.trim() === '' || formData.message.trim() === '') {
        alert('Fill please all fields');
        return;
    }
console.log('Submitted data:', formData);
  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});