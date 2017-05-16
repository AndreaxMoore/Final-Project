var ss = document.getElementsByClassName('stopwatch');
/*it will return only elements which are descendants of the specified root element with the given class names.
Get all elements that have a class of 'stopwatch'*/

[].forEach.call(ss, function(s){
    var currentTimer = 0,
        interval = 0,
        LastUpdateTime = new Date().getTime(),
        start = s.querySelector('button.start'),
        stop = s.querySelector('button.stop'),
        reset = s.querySelector('button.reset'),
        minutes = s.querySelector('span.minutes'),
        seconds = s.querySelector('span.seconds'),
        centiseconds = s.querySelector('span.centiseconds');
        /*The querySelector() method returns the first child element that matches a specified CSS selector(s) of an element.*/
        });

