function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (pages, undefined) {
var i = 1
var num = 0
// iterate pages
;(function(){
  var $$obj = pages;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var page = $$obj[$index];

buf.push("<div class=\"page\">");
// iterate page
;(function(){
  var $$obj = page;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<div" + (jade.attr("id", '' + (num++) + '', true, false)) + " class=\"every-item\"><div class=\"item-upTime\">" + (jade.escape((jade_interp = item.upTime) == null ? '' : jade_interp)) + "</div><h3 class=\"item-title\">" + (jade.escape((jade_interp = item.name) == null ? '' : jade_interp)) + "</h3><span class=\"item-belong\">" + (jade.escape((jade_interp = item.belong) == null ? '' : jade_interp)) + "</span><span clss=\"item-type\">" + (jade.escape((jade_interp = item.type) == null ? '' : jade_interp)) + "</span><span class=\"item-email\">" + (jade.escape((jade_interp = item.email) == null ? '' : jade_interp)) + "</span><span class=\"item-more\">Read more</span></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<div" + (jade.attr("id", '' + (num++) + '', true, false)) + " class=\"every-item\"><div class=\"item-upTime\">" + (jade.escape((jade_interp = item.upTime) == null ? '' : jade_interp)) + "</div><h3 class=\"item-title\">" + (jade.escape((jade_interp = item.name) == null ? '' : jade_interp)) + "</h3><span class=\"item-belong\">" + (jade.escape((jade_interp = item.belong) == null ? '' : jade_interp)) + "</span><span clss=\"item-type\">" + (jade.escape((jade_interp = item.type) == null ? '' : jade_interp)) + "</span><span class=\"item-email\">" + (jade.escape((jade_interp = item.email) == null ? '' : jade_interp)) + "</span><span class=\"item-more\">Read more</span></div>");
    }

  }
}).call(this);

buf.push("<div class=\"ul-footer\">   <span>最大显示5条</span><span class=\"first-page\">首页</span>");
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
      var item = $$obj[$index];

buf.push("<div" + (jade.attr("id", '' + (num++) + '', true, false)) + " class=\"every-item\"><div class=\"item-upTime\">" + (jade.escape((jade_interp = item.upTime) == null ? '' : jade_interp)) + "</div><h3 class=\"item-title\">" + (jade.escape((jade_interp = item.name) == null ? '' : jade_interp)) + "</h3><span class=\"item-belong\">" + (jade.escape((jade_interp = item.belong) == null ? '' : jade_interp)) + "</span><span clss=\"item-type\">" + (jade.escape((jade_interp = item.type) == null ? '' : jade_interp)) + "</span><span class=\"item-email\">" + (jade.escape((jade_interp = item.email) == null ? '' : jade_interp)) + "</span><span class=\"item-more\">Read more</span></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<div" + (jade.attr("id", '' + (num++) + '', true, false)) + " class=\"every-item\"><div class=\"item-upTime\">" + (jade.escape((jade_interp = item.upTime) == null ? '' : jade_interp)) + "</div><h3 class=\"item-title\">" + (jade.escape((jade_interp = item.name) == null ? '' : jade_interp)) + "</h3><span class=\"item-belong\">" + (jade.escape((jade_interp = item.belong) == null ? '' : jade_interp)) + "</span><span clss=\"item-type\">" + (jade.escape((jade_interp = item.type) == null ? '' : jade_interp)) + "</span><span class=\"item-email\">" + (jade.escape((jade_interp = item.email) == null ? '' : jade_interp)) + "</span><span class=\"item-more\">Read more</span></div>");
    }

  }
}).call(this);

buf.push("<div class=\"ul-footer\">   <span>最大显示5条</span><span class=\"first-page\">首页</span>");
if ((i++)!=1)
{
buf.push("<span class=\"pre\"> 前一页</span>");
}
buf.push("<span class=\"next\">下一页</span><span class=\"last-page\">尾页</span><input type=\"text\" class=\"enterN\"/><input type=\"button\" value=\"GO\" class=\"go\"/></div></div>");
    }

  }
}).call(this);
}.call(this,"pages" in locals_for_with?locals_for_with.pages:typeof pages!=="undefined"?pages:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}