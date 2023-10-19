const orderButton = document.getElementById('order-button');
        const foodCheckboxes = document.querySelectorAll('.food-checkbox');
        const loading = document.getElementById('loading');
        const foodImage = document.getElementById('food-image');
        const orderId = document.getElementById('order-id');

        orderButton.addEventListener('click', () => {
            // Disable UI while processing
            orderButton.disabled = true;
            foodCheckboxes.forEach(checkbox => checkbox.disabled = true);
            loading.style.display = 'block';

            // Simulate food preparation with a promise
            const orderPromise = new Promise((resolve, reject) => {
                const foodItems = Array.from(foodCheckboxes)
                    .filter(checkbox => checkbox.checked)
                    .map(checkbox => checkbox.value);

                const order = {
                    items: foodItems,
                    orderNumber: Math.floor(Math.random() * 1000)
                };

                setTimeout(() => {
                    resolve(order);
                }, Math.floor(Math.random() * 5000));
            });

            orderPromise.then(order => {
                // Show food image and order ID after promise resolution
                loading.style.display = 'none';
                foodImage.style.display = 'block';
                foodImage.innerHTML = `<img src="./front-view-woman-eating-meat-burgers.jpg" alt="Food Image" height="400" width="400">`;
                orderId.style.display = 'block';
                orderId.textContent = `Order #${order.orderNumber}`;
            });
        });
        const feedbackInput = document.getElementById('feedback');
        const submitButton = document.getElementById('submit-feedback');
    
        submitButton.addEventListener('click', () => {
            const feedback = feedbackInput.value;
            alert(`Thank you for your feedback: ${feedback}`);
        });
    
        const orderSound = new Audio('./munching-food-73994.mp3'); // Provide path to your sound file
        orderSound.play();
        const foodItems = document.querySelectorAll('.food-item');
foodItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});