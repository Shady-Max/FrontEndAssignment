document.addEventListener('DOMContentLoaded', function() {
    // Get the modal element
    const subscribeModal = new bootstrap.Modal(document.getElementById('NotAvailableModal'));

    // Select all buttons with the class 'modal-trigger'
    const modalButtons = document.querySelectorAll('.modal-trigger');

    // Loop through all buttons and attach a click event listener
    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            subscribeModal.show();
        });
    });
});