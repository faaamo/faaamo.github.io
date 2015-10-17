var bt = document.getElementById("button");
var r = 0;
var i = 1;

var myRotation = function()
{
    r += i;
    if(Math.abs(r) >= 25)
        i *= -1;
    bt.style.MozTransform = "rotate("+r+"deg)";
    bt.style.webkitTransform = "rotate("+r+"deg)";
    bt.style.msTransform = "rotate("+r+"deg)";
    bt.style.OTransform = "rotate("+r+"deg)";
}

var timer = setInterval(myRotation, 10);

bt.onmouseover = function()
{
    clearInterval(timer);
    timer = null;
    bt.style.cursor = "pointer";
}

bt.onmouseout = function()
{
    if(timer)
        return;
    timer = setInterval(myRotation, 10);
}


var scrollFunc = function(e)
{
    var derection = 0;
    e = e || window.Event;
    
    if(e.wheelDelta)
    {
        if(e.wheelDelta == 120)
            direction = 1;
        else    
            direction = -1;
    }
    else if(e.detail)
    {
        if(e.detail == 3)
            direction = 1;
        else
            direction = -1;
    }
}

//注册事件
if(document.addEventListener)
{
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
window.onmousewheel = scrollFunc;