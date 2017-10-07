/* ---------------------------------
   Simple:Press Forum - Version 3.1
   Base Javascript
------------------------------------ */

/* ----------------------------------*/
/* General Forum Validation		     */
/* ----------------------------------*/

function sfjvalidatePMForm(theForm, editor, msg0, msg1, msg2, msg3)
{
	var reason = "";
	reason += sfjvalidateThis(theForm.pmtoidlist, " - " + msg1);
	reason += sfjvalidateThis(theForm.pmtitle, " - " + msg2);
	if(editor == 'QT')
	{
		reason += sfjvalidateThis(theForm.newpmpost, " - " + msg3);
	} else {
		reason += sfjvalidateTiny('newpmpost', " - " + msg3);
	}
	if (reason != "") 

	{
		var target = document.getElementById('sfvalid');
		target.innerHTML = "<br />" + msg0 + ":<br /><br />" + reason + "<br /><br />";
		var box = hs.htmlExpand(document.getElementById('sfsave'), {contentId: 'my-content', preserveContent: false});
		return false;
	}
	return true;
}

function sfjvalidatePostForm(theForm, editor, msg0, msg1, msg2, msg3, msg4, msg5)
{
	var reason = "";
	if(msg1 != '') reason += sfjvalidateThis(theForm.guestname, " - " + msg1);
	if(msg2 != '') reason += sfjvalidateThis(theForm.guestemail, " - " + msg2);
	if(msg3 != '') reason += sfjvalidateThis(theForm.newtopicname, " - " + msg3);
	if(msg4 != '') reason += sfjvalidateThis(theForm.sfvalue1, " - " + msg4);
	if(editor == 'QT')
	{
		if(msg5 != '') reason += sfjvalidateThis(theForm.newtopicpost, " - " + msg5);
	} else {
		if(msg5 != '') reason += sfjvalidateTiny('newtopicpost', " - " + msg5);
	}

	if (reason != "") 
	{
		var target = document.getElementById('sfvalid');
		target.innerHTML = "<br />" + msg0 + ":<br /><br />" + reason + "<br /><br />";
		var box = hs.htmlExpand(document.getElementById('sfsave'), {contentId: 'my-content', preserveContent: false});

		return false;
	}
	return true;
}

function sfjvalidateThis(theField, errorMsg)
{
	var error = "";
	if (theField.value.length == 0) 
	{
		error = "<strong>" + errorMsg + "</strong><br />";
	}
	return error;
}

function sfjvalidateTiny(thisField, errorMsg)
{
	var error = "";
	var stuff = tinyMCE.get(thisField).getContent();
	if(stuff == '')
	{
		error = "<strong>" + errorMsg + "</strong><br />";
	}
	return error;
}

/* ----------------------------------*/
/* Display Users Email Address       */
/* ----------------------------------*/

function sfjshowUserMail(label, address, id)
{
	var param1 = 'sfmail'+id;
	var param2 = 'mail-content'+id;
	var param3 = 'sfshowmail'+id;
	
	var target = document.getElementById(param1);
	target.innerHTML = label + "<br />" + address;
	var box = hs.htmlExpand(document.getElementById(param3), {contentId: param2});
}


function sfjshowPostLink(label, url, id)
{
	var param1 = 'sfpostlink'+id;
	var param2 = 'link-content'+id;
	var param3 = 'sfshowlink'+id;
	
	var target = document.getElementById(param1);
	target.innerHTML = label + "<br /><p>" + url + "</p>";
	var box = hs.htmlExpand(document.getElementById(param3), {contentId: param2});
}

/* ----------------------------------*/
/* Open and Close of hidden divs     */
/* ----------------------------------*/

function sfjtoggleLayer(whichLayer)
{
	if (document.getElementById)
	{
		var style2 = document.getElementById(whichLayer).style;
		style2.display = style2.display? "":"block";
	}
		else if (document.all)
	{
		var style2 = document.all[whichLayer].style;
		style2.display = style2.display? "":"block";
	}
		else if (document.layers)
	{
		var style2 = document.layers[whichLayer].style;
		style2.display = style2.display? "":"block";
	}
	var obj = document.getElementById(whichLayer);
	if (whichLayer == 'sfpostform')
	{
		obj.scrollIntoView(top);
	}
}

