const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Example starter JavaScript for disabling form submissions if there are invalid fields
const checkRegex = new RegExp(regex);
function submit() {
    let email = document.getElementById('validationEmails').value
    if(email === '') {
        document.getElementById('invalid-feedback-entry').classList.remove('d-none')
        document.getElementById('invalid-feedback-entry').classList.add('d-block')
    } else {
        if(checkRegex.test(email)) {
            document.getElementById('form-info').classList.add('d-none')
            document.getElementById('invalid-feedback-error').classList.add('d-none')
            document.getElementById('personal-info-content').classList.remove('d-none')
        }else {
            document.getElementById('invalid-feedback-entry').classList.add('d-none')
            document.getElementById('invalid-feedback-error').classList.remove('d-none')
            document.getElementById('invalid-feedback-error').classList.add('d-block')
        }
    }
}