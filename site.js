document.documentElement.classList.add("js");
var SPA=false;
var CONFIG={brand:"RentMyWebsite",whatsapp:"27690409017",phone:"069 040 9017",email:"admin@rentasite.co.za",checkoutUrl:""};
var $=function(i){return document.getElementById(i)},pages=[["home","Home"],["services","Services"],["terms","Terms"],["about","About us"],["careers","Careers"]];
var ADD=[["Business email","Email addresses on your own domain, like you@yourbusiness.co.za.","R100 per month","m",100],
["Meta ads setup","Facebook and Instagram ads set up and ready to run. You pay your own ad budget.","R699.99 setup only","o",699.99],
["Google Ads setup","Google Ads campaigns set up and ready to run. You pay your own ad budget.","R799.99 setup only","o",799.99],
["Ads management","We run, check and improve your ads for you.","R1,200 management fee","f",1200],
["Logo and brand kit","A logo, colours and fonts that match your business.","R549.99","o",549.99],
["Google Business Profile","Get found on Google Maps and local search.","R459.99","o",459.99],
["Company profile","A professionally designed company profile that presents your business.","R1,299.99","o",1299.99]];
var BIZ=[["Plumbing","Fast, reliable plumbing","Call now","#12326B"],["Electrician","Safe, certified electrical work","Get a quote","#1B3F8B"],["Beauty salon","Look and feel your best","Book now","#7A3B5E"],["Barber shop","Sharp cuts, every time","Book a chair","#2B2B3C"],["Accounting","Clear books, calm owners","Get a quote","#0F4C81"],["Construction","Built right, built to last","Request a quote","#7A5A12"],["Painting","Fresh colour, flawless finish","Free quote","#1E6B6B"],["Cleaning services","A spotless space, every day","Book a clean","#146C5B"],["Restaurant","Fresh food, made with love","Order now","#8C2F2F"],["Catering","Menus for every occasion","Plan your event","#6B4A1F"],["Retail shop","Everything you love, in one place","Shop now","#3D4FA3"],["Real estate","Find your next home","View listings","#0B3B66"],["Law firm","Clear advice you can trust","Book a consultation","#1F2A44"],["Medical and dental","Caring for your health","Book an appointment","#0E6F8C"],["Gym and fitness","Stronger every day","Join today","#25304B"],["Photography","Moments, beautifully kept","Book a shoot","#3A3A52"],["Auto repair","Back on the road, fast","Book a service","#33415C"],["Transport and logistics","Delivered on time, every time","Get a quote","#14407A"],["Tutoring and education","Learn with confidence","Enrol now","#2D5AA0"],["Event planning","Events they will remember","Plan my event","#6A3F73"],["Landscaping","Gardens that grow with you","Get a quote","#2F6B3F"],["Fashion and clothing","Style that is yours","Shop the range","#5A2A4F"],["Security services","Protection you can rely on","Request a quote","#0A2540"],["Church and NGO","Bringing people together","Get involved","#4C3A7A"]];
var IC={lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',server:'<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/>',mobile:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',pen:'<path d="M4 20l4-1 11-11-3-3L5 16z"/>',headset:'<path d="M4 14v-2a8 8 0 0116 0v2"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/>',check:'<path d="M5 12l5 5 9-10"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',chart:'<path d="M4 20V10M10 20V4M16 20v-8M2 20h20"/>'};

