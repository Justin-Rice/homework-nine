import * as MODEL from "../model/model.js"

function init(){
    let currentHeroImage = "home";


$("nav a").click(function(e){
    let btnId = this.id
    let contentID = btnId + "Content";
    $(".hero")
    .removeClass(`${currentHeroImage}-hero-image`)
    .addClass(`${btnId}-hero-image`);
     //changes curentHeroImage to the current page name
     currentHeroImage = btnId;
     $(".hero-content .page-name").html(btnId);
 
 
   //changes the page title to name of page 
     $('.hero-content .page-name').html(btnId);



    MODEL.getPageContent(contentID);
});
}


$(document).ready(function (){
    init();
    MODEL.getPageContent("homeContent");
});

