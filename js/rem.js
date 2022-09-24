function remSize(){
    var devichwidth=document.documentElement.clientWidth||window.innerWidth;
    if(devichwidth>=750){
        devichwidth=750
    }
    if(devichwidth<=320){
        devichwidth=320
    }
    document.documentElement.style.fontSize=(devichwidth/7.5)+'px'
    document.querySelector('body').style.fontSize=0.3+'rem'
}
remSize()

window.onresize=function(){
    remSize()
}