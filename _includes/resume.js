(function (d, t) {
    var h = d.getElementsByTagName(t)[0],
        s = d.createElement(t);

    // set ga
    s.src = 'http://www.google-analytics.com/ga.js';
    s.async = 1;
    _gaq = [
        ['_setAccount', 'UA-3587044-1'],
        ['_trackPageview'],
        ['_trackPageLoadTime']
    ];

    // insert ga
    setTimeout(function () {
        h.parentNode.insertBefore(s, h);
    }, 0);

    // print button
    d.getElementById('prt').onclick = function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = 0;
        print();
    }
}(document, 'script'));
