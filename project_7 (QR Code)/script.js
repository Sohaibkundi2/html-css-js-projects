document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('qrForm');
    const qrText = document.getElementById('qrText');
    const qrCodeImage = document.getElementById('qrCodeImage');
    const lowerContent = document.querySelector('.lower_content');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const inputValue = qrText.value.trim();

        if (inputValue === '') {
            alert('Please enter some text to generate QR code.');
            return;
        }

        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
        qrCodeImage.src = qrUrl;
        qrCodeImage.alt = `QR Code for ${inputValue}`;

        // Show lower content with animation
        lowerContent.classList.remove('show'); // Reset animation if already shown
        setTimeout(function() {
            lowerContent.classList.add('show');
        }, 100); // Delay to ensure CSS transition triggers correctly
    });
});
