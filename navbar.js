let closed;

window.onload=()=>{
    closed=true;
}

document.getElementsByClassName("hamburger-menu")[0].onclick=()=>{
    nav_menu=document.getElementsByClassName("navlinks")[0];
    console.log(nav_menu);
    console.log(closed);
    if(closed){
        nav_menu.style.display="flex";
    }else{
        nav_menu.style.display="none";
    }
    closed=!closed;
}
