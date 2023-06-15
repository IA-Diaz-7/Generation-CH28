const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('btn-submit');
const emailREGEX = /^[\w.+\-]+@gmail\.com$/;


submitBtn.disabled = true;

emailInput.addEventListener('input', (e) => {
    const text = e.target.value;

    if(emailREGEX.test(text) == true) {
        submitBtn.disabled = false;
    }

});

emailInput.addEventListener('input', (e) => {
    submitBtn.disabled = (emailREGEX.test(e.target.value)) ? false : true;
});
