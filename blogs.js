document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.read-more');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = button.closest('.blog-card');
            
            // Toggle active class on card
            card.classList.toggle('active');

            // Change button text based on open state
            if (card.classList.contains('active')) {
                button.textContent = 'Read Less';
            } else {
                button.textContent = 'Read More';
            }
        });
    });
});