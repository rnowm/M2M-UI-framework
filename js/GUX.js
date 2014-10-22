$().ready(function(){
    
    /*  LAYOUT FOR REGIONS  */
    /*  plugin info: http://layout.jquery-dev.net/  */

    appLayout = $('body').layout({ 
        north__paneSelector:	".app-north", 
        center__paneSelector:	".app-center", 
        west__paneSelector:		".app-west",
        north__size:			"auto",
        north__spacing_open:	0,
        north__resizable:		false,
        west__minSize:          80,
        west__size:			    80,
        west__maxSize:          255,
        closable:               false
    });
      
    if ($('#app-content').length == true) { 
        contentLayout = $('#app-content').layout({ 
            north__paneSelector:	".content-north", 
            center__paneSelector:	".content-center", 
            west__paneSelector:		".content-west",
            south__paneSelector:    ".content-south", 
            north__size:			"auto",
            north__spacing_open:	0,
            north__resizable:		false,
            west__minSize:          220,
            west__size:			    220,
            west__maxSize:          400,
            south__size:            "auto",
            south__spacing_open:    0,
            south__resizable:       false,
            closable:               false
        });
    }

    if ($('.content-list').length == true) {
        listLayout = $('.content-list').layout({ 
            north__paneSelector:	".list-north", 
            center__paneSelector:	".list-center", 
            south__paneSelector:	".list-south",
            north__spacing_open:	0,
            south__spacing_open:	0,
            resizable:              false,
            closable:               false
        });
    }

    /*if ($('.massive-actions').length == true) {
        listLayout = $('.massive-actions').layout({ 
            center__paneSelector:   ".massive-actions-center", 
            south__paneSelector:    ".massive-actions-south",
            south__spacing_open:    0,
            resizable:              false,
            closable:               false
        });
    }*/   
    
    /*  PANELS  */
    $.each($('.panel:not(.custom) > li'), function() {
        if ($(this).hasClass('editable') == false) {
            $(this).wrapInner('<div class="panel-body"></div>').prepend('<div class="panel-header"><span class="title">'+ $(this).attr('data-title') +'</span></div>');        
        } else {
            $(this).wrapInner('<div class="panel-body"></div>').prepend('<div class="panel-header"><span class="title">'+ $(this).attr('data-title') +'</span><ul class="toolbar right">'+
                '<li><button class="button small neutral edit">Edit</button></li>'+
                '<li><button class="button medium cancel">Cancel</button></li>'+
                '<li><button class="button medium affirmative save">Save</button></li>'+
            '</ul></div>');
        }
    });
    
    /*  BUTTONS  */
    create_buttons();
    
    /*  EDITABLE PANELS  */
    $.each($('.panel > .collapsible'), function() {
        if ($(this).hasClass('editable') == true) {
            //Form creation: we need to hide edit button 
            //Form view: we need to hide cancel/save buttons 
            if ($(this).hasClass('editMode') == true) {
                $(this).find('div.edit').hide();
            } else {
                $(this).find('div.cancel').hide();
                $(this).find('div.save').hide();
            }
        }
    });

    /*  COLLAPSIBLE PANELS  */
    $('.collapsible > .panel-header').on("click", function(event) {
        event.preventDefault();
        if ($(event.target).is('.toolbar') ||
            $(event.target).is('.button') || 
            $(event.target).is('.button span') || 
            $(event.target).is('.button i')) return;

        $(this).closest('.collapsible').toggleClass('open');
    });
    
    $('.panel-header div.edit').click(function() {
        var myPanel = $(this).closest('.panel-header').parent();
        myPanel.addClass('editMode');
        myPanel.find('div.cancel').show();
        myPanel.find('div.save').show();
        $(this).hide();
        myPanel.find('input').attr('disabled', false);
    });
    
    $('.panel-header div.cancel').click(function() {
        var myPanel = $(this).closest('.panel-header').parent()
        myPanel.removeClass('editMode');
        $(this).hide();
        myPanel.find('div.edit').show();
        myPanel.find('div.save').hide();
        myPanel.find('input').attr('disabled', true);
    });
    
    /*  MAIN MENU  */
    $.each($('#app-menu li a'), function() { 
        $(this).wrapInner('<i></i>').prepend('<span title="' + $(this).find("i").html() + '" class="icon"></span>');
    });
      
    /*  MODALS  */
    //Close button
    $('.modal .close').click(function() {
        $(this).closest('.modal').css('visibility','hidden');
    });    
    
    /*  FORMS  */
    //find all forms and apply the jqtransform plugin
    //$("form").jqTransform();

    //Test
    // $('#test').append('<div id="testContainer"><input id="inputTest" type="checkbox"></div>');
    // $('#inputTest').cTPCheckBox();
    
    //Disable editable forms
    $.each($('.panel .editable'), function() { 
        if ($(this).hasClass('.editMode') == false) {
            $(this).find('input').attr('disabled', true);
        }
    });
    /*  PLACEHOLDERS  */
    $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
        input.removeClass('placeholder');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
      }
    }).blur();  
    
    /*  LIST  */
    $(".item-list .collapsible > li").click(function() {  
        $(this).parent().find("ul").slideToggle("fast");
        $(this).toggleClass("open");
    });  
    
    /*  TOOLTIPS  */
    $("#app-menu li a span").tipsy({ 
        gravity: 'w', 
        delayIn: 500,
        opacity: 1
    });

    $(".input-error").tipsy({ 
        gravity: 'n', 
        delayIn: 500,
        opacity: 1,
        html: true
    });
    

    
                                                              
});
    

/*  FUNCTIONS */

/*  Disable fields for non editable forms  */
/*function change_readonly_mode(el) {
    el.find('input').each(function(){
        $(this).attr('disabled', true);
        console.log("adios");
    });
    console.log("hola");
}*/

/*  buttons  */
function create_buttons(el) {
    $.each($('.button'), function() {
    //TODO: if input: append input value in <i>         
        $(this).wrapInner('<i></i>').wrap('<div class="'
            + $(this).attr('class') 
            + '" data-role="button"'
            + '><span></span></div>');
    });
    $('button.button.disabled').attr('disabled','true');
    //$('a.button.disabled').attr('href','#');

    
    //if .modalTD is larger than .modalWindow -> resize .modalWindow
    $.each($('.modalTB'), function() {
        var buttonsWidth = 0;
        var buttonsCount = 0; 
        $.each($('.modalTB div.button'), function() {
           buttonsWidth = buttonsWidth + $(this).outerWidth();
           buttonsCount ++;
        });

        if ($(this).width() < buttonsWidth) {
           $(this).css('width', buttonsWidth + (buttonsCount * 10));
           $(this).parent().css('width', buttonsWidth + (buttonsCount * 10) + 10);
        }
    });
    
    //center modal
    $.each($('.modalWindow'), function() {
        $(this).css({ 
            'left': ($(window).width() - $(this).width()) / 2,
            'top': ($(window).height() - $(this).height()) / 2
        });
    });
    
    $('.button').hover(function() {  
        $(this).addClass('over'); 
    }, function () {
        $(this).removeClass('over'); 
    });
    
    $('.button').mousedown(function() {  
        $(this).addClass('pressed'); 
    }).mouseleave(function(){
        $(this).removeClass('pressed');
    });
}