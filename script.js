document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("Resume");
    var showForm = document.getElementById("show-resume");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var names = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var workExperience = document.getElementById("work-experience").value;
        var skills = document.getElementById("skills").value;
        var resume = "\n            <h1><b>Resume</b></h2>\n            <h3>Personal Information</h3>\n            <p>Name:<span contenteditable=\"true\"> ".concat(names, "</span></p>\n            <p>Email:<span contenteditable=\"true\"> ").concat(email, "</span></p>\n            <p>Phone:<span contenteditable=\"true\"> ").concat(phone, "</span></p>\n            <h3>Educational Information</h3>\n            <p><span>").concat(education, "</span></p>\n            <h3>Work Experience</h3>\n            <p><span contenteditable=\"true\">").concat(workExperience, "</span></p>\n            <h3>Skills</h3>\n            <p><span contenteditable=\"true\">").concat(skills, "</span></p>\n        ");
        if (showForm) {
            showForm.innerHTML = resume;
            showForm.style.display = "block";
        }
        else {
            console.log("The Resume is not working..... why?");
        }
    });
});
