var seconds_remaining = null;

$(function() {

    $.getJSON('http://gmt.madebyfieldwork.com/mediannye.php', function(response) {
        seconds_remaining = response.seconds_remaining;
        setCountdown();

        setInterval(function() {
            seconds_remaining --;
            setCountdown();
        }, 1000);
    });
    
});

function setCountdown() {
    var cd = parseSeconds(seconds_remaining);
    $('.countdown').html(cd);
}

function parseSeconds(secs) {
    var hours = parseInt( secs / 3600 ) % 24;
    var minutes = parseInt( secs / 60 ) % 60;
    var seconds = secs % 60;

    return (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
}