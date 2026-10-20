(function(){
var C=[].slice.call(document.querySelectorAll('#copy>div')),P=[].slice.call(document.querySelectorAll('#ph img')),n=0,t,hc=document.getElementById('hc');
function go(k){C[n].classList.remove('on');P[n].classList.remove('on');n=(k+C.length)%C.length;C[n].classList.add('on');P[n].classList.add('on');hc.textContent=(n+1)+' / '+C.length;clearInterval(t);t=setInterval(function(){go(n+1)},6500)}
document.getElementById('hn').onclick=function(){go(n+1)};
document.getElementById('hp').onclick=function(){go(n-1)};
t=setInterval(function(){go(n+1)},6500);
var x0=null,f=document.querySelector('.film');
f.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
f.addEventListener('touchend',function(e){if(x0===null)return;var d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40)go(n+(d<0?1:-1));x0=null});
var tr=document.getElementById('track');
document.getElementById('gn').onclick=function(){tr.scrollBy({left:340,behavior:'smooth'})};
document.getElementById('gp').onclick=function(){tr.scrollBy({left:-340,behavior:'smooth'})};
var dn=false,sx=0,sl=0;
tr.addEventListener('mousedown',function(e){dn=true;sx=e.pageX;sl=tr.scrollLeft;tr.style.scrollSnapType='none';e.preventDefault()});
window.addEventListener('mouseup',function(){if(dn){dn=false;tr.style.scrollSnapType=''}});
window.addEventListener('mousemove',function(e){if(dn)tr.scrollLeft=sl-(e.pageX-sx)});
})();