document.querySelectorAll("[data-ic]").forEach(function(e){e.innerHTML='<svg viewBox="0 0 24 24">'+IC[e.getAttribute("data-ic")]+'</svg>'});
document.querySelectorAll("[data-ic-raw]").forEach(function(e){e.innerHTML=IC[e.getAttribute("data-ic-raw")]});
function slug(n){return n.toLowerCase().replace(/[^a-z]+/g,"")}
function mock(e){return '<div class="mock" style="--a:'+e[2]+'"><div class="bar"><i></i><i></i><i></i><b>🔒 https://'+e[1]+'</b></div><div class="scr"><div class="hd"><h4>'+e[3]+'</h4><span>'+e[4]+'</span></div><div class="ln"><em></em><em></em><em></em></div></div></div>'}
var f=$("f");
function renderBiz(i){var b=BIZ[i];$("pv").innerHTML=mock([b[0],slug(b[0])+".co.za",b[2+1],b[1],b[2]]);var bt=$("pvBtn");bt.textContent="Get a "+b[0].toLowerCase()+" website";
if(SPA)bt.setAttribute("data-biz",b[0]);else bt.href="buy.html?plan=rent&biz="+encodeURIComponent(b[0]);
document.querySelectorAll(".chip").forEach(function(c){var on=+c.getAttribute("data-i")===i;c.classList.toggle("on",on);c.setAttribute("aria-pressed",on)})}
if($("chips")){$("chips").innerHTML=BIZ.map(function(b,i){return '<button type="button" class="chip" data-i="'+i+'" aria-pressed="false">'+b[0]+'</button>'}).join("");renderBiz(0)}
document.querySelectorAll(".addons").forEach(function(g){g.innerHTML=ADD.map(function(a){return '<div class="card addon"><h4>'+a[0]+'</h4><p>'+a[1]+'</p><b>'+a[2]+'</b></div>'}).join("")});
if(f){$("ax").innerHTML=ADD.map(function(a){return '<label class="pc"><input type="checkbox" name="ax" value="'+a[0]+'" data-t="'+a[3]+'" data-a="'+a[4]+'"><span class="tick">✓</span><h3>'+a[0]+'</h3><div class="pr sm">'+a[2]+'</div><p>'+a[1]+'</p></label>'}).join("");
f.querySelector("[name=biz]").innerHTML=BIZ.map(function(b){return "<option>"+b[0]+"</option>"}).join("")+"<option>Other</option>"}
function applyOpts(o){if(!f)return;var cf=f.querySelector("[name=callfirst]");
if(o.note)f.querySelector("[name=about]").value=o.note;if(o.biz)f.querySelector("[name=biz]").value=o.biz;
if(o.plan==="rent"){f.querySelector("input[name=pk]").checked=true;cf.checked=false}if(o.plan==="consult")cf.checked=true;
if(o.mk){var r=f.querySelector("input[name=mk][value="+o.mk+"]");if(r){r.checked=true;cf.checked=false}}}
if(f&&!SPA){var q=new URLSearchParams(location.search);applyOpts({plan:q.get("plan"),mk:q.get("mk"),biz:q.get("biz"),note:q.get("note")})}
function money(n){return "R"+n.toLocaleString("en-US",{minimumFractionDigits:n%1?2:0,maximumFractionDigits:2})}
function r2(n){return Math.round(n*100)/100}
function per(n){return n===1?"month":n+" months"}
function setPk(k,on){if(k==="rent")f.querySelector("input[name=pk]").checked=on;else if(k==="mk")f.querySelector("input[name=mk][value='']").checked=true;else if(k.indexOf("mk:")===0){var r=f.querySelector("input[name=mk][value="+k.slice(3)+"]");if(r)r.checked=true}else{[].slice.call(f.querySelectorAll("input[name=ax]")).forEach(function(x){if(x.value===k)x.checked=on})}}
function calcOrder(){var mv=f.querySelector("input[name=months]:checked"),o={items:[],fees:[],addons:[],m:0,o:0,mk:"",months:mv?+mv.value:1,call:f.querySelector("[name=callfirst]").checked,rent:f.querySelector("input[name=pk]").checked};
function add(n,m,on,k){o.items.push({n:n,m:m,o:on,k:k});o.m+=m;o.o+=on}
if(o.rent)add("Rent a website",350,0,"rent");
var mk=f.querySelector("input[name=mk]:checked");if(mk&&mk.value){o.mk=mk.value;add("Social media marketing ("+mk.value+")",+mk.getAttribute("data-m"),+mk.getAttribute("data-o"),"mk")}
[].slice.call(f.querySelectorAll("input[name=ax]:checked")).forEach(function(i){var t=i.getAttribute("data-t"),a=+i.getAttribute("data-a");o.addons.push(i.value);if(t==="f")o.fees.push(i.value+" ("+money(a)+")");else add(i.value,t==="m"?a:0,t==="o"?a:0,i.value)});
o.count=o.items.length;o.rate=[0,0,.1,.2,.3,.4][Math.min(o.count,5)];
o.dm=r2(o.m*(1-o.rate));o.dn=r2(o.o*(1-o.rate));o.rec=r2(o.dm*o.months);o.today=r2(o.rec+o.dn);o.save=r2(o.m*o.months+o.o-o.today);return o}
var REC=["Google Business Profile","Business email","Logo and brand kit","Company profile","Meta ads setup","Google Ads setup"];
function nudge(o){var el=$("nd");if(o.call){el.hidden=true;return}el.hidden=false;
if(!o.count){el.innerHTML='<p><b>Tip:</b> start with a website, then add extras. Every extra package unlocks a bigger discount, up to 40%.</p><button type="button" class="btn" data-add="rent">Add a website</button>';return}
if(o.count>=5){el.innerHTML='<p><b>Maximum discount unlocked.</b> You are saving 40% on your bundle.</p>';return}
var nx=Math.round([0,0,.1,.2,.3,.4][o.count+1]*100),c=null;
if(!o.rent)c=["rent","Rent a website (R350/month)"];else for(var i=0;i<REC.length;i++){if(o.addons.indexOf(REC[i])<0){var a=ADD.filter(function(x){return x[0]===REC[i]})[0];c=[REC[i],REC[i]+" ("+a[2]+")"];break}}
if(!c&&!o.mk)c=["mk:Starter","Social media marketing, Starter (R2,950/month)"];
el.innerHTML='<p>Add <b>1 more package</b> and your discount rises to <b>'+nx+'%</b>.'+(c?' Try: '+c[1]+'.':'')+'</p>'+(c?'<button type="button" class="btn" data-add="'+c[0]+'">Add it</button>':'')}
function sum(){if(!f)return;var o=calcOrder(),h="",pct=Math.round(o.rate*100);
o.items.forEach(function(i){var p=[];if(i.m)p.push(money(i.m)+"/mo");if(i.o)p.push(money(i.o)+" once-off");h+='<div><dt>'+i.n+'</dt><dd>'+p.join(" + ")+' <button type="button" class="rm" data-k="'+i.k+'" aria-label="Remove '+i.n+'">×</button></dd></div>'});
if(o.rate)h+='<div><dt>Bundle discount ('+o.count+' packages)</dt><dd class="save">'+pct+'% off</dd></div>';
$("sL").innerHTML=h;$("go").textContent=(o.call||!o.count)?"Send my request":"Continue to secure payment";
document.querySelectorAll("#lad i").forEach(function(el){el.classList.toggle("on",o.count>=+el.getAttribute("data-n"))});
var tot,note;
if(!o.count){tot=o.call?"Free call":"–";note=o.call?"Tell us what you need and we will be in touch.":"Choose at least one package to see your price. Add more packages to unlock a discount of 10% to 40%."}
else if(o.call){tot="Free call first";note="No payment now. Your package choices are sent with your request."}
else{tot="Due today "+money(o.today);note=o.rec?"Then "+money(o.rec)+" every "+per(o.months)+", collected automatically.":"";if(o.save>0)note+=" You save "+money(o.save)+".";if(o.fees.length)note+=" "+o.fees.join(", ")+" is billed separately.";note=note.trim()}
$("sT").textContent=tot;$("sN").textContent=note;
$("sbT").textContent=o.count&&!o.call?"Due today "+money(o.today):(o.call?"Free call":"Choose a package");$("sbL").textContent=o.count?o.count+" package"+(o.count>1?"s":"")+(o.rate?" · "+pct+"% off":""):"Your order";
nudge(o);
var need=o.call||!o.count?["name","email","phone"]:["name","idn","business","email","phone"],fl=need.every(function(k){return String(f.querySelector("[name="+k+"]").value).trim()}),d4=fl&&(o.call||!o.count||f.querySelector("input[name=agree]").checked),dn=[o.count>0,o.addons.length>0,o.count>0||o.call,d4];
dn.forEach(function(v,i){$("s"+(i+1)).classList.toggle("done",v)});$("pb").style.width=dn.filter(Boolean).length*25+"%"}
if(f){f.addEventListener("change",sum);f.addEventListener("input",sum);
f.addEventListener("submit",function(e){e.preventDefault();var d=new FormData(f),err=$("err"),o=calcOrder(),consult=o.call||!o.count;
var need=consult?["name","email","phone"]:["name","idn","business","email","phone"];
if(!need.every(function(k){return String(d.get(k)||"").trim()})){err.textContent=consult?"Please fill in your name, email and phone number.":"Please fill in your name, ID number, company name, email and phone number.";return}
if(!consult&&!f.querySelector("input[name=agree]").checked){err.textContent="Please accept the terms to continue.";return}err.textContent="";
var det={rent:o.rent,marketing:o.mk,addons:o.addons,months:o.months,biz:d.get("biz")};["name","idn","business","reg","email","phone","domain","about"].forEach(function(k){det[k]=d.get(k)||""});
if(!consult&&CONFIG.checkoutUrl){var b=$("go");b.disabled=true;b.textContent="Connecting to PayFast…";
fetch(CONFIG.checkoutUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(det)}).then(function(r){return r.json()}).then(function(j){var pf=document.createElement("form");pf.method="POST";pf.action=j.url;j.fields.forEach(function(kv){var i=document.createElement("input");i.type="hidden";i.name=kv[0];i.value=kv[1];pf.appendChild(i)});document.body.appendChild(pf);pf.submit()}).catch(function(){b.disabled=false;b.textContent="Continue to secure payment";err.textContent="Payment could not start. Please try again or WhatsApp us on "+CONFIG.phone+"."});return}
var msg=(consult?"Free call request":"New order (due today "+money(o.today)+(o.rec?", then "+money(o.rec)+" every "+per(o.months):"")+")")+"\nPackages: "+(o.items.map(function(i){return i.n}).join(", ")||"None")+(o.rate?"\nBundle discount: "+Math.round(o.rate*100)+"%":"")+(o.fees.length?"\nBilled separately: "+o.fees.join(", "):"")+"\nPaying: every "+per(o.months)+"\nBusiness type: "+det.biz+"\nName: "+det.name+"\nID number: "+(det.idn||"-")+"\nCompany: "+(det.business||"-")+"\nReg number: "+(det.reg||"-")+"\nEmail: "+det.email+"\nPhone: "+det.phone+"\nDomain: "+(det.domain||"-")+"\nDetails: "+(det.about||"-")+"\nTerms accepted: "+(consult?"n/a":"Yes");
var old=f.querySelector(".ok");if(old)old.remove();f.insertAdjacentHTML("beforeend",'<div class="ok">Your request is ready. <a href="https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(msg)+'" target="_blank" rel="noopener">Tap here to send it to us on WhatsApp</a> and we will '+(consult?"call you.":"send your secure payment link.")+'</div>')});
if($("sbGo"))$("sbGo").addEventListener("click",function(){var o=calcOrder(),t=o.count?$("dt"):$("pk1");try{t.scrollIntoView({behavior:"smooth"})}catch(x){}})}
var cfm=$("careerForm");
if(cfm){cfm.addEventListener("submit",function(e){e.preventDefault();var d=new FormData(cfm),er=$("cerr");
if(!["cname","cemail","cmsg"].every(function(k){return String(d.get(k)||"").trim()})){er.textContent="Please fill in your name, your email and a short message about yourself.";return}
er.textContent="";var role=d.get("crole");
var body="Name: "+d.get("cname")+"\nEmail: "+d.get("cemail")+"\nPhone: "+(d.get("cphone")||"-")+"\nRole: "+role+"\nCV or portfolio link: "+(d.get("clink")||"-")+"\n\nAbout me:\n"+d.get("cmsg")+"\n\n(Please attach your CV to this email.)";
var url="mailto:"+CONFIG.email+"?subject="+encodeURIComponent("Job application: "+role+" - "+d.get("cname"))+"&body="+encodeURIComponent(body);
$("cmail").innerHTML='Your email app should open with your application ready. Attach your CV and press send. If nothing opens, <a id="mailLink" href="'+url+'">tap here</a> or email '+CONFIG.email+'.';
try{window.location.href=url}catch(x){}})}
var anchor=null;
function show(id){id=id||(location.hash||"#home").slice(1);if(!$("p-"+id))id="home";
document.querySelectorAll(".page").forEach(function(p){p.hidden=p.id!=="p-"+id});
$("hdr").classList.remove("open");document.body.setAttribute("data-page",id);
$("hdr").innerHTML='<div class="wrap"><nav class="nav" aria-label="Main"><a class="logo" href="#home" aria-label="'+CONFIG.brand+' home">'+CONFIG.brand+'</a><a class="btn navbuy" href="#buy">Buy now</a><button type="button" class="burger" aria-label="Menu" aria-expanded="false"><span></span></button><div class="links">'+pages.map(function(p){return '<a href="#'+p[0]+'"'+(p[0]===id?' aria-current="page"':'')+'>'+p[1]+'</a>'}).join("")+'<a class="btn" href="#buy"'+(id==="buy"?' aria-current="page"':'')+'>Buy now</a></div></nav></div>';
document.title=CONFIG.brand;setTimeout(reveal,1500);
if(anchor){var el=$(anchor);anchor=null;if(el){try{el.scrollIntoView()}catch(x){}return}}window.scrollTo(0,0)}
document.addEventListener("click",function(e){var ch=e.target.closest(".chip");if(ch){renderBiz(+ch.getAttribute("data-i"));return}
var bg=e.target.closest(".burger");if(bg){var tp=$("hdr");tp.classList.toggle("open");bg.setAttribute("aria-expanded",tp.classList.contains("open"));return}
var rm=e.target.closest(".rm");if(rm){setPk(rm.getAttribute("data-k"),false);sum();return}
var ad=e.target.closest("[data-add]");if(ad){setPk(ad.getAttribute("data-add"),true);sum();return}
if(!SPA)return;var a=e.target.closest("a[href^='#']");if(!a)return;
applyOpts({plan:a.getAttribute("data-plan"),mk:a.getAttribute("data-mk"),biz:a.getAttribute("data-biz"),note:a.getAttribute("data-note")});sum();
anchor=a.getAttribute("data-anchor");e.preventDefault();var gid=a.getAttribute("href").slice(1);show(gid);try{history.replaceState(null,"","#"+gid)}catch(x){}});
if(SPA)window.addEventListener("hashchange",function(){show()});
function reveal(){document.querySelectorAll(".rv:not(.in)").forEach(function(el){if(el.offsetParent!==null)el.classList.add("in")})}
function countUp(el){var to=+el.getAttribute("data-count"),t0=null;function fr(t){t0=t0||t;var p=Math.min(1,(t-t0)/1400);el.textContent=Math.round(to*(1-Math.pow(1-p,3))).toLocaleString("en-US");if(p<1)requestAnimationFrame(fr)}requestAnimationFrame(fr)}
try{var calm=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
if("IntersectionObserver"in window&&!calm){
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){var t=x.target;t.classList.add("in");io.unobserve(t);setTimeout(function(){t.style.transitionDelay=""},1000)}})},{threshold:.12});
document.querySelectorAll(".card,.tile,.dark-band,table,details,.pagehead p").forEach(function(el,i){el.classList.add("rv");el.style.transitionDelay=(i%4)*70+"ms";io.observe(el)});
var io2=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){countUp(x.target);io2.unobserve(x.target)}})},{threshold:.5});document.querySelectorAll("[data-count]").forEach(function(el){io2.observe(el)})}}catch(x){}
if(SPA)show();sum();setTimeout(reveal,2500);
