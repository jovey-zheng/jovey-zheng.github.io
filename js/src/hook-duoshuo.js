function hookTemplate(){var i=DUOSHUO.templates.post;DUOSHUO.templates.post=function(o,e){var a=i(o,e),s=o.post.agent,n=o.post.author.user_id,r="";return n&&n==CONFIG.duoshuo.userId&&(r='<span class="duoshuo-ua-admin">'+CONFIG.duoshuo.author+"</span>"),s&&/^Mozilla/.test(s)&&(a=a.replace(/<\/div><p>/,r+getAgentInfo(s)+"</div><p>")),a}}function getAgentInfo(o){$.ua.set(o);var e,a,s,n,r=$.ua,i=(s=null!==(a=window.navigator.userAgent).match(/iPad/i),n=new RegExp(["iphone","android","phone","mobile","wap","netfront","x11","java","opera mobi","opera mini","ucweb","windows ce","symbian","symbianos","series","webos","sony","blackberry","dopod","nokia","samsung","palmsource","xda","pieplus","meizu","midp","cldc","motorola","foma","docomo","up.browser","up.link","blazer","helio","hosin","huawei","novarra","coolpad","webos","techfaith","palmsource","alcatel","amoi","ktouch","nexian","ericsson","philips","sagem","wellcom","bunjalloo","maui","smartphone","iemobile","spice","bird","zte-","longcos","pantech","gionee","portalmmm","jig browser","hiptop","benq","haier","^lct","320x320","240x320","176x220"].join("|"),"i"),!s&&a.match(n)?"<br><br>":'<span class="duoshuo-ua-separator"></span>'),t=r.os.name||"Unknown",p=r.os.version||"Unknown",u=r.browser.name||"Unknown",l=r.browser.version||"Unknown",m={os:{android:"android",linux:"linux",windows:"windows",ios:"apple","mac os":"apple",unknown:"desktop"},browser:{chrome:"chrome",chromium:"chrome",firefox:"firefox",opera:"opera",safari:"safari",ie:"internet-explorer",wechat:"wechat",qq:"qq",unknown:"globe"}},c=m.os[t.toLowerCase()],h=m.browser[(e=u.toLowerCase(),e.match(/WeChat/i)?"wechat":e.match(/QQBrowser/i)?"qq":e)];return i+'<span class="duoshuo-ua-platform duoshuo-ua-platform-'+t.toLowerCase()+'"><i class="fa fa-'+c+'"></i>'+t+" "+p+"</span>"+i+'<span class="duoshuo-ua-browser duoshuo-ua-browser-'+u.toLowerCase()+'"><i class="fa fa-'+h+'"></i>'+u+" "+l+"</span>"}"undefined"!=typeof DUOSHUO?hookTemplate():$("#duoshuo-script")[0].onload=hookTemplate;