/* ----------------------------------*/
/* Quote Post insertion              */
/* ----------------------------------*/

function sfjquotePost(postid, intro, rte)
{
	sfjtoggleLayer('sfpostform');	
	var postcontent = document.getElementById(postid).innerHTML;
	document.addpost.newtopicpost.value = '<blockquote>'+intro+postcontent+'</blockquote><hr />';

	if (rte)
	{
		tinyMCE.get('newtopicpost').getBody().innerHTML = '<blockquote>'+intro+postcontent+'</blockquote><hr /><p><br /></p>';
	}
}

/* ----------------------------------*/
/* Enable Save button on Math entry  */
/* ----------------------------------*/

function sfjsetPostButton(buttontext) 
{
	var button = document.addpost.newpost;
	button.disabled=false;
	button.value = buttontext;
}

function sfjsetTopicButton(buttontext)
{
	var button = document.addtopic.newtopic;
	button.disabled=false;
	button.value = buttontext;
}

/* ----------------------------------*/
/* Trigger redirect on drop down     */
/* ----------------------------------*/

function sfjchangeURL(menuObj)
{
	var i = menuObj.selectedIndex;
	
	if(i > 0)
	{
	if(menuObj.options[i].value != '#')
		{
			window.location = menuObj.options[i].value;
		}
	}
}

/* ----------------------------------*/
/* redirect					         */
/* ----------------------------------*/

function sfjreDirect(url)
{
	window.location = url;
}

/* ----------------------------------*/
/* post moderation and unread        */
/* ----------------------------------*/

function sfjmoderatePost(posturl, url, canRemove, postid, forumid, action)
{
	if(posturl != '' && action == 9)
	{
		window.location = posturl;
		return;
	}
	
	var modpostid = 'modp' + postid;
	var modrowid = 'modrow' + postid;
	var modpostrowid = 'modpostrow' + postid;
	var modicon = 'modicon' + postid;
	var topics = 'tcount' + forumid;
	var forum = 'modf' + forumid;
	var topicCount = document.getElementById(topics);

	topicCount.value--;

	document.getElementById(modicon).innerHTML = '';
	
	var target1 = document.getElementById(modpostrowid);
	var target2 = document.getElementById(modrowid);
	var targetf = document.getElementById(forum);

	if (navigator.appName == "Microsoft Internet Explorer")
	{
		sfjopacity(target1.style,9,0,10,function(){sfjremoveIt(target1);});
		sfjopacity(target2.style,9,0,10,function(){sfjremoveIt(target2);});
		if(topicCount.value == 0)
		{
			sfjopacity(targetf.style,9,0,10,function(){sfjremoveIt(targetf);});
		}
	} else {
		sfjopacity(target1.style,199,0,10,function(){sfjhideIt(target1);});
		sfjopacity(target2.style,199,0,10,function(){sfjhideIt(target2);});
		if(topicCount.value == 0)
		{
			sfjopacity(targetf.style,199,0,10,function(){sfjhideIt(targetf);});
		}
	}
	
	ahahRequest(url, modpostid);
	
	if(canRemove)
	{
		if(action == 1)
		{
			var counter = document.getElementById('sfunread');
		}
		if(action == 0 || action == 9)
		{
			var counter = document.getElementById('sfmod');
		}		
	
		var pcount = parseInt(counter.innerHTML);
		if(isNaN(pcount)) 
		{
			pcount = 0;
		} else {
			pcount--;
		}
		counter.style.color = '#ffffff';
		counter.innerHTML = pcount;
	}
	
	if(posturl != '')
	{
		window.location = posturl;
	}
}

function sfjremoveIt(target)
{
	target.style.height="0px";
	target.style.display="none";
}

/* ----------------------------------*/
/* Load up categories for linking    */
/* ----------------------------------*/

