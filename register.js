document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var passwordPattern = /^(?=.*[a-zA-Z]).{8,16}$/;

    if (!passwordPattern.test(password)) {
        alert("密碼必須為8到16個字符，且至少包含一個英文字母");
        return;
    }

    if (password !== confirmPassword) {
        alert("確認密碼與密碼不符");
        return;
    }

    // 取得使用者輸入的資料
    var username = document.getElementById("username").value;
    var gender = document.getElementById("gender").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var paymentMethod = document.getElementById("payment_method").value;
    var referralCode = document.getElementById("referral_code").value || "無";

    // 顯示註冊成功消息
    document.getElementById("success-message").style.display = "block";

    // 隱藏註冊表單
    document.getElementById("registration-form").style.display = "none";

    // 更新會員基本資料介面
    document.getElementById("username-info").textContent = username;
    document.getElementById("gender-info").textContent = (gender === 'male' ? '男生' : (gender === 'female' ? '女生' : '其他'));
    document.getElementById("phone-info").textContent = phone;
    document.getElementById("email-info").textContent = email;
    document.getElementById("address-info").textContent = address;
    document.getElementById("payment-method-info").textContent = translatePaymentMethod(paymentMethod);
    document.getElementById("referral-code-info").textContent = referralCode;

    // 顯示會員基本資料介面
    document.getElementById("member-info").style.display = "block";
});

document.getElementById("complete-button").addEventListener("click", function() {
    window.location.href = "index.html";
});

function translatePaymentMethod(method) {
    switch(method) {
        case 'cash':
            return '貨到付款';
        case 'credit_card':
            return '信用卡';
        case 'paypal':
            return 'PayPal';
        case 'line_pay':
            return 'Line Pay';
        case 'bank_transfer':
            return '銀行轉帳';
        default:
            return method;
    }
}
