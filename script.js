ไม่มีรายการที่เลือก 

ข้ามไปที่เนื้อหา
การใช้ อีเมลของ Krathumbaen Wisetsamutthakhun School กับโปรแกรมอ่านหน้าจอ
เปิดการแจ้งเตือนในเดสก์ท็อปสำหรับ อีเมลของ Krathumbaen Wisetsamutthakhun School
   ตกลง  ไม่ ขอบคุณ

2 จาก 1,458
js
กล่องจดหมาย

ณิรินทร์ญา อัครณธิพัฒน์
21:03 (1 นาทีที่ผ่านมา)
ถึง ฉัน

ดูเหมือนว่าข้อความนี้จะเป็นอังกฤษ
const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

})

})

cards.forEach(card=>{

card.style.opacity=0;

card.style.transform="translateY(50px)";

card.style.transition="1s";

observer.observe(card);

})

