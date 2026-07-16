// ==============================
// Portfolio Sky Blue Theme
// ==============================

// ---------- เปิดรูป ----------
function openImage(src){

    let popup=document.getElementById("popup");
    let popupImg=document.getElementById("popup-img");

    popup.style.display="flex";
    popupImg.src=src;

}

// ---------- ปิดรูป ----------
function closeImage(){

    document.getElementById("popup").style.display="none";

}

// ---------- กด ESC ----------
document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeImage();

    }

});

// ---------- คลิกพื้นหลังปิด ----------
const popup=document.getElementById("popup");

if(popup){

popup.addEventListener("click",(e)=>{

    if(e.target.id==="popup"){

        closeImage();

    }

});

}

// ---------- Animation ----------
const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";
card.style.transition=".7s";

observer.observe(card);

});

// ---------- ปุ่มกลับด้านบน ----------

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#25A9FF";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";
topBtn.style.transition=".3s";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
