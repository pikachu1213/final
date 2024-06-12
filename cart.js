document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有購物車商品
    const cartItems = document.querySelectorAll('.cart-item');
    // 獲取總價顯示元素
    const totalPriceElement = document.getElementById('total-price');

    // 計算並更新總價
    function updateTotalPrice() {
        let totalPrice = 0;
        // 遍歷每個購物車商品
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.item-details p').textContent.replace('價格: $', ''));
            let quantity = parseInt(item.querySelector('.quantity-input').value);
            // 確保數量不為負，並且更新數量輸入框
            if (quantity < 0) {
                quantity = 0;
                item.querySelector('.quantity-input').value = quantity;
            }
            // 更新商品小計並加入總價
            const subtotal = price * quantity;
            totalPrice += subtotal;
        });
        // 更新總價顯示
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // 初始化總價
    updateTotalPrice();

    // 監聽數量變化和移除商品事件
    cartItems.forEach(item => {
        const quantityInput = item.querySelector('.quantity-input');
        const removeBtn = item.querySelector('.remove-btn');

        // 監聽數量變化
        quantityInput.addEventListener('input', () => {
            updateTotalPrice();
        });

        // 監聽移除商品事件
        removeBtn.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });
    });

    // 獲取所有增加和減少按鈕
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');

    // 監聽增加按鈕點擊事件
    incrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityInput = button.parentElement.querySelector('.quantity-input');
            let quantity = parseInt(quantityInput.value);
            quantity += 1;
            quantityInput.value = quantity;
            updateTotalPrice();
        });
    });

    // 監聽減少按鈕點擊事件
    decrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityInput = button.parentElement.querySelector('.quantity-input');
            let quantity = parseInt(quantityInput.value);
            if (quantity > 0) {
                quantity -= 1;
                quantityInput.value = quantity;
                updateTotalPrice();
            }
        });
    });

    // 優惠碼套用
    const applyCouponBtn = document.querySelector('.apply-coupon-btn');
    applyCouponBtn.addEventListener('click', () => {
        const couponInput = document.querySelector('.coupon input');
        const couponCode = couponInput.value;
        // 在這裡檢查優惠碼，並更新總價
        couponInput.value = ''; // 清空輸入框
    });

    // 結帳
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', () => {
        const shippingMethod = document.querySelector('.shipping select').value;
        const notes = document.querySelector('.notes textarea').value;
        // 在這裡執行結帳操作
    });
});
