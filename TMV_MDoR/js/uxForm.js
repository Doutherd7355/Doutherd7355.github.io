// UX Feedback Form
const uxformBtn = document.getElementById("uxformBtn");
const formCancelBtn = document.getElementById("formCancelBtn");
const uxFormArea = document.getElementById("uxFormArea");
const uxForm = document.getElementById("ux-form");
const formOverlay = document.getElementById("formOverlay");

// Event Listeners
uxformBtn.addEventListener('click', () => {
    uxFormArea.classList.remove('hide');
    formOverlay.classList.remove('hide');
});
formCancelBtn.addEventListener('click', () => {
    uxFormArea.classList.add('hide');
    formOverlay.classList.add('hide');
});


// Form Validation


// const inputQuest2 = document.getElementsByName('q2_answer');
// const inputQuest3 = document.getElementsByName('q3_answer');
// const inputQuest4 = document.getElementsByName('q4_answer');
// const inputQuest5 = document.getElementsByName('q5_answer');
// const inputQuest6 = document.getElementsByName('q6_answer');
// const inputQuest7 = document.getElementsByName('q7_answer');
const input = document.querySelectorAll('input');
const small = document.querySelectorAll('small');


// console.log(small);

function charCount() {
    let charCurrent = document.getElementById('charCount')
}

function checkFirst() {
    if (!(input[0].checked || input[1].checked)) {
        small[0].style.visibility = 'visible';
        small[0].innerText = "Answer Required";
        
    } else if (input[0].value === 'Yes' || input[1].value==='No') {
        small[0].style.visibility = 'hidden';
       
    };
};

function checkSecond() {

    if (!(input[2].innerText.length > 3)) {
        small[1].style.visibility = 'visible';
        small[1].innerText = "Answer Required";
       
    } else {
        return true;
    };

};

function checkThird() {
    if (!(input[3].checked || input[4].checked)) {
        small[2].style.visibility = 'visible';
        small[2].innerText = "Answer Required";
        return false;
    } else if (input[3].checked || input[4].checked) {
        return true;
    };
};

function checkFourth() {

    if (!(input[5].innerText.length > 3)) {
        small[3].style.visibility = 'visible';
        small[3].innerText = "Answer Required";
        return false;
    } else {
        return true;
    };

};

function checkFifth() {

    if (!(input[6].checked || input[7].checked || input[8].checked || input[9].checked || input[10].checked)) {
        small[4].style.visibility = 'visible';
        small[4].innerText = "Answer Required";
        return false;
    } else if (input[6].checked || input[7].checked || input[8].checked || input[9].checked || input[10].checked) {
        return true;
    };
};

function checkSixth() {

    if (!(input[11].checked || input[12].checked || input[13].checked || input[14].checked || input[15].checked)) {
        small[5].style.visibility = 'visible';
        small[5].innerText = "Answer Required";
        return false;
    } else if (input[11].checked || input[12].checked || input[13].checked || input[14].checked || input[15].checked) {
        return true;
    };
};




// Event Listeners
uxForm.addEventListener('submit', function (e) {
    e.preventDefault();
    checkFirst();
    checkSecond();
    checkThird();
    checkFourth();
    checkFifth();
    checkSixth();
});