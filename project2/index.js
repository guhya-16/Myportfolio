const usernameBtn = document.getElementById('usernameBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeBtn');
usernameBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});