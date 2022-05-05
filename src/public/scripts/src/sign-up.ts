//reference the elements
const registrationForm = (<HTMLFormElement>document.querySelector("form"))
const usernameFeed = (<HTMLInputElement>document.getElementById("username"));
const passwordFeed = (<HTMLInputElement>document.getElementById("password"));
const securityQuestionFeed = (<HTMLInputElement>document.getElementById("securityQuestion"))
const securityQuestionAnswerFeed = (<HTMLInputElement>document.getElementById("securityQuestionAnswer"))
const submitButton = (<HTMLButtonElement>document.querySelector("button[type='submit']"))

//parse the value
type input = string | undefined;
const username: input = usernameFeed?.value;
const password: input = passwordFeed?.value;
const securityQuestion: input = securityQuestionFeed?.value
const securityQuestionAnswer: input = securityQuestionAnswerFeed?.value




registrationForm.noValidate = true
registrationForm.addEventListener("submit", (event) => {
    const dataIsValid = registrationForm.reportValidity()
    console.log(dataIsValid)
    event.preventDefault();
    const visited: Element[] = []
    //first check if any of the feed is missing
    for (const field of registrationForm.elements) {
        field.addEventListener("invalid", () => {
            field.setAttribute("aria-invalid", "true")
        })


    }
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
    // console.log({ username, password, securityQuestion, securityQuestionAnswer })
    /* console.log(response); */
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


// checkInputError(password, ".password-error", "please provide a password of minimum of 8 characters")
// checkInputError(securityQuestion, ".security-question-error", "security question is required")
// checkInputError(securityQuestionAnswer, ".security-answer-error", "please provide answer to your security question")