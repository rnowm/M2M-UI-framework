$().ready(function(){
    
    /*  THEME  */ 
    $("#app-header .links a").click(function() { 
        $("#theme-css").attr("href", $(this).attr('rel'));
        $.cookie("csstheme", $(this).attr('rel'), {expires: 365, path: '/'});
		location.reload(); //to recalculate layout values
        return false;
    });
    
    /*  TABLES  */
    $('#table_02').dataTable({
        "bFilter": true,
        "bSort": true,
    });
    
    /*  MODAL  */
    $('#launchModal').click(function() {
        $('#demoModal').css('visibility','visible');
    })
    
                                                       
});
 
/*  Read theme css file from cookie  */ 
if($.cookie("csstheme")) {
    $("#theme-css").attr("href", $.cookie("csstheme"));
}
