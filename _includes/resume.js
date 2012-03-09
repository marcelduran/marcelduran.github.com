(function () {
    // print button
    document.getElementById('prt').onclick = function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = 0;
        print();
    }
}());
