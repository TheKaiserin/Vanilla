// ==UserScript==
// @name            Champions Online Vanilla List
// @namespace       https://github.com/TheKaiserin/Vanilla
// @include         http://perfectworld.vanillaforums.com/categories/co
// @downloadURL https://github.com/TheKaiserin/Vanilla/raw/master/champslist.user.js
// @updateURL https://github.com/TheKaiserin/Vanilla/raw/master/champslist.user.js
// @icon http://cd8ba0b44a15c10065fd-24461f391e20b7336331d5789078af53.r23.cf1.rackcdn.com/perfectworld.vanillaforums.com/favicon_2b888861142269ff.ico
// @version    0.0.1
// @description  Adds the Champions Online forum lists to one page.
// ==/UserScript==

function do_platypus_script() {
html_insert_it(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[1]/DIV[5]/DIV[1]/DIV[1]/UL[1]/LI[2]/DIV[1]/DIV[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,'<p><a href="http://perfectworld.vanillaforums.com/categories/foxbats-q-a">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Foxbat&rsquo;s Q&A</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/general-gameplay">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;General Gameplay</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/combat-and-powers">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Combat and Powers</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/builds-and-roles">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Builds and Roles</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/missions-and-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Missions and Content</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/controls-and-interface">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Controls and Interface</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/items-and-crafting">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Items and Crafting</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/the-hero-games">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Hero Games</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/audio-feedback">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Audio Feedback</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/suggestions-box">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suggestions Box</a></p> ',false,false);
html_insert_it(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[1]/DIV[5]/DIV[1]/DIV[1]/UL[1]/LI[1]/DIV[1]/DIV[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,'<p><a href="http://perfectworld.vanillaforums.com/categories/super-news-network">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Super News Network</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/until-field-reports">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UNTIL Field Reports</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/champions-online-discussion">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Champions Online Discussion</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/off-topic2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Off Topic Discussion</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/champions-pen-and-paper-rpg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Champions Pen and Paper</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/free-to-play-q-a1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Free To Play Q&A</a></p> ',false,false);
html_insert_it(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[1]/DIV[5]/DIV[1]/DIV[1]/UL[1]/LI[3]/DIV[1]/DIV[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,'<p><a href="http://perfectworld.vanillaforums.com/categories/pts-general-discussion">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;General Discussion</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/pts-c-store-feedback">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cstore Feedback</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/pts-game-content-and-missions">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Content and Missions</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/pts-archetypes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Archetypes</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/pts-frameworks">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frameworks</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/pts-the-archive">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Archive</a></p> ',false,false);
html_insert_it(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[1]/DIV[5]/DIV[1]/DIV[1]/UL[1]/LI[4]/DIV[1]/DIV[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,'<p><a href="http://perfectworld.vanillaforums.com/categories/gameplay-bugs1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gameplay Bugs</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/pc-technical-issues">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PC Technical Issues</a></p> ',false,false);
html_insert_it(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[1]/DIV[5]/DIV[1]/DIV[1]/UL[1]/LI[5]/DIV[1]/DIV[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,'<p><a href="http://perfectworld.vanillaforums.com/categories/introductions">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Introductions</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/supergroup-recruitment-station">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supergroup Recruitment</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/fan-base-alpha">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fan Base Alpha</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/costumes-and-concepts">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Costumes and Concepts</a></p> ',false,false);
erase_it(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[1]/DIV[5]/DIV[1]/DIV[1]/DIV[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,null,null,null);
erase_it(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[1]/DIV[4]/DIV[1]/H1[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,null,null,null);
}; // Ends do_platypus_script
window.addEventListener("load", function() { do_platypus_script() }, false);
var gplatypusBundle = Components.classes["@mozilla.org/intl/stringbundle;1"].getService(Components.interfaces.nsIStringBundleService);
var mystrings = gplatypusBundle.createBundle("chrome://platypus/locale/platypusCore.properties");
var platypusplatypuscouldntfi1 = mystrings.GetStringFromName("platypusplatypuscouldntfi1");
var platypusthisusuallyhappens = mystrings.GetStringFromName("platypusthisusuallyhappens");



function insertAfter(newNode, target) {
    var parent = target.parentNode;
    var refChild = target.nextSibling;
    if(refChild != null)
parent.insertBefore(newNode, refChild);
    else
parent.appendChild(newNode);
};
function html_insert_it(doc, element, new_html, before, insert_as_block) {
  var new_element;
  if (insert_as_block) {
    new_element = doc.createElement ("DIV");
  } else {
    new_element = doc.createElement ("SPAN");
  };
  new_element.innerHTML = new_html;
  if (before) {
      element.parentNode.insertBefore(new_element, element);
  } else {
      insertAfter(new_element, element);
  };
};

function find_biggest_elem(doc) {
  const big_element_limit = 0.25;
  var size_of_doc = doc.documentElement.offsetHeight *
      doc.documentElement.offsetWidth;
  var body = doc.body;
  var size_of_body = body.offsetHeight * body.offsetWidth;
  if (size_of_body < (0.80 * size_of_doc)) {
      size_of_body = size_of_doc;
  };
  var max_size = 0;
  var max_elem = doc;
  /*  
  var allElems = doc("//*",
     doc, null,
     XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
     null);
  Dump("allElems = "+allElems);
  Dump("allElems.snapshotLength = "+allElems.snapshotLength);
  for (var i = 0; i < allElems.snapshotLength; i++) {
    var thisElem = allElems.snapshotItem(i);
  */
    
  var allElems = doc.getElementsByTagName("*");
  Dump("allElems = "+allElems);
  Dump("allElems.snapshotLength = "+allElems.length);
  for (var i = 0; i < allElems.length; i++) {
      var thisElem = allElems[i];
      var thisElem_size = thisElem.offsetHeight * thisElem.offsetWidth;

      if (thisElem_size < size_of_body &&
  thisElem_size > max_size &&
  !contains_big_element(thisElem, size_of_body * big_element_limit)) {
  max_size = thisElem_size;
  max_elem = thisElem;
      };
  };
  Dump("Max elem = "+max_elem.tagName);
  return max_elem;
};


//.user.js
