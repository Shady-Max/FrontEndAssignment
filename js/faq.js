document.addEventListener('DOMContentLoaded', function () {
    const faqs = document.querySelectorAll('.faq-question');

    faqs.forEach(faq => {
        faq.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }

            faqs.forEach(otherFaq => {
                const otherAnswer = otherFaq.nextElementSibling;
                if (otherFaq !== this && otherAnswer.style.maxHeight) {
                    otherAnswer.style.maxHeight = null;
                }
            });
        });
    });
});