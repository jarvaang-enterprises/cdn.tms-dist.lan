jQuery("document").ready(function(){jQuery.ajax({url:"/includes/get_gallery.php",type:"POST",dataType:"HTML",success:function(a){jQuery("#gallery").append(a)},error:function(a,b){alert("Ajax request failed.")}})});function currentSlide(a){showSlides(slideIndex=a)}
function showSlides(a){var b=document.getElementsByClassName("mySlides"),c=document.getElementsByClassName("dot");a>b.length&&(slideIndex=1);1>a&&(slideIndex=b.length);for(a=0;a<b.length;a++)b[a].style.display="none";for(a=0;a<c.length;a++)c[a].className=c[a].className.replace("active","");b[slideIndex-1].style.display="block";c[slideIndex-1].className+=" active"};