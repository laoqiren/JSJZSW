function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (news, undefined) {
var i = 1
// iterate news
;(function(){
  var $$obj = news;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var page = $$obj[$index];

buf.push("<div class=\"page\">");
// iterate page
;(function(){
  var $$obj = page;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var ef = $$obj[$index];

buf.push("<ul>");
// iterate ef
;(function(){
  var $$obj = ef;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var enew = $$obj[$index];

buf.push("<li><span class=\"icon\"><img src=\"./icon.png\"/></span><a" + (jade.attr("href", '' + (enew.url) + '', true, false)) + "> " + (jade.escape((jade_interp = enew.title) == null ? '' : jade_interp)) + "</a><span class=\"newsDate\"> [" + (jade.escape((jade_interp = enew.date) == null ? '' : jade_interp)) + "]</span></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var enew = $$obj[$index];

buf.push("<li><span class=\"icon\"><img src=\"./icon.png\"/></span><a" + (jade.attr("href", '' + (enew.url) + '', true, false)) + "> " + (jade.escape((jade_interp = enew.title) == null ? '' : jade_interp)) + "</a><span class=\"newsDate\"> [" + (jade.escape((jade_interp = enew.date) == null ? '' : jade_interp)) + "]</span></li>");
    }

  }
}).call(this);

buf.push("</ul>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var ef = $$obj[$index];

buf.push("<ul>");
// iterate ef
;(function(){
  var $$obj = ef;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var enew = $$obj[$index];

buf.push("<li><span class=\"icon\"><img src=\"./icon.png\"/></span><a" + (jade.attr("href", '' + (enew.url) + '', true, false)) + "> " + (jade.escape((jade_interp = enew.title) == null ? '' : jade_interp)) + "</a><span class=\"newsDate\"> [" + (jade.escape((jade_interp = enew.date) == null ? '' : jade_interp)) + "]</span></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var enew = $$obj[$index];

buf.push("<li><span class=\"icon\"><img src=\"./icon.png\"/></span><a" + (jade.attr("href", '' + (enew.url) + '', true, false)) + "> " + (jade.escape((jade_interp = enew.title) == null ? '' : jade_interp)) + "</a><span class=\"newsDate\"> [" + (jade.escape((jade_interp = enew.date) == null ? '' : jade_interp)) + "]</span></li>");
    }

  }
}).call(this);

buf.push("</ul>");
    }

  }
}).call(this);

buf.push("<div class=\"ul-footer\">   <span>最大显示5页</span><span class=\"first-page\">首页</span>");
if ((i++)!=1)
{
buf.push("<span class=\"pre\"> 前一页</span>");
}
buf.push("<span class=\"next\">下一页</span><span class=\"last-page\">尾页</span><input type=\"text\" class=\"enterN\"/><input type=\"button\" value=\"GO\" class=\"go\"/></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var page = $$obj[$index];

buf.push("<div class=\"page\">");
// iterate page
;(function(){
  var $$obj = page;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var ef = $$obj[$index];

buf.push("<ul>");
// iterate ef
;(function(){
  var $$obj = ef;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var enew = $$obj[$index];

buf.push("<li><span class=\"icon\"><img src=\"./icon.png\"/></span><a" + (jade.attr("href", '' + (enew.url) + '', true, false)) + "> " + (jade.escape((jade_interp = enew.title) == null ? '' : jade_interp)) + "</a><span class=\"newsDate\"> [" + (jade.escape((jade_interp = enew.date) == null ? '' : jade_interp)) + "]</span></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var enew = $$obj[$index];

buf.push("<li><span class=\"icon\"><img src=\"./icon.png\"/></span><a" + (jade.attr("href", '' + (enew.url) + '', true, false)) + "> " + (jade.escape((jade_interp = enew.title) == null ? '' : jade_interp)) + "</a><span class=\"newsDate\"> [" + (jade.escape((jade_interp = enew.date) == null ? '' : jade_interp)) + "]</span></li>");
    }

  }
}).call(this);

buf.push("</ul>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var ef = $$obj[$index];

buf.push("<ul>");
// iterate ef
;(function(){
  var $$obj = ef;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var enew = $$obj[$index];

buf.push("<li><span class=\"icon\"><img src=\"./icon.png\"/></span><a" + (jade.attr("href", '' + (enew.url) + '', true, false)) + "> " + (jade.escape((jade_interp = enew.title) == null ? '' : jade_interp)) + "</a><span class=\"newsDate\"> [" + (jade.escape((jade_interp = enew.date) == null ? '' : jade_interp)) + "]</span></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var enew = $$obj[$index];

buf.push("<li><span class=\"icon\"><img src=\"./icon.png\"/></span><a" + (jade.attr("href", '' + (enew.url) + '', true, false)) + "> " + (jade.escape((jade_interp = enew.title) == null ? '' : jade_interp)) + "</a><span class=\"newsDate\"> [" + (jade.escape((jade_interp = enew.date) == null ? '' : jade_interp)) + "]</span></li>");
    }

  }
}).call(this);

buf.push("</ul>");
    }

  }
}).call(this);

buf.push("<div class=\"ul-footer\">   <span>最大显示5页</span><span class=\"first-page\">首页</span>");
if ((i++)!=1)
{
buf.push("<span class=\"pre\"> 前一页</span>");
}
buf.push("<span class=\"next\">下一页</span><span class=\"last-page\">尾页</span><input type=\"text\" class=\"enterN\"/><input type=\"button\" value=\"GO\" class=\"go\"/></div></div>");
    }

  }
}).call(this);
}.call(this,"news" in locals_for_with?locals_for_with.news:typeof news!=="undefined"?news:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}