function sfjgetCategories(imageFile, url, checked)
{
	var cat = document.getElementById('sfcats');
	
	if(checked)
	{
		cat.style.display="block";
		cat.innerHTML = '<br /><br /><img src="' + imageFile + '" /><br />';
		ahahRequest(url, 'sfcats');
	} else {
		cat.style.display="none";
	}
}

/* ----------------------------------*/
/* Load up admins new post list      */
/* ----------------------------------*/

function sfjgetNewPostList(imageFile, url, numbersurl)
{
	// newpost counts
	var targetID = document.getElementById("sfpostnumbers");
	if(targetID != null)
	{
		var newPostsUrl = numbersurl + "?target=newposts";
		jah(newPostsUrl, 'sfpostnumbers');
	}

	var postdiv = document.getElementById('sfadminpostlist');

	postdiv.style.display = "block";
	postdiv.innerHTML = '<br /><br /><img src="' + imageFile + '" /><br />';

	jah(url, 'sfadminpostlist');
}

/* ----------------------------------*/
/* Load PM message text in inbox     */
/* ----------------------------------*/

function sfjgetPMText(imageFile, url, pmId, rowIndex)
{
	var target = 'sfpm'+pmId;
	var content = document.getElementById(target);
	var pmTable = document.getElementById('sfmainpmtable');
	
	if (content.innerHTML == '')
	{
		content.style.backgroundColor="#FFFFFF";
		content.style.color="#000000";
		content.style.border="thin dotted silver";
		content.style.margin="3px";
		content.style.padding="10px";
		content.style.visibility = 'visible';
		content.style.fontWeight = 'normal';
		content.style.overflow = "hidden";
		content.innerHTML = '<br /><br /><img src="' + imageFile + '" /><br />';
		ahahRequest(url, target);
	} 
		else
	{
		content.innerHTML = '';
		content.style.margin="0px";
		content.style.padding="0px";
		content.style.visibility = 'hidden';		
		pmTable.rows[rowIndex].setAttribute("class", "sfpmread");
	}
}

/* ----------------------------------*/
/* Send pm to selected user          */
/* ----------------------------------*/

function sfjsendPMTo(recipient, name, title, reply)
{
	var toField = document.getElementById('pmmembers');
	var titleField = document.getElementById('pmtitle');
	var isreply = document.getElementById('pmreply');

	toField.value = recipient;
	titleField.value = title;
	isreply.value = reply;
	sfjaddpmUser('pmmembers');	
	sfjtoggleLayer('sfpostform');
}

/* ----------------------------------*/
/* Delete a pm                       */
/* ----------------------------------*/

function sfjdeletePM(id, url, rowIndex)
{
	var pmTable = document.getElementById('sfmainpmtable');
	var target = pmTable.rows[rowIndex];

	if (navigator.appName == "Microsoft Internet Explorer")
	{
		sfjopacity(target.style,9,0,10,function(){sfjremoveIt(target);});
	} else {
		sfjopacity(target.style,199,0,10,function(){sfjhideIt(target);});
	}

	ahahRequest(url, 'sfdummy');
}

function sfjremovePMRow(pmTable, rowIndex)
{
	pmTable.deleteRow(rowIndex);
}

function sfjhideIt(target)
{
	target.style.visibility="collapse";
}

function sfjdeleteMassPM(url)
{
	var pmTable = document.getElementById('sfmainpmtable');

	if (navigator.appName == "Microsoft Internet Explorer")
	{
		sfjopacity(pmTable.style,9,0,10,function(){sfjremoveIt(pmTable);});
	} else {
		sfjopacity(pmTable.style,199,0,10,function(){sfjhideIt(pmTable);});
	}

	ahahRequest(url, 'sfdummy');
}

/* ----------------------------------*/
/* Select Add recipients for pm      */
/* ----------------------------------*/

