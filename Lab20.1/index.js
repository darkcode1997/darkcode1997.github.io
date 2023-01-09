'use strict';
function showModal() {
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.modal').classList.remove('hidden');
}
function closeModal() {
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.modal').classList.add('hidden');
}