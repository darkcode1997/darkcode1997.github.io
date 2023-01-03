
//ẩn thông tin cá nhân
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

// ẩn thông tin kinh nghiệm kỹ năng
function more(id) {
    document.getElementById(id).classList.remove('d-lg-none')
    document.getElementById(id).classList.add('d-block')
    document.getElementById(`${id}-overlay`).classList.remove('d-lg-flex') 
    document.getElementById(`${id}-overlay`).classList.add('d-none') 
    document.getElementById(`${id}-view-less`).classList.remove('d-none')
    document.getElementById(`${id}-view-less`).classList.add('d-block')
}
function less(id) {
    document.getElementById(`${id}-view-less`).classList.add('d-none')
    document.getElementById(id).classList.remove('d-block')
    document.getElementById(id).classList.add('d-lg-none')
    document.getElementById(`${id}-overlay`).classList.remove('d-none') 
    document.getElementById(`${id}-overlay`).classList.add('d-lg-flex') 
    
}