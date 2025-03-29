let formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector(".email-input");
const messageTextarea = form.querySelector(".message-textarea");
const STORAGE_KEY = 'feedback-form-state';


window.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
           
            formData.email = typeof parsedData.email === 'string' ? parsedData.email : '';
            formData.message = typeof parsedData.message === 'string' ? parsedData.message : '';
            
            
            emailInput.value = formData.email;
            messageTextarea.value = formData.message;
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
        alert('Fill in all fields, please');
        return;
    }

    console.log('Submitted data:', formData);

   
    formData.email = '';
    formData.message = '';
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});