// ===== Toast =====
function showToast(message){
    const toast = document.getElementById('toast');

    if(!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== Dark Mode =====
const darkToggle = document.getElementById('darkToggle');

if(darkToggle){
    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem(
            'theme',
            document.body.classList.contains('dark') ? 'dark' : 'light'
        );
    });
}

// Load saved theme
if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark');
}