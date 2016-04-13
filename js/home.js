var winWidth = 0;
var winHeight = 0;
function getDimensions()
{
    //获取窗口宽度
    if(window.innerWidth)
        winWidth = window.innerWidth;
    else if((document.body) && (document.body.clientWidth))
        winWidth = document.bo.clientWidth;
    
    //获取窗口高度
    if(window.innerHeight)
        winHeight = window.innerHeight;
    else if((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight;
    
    //更深入的获取窗口大小
    if(document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
    {
        winWidth = document.documentElement.clientWidth;
        winHeight = document.documentElement.clientHeight;
    }
    
    var hcontent = document.getElementById("hcontent");
    var hcontent2 = document.getElementById("hcontent2");
    var hhead = document.getElementById("hhead");
    var ilogo = document.getElementById("ilogo");
    var ipic = document.getElementById("ipic");
    var ipic_2 = document.getElementById("ipic_2");
    var ipic_3 = document.getElementById("ipic_3");
    var ipic_4 = document.getElementById("ipic_4");
    var imove = document.getElementById("imove");
    var iindex = document.getElementById("iindex");
    var ihome = document.getElementById("ihome");
    //alert(hhead.clientHeight);
    
    if(winHeight<500 || winWidth<1024)
    {
        
    }
    else
    {
        //内容块的定位
        if(hcontent != null)
        {
            hcontent.style.width = winWidth * 0.5 + "px";
            hcontent.style.height = winHeight + "px";
            hcontent.style.marginLeft = winWidth * 0.33 + "px";
        }
        
        if(hcontent2 != null)
        {
            hcontent2.style.width = winWidth * 0.33 + "px";
            hcontent2.style.height = winHeight + "px";
        }
        
        hhead.style.top = winHeight-hhead.clientHeight-30 + "px";
        hhead.style.left = 30 + "px";
        
        ilogo.style.top = winHeight * 0.1 + "px";
        ilogo.style.left = winWidth * 0.20 + "px";
        
        if(ipic != null)
        {
            ipic.style.marginTop =  winWidth * 0.14 + "px";
            ipic.style.height = winHeight-200 + "px";
        }
        
        if(ipic_3 != null)
        {
            ipic_3.style.marginTop =  winWidth * 0.12 + "px";
            ipic_3.style.height = winHeight-200 + "px";
        }
        
        if(ipic_4 != null)
        {
            //ipic_4.style.marginTop =  "-" + winWidth * 0.05 + "px";
            ipic_4.style.height = winHeight-300 + "px";
        }
        
        if(ipic_2 != null)
            ipic_2.style.marginTop =  winWidth * 0.24 + "px";
        
        imove.style.bottom = 60 + "px";
        imove.style.right = 60 + "px";
        
        iindex.style.top = 30 + "px";
        iindex.style.left = 30 + "px";
        iindex.style.fontSize = "14px";
        
    }
}


getDimensions();

window.onresize = getDimensions;


/*************************************************************************************/

function toIndex()
{
    window.location.href = "home.html";
}

var totop = document.getElementById("toTop");
totop.onclick = function()
{
    var timer = setInterval(function() {
        window.scrollBy(0, -50);
        if (document.body.scrollTop == 0) {
            clearInterval(timer);
        };
    }, 2);
}





