// ***LOADING ANIMATION***
$(document).ready(function() {
  $('.HideAtLoad').hide();
  $('.FadeAtLoad').fadeIn(3000);
  $('.ClickFadeIntro').click(function() {
    $('.FadeAwayIntro').fadeOut(1000, function() {
      $('.FadeBackIntro').fadeIn(1000, function() {
      });
    });
  });
//                ***NEWS MENU***
  $('#ClickNews').click(function() {
    $('.FadeAway').fadeOut(1000, function() {
      $('#SlideDownNews').slideDown(1000, function() {
      });
    });
  });
});

//EVERYTHING AFTER THIS IS NOT BEING LOADED BECAUSE IT IS NTO WITHIN THE DOCUMENT READY FUNCTION

//               ***NEWS CONTENT***
      $('#Click2010').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('#2010NewsFadeIn').fadeIn(1000, function() {
          });
        });
      });
      $('#Click2011').click(function() {
        $('.FadeAwayContent').fadeOut(1000, function() {
          $('#2011NewsFadeIn').fadeIn(1000, function() {
          });
        });
      });
//               ***ABOUT SUBMENU***
      $('#ClickAbout').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('#SlideDownAbout').slideDown(1000, function() {
          });
        });
      });
//               ***OVERVIEW CONTENT***
      $('#ClickOverview').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('#SlideDownOverview').slideDown(1000, function() {
          });
        });
      });
//               ***PHILOSOPHY CONTENT***
      $('#ClickPhilosophy').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('#PhilosophyFadeIn').fadeIn(1000, function() {
          });
        });
      });
//               ***HUMAN ACTORS CONTENT***
      $('#ClickActors').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('#ActorsFadeIn').fadeIn(1000, function() {
          });
        });
      });
//               ***PRESS CONTENT***
      $('#ClickPress').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('#PressFadeIn').fadeIn(1000, function() {
          });
        });
      });
//***Corie's Work Begins***
//		***PROJECTS SUBMENU***
      $('#ClickProjects').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
	  $('#SlideDownProjects').slideDown(1000, function() {
          });
        });
      });
//              ***PROJECTS CONTENT***
      $('#ClickEhub').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('#EhubFadeIn').fadeIn(1000, function() {
          });
        });
      });
      $('#ClickPharos').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('#PharosFadeIn').fadeIn(1000, function() {
          });
        });
      });
//		***ART+MEDIA SUBMENU***
      $('#ClickArtMedia').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
	  $('#SlideDownArtMedia').slideDown(1000, function() {
          });
        });
      });
//               ***ART+MEDIA CONTENT***
      $('#ClickEvents').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
	  $('#EventsFadeIn').fadeIn(1000, function() {
          });
	});
      });
      $('#ClickMedia').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('#MediaFadeIn').fadeIn(1000, function() {
          });
        });
      });
      $('#ClickCine5').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
	  $('#Cine5FadeIn').fadeIn(1000, function() {
          });
	});
      });
      $('#ClickMizik5').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('#Mizik5FadeIn').fadeIn(1000, function() {
          });
        });
      });
      $('#ClickArchitecture').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('#ArchitectureFadeIn').fadeIn(1000, function() {
          });
	});
      });
//			***BLOG SUBMENU***
      $('#ClickBlog').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('#SlideDownBlog').slideDown(1000, function() {
          });
        });
      });
//			***BLOG CONTENT***
      $('#ClickBlogPosts').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('#BlogPostFadeIn').fadeIn(1000, function() {
          });
        });
      });
//			***SUPPORT SUBMENU***
      $('#ClickSupport').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('#SlideDownSupport').slideDown(1000, function() {
          });
        });
      });
//			***SUPPORT CONTENT***
      $('#ClickDonate').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
	  $('#DonateFadeIn').fadeIn(1000, function() {
          });
	});
      });
      $('#ClickSpread').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('#FadeIn').fadeIn(1000, function() {
          });
        });
      });
      $('#ClickOpportunities').click(function() {
        $('.FadeAway').fadeOut(1000, function() {
          $('.OpportunitiesFadeIn').fadeIn(1000, function() {
          });
	});
      });
//		***SPREAD-THE-WORD CONTENT***
      $('#ClickTwitter').click(function() {
	$('#TwitterFadeIn').fadeIn(1000, function() {
	});
      });
      $('#ClickFacebook').click(function() {
	$('#FacebookFadeIn').fadeIn(1000, function() {
	});
      });
      $('#ClickBanners').click(function() {
	$('#BannersFadeIn').fadeIn(1000, function() {
	});
     });				
//		***CONTACT SUBMENU***
     $('#ClickContact').click(function() {
       $('.FadeAway').fadeOut(1000, function() {
         $('#SlideDownContact').slideDown(1000, function() {
         });
       });
     });
//		***CONTACT CONTENT***
    $('#ClickTalk').click(function() {
      $('.FadeAway').fadeOut(1000, function() {
        $('#TalkFadeIn').fadeIn(1000, function() {
        });
      });
    });
    $('#ClickWrite').click(function() {
      $('.FadeAway').fadeOut(1000, function() {
        $('#WriteFadeIn').fadeIn(1000, function() {
        });
      });
    });
    $('#ClickSkype').click(function() {
      $('.FadeAway').fadeOut(1000, function() {
        $('#SkypeFadeIn').fadeIn(1000, function() {
        });
      });
    });