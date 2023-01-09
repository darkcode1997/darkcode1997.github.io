'use strict';
function showModal() {
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.modal').classList.remove('hidden');
}
document.querySelector('.close-modal').addEventListener('click', function() {
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.modal').classList.add('hidden');
})
document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.modal').classList.add('hidden');
})