function sfjaddpmUser(source)
{
	var source = document.getElementById(source);
	var targetnames = document.getElementById('pmtonamelist');
	var targetids = document.getElementById('pmtoidlist');
	var found = false;
	
	/* first entry will be blasnk first time in (HTML validation) */
//	if(targetnames.options[0].value == '')
//	{
//		targetnames.remove(targetnames.options[0]);
//	}

	for(i=targetnames.options.length-1;i>=0;i--)
	{
		if (targetnames.options[i].value == source.value)
		{
			found = true;
		}
	}
	if(!found)
	{
		var thisOption = new Option(source.options[source.selectedIndex].text, source.value, true, true);
		var positionOption = targetnames.length;
		targetnames.options[positionOption] = thisOption;
	
		if (targetids.value.length > 0)
		{
			targetids.value += ", ";
		}
		targetids.value += source.value;

		if(targetnames.options[0].value == '')
		{
			targetnames.remove(targetnames.options[0]);
		}
	}
}

/* ----------------------------------*/
/* Select Remove recipients for pm   */
/* ----------------------------------*/

function sfjremovepmUser()
{
	var targetnames = document.getElementById('pmtonamelist');
	var targetids = document.getElementById('pmtoidlist');
	var i;

	targetnames.remove(targetnames.selectedIndex);
	
	targetids.value = '';
	for(i=targetnames.options.length-1;i>=0;i--)
	{
		targetnames.options[i].selected = true;
		if (targetids.value.length > 0)
		{
			targetids.value += ", ";
		}
		targetids.value += targetnames.options[i].value;
	}
}

/* ----------------------------------*/
/* Error and Success message line    */
/* ----------------------------------*/

function sfjmDisplay()
{
	var d=document;
	var commDiv = d.getElementById('sfcomm');
	
	sfjtoggleLayer('sfcomm');
	if (navigator.appName == "Microsoft Internet Explorer")
	{
		sfjopacity(commDiv.style,99,0,10,function(){ commDiv.parentNode.removeChild(commDiv);});
	} else {
		sfjopacity(commDiv.style,399,0,10,function(){commDiv.parentNode.removeChild(commDiv);});
	}
}

function sfjopacity(ss,s,e,m,f){
	if(s>e){
		s--;
	}else if(s<e){
		s++;
	}
	sfjsetOpacity(ss,s);
	if(s!=e){
		setTimeout(function(){sfjopacity(ss,s,e,m,f);},Math.round(m/10));
	}else if(s==e){
		if(typeof f=='function'){f();}
	}
}

function sfjsetOpacity(s,o){
	s.opacity=o/100;
	s.MozOpacity=o/100;
	s.KhtmlOpacity=o/100;
	s.filter='alpha(opacity='+o+')';
}

/* ---------------------------------------*/
/* Drop Down/ Overlapping Content         */
/* © Dynamic Drive (www.dynamicdrive.com) */
/* ---------------------------------------*/

function sfjgetposOffset(sfjboxOverlay, offsettype)
{
	var totaloffset=(offsettype=="left")? sfjboxOverlay.offsetLeft : sfjboxOverlay.offsetTop;
	var parentEl=sfjboxOverlay.offsetParent;
	while (parentEl!=null)
	{
		totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
		parentEl=parentEl.offsetParent;
	}
	return totaloffset;
}

function sfjboxOverlay(curobj, subobjstr, opt_position)
{
	if (document.getElementById)
	{
		var subobj=document.getElementById(subobjstr);
		subobj.style.display=(subobj.style.display!="block")? "block" : "none";
		var xpos=sfjgetposOffset(curobj, "left")+((typeof opt_position!="undefined" && opt_position.indexOf("right")!=-1)? -(subobj.offsetWidth-curobj.offsetWidth) : 0);
		var ypos=sfjgetposOffset(curobj, "top")+((typeof opt_position!="undefined" && opt_position.indexOf("bottom")!=-1)? curobj.offsetHeight : 0);
		subobj.style.left=xpos+"px";
		subobj.style.top=ypos+"px";
		return false;
	}
		else 
	{
		return true;
	}
}

/* ----------------------------------*/
/* Announce New Post Tag             */
/* ----------------------------------*/

var oInterval;

