let Name = document.querySelector('#input');
Name.addEventListener('blur', function() {
    let words = this.value.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    this.value = words.join(' ');
});