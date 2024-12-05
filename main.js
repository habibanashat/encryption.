
// دالة التشفير باستخدام Caesar Cipher
function caesarCipher(text, shift) {
    let result = '';

    // المرور عبر كل حرف في النص
    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        // إذا كان الحرف حرفًا صغيرًا
        if (/[a-z]/.test(char)) {
            result += String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26 + 26) % 26 + 97);
        }
        // إذا كان الحرف حرفًا كبيرًا
        else if (/[A-Z]/.test(char)) {
            result += String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26 + 26) % 26 + 65);
        }
        // إذا كان الحرف غير حرف أبجدي
        else {
            result += char;
        }
    }

    return result;
}

// حدث عند إرسال النموذج
document.getElementById('cipherForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج فعليًا

    // الحصول على النص والإزاحة من الحقول
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value, 10);

    // تطبيق التشفير
    const encryptedText = caesarCipher(text, shift);

    // عرض النص المشفر
    document.getElementById('result').textContent = 'النص المشفر: ' + encryptedText;
});
