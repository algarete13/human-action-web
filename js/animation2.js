function menuslidedown (menu,clearsubmenu,submenu) {
    $(menu).bind('click', function() {
	if($(clearsubmenu).is(':visible')) {
            $(clearsubmenu).hide();
            $(submenu).slideDown(2000, function() {});
	}
    });
}

function contentfade (submenu,clearcontent,fade) {
    $(submenu).bind('click', function() {
	if($(clearcontent).is(':visible')) {
            $(clearcontent).hide();
            $(fade).fadeIn(2000, function() {});
	}
    });
}

$(document).ready(function() {
    $('.HideAtLoad').hide();
    $('.Content').hide();
    $('.submenus').hide();
    $('.FadeAtLoad').fadeIn(3000);
    $('.ClickFadeIntro').click(function() {
	$('.FadeAwayIntro').fadeOut(1000, function() {
	    $('.FadeBackIntro').fadeIn(1000, function() {
	    });
	});
    });
	
    menuslidedown('#NewsMain', '.submenus','#News');
    menuslidedown('#AboutMain', '.submenus','#About');
    menuslidedown('#ProjectsMain', '.submenus','#Projects');
    menuslidedown('#ArtMain', '.submenus','#Art');
    menuslidedown('#BlogMain', '.submenus','#Blog');
    menuslidedown('#SupportMain', '.submenus','#Support');
    menuslidedown('#ContactMain', '.submenus','#Contact');

    contentfade ('#2010', '.content', '#2010fade');
});
