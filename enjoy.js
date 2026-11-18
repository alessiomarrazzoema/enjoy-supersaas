;(function(){if(window.top!==window||window.__ecp)return;window.__ecp=1;try{Object.defineProperty(window,'per_slot',{get:function(){return 100},set:function(){},configurable:true})}catch(e){try{window.per_slot=100}catch(x){}}})();
;(function(){if(window.top!==window||window.__ecu)return;window.__ecu=1;var last=null;setInterval(function(){if(!/\/\d+$/.test(location.pathname)){last=location.href}else if(last&&document.getElementById('bbox')){try{history.replaceState(history.state,'',last)}catch(e){}}},250)})();
;(function(){if(window.top!==window||window.__eca)return;window.__eca=1;function av(){var b=document.getElementById('bbox');if(!b)return;var th=b.querySelector('#bbox_content thead a');if(th&&th.textContent.trim()!=='Iscritti')th.textContent='Iscritti';[].forEach.call(b.querySelectorAll('#bbox_content tbody tr'),function(tr){var c=tr.cells;if(!c.length||tr.querySelector('.ec-n'))return;var td=c[0],wb=td.querySelector('.wl'),nc=(td.textContent.trim()&&!wb)?td:c[1];if(!nc)return;var old=td.querySelector('.ec-av');if(old&&nc!==td)old.remove();if(wb&&nc!==td)nc.appendChild(wb);var n=(nc.firstChild&&nc.firstChild.nodeType==3?nc.firstChild.textContent:nc.textContent).trim();if(!n)return;var i=n.split(/\s+/).map(function(x){return x[0]}).slice(0,2).join('').toUpperCase();var a=document.createElement('span');a.className='ec-av';a.textContent=i;nc.insertBefore(a,nc.firstChild);nc.classList.add('ec-n')})}var t=0;new MutationObserver(function(){clearTimeout(t);t=setTimeout(av,50)}).observe(document.documentElement,{childList:true,subtree:true});av()})();
;(function(){if(window.__ecv||window.top!==window)return;window.__ecv=1;function go(){try{var M=document.getElementById('dd-wrap');if(!M)return;var L=[].slice.call(M.querySelectorAll('a')),E=L.filter(function(a){return a.textContent.trim()=='Elenco'})[0],C=L.filter(function(a){return a.textContent.trim()=='Calendario'})[0];if(!E||!C)return;E.addEventListener('click',function(){try{localStorage.setItem('ec_v','e')}catch(x){}});C.addEventListener('click',function(){try{localStorage.setItem('ec_v','c')}catch(x){}});var v=null;try{v=localStorage.getItem('ec_v')}catch(x){}if(v=='e')E.click()}catch(x){}}if(document.readyState=='loading')document.addEventListener('DOMContentLoaded',go);else go()})();
(function(){
if(window.__ec||window.top!==window)return;window.__ec=1;
var BASE='https://alessiomarrazzoema.github.io/enjoy-supersaas/';
var VIEW=/[?&]view=(new|free|agenda)(&|$)/;
var K=[[/hyrox/i,'hy'],[/crossfit/i,'cf'],[/gag/i,'gag'],[/open\s*box/i,'ob'],[/circuit(?!\s*pilates)/i,'ci'],[/skill|team\s*wod/i,'rd'],[/pilates/i,'pi'],[/str+eng?h?t/i,'st']];
var MAP={cf:'xcol5',hy:'xcol13',ob:'xcol3',gag:'ecx-gag',ci:'ecx-ci',rd:'ecx-rd',pi:'ecx-pi',st:'ecx-st'};
var PAL={gag:['#8fd3ff','#242627'],ci:['#ff9a3c','#242627'],rd:['#e5484d','#fff'],pi:['#47ff82','#242627'],st:['#b388ff','#242627']};
function palCss(){var s='';for(var k in PAL){var c=PAL[k],x='.ecx-'+k;
s+='tr.rd'+x+' td,#table_resp tr'+x+' td{background:'+c[0]+'!important;color:'+c[1]+'!important}tr'+x+' td *{color:'+c[1]+'!important}.out'+x+'{background:'+c[0]+'!important}.out'+x+' .in,.out'+x+' .in *{color:'+c[1]+'!important}';
s+='#bbox .level-wrap:has('+x+'),#booking .level-wrap:has('+x+'){background:'+c[0]+';color:'+c[1]+'}#bbox .level-wrap:has('+x+') *,#booking .level-wrap:has('+x+') *{color:'+c[1]+'}';
s+='#bbox_color'+x+',#booking_color'+x+'{background:#242627!important}#bbox_color'+x+' *,#booking_color'+x+' *{color:#fff!important}.ec-card'+x+'{background:'+c[0]+';color:'+c[1]+'}'}
return s}
function key(t){for(var i=0;i<K.length;i++)if(K[i][0].test(t))return K[i][1];return''}
function ttl(e){if(e.tagName==='TR')return e.textContent;if(e.classList.contains('out')){var ct=e.querySelector('.chip-title');return ct?ct.textContent:''}var b=e.closest('#bbox'),t=b&&b.querySelector('#bbox_title');if(t)return t.textContent;b=e.closest('#booking');t=b&&b.querySelector('#booking_title,.res_title');return t?t.textContent:''}
function retag(r){[].forEach.call(r.querySelectorAll('tr[class*=xcol],#bbox [class*=xcol],#booking [class*=xcol],div.out[class*=xcol]'),function(e){if(e.tagName=="TR"&&/(^|\s)full/.test(e.className))e.classList.add("rd");var k=key(ttl(e));if(!k)return;var m=MAP[k];if(e.classList.contains(m))return;e.className=e.className.replace(/\bxcol\d+\b/g,'').replace(/\becx-\w+/g,'')+' '+m})}
var EXTRA=palCss()+'.ec-card{order:2;margin:16px 0 16px;padding:14px 16px;border-radius:14px;background:#f1f5f2;color:#242627;font:600 16px Inter,sans-serif;display:flex;justify-content:space-between;align-items:center;gap:12px;position:relative;z-index:1}.ec-card.xcol5{background:#0f0f0f;color:#fff}.ec-card.xcol13{background:#ffd400;color:#242627}.ec-card.xcol3{background:#d9dcda;color:#242627}.d3{order:9;margin-top:24px}'
+'.ec-sheet body{background:#fff}.ec-sheet .wrap:has(>.box_wrap){min-height:0;padding:0 20px 28px;max-width:none}.ec-sheet .wrap:has(>.box_wrap)::before{display:none}.ec-sheet .wrap:has(>.box_wrap)>h2.cc3{margin:26px 0 0!important;font-size:34px!important;line-height:1!important;padding-right:48px!important}.ec-sheet .wrap:has(>.box_wrap)>h2.cc3::before{display:none}.ec-sheet h2.cc3 a.if-times{display:none!important}.ec-sheet .box_wrap{margin:0!important;box-shadow:none;border:0;border-radius:0;padding:0!important;background:transparent}.ec-sheet .box_wrap::before{display:none}.ec-sheet .d3{display:none}'
+'.ec-sheet .ec-card{display:block;margin:18px 0 6px;padding:16px 18px;border-radius:18px}.ec-sheet .ec-t{font:600 20px Inter,sans-serif;text-transform:capitalize}.ec-sheet .ec-s{font:400 15px Inter,sans-serif;margin-top:4px;opacity:.9}.ec-lbl{font:600 15px Inter,sans-serif;margin:18px 0 8px;color:#242627}';
var EXTRAP=palCss()+'#bbox_description_wrap.ec-empty{display:none!important}p#but_new a::after{content:var(--ec-cta,"Prenota il tuo posto")!important}.ec-av{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:#e4fbe9;color:#242627;font:700 12px Inter,sans-serif;margin-right:12px;vertical-align:middle}#bbox_content tbody td:first-child{font-size:16px;color:#242627}';
function q(s){var e=document.querySelector(s);return e?e.textContent.replace(/\s+/g,' ').trim():''}
function info(){var w=document.getElementById('bbox_color_wrap');var m=w&&w.className.match(/xcol\d+|ecx-\w+/);return{title:q('#bbox_title'),date:q('#bbox_date'),spots:q('#bbox_color'),price:q('#bbox_priced'),cx:m?m[0]:''}}
function closeOv(reload){var o=document.getElementById('ec-ov');if(o)o.remove();document.documentElement.style.overflow='';if(reload)location.href=location.pathname.replace(/\/\d+$/,'')}
function walk(root,fn){var w=root.ownerDocument.createTreeWalker(root,4,null,false),n,a=[];while(n=w.nextNode())a.push(n);a.forEach(fn)}
function inject(d,inf,sheet,fit){
if(d.getElementById('ec-css'))return;
var l=d.createElement('link');l.id='ec-css';l.rel='stylesheet';l.href=BASE+'enjoy.css?v=3';d.head.appendChild(l);
var s=d.createElement('style');s.textContent=EXTRA;d.head.appendChild(s);
retag(d);
var h=d.querySelector('h2.cc3');
if(inf&&inf.title&&h&&d.querySelector('.box_wrap')){
if(sheet)d.documentElement.classList.add('ec-sheet');
[].slice.call(h.childNodes).forEach(function(n){if(n.nodeType===3)h.removeChild(n)});
h.insertBefore(d.createTextNode(sheet?'Nuova prenotazione':inf.title),h.firstChild);
var c=d.createElement('div');c.className='ec-card '+inf.cx;
if(sheet){
var dt=(inf.date||'').replace(/^(\S+ \S+)\s/,'$1 · ')+(inf.price?' · '+inf.price:'');
var t=d.createElement('div'),u=d.createElement('div');t.className='ec-t';t.textContent=inf.title;u.className='ec-s';u.textContent=dt;c.appendChild(t);c.appendChild(u);
}else{
var a=d.createElement('span'),b=d.createElement('span');a.textContent=inf.date;b.className='ec-n';b.textContent=inf.spots;c.appendChild(a);c.appendChild(b)}
h.parentNode.insertBefore(c,h.nextSibling);
if(sheet){
var bw=d.querySelector('.box_wrap');
walk(bw,function(n){var v=n.nodeValue.trim();if(/^Invia email$/i.test(v))n.nodeValue=n.nodeValue.replace(/Invia email/i,'Invia email di conferma');else if(/^Conferma$/i.test(v))n.nodeValue=''});
[].forEach.call(d.querySelectorAll('input[type=submit]'),function(x){x.value='Conferma prenotazione'});

}
}
[].forEach.call(d.querySelectorAll('a[href*="shop"]'),function(x){x.target='_top'});
d.addEventListener('click',function(e){var x=e.target.closest&&e.target.closest('a');if(!x)return;
var hr=x.getAttribute('href')||'';
if(x.classList.contains('if-times')||x.classList.contains('bttn-ghost')){e.preventDefault();closeOv(false)}},true);
if(fit){fit();setTimeout(fit,300);setTimeout(fit,900)}}
function openFrame(url,inf,mode){
closeOv(false);
var sheet=mode==='sheet';
var o=document.createElement('div');o.id='ec-ov';
var f=document.createElement('iframe');
var fit=null;
if(sheet){
o.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;background:rgba(36,38,39,.55)';
var s=document.createElement('div');
s.style.cssText='position:absolute;left:0;right:0;bottom:0;margin:0 auto;max-width:520px;height:70vh;background:#fff;border-radius:28px 28px 0 0;border-top:4px solid #47ff82;overflow:hidden;box-shadow:0 -8px 30px rgba(0,0,0,.25)';
f.style.cssText='width:100%;height:100%;border:0;display:block';
var hd=document.createElement('div');hd.style.cssText='position:absolute;top:8px;left:50%;margin-left:-22px;width:44px;height:5px;border-radius:3px;background:#d3dad5;z-index:2;pointer-events:none';
var x=document.createElement('button');x.textContent='✕';x.setAttribute('aria-label','Chiudi');x.style.cssText='position:absolute;top:24px;right:16px;z-index:3;width:40px;height:40px;border:0;background:transparent;color:#242627;font:600 22px Inter,sans-serif;cursor:pointer';x.onclick=function(){closeOv(false)};
s.appendChild(f);s.appendChild(hd);s.appendChild(x);o.appendChild(s);
o.addEventListener('click',function(e){if(e.target===o)closeOv(false)});
fit=function(){try{var d=f.contentDocument;var hh=Math.min(Math.ceil(d.querySelector('.wrap').getBoundingClientRect().height)+4,Math.round(window.innerHeight*0.92));s.style.height=hh+'px'}catch(e){}};
}else{
o.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;background:#fff';
f.style.cssText='width:100%;height:100%;border:0;display:block';
o.appendChild(f);
var x2=document.createElement('button');x2.textContent='✕';x2.setAttribute('aria-label','Chiudi');x2.style.cssText='position:absolute;top:10px;right:12px;z-index:2;width:40px;height:40px;border-radius:50%;border:0;background:#47ff82;color:#242627;font:700 18px Inter,sans-serif;cursor:pointer';x2.onclick=function(){closeOv(false)};o.appendChild(x2)}
document.body.appendChild(o);document.documentElement.style.overflow='hidden';
var first=true;
f.addEventListener('load',function(){var d,h;try{d=f.contentDocument;h=f.contentWindow.location.href}catch(e){return}
if(h==='about:blank')return;
if(!VIEW.test(h)){closeOv(!first);return}
first=false;inject(d,inf,sheet,fit)});
f.src=url}
function enh(){
retag(document);
var b=document.getElementById('bbox');if(!b)return;
var cw=document.getElementById('bbox_color_wrap'),dw=document.getElementById('bbox_description_wrap'),ds=document.getElementById('bbox_description');
if(cw&&dw&&ds){if(dw.parentNode===cw)cw.parentNode.insertBefore(dw,cw.nextSibling);
dw.classList.toggle('ec-empty',!ds.textContent.trim())}
var th=b.querySelector('#bbox_content thead a');if(th&&th.textContent.trim()!=='Iscritti')th.textContent='Iscritti';
[].forEach.call(b.querySelectorAll('#bbox_content tbody tr'),function(tr){var td=tr.querySelector('td');if(!td||td.querySelector('.ec-av'))return;var n=td.textContent.trim();if(!n)return;var i=n.split(/\s+/).map(function(x){return x[0]}).slice(0,2).join('').toUpperCase();var a=document.createElement('span');a.className='ec-av';a.textContent=i;td.insertBefore(a,td.firstChild)});
var a=b.querySelector('#but_new a'),p=document.getElementById('bbox_priced');
if(a&&p){var m=p.textContent.match(/(\d+)/);a.style.setProperty('--ec-cta',m?'"Prenota con '+m[1]+(m[1]==='1'?' credito':' crediti')+'"':'"Prenota il tuo posto"')}}
var st=document.createElement('style');st.textContent=EXTRAP;document.head.appendChild(st);
retag(document);var tm;new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(function(){retag(document)},120)}).observe(document.body,{childList:true,subtree:true});
document.addEventListener('click',function(e){
if(!document.body.classList.contains('capacity_m')){setTimeout(function(){retag(document)},350);setTimeout(function(){retag(document)},1000);return}
var r=e.target.closest&&e.target.closest('[onclick*=viewslot]');
if(r){[300,900,1800].forEach(function(t){setTimeout(enh,t)})}
var a=e.target.closest&&e.target.closest('a');if(!a)return;
var hr=a.getAttribute('href')||'';var m=hr.match(VIEW);if(!m)return;
if(e.metaKey||e.ctrlKey||e.shiftKey)return;
e.preventDefault();e.stopPropagation();
openFrame(a.href,m[1]==='new'?info():null,m[1]==='new'?'sheet':'full')},true);
})();
