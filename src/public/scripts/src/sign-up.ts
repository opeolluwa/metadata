//reference the elements
const registrationForm = (<HTMLFormElement>document.querySelector("form"))
const usernameFeed = (<HTMLInputElement>document.getElementById("username"));
const passwordFeed = (<HTMLInputElement>document.getElementById("password"));
const securityQuestionFeed = (<HTMLInputElement>document.getElementById("securityQuestion"))
const securityQuestionAnswerFeed = (<HTMLInputElement>document.getElementById("securityQuestionAnswer"))
const submitButton = (<HTMLButtonElement>document.querySelector("button[type='submit']"))

//parse the value
type input = string | undefined;
const username: input = usernameFeed.value.trim();
const password: input = passwordFeed.value.trim();
const securityQuestion: input = securityQuestionFeed.value.trim()
const securityQuestionAnswer: input = securityQuestionAnswerFeed.value.trim()
let errorCount: number = 0;




registrationForm.addEventListener("submit",  () => {
    // event.preventDefault();
    // validateUserInput()
  /*   const response = await fetch("/auth/users/sign-up", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ username, password }) // body data type must match "Content-Type" header
    }); */
    console.log({ username, password, securityQuestion, securityQuestionAnswer })
    // console.log(response);
})




/**
 * a function to log error when input value is missing
 * @param elementSelector the element to output the error
 * @param errorMessage the error message to send
 * @param targetElementValue the value being watched
 */
function checkInputError(targetElementValue: string, elementSelector: string, errorMessage: string) {
    const errorFeedBackElement = document.querySelector(elementSelector);
    (!targetElementValue) ? errorFeedBackElement.textContent = errorMessage : ""
}

function addErrorMessage(elementSelector: string, errorMessage: string) {
    const errorFeedBackElement = document.querySelector(elementSelector);
    errorFeedBackElement.textContent = errorMessage
}

// function removeErrorMessage(elementSelector: string) {

// }

// checkInputError(password, ".password-error", "please provide a password of minimum of 8 characters")
// checkInputError(securityQuestion, ".security-question-error", "security question is required")
// checkInputError(securityQuestionAnswer, ".security-answer-error", "please provide answer to your security question")


function validateUserInput() {
    if (username === "") {
        addErrorMessage("#username + span.error", "username is required")
        errorCount++
    }
    else {
        addErrorMessage("#username + span.error", "")
        errorCount--
        // document.querySelector("#username + span.error").classList.add("d-none")
    }


    if (password === "" || password.length < 8) {
        addErrorMessage("#password + span.error", "password may only be at least 8 characters")
        errorCount++
    }
    else {
        addErrorMessage("#password + span.error", "")
        errorCount--
    }

    if (!securityQuestion) {
        addErrorMessage("#securityQuestion + span.error", "security question is required")
        errorCount++
    }

    else {
        addErrorMessage("#securityQuestion + span.error", "")
        errorCount--
    }

    if (!securityQuestionAnswer) {
        addErrorMessage("#securityQuestionAnswer + span.error", "security answer is required")
        errorCount++
    }

    else {
        addErrorMessage("#securityQuestion + span.error", "")
        errorCount--
    }
}
