(function(a){var d=function(b){var c=0;a("select",b).each(function(){a("a:eq("+a(this).data("index")+")",a(".select"+c++ +" ul",b)).click()});a(":checkbox",b).each(function(){a(this).data("val")&&a("a",a(this).parent()).addClass("cTPChecked")||a("a",a(this).parent()).removeClass("cTPChecked")});a(":radio",b).each(function(){a(this).data("val")&&a("a",a(this).parent()).addClass("cTPCheckedR")||a("a",a(this).parent()).removeClass("cTPCheckedR")});a(":file",b).each(function(){a(this).val("");a(".cTPFileInput",
a(this).parent()).html("&nbsp;")})};a.fn.cTPCheckBox=function(){return this.each(function(){var b=a(this);if(null==b.data("val")){b.data("val",this.checked);var c=a('<span class="cTPCheckboxElem"></span>');b.wrap('<span class="cTPCheckbox"></span>').parent().prepend(c);this.checked&&c.addClass("cTPChecked");b.on("change",function(){this.checked&&c.addClass("cTPChecked")||c.removeClass("cTPChecked")})}})};a.fn.cTPRadio=function(){return this.each(function(){var b=a(this);if(null==b.data("val")){b.data("val",
this.checked);var c=a('<span class="cTPRadioElem"></span>');b.wrap('<span class="cTPRadio"></span>').parent().prepend(c);this.checked&&c.addClass("cTPCheckedR");b.on("change",function(){c.addClass("cTPCheckedR");a('input[name="'+b.attr("name")+'"]',this.form).not(b).each(function(){"radio"==a(this).attr("type")&&a(this).prev().removeClass("cTPCheckedR")})})}})};a.fn.cTPFile=function(){return this.each(function(){file=a(this);if(!file.hasClass("cTPHiddenFile")){var b="";file.attr("title")&&(b='title="'+
file.attr("title")+'"',file.removeAttr("title"));var c="Browse";file.data("button")&&(c=file.data("button"));file.addClass("cTPHiddenFile").wrap("<span "+b+' class="cTPFile"></span>').parent().prepend('<input readonly="readonly" type="text" class="cTPFileInput" /></span><input type="button" value="'+c+'" />');file.attr("disabled")&&file.parent().find("input").addClass("cTPDisabled");a(file.parent()).on("click","input[type=button]",function(){a("input[type=file]",a(this).parent()).click()});file.on("click",
function(){if(a(this).attr("disabled"))return!1});file.on("change",function(){a(".cTPFileInput",a(this).parent()).val(a(this).val().split("\\").pop())})}})};a.fn.cTPSelect=function(){return this.each(function(){var b=a(this);!b.data("styled")&&!b.attr("multiple")&&(b.css("width",b.outerWidth()+30+"px"),b.wrap('<span class="cTPSelect"></span>').parent().prepend('<span class="cTPSelectBar">'+a("option:selected",b).text()+'</span><span class="cTPSelectOpen">&#9660;</span>'),b.attr("disabled")&&$wrapper.addClass("cTPDisabled"),
b.on("change",function(){a(".cTPSelectBar",a(this).parent()).text(a("option:selected",a(this).parent()).text())}),b.data("styled","1"))})};a.fn.cTPTitle=function(){return this.each(function(){title=a(this);if(!a(this).next().hasClass("cTPTitle")){title.after('<span class="cTPTitle">'+title.attr("title")+"</span>");title.removeAttr("title");var b=title.position(),c=title.outerWidth();title.hover(function(){a(this).next().css({top:b.bottom+"px",left:b.left+c+10+"px",display:"inline"})},function(){a(this).next().css("display",
"none")})}})};a.fn.cTPLabel=function(){return this.each(function(){label=a(this);label.data("styled")||("disabled"==a("#"+label.attr("for")).attr("disabled")&&label.addClass("cTPDisabled"),label.data("styled","1"))})};a.fn.cTP=function(){var b=this;a.isArray(this)||(b=a(this).parent());a(":checkbox",b).cTPCheckBox();a(":radio",b).cTPRadio();a(":file",b).cTPFile();a("select",b).cTPSelect();a("label[for]",b).cTPLabel();a("form",b).on("reset",function(){d(b)});a("[title]",b).cTPTitle()}})(jQuery);$(function(){$("body").cTP()});