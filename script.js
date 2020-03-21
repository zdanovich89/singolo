document.addEventListener("DOMContentLoaded", function() {

    // section Header
    let navigation = document.querySelector(".navigation");
    let navigationElements = navigation.querySelectorAll("a");   
    
    window.addEventListener("scroll", function() {
        if (window.pageYOffset < 600) {
            navigationElements.forEach(item => {            
                item.classList.remove("active-menu")
            })                     
            navigationElements[0].classList.add("active-menu"); 
        };

        if (window.pageYOffset > 600 && window.pageYOffset < 1132) {
            navigationElements.forEach(item => {            
                item.classList.remove("active-menu")
            })                     
            navigationElements[1].classList.add("active-menu"); 
        };

        if (window.pageYOffset > 1132 && window.pageYOffset < 2000) {
            navigationElements.forEach(item => {            
                item.classList.remove("active-menu")
            })                     
            navigationElements[2].classList.add("active-menu"); 
        };

        if (window.pageYOffset > 2000 && window.pageYOffset < 2733) {
            navigationElements.forEach(item => {            
                item.classList.remove("active-menu")
            })                     
            navigationElements[3].classList.add("active-menu"); 
        };

        if (window.pageYOffset > 2733) {
            navigationElements.forEach(item => {            
                item.classList.remove("active-menu")
            })                     
            navigationElements[4].classList.add("active-menu"); 
        };
    })
    
    navigation.addEventListener("click", addActiveClassNav);

    function addActiveClassNav(e) {         
        if(e.target.tagName == 'A') {
            navigationElements.forEach(item => {            
                item.classList.remove("active-menu")
            })                     
            e.target.classList.add("active-menu");        
        }        
    }

    // section Slider
    let slides = document.querySelectorAll(".slider__slide");
    let currentSlide = 0;
    let isEnabled = true;
    let powerOnVertical = document.querySelector(".power-on-vertical");
    let powerOnHorizontal = document.querySelector(".power-on-horizontal");
    let displayVertical = document.querySelector(".display-off-vertical");
    let displayHorizontal = document.querySelector(".display-off-horizontal");
    
    powerOnVertical.addEventListener("click", function () {
        displayVertical.classList.toggle("active");
    })

    powerOnHorizontal.addEventListener("click", function () {
        displayHorizontal.classList.toggle("active");
    })

    function changeCurrentSlide(n) {
        currentSlide = (n + slides.length) % slides.length;
    }
    
    function hideSlide(direction) {
        isEnabled = false;        
        slides[currentSlide].classList.add(direction);              
        slides[currentSlide].addEventListener("animationend", function() {            
           this.classList.remove("active", direction);           
        });
    }

    function showSlide(direction) {        
        slides[currentSlide].classList.add("next", direction);
        slides[currentSlide].addEventListener("animationend", function() {
            this.classList.remove("next", direction);
            this.classList.add("active");
            isEnabled = true;           
        })
    } 

    function previousSlide(n) {        
        hideSlide("to-right");
        changeCurrentSlide(n - 1);
        showSlide("from-left");
    }

    function nextSlide(n) {
        hideSlide("to-left");
        changeCurrentSlide(n + 1);        
        showSlide("from-right");
    }

    document.querySelector(".slider__chev-left").addEventListener("click", function() {
        let slider = document.querySelector(".slider");
        let sliderBottom = document.querySelector(".slider-bottom");
        if(isEnabled) {
            previousSlide(currentSlide);
            slider.classList.toggle("slider-blue");
            sliderBottom.classList.toggle("slider-blue");
        }
    })

    document.querySelector(".slider__chev-right").addEventListener("click", function() {
        let slider = document.querySelector(".slider");
        let sliderBottom = document.querySelector(".slider-bottom");
        if (isEnabled) {
            nextSlide(currentSlide);
            slider.classList.toggle("slider-blue");
            sliderBottom.classList.toggle("slider-blue");
        }
    })


    // section Portfolio
    let projectCategory = document.querySelector(".information__project-category");
    let projectTags = document.querySelectorAll(".button");
    let projectGallery = document.querySelector(".column4-layout");
    let projectImage = projectGallery.querySelectorAll(".portfolio_image");   

    projectCategory.addEventListener("click", addActiveClassProjectTag);
    projectGallery.addEventListener("click", addImageBorder);    

    function addActiveClassProjectTag(e) {
        if(e.target.tagName == 'BUTTON') {
            projectTags.forEach(item => {            
                item.classList.remove("active-tag")
            })               
            e.target.classList.add("active-tag");
            showCategory(e.target.dataset.category);
            removeImageBorder();           
        }                 
    }

    function showCategory(category) {        
        projectImage.forEach(item => {          
            item.classList.remove("hidden-project");
            if(item.dataset.category != category) {
                item.classList.add("hidden-project");
            }  
            if(category == "all") {
                item.classList.remove("hidden-project");
            }              
        })        
    }

    function addImageBorder (e) {
        if(e.target.className != "column4-layout") {
            projectImage.forEach(item => {            
                item.classList.remove("image-border")
            })                     
            e.target.classList.add("image-border");        
        } 
        else removeImageBorder();        
    }

    function removeImageBorder() {
        projectImage.forEach(item => {            
            item.classList.remove("image-border")
        }) 
    }

    // section Get a quote

    let form = document.querySelector("form");
    let name = document.querySelector("input[name='name']");
    let email = document.querySelector("input[name='email']");
    let subject = document.querySelector("input[name='subject']");
    let describe = document.querySelector("textarea[name='describe project']");
    let modal = document.createElement("dialog");
    let modalTitle = document.createElement("p");
    let modalTopic = document.createElement("p");
    let modalDescribe = document.createElement("p");
    let modalButton = document.createElement("button");
    

    form.addEventListener("submit", createmodalInformation);

    function createmodalInformation(e) {
        e.preventDefault();
        modalTitle.textContent = "Письмо отправлено";        
        subject.value ? (modalTopic.textContent = `Тема: ${subject.value}`): (modalTopic.textContent = "Без темы");                
        describe.value ? (modalDescribe.textContent =`Описание: ${describe.value}`) : modalDescribe.textContent = "Без описания";        
        modalButton.textContent = "OK";        
        modalButton.classList.add("feedback__submit", "modal-button");
        modal.classList.add("modal");
        modal.append(modalTitle, modalTopic, modalDescribe, modalButton);
        document.body.append(modal);
        modal.showModal();
        subject.value = "";
        describe.value = "";
        name.value = "";
        email.value = "";
    }

    modalButton.addEventListener("click", deleteModal);
    function deleteModal(e) {
        modal.close();
        modal.remove();
    }
    modal.addEventListener("click", deleteModal) 
})

