/* =====================================================
   main.js  —  Cursor, ticker, nav scroll, reveal
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

/* ── TICKER DUPLICATE ── */
const t=document.getElementById("ticker");
if(t) t.innerHTML+=t.innerHTML;

/* ── CURSOR ── */
const dot=document.getElementById("cursor-dot");
const ring=document.getElementById("cursor-ring");
let mx=0,my=0,rx=0,ry=0;
document.addEventListener("mousemove",e=>{
  mx=e.clientX; my=e.clientY;
  dot.style.left=mx+"px"; dot.style.top=my+"px";
});
(function anim(){
  rx+=(mx-rx)*.13; ry+=(my-ry)*.13;
  ring.style.left=rx+"px"; ring.style.top=ry+"px";
  requestAnimationFrame(anim);
})();
document.querySelectorAll("a,button,.pc,.exp-item,.hstat,.sg,.rfit,.cert-row").forEach(el=>{
  el.addEventListener("mouseenter",()=>ring.classList.add("hover"));
  el.addEventListener("mouseleave",()=>ring.classList.remove("hover"));
});

/* ── NAV SCROLL ── */
window.addEventListener("scroll",()=>{
  document.getElementById("navbar").classList.toggle("scrolled",scrollY>60);
},{passive:true});

/* ── SCROLL REVEAL ── */
const obs=new IntersectionObserver(es=>{
  es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");obs.unobserve(e.target);}});
},{threshold:.08});
document.querySelectorAll(".sr").forEach(el=>obs.observe(el));

});
