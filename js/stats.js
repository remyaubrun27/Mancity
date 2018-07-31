var toggle = 0;
$(document).ready(function() {
    $('.num').hide();

    $('.clickable').hover(function() {
            $(this).stop(true, true);
            $(this).next().slideDown('fast');
        },
        function() {
            $(this).stop(false, true);
            $(this).next().slideUp('slow');
        }

    );
});
$(document).ready(function() {
    $('.num').hide();

    $('.clickable').hover(function() {
            $(this).stop(true, true);
            $(this).next().slideDown('fast');
        },
        function() {
            $(this).stop(false, true);
            $(this).next().slideUp('slow');
        }

    );
});

$(document).ready(function() {
  /*  var date = new Date();
    var currTime = date.toLocaleTimeString();
    setInterval(function() {
        var date = new Date();
        var currTime = date.toLocaleTimeString();
    }, currTime, 1000);*/
function getCurrentTime(){
	var d = new Date();
	d = d.toLocaleTimeString();
}

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock('clockdiv', deadline);



    function startClock() {
        $("#start").click(function() {
            document.getElementById("clockform").reset();
        })
    }
});
