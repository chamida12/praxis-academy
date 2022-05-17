// $(function(){
//     var baris = 10;
//     var kotak = 10;
//     var array = [];
//     var even = true;
//     function buatKOtak (root){

//     }
// })

$(function () {
    var baris = 10;
    var kotak = 10;
    var cells = [];
    var even = true;
    function buatKotak(root) {
    for(var i = 0; i < kotak; i++) {
    for(var j = 0; j < kotak; j++) { //ngelooping buat kotak
    var cell = $('<div>').addClass('cell');
    cell.attr('data-row', i).attr('data-col', j);
    cells.push(cell);// memasukan value berupa cell kedalam array
    root.append(cell);
    }
    }
    };
    
    function statusBaru() {
        cells.forEach(function (cell) {
        var row = Math.floor(cell.data('row'));
        var col = Math.floor(cell.data('col'));
        var sum = row + col;
        var isEven = sum % 2 == 0;//mengatur berapa kolom yang berubah
        if (isEven === even) {
        cell.addClass('active');
        } else {
        cell.removeClass('active');
        }
        });
        even = !even;
        }
    
    setInterval(statusBaru, 500);// mengatur detik perubahan menggunakan setInterval
    
    var $root = $('.container');
    buatKotak($root);
   });