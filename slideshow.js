const mainArmGuardToggle = document.querySelector("#main-arm-guard-toggle")
const detailArmGuardToggle = document.querySelector("#detail-arm-guard-toggle")

const slideshows = {
    mainArmGuard: {
        images: document.querySelectorAll(".product-main"),
        currentSlide: 0
    },
    detailArmGuard: {
        images: document.querySelectorAll(".product-detail"),
        currentSlide: 0
    }
}

const reset = () => {

    Object.entries(slideshows).forEach(([key]) => {

        for (let i = 0; i < slideshows[key]["images"].length; i++) {
            slideshows[key]["images"][i].style.display = "none";
        }
    });

}

// hide each image
reset()

const showSlide = () => {
    // for each slideshow key
    Object.entries(slideshows).forEach(([key]) => {
        // take the slideshow key image object
        slideshows[key]["images"]
        //get the current slide 
        [slideshows[key]["currentSlide"]].style.display = "block"
    })
}

// show current image
showSlide()


const nextSlide = (slideshow) => {
    // if on last slide
    if (slideshows[slideshow]["currentSlide"] === slideshows[slideshow]["images"].length - 1) {
        // set to first slide
        slideshows[slideshow]["currentSlide"] = 0
    } else {
        //set to next slide
        slideshows[slideshow]["currentSlide"]++
    }
    // hide all images not already hidden 
    reset()
    //show current slide
    showSlide()
}
// on view, trigger fade-in/fade-out anmiation
// rotate the rotate image

mainArmGuardToggle.addEventListener("click", () => {
    nextSlide("mainArmGuard");
})

detailArmGuardToggle.addEventListener("click", () => {
    nextSlide("detailArmGuard");
})