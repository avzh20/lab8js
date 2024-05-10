let images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        if (this.dataset.toggled == 'true') {
            this.style.transform = 'scale(1, 1)';
            this.dataset.toggled = 'false';
        } else {
            this.style.transform = 'scale(2, 2)';
            this.dataset.toggled = 'true';
        }
    });
}