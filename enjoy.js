(function(){
if(window.__ec||window.top!==window)return;window.__ec=1;
var BASE='https://alessiomarrazzoema.github.io/enjoy-supersaas/';
var VIEW=/[?&]view=(new|free|agenda)(&|$)/;
var EXTRA='.ec-card{order:2;margin:16px 0 16px;padding:14px 16px;border-radius:14px;background:#f1f5f2;color:#242627;font:600 16px Inter,sans-serif;display:flex;justify-content:space-between;align-items:center;gap:12px;position:relative;z-index:1}.ec-card.xcol5{background:#0f0f0f;color:#fff}.ec-card.xcol13{background:#ffd400;color:#242627}.ec-card.xcol3{background:#d9dcda;color:#242627}.ec-card .ec-n{background:#47ff82;color:#242627;border-radius:8px;padding:2px 10px;white-space:nowrap}';
function q(s){var e=document.querySelector(s);return e?e.textContent.replace(/\s+/g,' ').trim():''}
function info(){var w=document.getElementById('bbox_color_wrap');var m=w&&w.className.match(/xcol\d+/);return{title:q('#bbox_title'),date:q('#bbox_date'),spots:q('#bbox_color'),cx:m?m[0]:''}}
function closeOv(reload){var o=document.getElementById('ec-ov');if(o)o.remove();document.documentElement.style.overflow='';if(reload)location.href=location.pathname.replace(/\/\d+$/,'')}
function inject(d,inf){
if(d.getElementById('ec-css'))return;
var l=d.createElement('link');l.id='ec-css';l.rel='stylesheet';l.href=BASE+'enjoy.css?v=3';d.head.appendChild(l);
var s=d.createElement('style');s.textContent=EXTRA;d.head.appendChild(s);
var h=d.querySelector('h2.cc3');
if(inf&&inf.title&&h&&d.querySelector('.box_wrap')){
[].slice.call(h.childNodes).forEach(function(n){if(n.nodeType===3)h.removeChild(n)});
h.insertBefore(d.createTextNode(inf.title),h.firstChild);
var c=d.createElement('div');c.className='ec-card '+inf.cx;
var a=d.createElement('span'),b=d.createElement('span');a.textContent=inf.date;b.className='ec-n';b.textContent=inf.spots;c.appendChild(a);c.appendChild(b);
h.parentNode.insertBefore(c,h.nextSibling)}
[].forEach.call(d.querySelectorAll('a[href*="shop"]'),function(x){x.target='_top'});
d.addEventListener('click',function(e){var x=e.target.closest&&e.target.closest('a');if(!x)return;
var hr=x.getAttribute('href')||'';
if(x.classList.contains('if-times')||x.classList.contains('bttn-ghost')){if(!VIEW.test(hr)||x.classList.contains('if-times')||x.classList.contains('bttn-ghost')){e.preventDefault();closeOv(false)}}},true)}
function openFrame(url,inf,showX){
closeOv(false);
var o=document.createElement('div');o.id='ec-ov';o.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;background:#fff';
var f=document.createElement('iframe');f.style.cssText='width:100%;height:100%;border:0;display:block';
o.appendChild(f);
if(showX){var x=document.createElement('button');x.textContent='✕';x.setAttribute('aria-label','Chiudi');x.style.cssText='position:absolute;top:10px;right:12px;z-index:2;width:40px;height:40px;border-radius:50%;border:0;background:#47ff82;color:#242627;font:700 18px Inter,sans-serif;cursor:pointer';x.onclick=function(){closeOv(false)};o.appendChild(x)}
document.body.appendChild(o);document.documentElement.style.overflow='hidden';
var first=true;
f.addEventListener('load',function(){var d,h;try{d=f.contentDocument;h=f.contentWindow.location.href}catch(e){return}
if(h==='about:blank')return;
if(!VIEW.test(h)){closeOv(!first);return}
first=false;inject(d,inf)});
f.src=url}
document.addEventListener('click',function(e){
if(!document.body.classList.contains('capacity_m'))return;
var a=e.target.closest&&e.target.closest('a');if(!a)return;
var hr=a.getAttribute('href')||'';var m=hr.match(VIEW);if(!m)return;
if(e.metaKey||e.ctrlKey||e.shiftKey)return;
e.preventDefault();e.stopPropagation();
openFrame(a.href,m[1]==='new'?info():null,m[1]!=='new')},true);
})();
