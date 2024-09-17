document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("Resume") as HTMLFormElement;
    let showForm = document.getElementById("show-resume") as HTMLDivElement;

    form.addEventListener("submit", function (event: Event) {
        event.preventDefault();

        const names = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLInputElement).value;
        const workExperience = (document.getElementById("work-experience") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;

        let resume = `
            <h1><b>Resume</b></h2>
            <h3>Personal Information</h3>
            <p>Name:<span contenteditable="true"> ${names}</span></p>
            <p>Email:<span contenteditable="true"> ${email}</span></p>
            <p>Phone:<span contenteditable="true"> ${phone}</span></p>
            <h3>Educational Information</h3>
            <p><span>${education}</span></p>
            <h3>Work Experience</h3>
            <p><span contenteditable="true">${workExperience}</span></p>
            <h3>Skills</h3>
            <p><span contenteditable="true">${skills}</span></p>
        `;

        if (showForm) {
            showForm.innerHTML = resume;
            showForm.style.display = "block"; 
        } else {
            console.log("The Resume is not working..... why?");
        }
    });
});
