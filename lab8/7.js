function generateTable() {
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    var table = document.getElementById('table');
    table.innerHTML = '';
    for (var i = 0; i < height; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < width; j++) {
            row.insertCell(j);
        }
    }
}