(function(){function c(f,h){var g=h.block||h.blockLimit;if(!g||g.getName()=="body"){return CKEDITOR.TRISTATE_OFF}return(e(g,f.config.useComputedState)==this.value)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF}function e(g,f){f=f===undefined||f;var i;if(f){i=g.getComputedStyle("text-align")}else{while(!g.hasAttribute||!(g.hasAttribute("align")||g.getStyle("text-align"))){var h=g.getParent();if(!h){break}g=h}i=g.getStyle("text-align")||g.getAttribute("align")||""}i&&(i=i.replace(/-moz-|-webkit-|start|auto/i,""));!i&&f&&(i=g.getComputedStyle("direction")=="rtl"?"right":"left");return i}function d(f){if(f.editor.readOnly){return}var g=f.editor.getCommand(this.name);g.state=c.call(this,f.editor,f.data.path);g.fire("state")}function b(h,f,i){this.name=f;this.value=i;var g=h.config.justifyClasses;if(g){switch(i){case"left":this.cssClassName=g[0];break;case"center":this.cssClassName=g[1];break;case"right":this.cssClassName=g[2];break;case"justify":this.cssClassName=g[3];break}this.cssClassRegex=new RegExp("(?:^|\\s+)(?:"+g.join("|")+")(?=$|\\s)")}}function a(k){var i=k.editor;var f=new CKEDITOR.dom.range(i.document);f.setStartBefore(k.data.node);f.setEndAfter(k.data.node);var l=new CKEDITOR.dom.walker(f),j;while((j=l.next())){if(j.type==CKEDITOR.NODE_ELEMENT){if(!j.equals(k.data.node)&&j.getDirection()){f.setStartAfter(j);l=new CKEDITOR.dom.walker(f);continue}var g=i.config.justifyClasses;if(g){if(j.hasClass(g[0])){j.removeClass(g[0]);j.addClass(g[2])}else{if(j.hasClass(g[2])){j.removeClass(g[2]);j.addClass(g[0])}}}var h="text-align";var m=j.getStyle(h);if(m=="left"){j.setStyle(h,"right")}else{if(m=="right"){j.setStyle(h,"left")}}}}}b.prototype={exec:function(m){var p=m.getSelection(),o=m.config.enterMode;if(!p){return}var g=p.createBookmarks(),f=p.getRanges(true);var q=this.cssClassName,l,j;var h=m.config.useComputedState;h=h===undefined||h;for(var k=f.length-1;k>=0;k--){l=f[k].createIterator();l.enlargeBr=o!=CKEDITOR.ENTER_BR;while((j=l.getNextParagraph(o==CKEDITOR.ENTER_P?"p":"div"))){j.removeAttribute("align");j.removeStyle("text-align");var n=q&&(j.$.className=CKEDITOR.tools.ltrim(j.$.className.replace(this.cssClassRegex,"")));var r=(this.state==CKEDITOR.TRISTATE_OFF)&&(!h||(e(j,true)!=this.value));if(q){if(r){j.addClass(q)}else{if(!n){j.removeAttribute("class")}}}else{if(r){j.setStyle("text-align",this.value)}}}}m.focus();m.forceNextSelectionCheck();p.selectBookmarks(g)}};CKEDITOR.plugins.add("justify",{init:function(i){var j=new b(i,"justifyleft","left"),f=new b(i,"justifycenter","center"),h=new b(i,"justifyright","right"),g=new b(i,"justifyblock","justify");i.addCommand("justifyleft",j);i.addCommand("justifycenter",f);i.addCommand("justifyright",h);i.addCommand("justifyblock",g);i.ui.addButton("JustifyLeft",{label:i.lang.justify.left,command:"justifyleft"});i.ui.addButton("JustifyCenter",{label:i.lang.justify.center,command:"justifycenter"});i.ui.addButton("JustifyRight",{label:i.lang.justify.right,command:"justifyright"});i.ui.addButton("JustifyBlock",{label:i.lang.justify.block,command:"justifyblock"});i.on("selectionChange",CKEDITOR.tools.bind(d,j));i.on("selectionChange",CKEDITOR.tools.bind(d,h));i.on("selectionChange",CKEDITOR.tools.bind(d,f));i.on("selectionChange",CKEDITOR.tools.bind(d,g));i.on("dirChanged",a)},requires:["domiterator"]})})();