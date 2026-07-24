const searchInput = document.querySelector('.filter-bar input');
const rows = document.querySelectorAll('tbody tr');
const cards = document.querySelectorAll('.court-card');

if(searchInput){
    searchInput.addEventListener('input', () => {
        const value = searchInput.value.toLowerCase();

        rows.forEach(row => {
            row.style.display =
                row.innerText.toLowerCase().includes(value)
                    ? ''
                    : 'none';
        });

        cards.forEach(card => {
            card.style.display =
                card.innerText.toLowerCase().includes(value)
                    ? ''
                    : 'none';
        });
    });
}