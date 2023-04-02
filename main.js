    const button = document.getElementById("gettoknowus");
    button.addEventListener("click", function() {
    const nextSection = button.closest("section").nextElementSibling;
    nextSection.scrollIntoView({behavior: "smooth"});
});


// like button
    window.onload = function() {
    // Get the checkbox and the label elements
    const checkbox = document.getElementById("favorite");
    const label = checkbox.parentElement;

    // Add a click event listener to the label element
    label.addEventListener("click", function(event) {
    // Prevent the default behavior of the label element
    event.preventDefault();
    // Toggle the checked state of the checkbox
    checkbox.checked = !checkbox.checked;
    // Toggle the active class of the label element
    label.classList.toggle("active");
    // Toggle the text of the option elements
    const option1 = label.querySelector(".option-1");
    const option2 = label.querySelector(".option-2");
    option1.classList.toggle("hidden");
    option2.classList.toggle("hidden");
});
};

    // Get the checkbox and the label elements
    const checkbox2 = document.getElementById("favorite2");
    const label2 = checkbox2.parentElement;

    // Add a click event listener to the label element
    label2.addEventListener("click", function(event) {
        // Prevent the default behavior of the label element
        event.preventDefault();
        // Toggle the checked state of the checkbox
        checkbox2.checked = !checkbox2.checked;
        // Toggle the active class of the label element
        label2.classList.toggle("active");
        // Toggle the text of the option elements
        const option1 = label2.querySelector(".option-1");
        const option2 = label2.querySelector(".option-2");
        option1.classList.toggle("hidden");
        option2.classList.toggle("hidden");
    });

    // Get the checkbox and the label elements
    const checkbox3 = document.getElementById("favorite3");
    const label3 = checkbox3.parentElement;

    // Add a click event listener to the label element
    label3.addEventListener("click", function(event) {
    // Prevent the default behavior of the label element
    event.preventDefault();
    // Toggle the checked state of the checkbox
    checkbox3.checked = !checkbox3.checked;
    // Toggle the active class of the label element
    label3.classList.toggle("active");
    // Toggle the text of the option elements
    const option1 = label3.querySelector(".option-1");
    const option2 = label3.querySelector(".option-2");
    option1.classList.toggle("hidden");
    option2.classList.toggle("hidden");
});

    // Checkbox 4
    const checkbox4 = document.getElementById("favorite4");
    const label4 = checkbox4.parentElement;
    label4.addEventListener("click", function(event) {
    event.preventDefault();
    checkbox4.checked = !checkbox4.checked;
    label4.classList.toggle("active");
    const option1 = label4.querySelector(".option-1");
    const option2 = label4.querySelector(".option-2");
    option1.classList.toggle("hidden");
    option2.classList.toggle("hidden");
});

    // Checkbox 5
    const checkbox5 = document.getElementById("favorite5");
    const label5 = checkbox5.parentElement;
    label5.addEventListener("click", function(event) {
    event.preventDefault();
    checkbox5.checked = !checkbox5.checked;
    label5.classList.toggle("active");
    const option1 = label5.querySelector(".option-1");
    const option2 = label5.querySelector(".option-2");
    option1.classList.toggle("hidden");
    option2.classList.toggle("hidden");
});

    // Checkbox 6
    const checkbox6 = document.getElementById("favorite6");
    const label6 = checkbox6.parentElement;
    label6.addEventListener("click", function(event) {
    event.preventDefault();
    checkbox6.checked = !checkbox6.checked;
    label6.classList.toggle("active");
    const option1 = label6.querySelector(".option-1");
    const option2 = label6.querySelector(".option-2");
    option1.classList.toggle("hidden");
    option2.classList.toggle("hidden");
});

    // Checkbox 7
    const checkbox7 = document.getElementById("favorite7");
    const label7 = checkbox7.parentElement;
    label7.addEventListener("click", function(event) {
    event.preventDefault();
    checkbox7.checked = !checkbox7.checked;
    label7.classList.toggle("active");
    const option1 = label7.querySelector(".option-1");
    const option2 = label7.querySelector(".option-2");
    option1.classList.toggle("hidden");
    option2.classList.toggle("hidden");
});

    // Checkbox 8
    const checkbox8 = document.getElementById("favorite8");
    const label8 = checkbox8.parentElement;
    label8.addEventListener("click", function(event) {
    event.preventDefault();
    checkbox8.checked = !checkbox8.checked;
    label8.classList.toggle("active");
    const option1 = label8.querySelector(".option-1");
    const option2 = label8.querySelector(".option-2");
    option1.classList.toggle("hidden");
    option2.classList.toggle("hidden");
});

    // Checkbox 9
    const checkbox9 = document.getElementById("favorite9");
    const label9 = checkbox9.parentElement;
    label9.addEventListener("click", function(event) {
    event.preventDefault();
    checkbox9.checked = !checkbox9.checked;
    label9.classList.toggle("active");
    const option1 = label9.querySelector(".option-1");
    const option2 = label9.querySelector(".option-2");
    option1.classList.toggle("hidden");
    option2.classList.toggle("hidden");
});

    // Checkbox 10
    const checkbox10 = document.getElementById("favorite10");
    const label10 = checkbox10.parentElement;
    label10.addEventListener("click", function(event) {
    event.preventDefault();
    checkbox10.checked = !checkbox10.checked;
    label10.classList.toggle("active");
    const option1 = label10.querySelector(".option-1");
    const option2 = label10.querySelector(".option-2");
    option1.classList.toggle("hidden");
    option2.classList.toggle("hidden");
});

    // Checkbox 11
    const checkbox11 = document.getElementById("favorite11");
    const label11 = checkbox11.parentElement;
    label11.addEventListener("click", function(event) {
        event.preventDefault();
        checkbox11.checked = !checkbox11.checked;
        label11.classList.toggle("active");
        const option1 = label11.querySelector(".option-1");
        const option2 = label11.querySelector(".option-2");
        option1.classList.toggle("hidden");
        option2.classList.toggle("hidden");
    });

    // Checkbox 12
    const checkbox12 = document.getElementById("favorite12");
    const label12 = checkbox12.parentElement;
    label12.addEventListener("click", function(event) {
        event.preventDefault();
        checkbox12.checked = !checkbox12.checked;
        label12.classList.toggle("active");
        const option1 = label12.querySelector(".option-1");
        const option2 = label12.querySelector(".option-2");
        option1.classList.toggle("hidden");
        option2.classList.toggle("hidden");
    });


