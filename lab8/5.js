let checkbox = document.getElementById('Checkbox');
let input = document.getElementById('Input');
input.style.display = 'none';
checkbox.addEventListener('change', function() {
    if(this.checked) {
        input.style.display = 'block';
    } else {
        input.style.display = 'none';
    }
});