
// JavaScript for the fade-in effect on scroll on EVERY PAGE
// track elements that appear in viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // if the element is in view
        if (entry.isIntersecting) {
            // add 'visible' class to fade in the element
            entry.target.classList.add('visible');
        } 
        else {
            // remove the 'visible' class to fade out
            entry.target.classList.remove('visible');
        }
    });
}, {
    root: null, //use viewport as visibility standard
    rootMargin: "0px",
    threshold: 0.25 // when 25% is visible 
});

// target all elements with the fade-in class
document.querySelectorAll('.fade-in').forEach((element) => {
    observer.observe(element);
});


// JAVA SCRIPT FOR THE CONTACT PAGE
// wait for document to fully load
document.addEventListener("DOMContentLoaded", function() {
    // get the form and message elements 
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");
    const submitBtn = document.getElementById("submitBtn");

    //element.addEventListener(submit click, callbackFunction, boolean if even should be captured);
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Hide any existing messages
        successMessage.style.display = "none";
        errorMessage.style.display = "none";
        
        // Get form data
        const formData = new FormData(form);
        formData.append('_subject', 'New Contact Form Submission - Helena Berens Website');
        
        // Submit via AJAX to Formspree
        fetch('https://formspree.io/f/mjkoaegq', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Success
                successMessage.style.display = "block";
                form.reset();
                
                // Reset button
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                submitBtn.disabled = false;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 5000);
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            // Error
            errorMessage.style.display = "block";
            
            // Reset button
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            submitBtn.disabled = false;
            
            // Hide error message after 5 seconds
            setTimeout(() => {
                errorMessage.style.display = "none";
            }, 5000);
        });
    });
});

//JAVA SCRIPT FOR THE PROJECTS PAGE
// when loaded
document.addEventListener("DOMContentLoaded", function () {
    // get all the see more buttons
    let buttons = document.querySelectorAll(".see-more-btn");

    buttons.forEach(button => {
        // when clicked
        button.addEventListener("click", function () {
            // get all the hidden classes 
            let hiddenClasses = this.previousElementSibling.querySelectorAll(".hidden");
            
            // if the display is none or empty, change to the list-item class so it gets all that css styling too 
            if (hiddenClasses[0].style.display === "none" || hiddenClasses[0].style.display === "") {
                hiddenClasses.forEach(item => item.style.display = "list-item");
                this.textContent = "Show Less"; // change to a show less button 
            } 
            // otherwise, hide them again using .display = none
            else {
                hiddenClasses.forEach(item => item.style.display = "none");
                this.textContent = "See More";
            }
        });
    });
});