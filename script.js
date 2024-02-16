const inputs = document.querySelectorAll("input");
const error = document.querySelectorAll(".error-message");

inputs.forEach((el, idx) => {
    el.addEventListener("focus", (e) => {
        e.target.parentElement.style.border = "2px solid var(--darkblue)";
    })
    el.addEventListener("blur", (e) => {
        e.target.parentElement.style.border = "2px solid var(--grayblue)";
    })
    el.addEventListener("invalid", (e) => {
        // Preventing default reaction
        e.preventDefault();
        // Changing .input-wrapper
        e.target.parentElement.style.border = "2px solid var(--red)";
        const errorIcon = document.createElement("img");
        errorIcon.src = "images/icon-error.svg";
        e.target.parentElement.appendChild(errorIcon);
        e.target.parentElement.style.marginBlock = "5px";
        // Changing .error-message
        error[idx].style.display = "block";
        error[idx].style.marginBottom = "20px";
            // Guard for no value in required fields, which is the only constraint on everything except email
        if (!e.target.value) {
            error[idx].innerHTML = `<em>${e.target.placeholder} cannot be empty</em>`;
        }
    })
})

document.querySelector("input[type=email]").addEventListener(
    "invalid", (e) => {
        e.preventDefault();
        if (e.target.value) {
            error[2].innerHTML = `<em>Looks like this is not an email</em>`;
        }
        
    }
)