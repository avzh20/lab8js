document.getElementById('button').addEventListener('click', function() {
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    let input3 = document.getElementById('input3');
    let N = parseInt(input2.value);
    let symbols = input3.value;
    let randomString = '';
    for(let i = 0; i < N; i++) {
        let randomIndex = Math.floor(Math.random() * symbols.length);
        randomString += symbols[randomIndex];
    }
    input1.value = randomString;
});
