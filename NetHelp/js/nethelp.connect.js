(function(n){var f={meta:[],css:["nethelp.css"],js:["jquery.js","jquery-ui.js","nethelp.js"]},t=document.getElementsByTagName("script"),l,h;t=t[t.length-1];var o=t.getAttribute("data-js")||/^(.*\/)?[^\/]*$/.exec(t.getAttribute("src"))[1],a=/(^|\/)js\/$/i.test(o)?o.replace(/js\/$/i,""):o+"../",c=t.getAttribute("data-css")||a+"css/",y=t.getAttribute("data-themes")||a+"themes/",w=t.getAttribute("data-docs")||n,g=t.getAttribute("data-settings")||a+"settings.xml",k=t.getAttribute("data-placeholder")||'[data-c1-role="nethelp"], body',p=t.getAttribute("data-start")||n,b=/true/i.test(t.getAttribute("data-topiconly")),d=/true/i.test(t.getAttribute("data-istopic")),nt=/true/i.test(t.getAttribute("data-mobile")),v=/true/i.test(t.getAttribute("data-manual")),s=/false/i.test(t.getAttribute("data-cache")),e,r,i,u;nt&&(f.js.push("jquery.mobile.js"),f.js.push("nethelp.mobile.js"),f.css=["nethelp.mobile.css"],v=!0,/msie/ig.test(navigator.userAgent)||(l=document.createElement("base"),h=document.getElementsByTagName("head")[0],l.setAttribute("href",""),h.insertBefore(l,h.childNodes[Math.min(h.childNodes.length-1,2)])));for(e in f.meta){i=f.meta[e],u="<meta ";for(r in i)u+=r+'="'+i[r]+'" ';document.write(u+"/>")}for(e in f.css){if(i=f.css[e],u='<link type="text/css" rel="stylesheet" ',typeof i=="object")for(r in i)u+=r+'="'+(r==="href"?c:"")+i[r]+(r==="href"&&s?"?r="+ +new Date:"")+'" ';else u+='href="'+c+i+(s?"?r="+ +new Date:"")+'" ';document.write(u+"/>")}for(e in f.js){if(i=f.js[e],u='<script type="text/javascript"',typeof i=="object")for(r in i)u+=" "+r+'="'+(r==="src"?o:"")+i[r]+(r==="src"&&s?"?r="+ +new Date:"")+'"';else u+=' src="'+o+i+(s?"?r="+ +new Date:"")+'"';document.write(u+"><\/script>")}window.nethelpOptions={paths:{js:o,css:c,themes:y,docs:w},autostart:!v,settings:g,placeholder:k,start:p,topiconly:b,istopic:d,disableCache:s}})()