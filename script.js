typography_ptr=0;
const hero_typography=()=>{
    const text="Discover, Inspire, Connect: Your Blog for Everything Worth Sharing.";
    hero_text=document.getElementById("hero-text");
    if(hero_text && typography_ptr<text.length){
        hero_text.innerHTML+=text[typography_ptr];
        typography_ptr++;
    }else{
        clearInterval(typography_interval);
    }
}
typography_interval=setInterval(hero_typography,60);