function sfjNewPostCheck(url, target, timer)
{
	var sfInterval = window.setInterval("ahahRequest('" + url + "', '" + target + "')", timer);
}

function sfjAutoUpdate(url, timer)
{
	var sfInterval = window.setInterval("sfjperformUpdates('" + url + "')", timer);
}

function sfjperformUpdates(url)
{
	// inbox 
	var targetID = document.getElementById("sfinboxcount");
	if(targetID != null)
	{
		var inBoxUrl = url + "?target=inbox&url="+location.href;
		jah(inBoxUrl, 'sfinboxcount');
	}
	
	// newpost counts
	var targetID = document.getElementById("sfpostnumbers");
	if(targetID != null)
	{
		var newPostsUrl = url + "?target=newposts";
		jah(newPostsUrl, 'sfpostnumbers');
	}
	
	// quicklinks
	var targetID = document.getElementById("sfqlposts");
	if(targetID != null)
	{
		var quickLinksUrl = url + "?target=quicklinks";
		jah(quickLinksUrl, 'sfqlposts');
	}
}

/* ----------------------------------*/
/* jah master routines (replace ahah)*/
/* ----------------------------------*/

var jah_targets = new Array();

function jah(url,target) 
{
	if (window.XMLHttpRequest) 
	{
		var idx = jah_targets.length;
		jah_targets[idx] = new XMLHttpRequest();
		jah_targets[idx].onreadystatechange = function() {jahDone(target, idx);};
		jah_targets[idx].open("GET", url, true);
		jah_targets[idx].send(null);
	} else if (window.ActiveXObject) 
	{
		jah_targets[idx] = new ActiveXObject("Microsoft.XMLHTTP");
		if (jah_targets[idx]) 
		{
			jah_targets[idx].onreadystatechange = function() {jahDone(target);};
			jah_targets[idx].open("GET", url, true);
			jah_targets[idx].send();
		}
	}
}

function jahDone(target, idx)
{
	if (jah_targets[idx].readyState == 4)
	{
		if (jah_targets[idx].status == 200) 
		{
			results = jah_targets[idx].responseText;
			document.getElementById(target).innerHTML = results;
		} else {
			document.getElementById(target).innerHTML="Error:\n" +
			jah_targets[idx].statusText + " (status=" +
			jah_targets[idx].status + ", readyState=" +
			jah_targets[idx].readyState + ")";
		}
	}
}

/* ----------------------------------*/
/* AHAH master routines              */
/* ----------------------------------*/

function ahahRequest(url,target) {
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
        req.onreadystatechange = function() {ahahResponse(target);};
        req.open("GET", url, true);
        req.send(null);
    } else if (window.ActiveXObject) {
        req = new ActiveXObject("Microsoft.XMLHTTP");
        if (req) {
            req.onreadystatechange = function() {ahahResponse(target);};
            req.open("GET", url, true);
            req.send();
        }
    }
} 

function ahahResponse(target) {
   if (req.readyState == 4) {
       if (req.status == 200 || req.status == 304) {
           results = req.responseText;
           document.getElementById(target).innerHTML = results;
       } else {
           document.getElementById(target).innerHTML="ahah error:\n" + req.status + ' ' + req.statusText;
       }
   }
}

/* ----------------------------------*/
/* Quicktag Editor                   */
/* ----------------------------------*/

var edButtons = new Array();
var edLinks = new Array();
var edOpenTags = new Array();

function sfjedButton(id, display, tagStart, tagEnd, access, open) {
	this.id = id;				
	this.display = display;		
	this.tagStart = tagStart; 	
	this.tagEnd = tagEnd;		
	this.access = access;		
	this.open = open;			
}

function sfjzeroise(number, threshold) {
	
	var str = number.toString();
	if (number < 0) { str = str.substr(1, str.length) }
	while (str.length < threshold) { str = "0" + str }
	if (number < 0) { str = '-' + str }
	return str;
}

