var ss = document.getElementsByClassName('stopwatch');
/*it will return only elements which are descendants of the specified root element with the given class names.
 Get all elements that have a class of 'stopwatch'*/

[].forEach.call(ss, function(s){
    var currentTimer = 0, /*Current time in the timer starts at 0*/
        interval = 0, /*Holding the set interval reference, keeps track of what's timing the timer*/
        lastUpdateTime = new Date().getTime(),
        start = s.querySelector('button.start'),
        stop = s.querySelector('button.stop'),
        reset = s.querySelector('button.reset'),
        minutes = s.querySelector('span.minutes'),
        seconds = s.querySelector('span.seconds'),
        centiseconds = s.querySelector('span.centiseconds');
    /*The querySelector() method returns the first child element that matches a specified CSS selector(s) of an element.*/

    start.addEventListener('click', startTimer);
    stop.addEventListener('click', stopTimer);
    reset.addEventListener('click', resetTimer);
    function pad(n)/*helper function, it takes a number and returns a string that is two characters long. eg: 1 return 01*/ {
        return ('00' + n).substr(-2); /*extract the last two characters off of that string*/
    }

    function update(){
        var now = new Date().getTime(),
            dt = now - lastUpdateTime;

        currentTimer += dt;

        var time = new Date(currentTimer);

        minutes.innerHTML = pad(time.getMinutes());
        seconds.innerHTML = pad(time.getSeconds());
        centiseconds.innerHTML = pad(Math.floor(time.getMilliseconds()/10));

        lastUpdateTime = now;
    }

    function startTimer(){
        if (!interval){/*if we don't have a timer running, we will start a new one*/
            lastUpdateTime = new Date().getTime();
            interval = setInterval(update,1);/*The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
             The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.*/
        }
    }

    function stopTimer(){
        clearInterval(interval);
        interval = 0;
    }

    function resetTimer(){
        stopTimer();

        currentTimer = 0;

        minutes.innerHTML = seconds.innerHTML = centiseconds. innerHTML = pad(0);
    }
});

