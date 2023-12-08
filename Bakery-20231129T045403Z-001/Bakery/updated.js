document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value.trim();
    const quantity = parseInt(document.getElementById('quantity').value, 10);

    let confirmationMessage;
    if (itemName && quantity > 0) {
        let totalCost = (quantity * 5); // Assuming each item costs $5
        confirmationMessage = `Thank you for ordering ${quantity} ${itemName}(s). Total cost: $${totalCost}`;
    } else {
        confirmationMessage = 'Please enter a valid item name and quantity.';
    }

    document.getElementById('orderConfirmation').innerText = confirmationMessage;
});