var now = new Date();
var datetime = now.getUTCFullYear() + '-' + 
sfjzeroise(now.getUTCMonth() + 1, 2) + '-' +
sfjzeroise(now.getUTCDate(), 2) + 'T' + 
sfjzeroise(now.getUTCHours(), 2) + ':' + 
sfjzeroise(now.getUTCMinutes(), 2) + ':' + 
sfjzeroise(now.getUTCSeconds() ,2) +
'+00:00';

edButtons[edButtons.length] = 
new sfjedButton('ed_strong'
,'b'
,'<strong>'
,'</strong>'
,'b'
);

edButtons[edButtons.length] = 
new sfjedButton('ed_em'
,'i'
,'<em>'
,'</em>'
,'i'
);

edButtons[edButtons.length] = 
new sfjedButton('ed_link'
,'link'
,''
,'</a>'
,'a'
); 

edButtons[edButtons.length] = 
new sfjedButton('ed_block'
,'quote'
,'\n\n<blockquote>'
,'</blockquote>\n\n'
,'q'
);

edButtons[edButtons.length] = 
new sfjedButton('ed_ul'
,'ul'
,'<ul>\n'
,'</ul>\n\n'
,'u'
);

edButtons[edButtons.length] = 
new sfjedButton('ed_ol'
,'ol'
,'<ol>\n'
,'</ol>\n\n'
,'o'
);

edButtons[edButtons.length] = 
new sfjedButton('ed_li'
,'li'
,'\t<li>'
,'</li>\n'
,'l'
);

edButtons[edButtons.length] = 
new sfjedButton('ed_code'
,'code'
,'<code>'
,'</code>'
,'c'
);

function sfjedLink() {
	this.display = '';
	this.URL = '';
	this.newWin = 0;
}

function sfjedShowButton(button, i) {
	if (button.id == 'ed_img') {
		document.write('<input type="button" class="qtbutton" id="' + button.id + '" accesskey="' + button.access + '" class="ed_button" onclick="edInsertImage(edCanvas);" value="' + button.display + '" />');
	}
	else if (button.id == 'ed_link') {
		document.write('<input type="button" class="qtbutton" id="' + button.id + '" accesskey="' + button.access + '" class="ed_button" onclick="sfjedInsertLink(edCanvas, ' + i + ');" value="' + button.display + '" />');
	}
	else {
		document.write('<input type="button" class="qtbutton" id="' + button.id + '" accesskey="' + button.access + '" class="ed_button" onclick="sfjedInsertTag(edCanvas, ' + i + ');" value="' + button.display + '"  />');
	}
}

function sfjedShowLinks() {
	var tempStr = '<select onchange="sfjedQuickLink(this.options[this.selectedIndex].value, this);"><option value="-1" selected>(Quick Links)</option>';
	for (i = 0; i < edLinks.length; i++) {
		tempStr += '<option value="' + i + '">' + edLinks[i].display + '</option>';
	}
	tempStr += '</select>';
	document.write(tempStr);
}

function sfjedAddTag(button) {
	if (edButtons[button].tagEnd != '') {
		edOpenTags[edOpenTags.length] = button;
		document.getElementById(edButtons[button].id).value = '/' + document.getElementById(edButtons[button].id).value;
	}
}

function sfjedRemoveTag(button) {
	for (i = 0; i < edOpenTags.length; i++) {
		if (edOpenTags[i] == button) {
			edOpenTags.splice(i, 1);
			document.getElementById(edButtons[button].id).value = document.getElementById(edButtons[button].id).value.replace('/', '');
		}
	}
}

function sfjedCheckOpenTags(button) {
	var tag = 0;
	for (i = 0; i < edOpenTags.length; i++) {
		if (edOpenTags[i] == button) {
			tag++;
		}
	}
	if (tag > 0) {
		return true; 
	}
	else {
		return false; 
	}
}

function sfjedCloseAllTags() {
	var count = edOpenTags.length;
	for (o = 0; o < count; o++) {
		sfjedInsertTag(edCanvas, edOpenTags[edOpenTags.length - 1]);
	}
}

