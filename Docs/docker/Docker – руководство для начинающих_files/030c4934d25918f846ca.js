/*! default */
pcodeJsonp3334([3],{438:function(t,e,r){"use strict";function n(t){this._queue=t}var i=r(120),o=r(55),a=r(432),s=r(439),c=r(442),d=r(435),u=r(209),_=r(170);n.prototype={_blocks:{},render:function(t,e){var r=o.protect("Internal._loadData",function(r){this._render(t,e,r)},this);Ya.Context._asyncModeOn?this._loadByQueue(t,r):this._loadData(t,r),d.hitOnce(t.pageId,t.bundle)},_loadData:function(t,e){a.loadDirect({testtag:_.getDirect({adfoxexp:t.adfoxexp}),pageId:t.pageId,grab:t.grab,lang:t.lang,geo:t.geo},function(r){(0,i.saveGloballyIsSSP)(t.bundle,r),e(r)})},_loadByQueue:function(t,e){var r=this;this._queue.add(function(n){var i=function(t){e(t),n()};r._loadData(t,i)})},_render:function(t,e,r){return this._blocks[t.renderTo]&&(this._blocks[t.renderTo].destructor(),this._blocks[t.renderTo]=null),r&&r[t.internalType]?(this._blocks[t.renderTo]=this._createBlock(t,r),void(this._blocks[t.renderTo]&&(this._blocks[t.renderTo].render(),"function"==typeof t.onRender&&t.onRender({product:t.product,blockType:t.internalType})))):void(e||u)()},_createBlock:function(t,e){var r=new c({data:e,type:t.internalType,clickMacro:t.clickMacro});return new s(r,t.renderTo,t.blockId,t.internalType,t.cspNonce)}},t.exports=n},439:function(t,e,r){"use strict";var n=r(49),i=r(390),o=r(357),a=o(r(203)),s=o(r(440)),c=r(42),d=r(14);t.exports=n.augment(i,{template:r(441).internal,advs:[],constructor:function(t,e,r,i,o){this.blockId=r,this.renderTo=n.dom.querySelector("#"+e),this._mainContId="yap-"+this.blockId,this.dataSource=t,this._type=i,this._nonce=o},render:function(t){if(this.renderTo){this.insertCSS(this._getCss());var e=this.template({id:this._mainContId,type:this._type,html:this.dataSource.getHtml()});c.innerHTML(this.renderTo,e),this._runScripts(),this.dataSource.onConfirmVisibility(),d(t)&&t()}},_runScripts:function(){var t=n.dom.querySelector("script",this.renderTo);n.each(t,function(t){var e=t.parentNode,r=document.createElement("script");r.text=t.text,this._nonce&&r.setAttribute("nonce",this._nonce),e.removeChild(t),e.appendChild(r)},this)},_getCss:function(){var t={id:this._mainContId};return a(t)+s(t)}})},440:function(module,exports){module.exports=function(obj){var p=[];with(obj)p.push(".",id," .yap-internal{overflow:hidden !important}");return p.join("")}},441:function(module,exports,__webpack_require__){var util=__webpack_require__(49),Const=__webpack_require__(70),env=__webpack_require__(55),getString=__webpack_require__(91)["default"],templates={internal:function(obj){var p=[];with(obj)p.push('<yatag class="',id,' yap-reset" id="',id,'"><yatag class="yap-internal yap-internal_type_',type,'">',html,"</yatag></yatag>");return p.join("")}};module.exports=templates},442:function(t,e,r){"use strict";var n=r(49),i=r(76),o=r(181),a=r(70),s=r(155),c=r(170);t.exports=n.augment(s,{constructor:function(t){this._data=t.data,this._type=t.type,this._banner=this._data[this._type]},getHtml:function(){return this._banner.html},onConfirmVisibility:function(){var t=new i({host:this.getLinkHead()+this._banner.linkTail,params:{"test-tag":c.getDirect({format:o.getFormatByName(a.BlockTypes.INTERNAL).index}),wmode:0}});(new Image).src=t.getUrl()}})},444:function(t,e,r){"use strict";function n(){this._reset()}var i=r(49),o=r(76),a=["https://yasta","tic.net/awaps-ad-sdk-","js/1_0/inpage.js"].join(""),s=["https://betas","tatic.yastat","ic.net/awaps-ad-sdk-","js/1_0/inpage.js"].join("");n.prototype={render:function(t,e,r){var n=this._prepareConfig(t,e,r);this._isReady?this._render(n):(this._loader||(this._isBeta=e.beta,this._init()),this._queue.push(n))},_prepareConfig:function(t,e,r){return e.partnerId=t.partnerId,e.category=t.category,{renderTo:t.renderTo,userProps:e,callback:r}},_reset:function(){this._queue=[],this._onLoadDescriptor=null,this._onErrorDescriptor=null},_init:function(){this._loader=i.dom.addScript(this._getLoaderUrl()),this._onLoadDescriptor=i.domEvent.on(this._loader,"load",this._renderQueue,this,{once:!0}),this._onErrorDescriptor=i.domEvent.on(this._loader,"error",this._reportError,this,{once:!0})},_getLoaderUrl:function(){var t=new o({host:this._isBeta?s:a});return t.appendParams({rand:i.genRnd()}),t.getUrl()},_renderQueue:function(){this._isReady=!0,i.each(this._queue,this._render,this),this._onErrorDescriptor.un(),this._reset()},_render:function(t){window.ya.mediaAd.inPage.addInPageVideo(t.renderTo,t.userProps,t.callback)},_reportError:function(t){i.each(this._queue,function(e){"function"==typeof e.callback&&e.callback(t)},this),this._onLoadDescriptor.un(),this._reset(),this._removeLoader()},_removeLoader:function(){i.dom.remove(this._loader),delete this._loader}},t.exports=n},446:function(t,e){"use strict";t.exports={}}});