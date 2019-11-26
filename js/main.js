$(document).ready(function() {
    $('img').each( function(i){
            
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window > bottom_of_object ){
            
            $(this).animate({'opacity':'1'},450);
                
        }
        
    });

    $(window).scroll( function(){
    
        $('img').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},450);
                    
            }
            
        }); 
    
    });
    
});

var modal = document.getElementById("Modal-indv");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption-indv");
function abrirModal(element){
  modal.style.display = "block";
  modalImg.src = element.src;
  //captionText.innerHTML = element.alt;
}

var span = document.getElementsByClassName("close-indv")[0];

span.onclick = function() {
  modal.style.display = "none";
} 