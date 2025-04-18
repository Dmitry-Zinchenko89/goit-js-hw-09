
let formData = {
    email: "",
    message: ""
};
const form = document.querySelector(".feedback-form");
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener("input", event => {
    const { name, value } = event.target;
    if (name === "email" || name === "message") {
        formData[name] = value.trim();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    }

});

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.elements.email.value = parsedData.email || "";
    form.elements.message.value = parsedData.message || "";
    formData = parsedData;
}

form.addEventListener("submit", event => {
    event.preventDefault();
    const { email, message } = formData;
    if (!email || !message) {
        alert('Fill please all fields');
        return;
    }
    console.log('Form submitted:', formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: '', message: '' };
})



    
