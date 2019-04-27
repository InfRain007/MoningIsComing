function clock()
{
    var weeks = new Array("SUN","MON","TUE","WED","THR","FRI","SAT");
    var now = new Date();
    var y = now.getFullYear();
    var mo = now.getMonth() + 1;
    var d = now.getDate();
    var w = weeks[now.getDay()];
    var h = now.getHours();
    var mi = now.getMinutes();
    var s = now.getSeconds();

    if (mo < 10) mo = "0" + mo;
    if (d < 10) d = "0" + d;
    if (mi < 10) mi = "0" + mi;
    if (s < 10) s = "0" + s;

    document.getElementById("clock_date").innerHTML = "[" + w + "]" + y + "-" + mo + "-" + d ;
    document.getElementById("clock_time").innerHTML = h + ":" + mi + ":" + s;
}

setInterval(clock, 1000);