function sfjedQuickLink(i, thisSelect) {
	if (i > -1) {
		var newWin = '';
		if (edLinks[i].newWin == 1) {
			newWin = ' target="_blank"';
		}
		var tempStr = '<a href="' + edLinks[i].URL + '"' + newWin + '>' 
		            + edLinks[i].display
		            + '</a>';
		thisSelect.selectedIndex = 0;
		sfjedInsertContent(edCanvas, tempStr);
	}
	else {
		thisSelect.selectedIndex = 0;
	}
}

function sfjedToolbar() {
	
	document.write('<div class="quicktags">');
	for (i = 0; i < edButtons.length; i++) {
		sfjedShowButton(edButtons[i], i);
	}
	document.write('<input type="button" class="qtbutton" id="ed_close" class="ed_button" onclick="sfjedCloseAllTags();" title="Close all open tags" value="Close Tags" />');
	document.write('</div>');
}

function sfjedInsertTag(myField, i) {

	if (document.selection) {
		myField.focus();
	    sel = document.selection.createRange();
		if (sel.text.length > 0) {
			sel.text = edButtons[i].tagStart + sel.text + edButtons[i].tagEnd;
		}
		else {
			if (!sfjedCheckOpenTags(i) || edButtons[i].tagEnd == '') {
				sel.text = edButtons[i].tagStart;
				sfjedAddTag(i);
			}
			else {
				sel.text = edButtons[i].tagEnd;
				sfjedRemoveTag(i);
			}
		}
		myField.focus();
	}

	else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		var cursorPos = endPos;
		var scrollTop = myField.scrollTop;

		if (startPos != endPos) {
			myField.value = myField.value.substring(0, startPos)
			              + edButtons[i].tagStart
			              + myField.value.substring(startPos, endPos) 
			              + edButtons[i].tagEnd
			              + myField.value.substring(endPos, myField.value.length);
			cursorPos += edButtons[i].tagStart.length + edButtons[i].tagEnd.length;
		}
		else {
			if (!sfjedCheckOpenTags(i) || edButtons[i].tagEnd == '') {
				myField.value = myField.value.substring(0, startPos) 
				              + edButtons[i].tagStart
				              + myField.value.substring(endPos, myField.value.length);
				sfjedAddTag(i);
				cursorPos = startPos + edButtons[i].tagStart.length;
			}
			else {
				myField.value = myField.value.substring(0, startPos) 
				              + edButtons[i].tagEnd
				              + myField.value.substring(endPos, myField.value.length);
				sfjedRemoveTag(i);
				cursorPos = startPos + edButtons[i].tagEnd.length;
			}
		}
		myField.focus();
		myField.selectionStart = cursorPos;
		myField.selectionEnd = cursorPos;
		myField.scrollTop = scrollTop;
	}
	else {
		if (!sfjedCheckOpenTags(i) || edButtons[i].tagEnd == '') {
			myField.value += edButtons[i].tagStart;
			sfjedAddTag(i);
		}
		else {
			myField.value += edButtons[i].tagEnd;
			sfjedRemoveTag(i);
		}
		myField.focus();
	}
}

function sfjedInsertContent(myField, myValue) {
	
	if (document.selection) {
		myField.focus();
		sel = document.selection.createRange();
		sel.text = myValue;
		myField.focus();
	}
	
	else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		myField.value = myField.value.substring(0, startPos)
		              + myValue 
                      + myField.value.substring(endPos, myField.value.length);
		myField.focus();
		myField.selectionStart = startPos + myValue.length;
		myField.selectionEnd = startPos + myValue.length;
	} else {
		myField.value += myValue;
		myField.focus();
	}
}

function sfjedInsertLink(myField, i, defaultValue) {
	if (!defaultValue) {
		defaultValue = 'http://';
	}
	if (!sfjedCheckOpenTags(i)) {
		var URL = prompt('Enter the URL' ,defaultValue);
		if (URL) {
			edButtons[i].tagStart = '<a href="' + URL + '">';
			sfjedInsertTag(myField, i);
		}
	}
	else {
		sfjedInsertTag(myField, i);
	}
}