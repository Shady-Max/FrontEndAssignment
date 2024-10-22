document.addEventListener('DOMContentLoaded', function() {
    const notAvailableModal = new bootstrap.Modal(document.getElementById('NotAvailableModal'));

    const modalButtons = document.querySelectorAll('.modal-trigger');
    const clickSound = new Audio('sounds/click.wav');

    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            notAvailableModal.show();
            clickSound.play();
        });
    });
});