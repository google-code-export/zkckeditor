(function(){function a(k,j,d){var f=k.join(" ");f=f.replace(/(,|>|\+|~)/g," ");f=f.replace(/\[[^\]]*/g,"");f=f.replace(/#[^\s]*/g,"");f=f.replace(/\:{1,2}[^\s]*/g,"");f=f.replace(/\s+/g," ");var g=f.split(" "),h=[];for(var e=0;e<g.length;e++){var c=g[e];if(d.test(c)&&!j.test(c)){if(CKEDITOR.tools.indexOf(h,c)==-1){h.push(c)}}}return h}function b(d,c,f){var r=[],p=[],o;for(o=0;o<d.styleSheets.length;o++){var q=d.styleSheets[o],k=q.ownerNode||q.owningElement;if(k.getAttribute("data-cke-temp")){continue}if(q.href&&q.href.substr(0,9)=="chrome://"){continue}var h=q.cssRules||q.rules;for(var m=0;m<h.length;m++){p.push(h[m].selectorText)}}var l=a(p,c,f);for(o=0;o<l.length;o++){var e=l[o].split("."),n=e[0].toLowerCase(),g=e[1];r.push({name:n+"."+g,element:n,attributes:{"class":g}})}return r}CKEDITOR.plugins.add("stylesheetparser",{requires:["styles"],onLoad:function(){var c=CKEDITOR.editor.prototype;c.getStylesSet=CKEDITOR.tools.override(c.getStylesSet,function(d){return function(f){var e=this;d.call(this,function(h){var i=e.config.stylesheetParser_skipSelectors||(/(^body\.|^\.)/i),g=e.config.stylesheetParser_validSelectors||(/\w+\.\w+/);f((e._.stylesDefinitions=h.concat(b(e.document.$,i,g))))})}})}})})();