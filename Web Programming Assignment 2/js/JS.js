document.addEventListener('DOMContentLoaded', function () {
    const shirtCheckboxes = document.querySelectorAll('.shirt');
    const designSelect = document.getElementById('design-select');
    const embroiderySelect = document.getElementById('embroidery-select');
    const includeLogoCheckbox = document.getElementById('include-logo');
    const totalAmount = document.getElementById('total-amount');
    const proceedToPayment = document.getElementById('proceed-to-payment');
    const finalAmount = document.getElementById('final-amount');


    function calculateTotal() {
        let shirtTotal = 0;
        shirtCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                shirtTotal += parseFloat(checkbox.getAttribute('data-price'));
            }
        });

        const designTotal = parseFloat(designSelect.value);
        const embroideryTotal = embroiderySelect.checked ? 10 : 0;
        const logoTotal = includeLogoCheckbox.checked ? 25 : 0;

        const total = shirtTotal + designTotal + embroideryTotal + logoTotal;
        totalAmount.textContent = 'RM ' + total.toFixed(2);
    }

    designSelect.addEventListener('change', calculateTotal);

    shirtCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });

    embroiderySelect.addEventListener('change', calculateTotal);
    includeLogoCheckbox.addEventListener('change', calculateTotal);

    proceedToPayment.addEventListener('click', function () {
        totalPayment();
    });

    function totalPayment() {
        let finalAmountElement = document.getElementById("final-amount");

        const total = parseFloat(totalAmount.textContent.substring(3));
        if (total > 150) {
            alert('You are eligible for a 10% discount. Your new total is RM ' + (total * 0.9).toFixed(2));
            finalAmountElement.textContent = (total * 0.9).toFixed(2)
        } else {
            alert('Thank you for your purchase. Your total is RM ' + total.toFixed(2));
            finalAmountElement.textContent = (total * 0.9).toFixed(2)
        }
    }

    const designImages = document.querySelectorAll('.design');
    designImages.forEach(image => {
        image.addEventListener('mouseenter', function () {
            image.style.backgroundColor = 'lightgray';
        });
        image.addEventListener('mouseleave', function () {
            image.style.backgroundColor = 'transparent';
        });
    });
});
