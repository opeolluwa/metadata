//get the input feeds
const usernameFeed = (<HTMLInputElement>document.getElementById("username"));
const passwordFeed = (<HTMLInputElement>document.getElementById("password"));
const registrationForm = (<HTMLFormElement>document.querySelector("#account form"))
//parse the value
type input = string | undefined;
const username: input = usernameFeed?.value;
const password: input = passwordFeed?.value;
console.log("hey fool")

registrationForm.addEventListener("submit", async (event) => {
    event.preventDefault()

    const response = await fetch("/auth/users/sign-up", {
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
    });
    console.log({username, password})
    console.log(response);
})

