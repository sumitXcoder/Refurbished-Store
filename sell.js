let c=document.querySelector(".b-cars");
let p=document.querySelector(".b-ppts");
let m=document.querySelector(".b-mobiles");
let j=document.querySelector(".b-jobs");
let b=document.querySelector(".b-bikes");
let e=document.querySelector(".b-electronics");
let fashion=document.querySelector(".b-fashion");
let furniture=document.querySelector(".b-furniture");
let ex=document.querySelector(".brief");
let change=15;
let car=()=>{
    ex.style.display="none";
    c.style.display='block';
    c.style.zIndex=change++;
}
let ppt=()=>{
    ex.style.display="none";
    p.style.display='block';
    p.style.zIndex=change++;
}
let mobile=()=>{
    ex.style.display="none";
    m.style.display='block';
    m.style.zIndex=change++;
}
let job=()=>{
    ex.style.display="none";
    j.style.display='block';
    j.style.zIndex=change++;
}
let bike=()=>{
    ex.style.display="none";
    b.style.display='block';
    b.style.zIndex=change++;
}
let elect=()=>{
    ex.style.display="none";
    e.style.display='block';
    e.style.zIndex=change++;
}
let fash=()=>{
    ex.style.display="none";
    fashion.style.display='block';
    fashion.style.zIndex=change++;
}
let furni=()=>{
    ex.style.display="none";
    furniture.style.display='block';
    furniture.style.zIndex=change++;
}