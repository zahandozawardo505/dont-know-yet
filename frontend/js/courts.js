const imageInput = document.getElementById('courtImages');
const preview = document.getElementById('imagePreview');

if(imageInput && preview){
    imageInput.addEventListener('change', () => {
        preview.innerHTML = '';

        [...imageInput.files].forEach(file => {
            const reader = new FileReader();

            reader.onload = e => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.className = 'preview-image';
                preview.appendChild(img);
            };

            reader.readAsDataURL(file);
        });

        showToast('Images selected successfully');
    });
}