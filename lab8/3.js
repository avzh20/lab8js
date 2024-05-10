let count = 0;
let paragraphs = document.getElementsByTagName('p');

for(let i = 0; i < paragraphs.length; i++) {
    if(i % 2 == 1) {
        paragraphs[i].addEventListener('click', function() {
            count++;
            document.getElementById('input').value = count;
        });
    }
}