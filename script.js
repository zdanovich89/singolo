document.addEventListener("DOMContentLoaded", function() {

    // section Header
    let navigation = document.querySelector(".navigation");
    let navigationElements = navigation.querySelectorAll("a");

    // section Portfolio
    let projectCategory = document.querySelector(".information__project-category");
    let projectTags = document.querySelectorAll(".button");
    

    // section Header
    
    navigation.addEventListener("click", addActiveClassNav);

    function addActiveClassNav(e) {
         
        if(e.target.tagName == 'A') {
            navigationElements.forEach(item => {            
                item.classList.remove("active-menu")
            })                     
            e.target.classList.add("active-menu");        
        }        
    }


    // section Portfolio
    projectCategory.addEventListener("mouseup", addActiveClassProjectTag);

    function addActiveClassProjectTag(e) {
        if(e.target.tagName == 'BUTTON') {
            projectTags.forEach(item => {            
                item.classList.remove("active-tag")
            })               
            e.target.classList.add("active-tag")             
        }             
    }

})


