const monthEl = document.getElementById('month');
const dayEl = document.getElementById('day');
const dateNumberEl = document.getElementById('dateNumber');
const yearEl = document.getElementById('year');

const date = new Date();

monthEl.innerHTML = date.toLocaleString('en', { month: 'long' });
dayEl.innerHTML = date.toLocaleString('en', { weekday: 'long' });
dateNumberEl.innerHTML = date.getDate();
yearEl.innerHTML = date.getFullYear();
