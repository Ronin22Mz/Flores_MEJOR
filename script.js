const c1 = document.getElementById('card1');
const c2 = document.getElementById('card2');
const openBtn = document.getElementById('openBtn');
const backBtn = document.getElementById('backBtn');

openBtn.addEventListener('click', () => {
  c1.classList.add('hidden');
  c2.classList.remove('hidden');
});

backBtn.addEventListener('click', () => {
  c2.classList.add('hidden');
  c1.classList.remove('hidden');
});
