// UX Feedback Form
const uxformBtn = document.getElementById("uxformBtn");
const formCancelBtn = document.getElementById("formCancelBtn");
const uxFormArea = document.getElementById("uxFormArea");
const uxForm = document.getElementById("ux-form");
const formOverlay = document.getElementById("formOverlay");
const input = document.querySelectorAll('input');
const small = document.querySelectorAll('small');

// Event Listeners
uxformBtn.addEventListener('click', () => {
    uxFormArea.classList.remove('hide');
    formOverlay.classList.remove('hide');
});
formCancelBtn.addEventListener('click', () => {
    uxFormArea.classList.add('hide');
    formOverlay.classList.add('hide');
   
});




