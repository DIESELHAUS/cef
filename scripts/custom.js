
$(document).ready(function() {

  $("header nav > ul > li").click(function(){
    $(this).children().toggleClass("open");
    $(this).toggleClass("drop");
  });

  $("button.toggle-btn").click(function(){
    $("header nav").addClass("toggle-nav");
  });
  $("button.close-nav").click(function(){
    $("header nav").removeClass("toggle-nav");
  });

  // Testimonial Slider
  $('.testimonial-slider').slick({
    slidesToShow: 2,
  });


  $('.slider-area').slick({
    arrows:true,
    infinite:true,
    slidesToShow:1,
    accessibility:true,
    autoplay:true,
    dots: true,
    autoplaySpeed: 5000,
    prevArrow:"<span class='arrow prev'><i class='fas fa-chevron-left'></i></span>",
    nextArrow:"<span class='arrow next'><i class='fas fa-chevron-right'></i></span>",
   
    });

  $('.testslider').slick({
      arrows:false,
          infinite:true,
          slidesToShow:1,
          accessibility:true,
          autoplay:true,
          dots: true,
          autoplaySpeed:2000,
     
      responsive: [
          {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
          }
          },
          {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
      ]
      });

  $(".btn-toggle").on("click", function(e) {
    event.stopPropagation(e);
    $(".mobile-menu").toggleClass("show");
  });
  $(".close-btn-side").on("click", function(e) {
    event.stopPropagation(e);
    $(".mobile-menu").removeClass("show");
  });

  var links = document.querySelectorAll('[id^=tituloMenu]');
  for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', toggle_visibility);
  }

  function toggle_visibility(e) {
      e.preventDefault(); //por precaução
      var idDestino = this.id.split('tituloMenu')[1];
      var el = document.getElementById('menu' + idDestino);
      var visivel = el.style.display == 'block';
      var menus = document.querySelectorAll('[id^=menu]');
      for (var i = 0; i < menus.length; i++) {
          menus[i].style.display = 'none';
      }
      if (visivel) el.style.display = 'none';
      else el.style.display = 'block';
  }

  var demo1 = new Moovie({
    selector: "#upload-video4",
    dimensions: {
      width: "100%"
    },
    config: {
      storage: {
        captionOffset: false,
        playrateSpeed: false,
        captionSize: false
      },
    },
  });
    var demo1 = new Moovie({
    selector: "#upload-video3",
    dimensions: {
      width: "100%"
    },
    config: {
      storage: {
        captionOffset: false,
        playrateSpeed: false,
        captionSize: false
      },
    },
  });

});


function openCity(evt, parentUrl, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  /*tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }*/

  window.history.pushState("object or string", "Title", parentUrl+"/"+tabName);


  document.getElementById(tabName).style.display = "block"; 

  $( ".tablinks" ).each(function( index ) {
    //console.log( index + ": " + $( this ).text() );
    if($(".tablinks").eq(index).data('url')==tabName) {
      $(".tablinks").eq(index).addClass('active');
    } else {
      $(".tablinks").eq(index).removeClass('active');
    }

  });

  //evt.currentTarget.className += " active"; 

}

const thePath = document.URL; //get the document URL
const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1); //get the last item of the URL path
const last = lastItem.split("="); //get the last string separated by = sign
const itemID = '"' + last[last.length-1] + '"'; //get the itemID on the string
const dataID = itemID.replace(/['"]+/g, '');

//console.log( thePath );

$( ".tablinks" ).each(function( index ) {
    //console.log( dataID + '-' + lastItem );
    if(index==0) {
      openCity('event', $(".tablinks").eq(index).data('parenturl'), $(".tablinks").eq(index).data('url') );
    }
    if($(".tablinks").eq(index).data('id')==dataID) { 
      openCity('event', $(".tablinks").eq(index).data('parenturl'), $(".tablinks").eq(index).data('url') );
    } 

});

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();
