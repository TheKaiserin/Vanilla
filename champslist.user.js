// ==UserScript==
// @name            Champions Online Vanilla List
// @namespace       Platypus
// @include         http://perfectworld.vanillaforums.com/categories/co
// ==/UserScript==
function do_platypus_script() {
html_insert_it(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[1]/DIV[5]/DIV[1]/DIV[1]/UL[1]/LI[2]/DIV[1]/DIV[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,'<p><a href="http://perfectworld.vanillaforums.com/categories/foxbats-q-a">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Foxbat&rsquo;s Q&A</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/general-gameplay">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;General Gameplay</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/combat-and-powers">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Combat and Powers</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/missions-and-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Missions and Content</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/controls-and-interface">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Controls and Interface</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/items-and-crafting">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Items and Crafting</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/the-hero-games">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Hero Games</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/audio-feedback">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Audio Feedback</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/suggestions-box">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suggestions Box</a></p> ',false,false);
html_insert_it(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[1]/DIV[5]/DIV[1]/DIV[1]/UL[1]/LI[1]/DIV[1]/DIV[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,'<p><a href="http://perfectworld.vanillaforums.com/categories/super-news-network">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Super News Network</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/until-field-reports">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UNTIL Field Reports</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/champions-online-discussion">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Champions Online Discussion</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/champions-pen-and-paper-rpg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Champions Pen and Paper</a></p> <p><a href="http://perfectworld.vanillaforums.com/categories/free-to-play-q-a1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Free To Play Q&A</a></p> ',false,false);
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

//
//  Mon Dec 19 15:59:37 2005 -- Scott R. Turner
//  Short, uncommented file containing all the code to implement Platypus
//  actions.  Can be "included" into the Platypus script.
//
// 
// 
function walk_down(node, func) {
  if (node.nodeType == 1) {
    if (node.tagName != "IMG") func(node);
    if (node.childNodes.length != 0)
      for (var i=0; i<node.childNodes.length; i++)
walk_down(node.childNodes.item(i),func);
  }
}
function make_bw(doc, node) {
  walk_down(node,
            function (node) {
      if (node.tagName != 'A') {
  node.bgcolor = "white";
  node.color = "black";
  node.style.backgroundColor = "white";
  node.style.color = "black";
  node.style.backgroundImage = "";
      }});
}
function center_it(doc, node) {
  var center_node = doc.createElement ("CENTER");
  node.parentNode.insertBefore(center_node, node);
  node.parentNode.removeChild(node);  
  center_node.appendChild(node);
  return center_node;
};
function erase_it(doc, node) {
  var offset_height = node.offsetHeight;
  var offset_width = node.offsetWidth;
  var replacement_div = doc.createElement ("DIV");
  replacement_div.setAttribute('style',
       "height: "+offset_height+"; width: "+offset_width+";");
  node.parentNode.insertBefore(replacement_div, node);
  node.style.display = "none";
  return replacement_div;
};
function smart_remove(doc, node) {
    if (node.parentNode.childNodes.length == 1) {
smart_remove(doc, node.parentNode);
    } else {
remove_it(doc, node);
    };
};
function remove_it(doc, node) {
  if (doc == null || node == null) return;
  if (!node.parentNode) return;
  node.style.display = "none";
  doc.last_removed_node = node;
};
function script_paste(doc, where, what) {
    var new_node = what.cloneNode(true);
    new_node.style.display = "";
    where.parentNode.insertBefore(new_node, where);
};
function isolate(doc, node) {
  if (!node.parentNode) return;
  node.parentNode.removeChild(node);
  while (doc.body.childNodes.length > 0) {
    doc.body.removeChild(doc.body.childNodes[0]);
  };
  var replacement_div = doc.createElement ("DIV");
  replacement_div.setAttribute('style',
       "margin: 0 2%; text-align: left");
  replacement_div.appendChild(node);
  doc.body.appendChild(replacement_div);
};
function set_style_script(doc, element, new_style) {
    element.setAttribute('style', new_style);
};
function modify_single_url(doc, match_re, replace_string, node) {
    if (node.href) {
node.href = node.href.replace(match_re, replace_string);
    };
};
function do_modify_url_it(doc, node, match_re, replace_string, global_flag) {
    match_re = new RegExp(match_re);
    if (global_flag) {
var allurls = doc.getElementsByTagName('A');
for(var i = 0, url; url = allurls[i]; i++)
  modify_single_url(doc, match_re, replace_string, url);
    } else {
modify_single_url(doc, match_re, replace_string, node);
    };
};
function do_modify_html_it(doc, element, match_re, replace_string) {
    match_re = new RegExp(match_re);
    if (element.innerHTML) {
element.innerHTML = element.innerHTML.replace(match_re, replace_string);
    };
};
function relax(doc, node) {
  walk_down(node, function (node) {
      node.style.width = 'auto';
      node.style.marginLeft = '0pt';
      node.style.marginRight = '0pt';
      if (node.width) node.width = null; });
}
function fix_page_it(doc, node) {
    doc.background = null;
    doc.bgColor = "white";
    if (doc.style) {
      doc.style.backgroundColor = "white";
      doc.style.backgroundImage = "none";
      if (doc.style.color == "white") {
doc.style.color = "black";
      };
      if (doc.text == "white") {
doc.text = "black";
      };
    };
    doc.body.background = null;
    doc.body.bgColor = "white";
    if (doc.body.style) {
      doc.body.style.backgroundColor = "white";
      doc.body.style.backgroundImage = "none";
      if (doc.body.style.color == "white") {
doc.body.style.color = "black";
      };
      if (doc.body.text == "white") {
doc.body.text = "black";
      };
    };
};
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
function auto_repair_it(doc, node) {
  Dump("In auto_repair_it...");
  var biggest_elem = find_biggest_elem(doc);
  Dump("biggest_elem = "+biggest_elem);
  isolate(doc, biggest_elem);
  Dump("After isolate.");
  relax(doc, biggest_elem);
  Dump("After relax.");
  make_bw(doc, biggest_elem);
  Dump("After make_bw.");
  fix_page_it(doc, biggest_elem);
  Dump("After fix_page_it.");
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

function contains_big_element(node, limit) {
    if (node.childNodes.length != 0)
for (var i=0; i<node.childNodes.length; i++) {
    var child = node.childNodes.item(i);
    var child_size = child.offsetHeight * child.offsetWidth;
    if (child_size > limit) return true;
};
    return false;
};

function platypus_do(win, func_name, o, other, other2, other3) {
    var func = eval(func_name);
    var doc = null;
    if (func == null) return;
    if (!o) {
Warning(platypusplatypuscouldntfi1+
func_name+platypusthisusuallyhappens);
    };
    doc = win.document;
    func(doc, o, other, other2, other3);
};

//.user.js
