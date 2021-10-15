const mailSubmit = document.querySelector(".access");
const errorMsg = document.querySelector(".error");
const emailVar = document.querySelectorAll(".email");

mailSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const testMail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;

    if (emailVar.value === '') {
        errorMsg.innerHTML = 'Oops! Please add your email';
    } else if (!testMail.test(emailVar.value)) {
        errorMsg.innerHTML = 'Oops! Please check your email';
    } else {
        errorMsg.innerHTML = '';
    }
});