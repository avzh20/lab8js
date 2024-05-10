function sumColumns() {
    var table = document.getElementById('table');
    var rows = table.rows;
    var lastRow = rows[rows.length - 1];
    for (var i = 0; i < lastRow.cells.length; i++) {
        var sum = 0;
        for (var j = 0; j < rows.length - 1; j++) {
            sum += Number(rows[j].cells[i].innerHTML);
        }
        lastRow.cells[i].innerHTML = sum;
    }
}