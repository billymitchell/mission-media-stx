const mainArmGuardToggle = document.querySelector("#main-arm-guard-toggle")
const detailArmGuardToggle = document.querySelector("#detail-arm-guard-toggle")
const colors = document.querySelectorAll(".color")

mainArmGuardToggle.addEventListener("click", () => {
    nextSlide("mainArmGuard");
    rotate(mainArmGuardToggle)
})

detailArmGuardToggle.addEventListener("click", () => {
    nextSlide("detailArmGuard");
})


// pass colors object in 
const colorToggle = (colors) => {
    // for each color
    colors.forEach(color => {
        // if "checked"
        if (color.checked) {
            // add class
            color.classList.add("active")
        } else {
            // else remove class
            color.classList.remove("active")
        }
    })

}

// for each color, run function on click
colors.forEach(color => {
    color.addEventListener("click", () => {
        colorToggle(colors)
        // On color toggle, update slideshow images
        // updateSlides(color, slideshow)
    })
})

//Initialize colors
colorToggle(colors)

// Main slideshow object
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

// initialize / reset images 
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
        //get the current slide, set to block
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

const rotate = (element) => {
    element.classList.add("rotate")
    // remove animation after its done to do again
    setTimeout(() => {
        element.classList.remove("rotate")
    }, 500)
}



